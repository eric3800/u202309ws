export class Picture {
    constructor(
        public PictureID: number,
        public Url: string,
        public Subject: string,
        public Author: string) { }

}

export const picture = new Picture(1, "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW190Wv?ver=d8db", "大都會公園", "Eric");

