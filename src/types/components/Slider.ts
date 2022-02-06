import { CurrencyObject } from "types/utils/currency";
// -----------------------------------------
export interface BannerSliderProps {
  sliderData?: Array<BannerItemProps>;
}
export interface BannerItemProps {
  icon?: StaticImageData | string;
  image?: StaticImageData | string;
  title?: string;
  subtitle?: string;
  cta_btn_text?: string;
  cta?: CurrencyObject;
  cta_text?: string;
  bg_color?: string;
  type?: string;
  media?: string;
  created?: string;
}

export interface SliderProps<Props> {
  sliderData?: Array<Props>;
  itemOptions?: any;
}
