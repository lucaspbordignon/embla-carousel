"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9122],{9122:function(e,n,a){a.r(n),n.default='import React, { useState, useEffect, useCallback } from \'react\'\nimport { EmblaOptionsType } from \'embla-carousel\'\nimport useEmblaCarousel from \'embla-carousel-react\'\nimport { Thumb } from \'./EmblaCarouselThumbsButton\'\n\ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [selectedIndex, setSelectedIndex] = useState(0)\n  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)\n  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({\n    containScroll: \'keepSnaps\',\n    dragFree: true\n  })\n\n  const onThumbClick = useCallback(\n    (index: number) => {\n      if (!emblaMainApi || !emblaThumbsApi) return\n      emblaMainApi.scrollTo(index)\n    },\n    [emblaMainApi, emblaThumbsApi]\n  )\n\n  const onSelect = useCallback(() => {\n    if (!emblaMainApi || !emblaThumbsApi) return\n    setSelectedIndex(emblaMainApi.selectedScrollSnap())\n    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())\n  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])\n\n  useEffect(() => {\n    if (!emblaMainApi) return\n    onSelect()\n\n    emblaMainApi.on(\'select\', onSelect).on(\'reInit\', onSelect)\n  }, [emblaMainApi, onSelect])\n\n  return (\n    <div className="embla">\n      <div className="embla__viewport" ref={emblaMainRef}>\n        <div className="embla__container">\n          {slides.map((index) => (\n            <div className="embla__slide" key={index}>\n              <div className="embla__slide__number">{index + 1}</div>\n            </div>\n          ))}\n        </div>\n      </div>\n\n      <div className="embla-thumbs">\n        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>\n          <div className="embla-thumbs__container">\n            {slides.map((index) => (\n              <Thumb\n                key={index}\n                onClick={() => onThumbClick(index)}\n                selected={index === selectedIndex}\n                index={index}\n              />\n            ))}\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=9122-32edb39e8b2351bf7963.js.map