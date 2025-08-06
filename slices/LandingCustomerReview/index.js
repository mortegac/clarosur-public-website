import { PrismicRichText } from "@prismicio/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Section,
  Title,
  StyledSlider,
  Review,
  ReviewHead,
  UserIcon,
  LetterFallback,
  Username,
  ReviewText,
  Stars,
} from "./style";
import { TiStarFullOutline } from "react-icons/ti";

/**
 * @typedef {import("@prismicio/client").Content.LandingCustomerReviewSlice} LandingCustomerReviewSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingCustomerReviewSlice>} LandingCustomerReviewProps
 * @param { LandingCustomerReviewProps }
 */

const LandingCustomerReview = ({ slice }) => {
  const title = slice.primary.title;
  const reviews = slice.items || [];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const getFirstLetter = (usernameField) => {
    const text = Array.isArray(usernameField)
      ? usernameField[0]?.text || ""
      : "";
    return text.charAt(0).toUpperCase();
  };

  return (
    <Section id="reviews">
      <Title>
        <PrismicRichText field={title} />
      </Title>

      <StyledSlider {...settings}>
        {reviews.map((review, index) => {
          const hasIcon = review.usericon?.url;
          const stars = review.stars || 0;
          const firstLetter = getFirstLetter(review.username);

          return (
            <Review key={index}>
              <ReviewHead>
                {hasIcon ? (
                  <UserIcon
                    src={review.usericon.url}
                    alt={review.usericon.alt || "User"}
                  />
                ) : (
                  <LetterFallback>{firstLetter}</LetterFallback>
                )}
                <div>
                  <Username>
                    <PrismicRichText field={review.username} />
                  </Username>
                  <Stars>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <TiStarFullOutline
                        key={i}
                        color={i < stars ? "#FFD700" : "#ccc"}
                        size={20}
                      />
                    ))}
                  </Stars>
                </div>
              </ReviewHead>

              <ReviewText>
                <PrismicRichText field={review.userreview} />
              </ReviewText>
            </Review>
          );
        })}
      </StyledSlider>
    </Section>
  );
};

export default LandingCustomerReview;
