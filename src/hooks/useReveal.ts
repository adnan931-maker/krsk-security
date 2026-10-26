"use client";

import { useEffect } from "react";

/**
 * Zoom-agnostic scroll reveal.
 *
 * AOS computes trigger points from `offsetTop`/`offsetHeight`, which are
 * measured in the *unzoomed* layout. Because the whole app is painted with a
 * global `zoom` (see `.site-zoom` in globals.css), those measurements no longer
 * match the real viewport, so elements only revealed once the user scrolled
 * well past them.
 *
 * `IntersectionObserver` reports true intersection with the viewport, so it
 * stays correct regardless of any `zoom`/`transform` on an ancestor. Elements
 * keep their `data-aos="…"` attributes (AOS's CSS supplies the initial hidden
 * state and the transition); we simply add the `aos-animate` class that AOS
 * would normally add on scroll.
 */
export function useReveal() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const selector = "[data-aos]";
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Reveal a single element (used for the no-IntersectionObserver fallback).
        const show = (el: Element) => el.classList.add("aos-animate");

        if (reduceMotion || typeof IntersectionObserver === "undefined") {
            const revealAll = () =>
                document.querySelectorAll(selector).forEach(show);
            revealAll();
            const t = window.setTimeout(revealAll, 400);
            return () => window.clearTimeout(t);
        }

        // Respect a per-element `data-aos-delay` so the stagger is preserved.
        const delayFor = (el: Element) => {
            const raw = el.getAttribute("data-aos-delay");
            const n = raw ? parseInt(raw, 10) : 0;
            return Number.isFinite(n) && n > 0 ? n : 0;
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const delay = delayFor(el);
                    window.setTimeout(() => show(el), delay);
                    observer.unobserve(el);
                });
            },
            // A little bottom offset so elements trigger as they enter view.
            { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
        );

        const observeAll = () => {
            document.querySelectorAll(selector).forEach((el) => {
                if (!el.classList.contains("aos-animate")) observer.observe(el);
            });
        };

        observeAll();

        // Catch elements rendered/added after the first paint.
        const mutation = new MutationObserver(() => observeAll());
        mutation.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutation.disconnect();
        };
    }, []);
}
