export interface VitePluginHtmlReplaceOptions {
    title?: string;

    [index: string]: string | undefined;
}

export interface Plugin {
    name: string;
    transformIndexHtml: (html: string) => string;
}

export type VitePluginHtmlReplace = (options: VitePluginHtmlReplaceOptions) => Plugin;

export const HtmlReplacePlugin: VitePluginHtmlReplace = (options: VitePluginHtmlReplaceOptions): Plugin => {
    return {
        name: "vite-plugin-html-replace",
        transformIndexHtml: (html: string): string => {
            return html.replace(/<!=\s\w+\s=!>/gi, value => {
                const property = value.slice(4, -4).toLowerCase();
                for (const key in options) {
                    if (Object.hasOwnProperty.call(options, key)) {
                        if (property === key.toLowerCase()) {
                            return options[key] as string;
                        }
                    }
                }
                return "";
            });
        }
    }
}