module.exports = (data) => {
    return `<div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
            <div class="w-24 shrink-0">
                <div class="h-12 flex flex-col justify-center">
                    <div class="text-sm font-semibold text-slate-900 dark:text-slate-200">${data.name}</div>
                </div>
            </div>
            <div class="min-w-0 grid grid-cols-10">
                ${data.shades}
            </div>
        </div>
    </div>`;
};