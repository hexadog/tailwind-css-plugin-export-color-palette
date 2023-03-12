module.exports = (data) => {
    return `<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tailwind CSS Color Palette</title>
    <meta name="description" content="Tailwind CSS Color Palette preview">
    <meta name="author" content="hexadog">
    </head>

    <body>
        <main class="relative mt-52 md:mt-32">
            <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">${data.palette}</div>
        </main>
    </body>
</html>`;
};