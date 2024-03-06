"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[7142],{7142:function(e,n,o){o.r(n),n.default="import React, { useEffect, useState, useCallback, useRef } from 'react'\nimport { EmblaCarouselType } from 'embla-carousel'\nimport useEmblaCarousel from 'embla-carousel-react'\n\nconst CIRCLE_DEGREES = 360\nconst WHEEL_ITEM_SIZE = 32\nconst WHEEL_ITEM_COUNT = 18\nconst WHEEL_ITEMS_IN_VIEW = 4\n\nexport const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT\nexport const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW\nexport const WHEEL_RADIUS = Math.round(\n  WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT)\n)\n\nconst isInView = (wheelLocation: number, slidePosition: number): boolean =>\n  Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES\n\nconst setSlideStyles = (\n  emblaApi: EmblaCarouselType,\n  index: number,\n  loop: boolean,\n  slideCount: number,\n  totalRadius: number\n): void => {\n  const slideNode = emblaApi.slideNodes()[index]\n  const wheelLocation = emblaApi.scrollProgress() * totalRadius\n  const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius\n  const positionLoopStart = positionDefault + totalRadius\n  const positionLoopEnd = positionDefault - totalRadius\n\n  let inView = false\n  let angle = index * -WHEEL_ITEM_RADIUS\n\n  if (isInView(wheelLocation, positionDefault)) {\n    inView = true\n  }\n\n  if (loop && isInView(wheelLocation, positionLoopEnd)) {\n    inView = true\n    angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS\n  }\n\n  if (loop && isInView(wheelLocation, positionLoopStart)) {\n    inView = true\n    angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS\n  }\n\n  if (inView) {\n    slideNode.style.opacity = '1'\n    slideNode.style.transform = `translateY(-${\n      index * 100\n    }%) rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`\n  } else {\n    slideNode.style.opacity = '0'\n    slideNode.style.transform = 'none'\n  }\n}\n\nexport const setContainerStyles = (\n  emblaApi: EmblaCarouselType,\n  wheelRotation: number\n): void => {\n  emblaApi.containerNode().style.transform = `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`\n}\n\ntype PropType = {\n  loop?: boolean\n  label: string\n  slideCount: number\n  perspective: 'left' | 'right'\n}\n\nexport const IosPickerItem: React.FC<PropType> = (props) => {\n  const { slideCount, perspective, label, loop = false } = props\n  const [emblaRef, emblaApi] = useEmblaCarousel({\n    loop,\n    axis: 'y',\n    dragFree: true,\n    containScroll: false,\n    watchSlides: false\n  })\n  const rootNodeRef = useRef<HTMLDivElement>(null)\n  const totalRadius = slideCount * WHEEL_ITEM_RADIUS\n  const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS\n  const slides = Array.from(Array(slideCount).keys())\n\n  const inactivateEmblaTransform = useCallback(\n    (emblaApi: EmblaCarouselType) => {\n      if (!emblaApi) return\n      const { translate, slideLooper } = emblaApi.internalEngine()\n      translate.clear()\n      translate.toggleActive(false)\n      slideLooper.loopPoints.forEach(({ translate }) => {\n        translate.clear()\n        translate.toggleActive(false)\n      })\n    },\n    []\n  )\n\n  const rotateWheel = useCallback(\n    (emblaApi: EmblaCarouselType) => {\n      const rotation = slideCount * WHEEL_ITEM_RADIUS - rotationOffset\n      const wheelRotation = rotation * emblaApi.scrollProgress()\n      setContainerStyles(emblaApi, wheelRotation)\n      emblaApi.slideNodes().forEach((_, index) => {\n        setSlideStyles(emblaApi, index, loop, slideCount, totalRadius)\n      })\n    },\n    [slideCount, rotationOffset, totalRadius]\n  )\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    emblaApi.on('pointerUp', (emblaApi) => {\n      const { scrollTo, target, location } = emblaApi.internalEngine()\n      const diffToTarget = target.get() - location.get()\n      const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1\n      const distance = diffToTarget * factor\n      scrollTo.distance(distance, true)\n    })\n\n    emblaApi.on('scroll', rotateWheel)\n\n    emblaApi.on('reInit', (emblaApi) => {\n      inactivateEmblaTransform(emblaApi)\n      rotateWheel(emblaApi)\n    })\n\n    inactivateEmblaTransform(emblaApi)\n    rotateWheel(emblaApi)\n  }, [emblaApi, inactivateEmblaTransform, rotateWheel])\n\n  return (\n    <div className=\"embla__ios-picker\">\n      <div className=\"embla__ios-picker__scene\" ref={rootNodeRef}>\n        <div\n          className={`embla__ios-picker__viewport embla__ios-picker__viewport--perspective-${perspective}`}\n          ref={emblaRef}\n        >\n          <div className=\"embla__ios-picker__container\">\n            {slides.map((_, index) => (\n              <div className=\"embla__ios-picker__slide\" key={index}>\n                {index}\n              </div>\n            ))}\n          </div>\n        </div>\n      </div>\n      <div className=\"embla__ios-picker__label\">{label}</div>\n    </div>\n  )\n}\n"}}]);
//# sourceMappingURL=7142-83933e9a195ad169efc5.js.map