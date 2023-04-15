export function publicUrl(path: string): string {
    return process.env.PUBLIC_URL + "/images/" + path;
}
