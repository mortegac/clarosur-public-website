import { SliceFactory } from "../../../../common/Containers";
import { SectionContentWrapper, Description, Content, ImgHolder, Anchor, ButtonContainer } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

export const Default = (props) => {
  const { description, image, title, mobileimage, buttontext, buttonlink } = props.primary;

  // window.console.log('--slice--', slice)

  return (
    <>
  
          <ImgHolder bgImage={image?.url}>
            <picture>
              <source srcSet={image.url} media="(max-width: 500px)" />
              <source srcSet={mobileimage.url} media="(max-width: 960px)" />
              <img src={image.url} alt="HeroImg" />
            </picture>
          </ImgHolder>
      <SectionContentWrapper>
        <Content backgroundColor={"transparent"}>
          <Description>
            {title[0]?.text && RichText.render(title)}
            {description[0]?.text && (
              RichText.render(description)
            )}
            { buttontext && buttonlink && 
              <Anchor id={buttonlink?.uid} href={buttonlink?.uid} >
                  <ButtonContainer fullwidth={true}>
                    {buttontext || "Cotiza"}
                  </ButtonContainer>
              </Anchor>
            }
            
          </Description>
        </Content>
      </SectionContentWrapper>
    </>
  );
};

// export const Default = SliceFactory(Base);
// export const Default = SliceFactory(Base, {
//   sectionContainerProps: {
//     style: {
//       backgroundColor: '#ffffff',
//       background: '#ffffff',
//     },
//     bgImage: true,
//     bgImageSrc: "https://images.prismic.io/clarosur/ZsP1BUaF0TcGJE_C_fondo-contruccion.png?auto=format,compress",
//     base: Base
//   }
// });
