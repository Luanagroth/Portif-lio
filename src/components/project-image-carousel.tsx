"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProjectGalleryImage = {
  src: string;
  alt: string;
  title: string;
};

type ProjectImageCarouselProps = {
  images: ProjectGalleryImage[];
  priority?: boolean;
  className?: string;
};

const zoomOptions = Array.from({ length: 31 }, (_, index) => 50 + index * 5);

export function ProjectImageCarousel({
  images,
  priority = false,
  className = "",
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const activeImage = images[activeIndex];

  const goToPrevious = useCallback(() => {
    setZoomLevel(1);
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setZoomLevel(1);
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }, [images.length]);

  const closeExpanded = useCallback(() => {
    setZoomLevel(1);
    setIsExpanded(false);
  }, []);

  const increaseZoom = () => {
    setZoomLevel((currentZoom) => Math.min(currentZoom + 0.05, 2));
  };

  const decreaseZoom = () => {
    setZoomLevel((currentZoom) => Math.max(currentZoom - 0.05, 0.5));
  };

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeExpanded();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeExpanded, goToNext, goToPrevious, isExpanded]);

  if (!activeImage) {
    return null;
  }

  const expandedGallery = (
    <div
      className="project-gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.title}
    >
      <div className="project-gallery-lightbox-header">
        <span className="project-gallery-lightbox-title">{activeImage.title}</span>
        <div className="project-gallery-lightbox-actions">
          <div className="project-gallery-zoom-controls" aria-label="Controles de zoom">
            <select
              className="project-gallery-zoom-select"
              value={Math.round(zoomLevel * 100)}
              onChange={(event) => setZoomLevel(Number(event.target.value) / 100)}
              aria-label="Selecionar zoom"
            >
              {zoomOptions.map((zoomOption) => (
                <option key={zoomOption} value={zoomOption}>
                  {zoomOption}%
                </option>
              ))}
            </select>
            <button
              type="button"
              className="project-gallery-zoom-icon-button"
              onClick={decreaseZoom}
              disabled={zoomLevel <= 0.5}
              aria-label="Diminuir zoom"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l4 4" />
                <path d="M8.5 11h5" />
              </svg>
            </button>
            <input
              className="project-gallery-zoom-slider"
              type="range"
              min="50"
              max="200"
              step="5"
              value={Math.round(zoomLevel * 100)}
              onChange={(event) => setZoomLevel(Number(event.target.value) / 100)}
              aria-label="Ajustar zoom"
            />
            <button
              type="button"
              className="project-gallery-zoom-icon-button"
              onClick={increaseZoom}
              disabled={zoomLevel >= 2}
              aria-label="Aumentar zoom"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l4 4" />
                <path d="M8.5 11h5" />
                <path d="M11 8.5v5" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="project-gallery-lightbox-close"
            onClick={closeExpanded}
            aria-label="Fechar imagem expandida"
          >
            Fechar
          </button>
        </div>
      </div>

      {images.length > 1 ? (
        <button
          type="button"
          className="project-gallery-lightbox-arrow project-gallery-lightbox-arrow--left"
          onClick={goToPrevious}
          aria-label="Imagem anterior"
        >
          {"<"}
        </button>
      ) : null}

      <div className={`project-gallery-lightbox-image ${zoomLevel > 1 ? "is-zoomed" : ""}`}>
        <div
          className="project-gallery-lightbox-zoom-surface"
          style={{
            width: `${zoomLevel * 100}%`,
            height: `${zoomLevel * 100}%`,
          }}
        >
          <Image
            key={`expanded-${activeImage.src}`}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="100vw"
            className="project-gallery-lightbox-media"
          />
        </div>
      </div>

      {images.length > 1 ? (
        <button
          type="button"
          className="project-gallery-lightbox-arrow project-gallery-lightbox-arrow--right"
          onClick={goToNext}
          aria-label="Proxima imagem"
        >
          {">"}
        </button>
      ) : null}
    </div>
  );

  return (
    <>
      <div className={`project-preview-frame project-gallery-carousel ${className}`}>
        <div className="project-gallery-stage">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 36rem, (min-width: 768px) 70vw, 92vw"
            className="project-gallery-image"
          />
          <button
            type="button"
            className="project-gallery-expand"
            onClick={() => setIsExpanded(true)}
            aria-label="Expandir imagem"
            title="Expandir imagem"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="project-gallery-expand-icon"
            >
              <path d="M8 4H4v4" />
              <path d="M4 4l6 6" />
              <path d="M16 4h4v4" />
              <path d="M20 4l-6 6" />
              <path d="M8 20H4v-4" />
              <path d="M4 20l6-6" />
              <path d="M16 20h4v-4" />
              <path d="M20 20l-6-6" />
            </svg>
          </button>
        </div>

        {images.length > 1 ? (
          <div className="project-gallery-controls" aria-label="Galeria de imagens">
            <button
              type="button"
              className="project-gallery-arrow"
              onClick={goToPrevious}
              aria-label="Imagem anterior"
            >
              {"<"}
            </button>
            <button
              type="button"
              className="project-gallery-arrow"
              onClick={goToNext}
              aria-label="Proxima imagem"
            >
              {">"}
            </button>
          </div>
        ) : null}
      </div>

      {isExpanded && typeof document !== "undefined"
        ? createPortal(expandedGallery, document.body)
        : null}
    </>
  );
}
