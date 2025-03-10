"use client";
import React, { memo, useCallback, useRef, useState } from "react";
import Slider from "react-slick";
import { UITextBody } from "@/components";
import { DUMMY_SOLUTION } from "@/dummy";

const list = [...DUMMY_SOLUTION.PLAN, ...DUMMY_SOLUTION.PLAN];

export const ScrapPlanSection = memo(function ScrapPlanSection() {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = useCallback(() => {
    sliderRef?.current?.slickNext();
  }, [currentIndex]);

  const onPrev = useCallback(() => {
    sliderRef?.current?.slickPrev();
  }, [currentIndex]);

  return (
    <section className="w-full flex py-20 bg-secondary-3 items-center justify-center max-md:py-10 max-md:px-4">
      <div className="w-content flex flex-col gap-12 items-start relative max-md:w-full max-md:gap-10 max-md:items-center">
        <p className="text-[56px] font-lato leading-[68px] font-extrabold text-neutral-1 max-md:leading-8 max-md:text-[28px] max-md:text-center max-md:w-full">
          Scrap plan for the society
        </p>

        <div className="flex relative items-center justify-center w-[calc(100%-40px)]">
          {currentIndex ? (
            <button
              onClick={onPrev}
              className="rounded-full z-10 bg-white shadow border border-neutral-4 absolute -left-7 w-14 h-14 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.09831 11.9924L16.6311 19.5252C16.8297 19.7239 16.9265 19.9604 16.9213 20.2347C16.9161 20.509 16.8142 20.7456 16.6156 20.9444C16.4169 21.1431 16.1804 21.2424 15.9061 21.2424C15.6317 21.2424 15.3951 21.1431 15.1963 20.9444L7.54056 13.2732C7.3599 13.0924 7.22598 12.8898 7.13881 12.6654C7.05148 12.4411 7.00781 12.2168 7.00781 11.9924C7.00781 11.7681 7.05148 11.5438 7.13881 11.3194C7.22598 11.0951 7.3599 10.8925 7.54056 10.7117L15.2118 3.04045C15.4105 2.84178 15.6444 2.74503 15.9136 2.7502C16.1829 2.75536 16.4169 2.85728 16.6156 3.05595C16.8142 3.25461 16.9136 3.49111 16.9136 3.76545C16.9136 4.03978 16.8142 4.27636 16.6156 4.4752L9.09831 11.9924Z"
                  fill="#484B51"
                />
              </svg>
            </button>
          ) : null}
          <Slider
            ref={sliderRef}
            autoplay={false}
            infinite={false}
            pauseOnFocus
            speed={400}
            slidesToShow={3}
            slidesToScroll={1}
            initialSlide={currentIndex}
            draggable={false}
            afterChange={setCurrentIndex}
            // variableWidth
            arrows={false}
            // centerMode
            adaptiveHeight
            className="h-fit w-full gap-5 max-md:gap-0"
            focusOnSelect
            responsive={[
              {
                breakpoint: 1064,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {list.map((item, index) => (
              <CardItem key={index} {...item} />
            ))}
          </Slider>
          {list.length === currentIndex + 3 ? null : (
            <button
              onClick={onNext}
              className="rounded-full z-10 bg-white shadow border border-neutral-4 absolute -right-6 w-14 h-14 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.831 12L7.29826 4.46725C7.09959 4.26858 7.00284 4.03208 7.00801 3.75775C7.01318 3.48342 7.11509 3.24683 7.31376 3.048C7.51243 2.84933 7.74893 2.75 8.02326 2.75C8.29759 2.75 8.53418 2.84933 8.73301 3.048L16.3888 10.7193C16.5694 10.9001 16.7033 11.1027 16.7905 11.327C16.8778 11.5513 16.9215 11.7757 16.9215 12C16.9215 12.2243 16.8778 12.4487 16.7905 12.673C16.7033 12.8973 16.5694 13.0999 16.3888 13.2808L8.71751 20.952C8.51884 21.1507 8.28493 21.2474 8.01576 21.2423C7.74643 21.2371 7.51243 21.1352 7.31376 20.9365C7.11509 20.7378 7.01576 20.5013 7.01576 20.227C7.01576 19.9527 7.11509 19.7161 7.31376 19.5173L14.831 12Z"
                  fill="#484B51"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

const CardItem = memo(function CardItem({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div className="rounded-[8px] bg-white flex-col mr-5 w-[373px] max-md:w-full overflow-hidden">
      <img alt={"img"} src={image} className="h-[210px] object-cover w-full" />
      <div className="p-6 gap-4 flex flex-col items-start">
        <div className="gap-2 flex flex-col items-start">
          <UITextBody.Bold20
            text={title}
            className="text-neutral-1 line-clamp-1"
          />
          <UITextBody.Regular16
            text={description}
            className="text-neutral-3 line-clamp-3"
          />
        </div>

        <button className="flex flex-row items-center justify-center gap-1">
          <UITextBody.Bold16 text="Read more" className="text-primary-1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.5007 9.99984L7.25065 6.74984C7.09787 6.59706 7.02148 6.40262 7.02148 6.1665C7.02148 5.93039 7.09787 5.73595 7.25065 5.58317C7.40343 5.43039 7.59787 5.354 7.83398 5.354C8.0701 5.354 8.26454 5.43039 8.41732 5.58317L12.2507 9.4165C12.334 9.49984 12.393 9.59012 12.4277 9.68734C12.4625 9.78456 12.4798 9.88873 12.4798 9.99984C12.4798 10.1109 12.4625 10.2151 12.4277 10.3123C12.393 10.4096 12.334 10.4998 12.2507 10.5832L8.41732 14.4165C8.26454 14.5693 8.0701 14.6457 7.83398 14.6457C7.59787 14.6457 7.40343 14.5693 7.25065 14.4165C7.09787 14.2637 7.02148 14.0693 7.02148 13.8332C7.02148 13.5971 7.09787 13.4026 7.25065 13.2498L10.5007 9.99984Z"
              fill="#F57700"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});
