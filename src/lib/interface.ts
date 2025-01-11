
export interface simpleBlogCard {
      title: string;
      smallDescription: string;
      currentSlug: string;
      titleImage: CustomImage; 
    }
    
    export interface fullBlog {
      currentSlug: string;
      title: string;
      content: { _type: string; children: { text: string }[] }[]; 
      titleImage: CustomImage;
    }
    
    export interface CustomImage {
      asset: {
        _ref: string;
        _type: string;
      };
      [key: string]: unknown; 
    }
    