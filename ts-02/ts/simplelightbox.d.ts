declare module 'simplelightbox' {
  interface SimpleLightboxSettings {
    captionsData: string;
    captionDelay: number;
  }

  class SimpleLightbox {
    constructor(selector: string, options: SimpleLightboxSettings);
  }

  export default SimpleLightbox;
}
