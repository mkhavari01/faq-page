// import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';

export function publicUrl(path: string): string {
    return process.env.PUBLIC_URL + "/images/" + path;
}

export function parseHTML(content: string): any {
    const parser = new DOMParser();
    const html = parser.parseFromString(content, 'text/html');
    const text = html?.body?.textContent?.trim();

    return text;
}