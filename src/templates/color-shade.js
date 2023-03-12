module.exports = (data) => {
    return `<div class="relative flex">
    <div class="space-y-1.5 cursor-pointer">
        <div class="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
            style="background-color: rgb(${data.rgb})"></div>
        <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
            <div class="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">${data.name}</div>
            <div class="text-slate-500 font-mono lowercase dark:text-slate-400">${data.hex}</div>
        </div>
    </div>
</div>`;
};