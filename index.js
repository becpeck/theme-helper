const strings = {
    'primary': `--color-primary-50: 218 239 233; /* ⬅ #daefe9 */
    --color-primary-100: 205 234 225; /* ⬅ #cdeae1 */
    --color-primary-200: 193 229 218; /* ⬅ #c1e5da */
    --color-primary-300: 155 213 195; /* ⬅ #9bd5c3 */
    --color-primary-400: 80 182 150; /* ⬅ #50b696 */
    --color-primary-500: 5 150 105; /* ⬅ #059669 */
    --color-primary-600: 5 135 95; /* ⬅ #05875f */
    --color-primary-700: 4 113 79; /* ⬅ #04714f */
    --color-primary-800: 3 90 63; /* ⬅ #035a3f */
    --color-primary-900: 2 74 51; /* ⬅ #024a33 */`,
    'secondary': `--color-secondary-50: 220 228 228; /* ⬅ #dce4e4 */
    --color-secondary-100: 208 220 219; /* ⬅ #d0dcdb */
    --color-secondary-200: 196 211 210; /* ⬅ #c4d3d2 */
    --color-secondary-300: 161 184 183; /* ⬅ #a1b8b7 */
    --color-secondary-400: 90 131 128; /* ⬅ #5a8380 */
    --color-secondary-500: 19 78 74; /* ⬅ #134E4A */
    --color-secondary-600: 17 70 67; /* ⬅ #114643 */
    --color-secondary-700: 14 59 56; /* ⬅ #0e3b38 */
    --color-secondary-800: 11 47 44; /* ⬅ #0b2f2c */
    --color-secondary-900: 9 38 36; /* ⬅ #092624 */`,
    'tertiary': `--color-tertiary-50: 232 232 253; /* ⬅ #e8e8fd */
    --color-tertiary-100: 224 224 252; /* ⬅ #e0e0fc */
    --color-tertiary-200: 216 217 252; /* ⬅ #d8d9fc */
    --color-tertiary-300: 193 194 249; /* ⬅ #c1c2f9 */
    --color-tertiary-400: 146 148 245; /* ⬅ #9294f5 */
    --color-tertiary-500: 99 102 241; /* ⬅ #6366F1 */
    --color-tertiary-600: 89 92 217; /* ⬅ #595cd9 */
    --color-tertiary-700: 74 77 181; /* ⬅ #4a4db5 */
    --color-tertiary-800: 59 61 145; /* ⬅ #3b3d91 */
    --color-tertiary-900: 49 50 118; /* ⬅ #313276 */`,
    'success': `--color-success-50: 248 254 251; /* ⬅ #f8fefb */
    --color-success-100: 246 254 250; /* ⬅ #f6fefa */
    --color-success-200: 244 254 249; /* ⬅ #f4fef9 */
    --color-success-300: 237 253 245; /* ⬅ #edfdf5 */
    --color-success-400: 223 252 237; /* ⬅ #dffced */
    --color-success-500: 209 250 229; /* ⬅ #D1FAE5 */
    --color-success-600: 188 225 206; /* ⬅ #bce1ce */
    --color-success-700: 157 188 172; /* ⬅ #9dbcac */
    --color-success-800: 125 150 137; /* ⬅ #7d9689 */
    --color-success-900: 102 123 112; /* ⬅ #667b70 */`,
    'warning': `--color-warning-50: 250 249 255; /* ⬅ #faf9ff */
    --color-warning-100: 248 247 255; /* ⬅ #f8f7ff */
    --color-warning-200: 247 245 255; /* ⬅ #f7f5ff */
    --color-warning-300: 241 239 255; /* ⬅ #f1efff */
    --color-warning-400: 231 226 254; /* ⬅ #e7e2fe */
    --color-warning-500: 221 214 254; /* ⬅ #DDD6FE */
    --color-warning-600: 199 193 229; /* ⬅ #c7c1e5 */
    --color-warning-700: 166 161 191; /* ⬅ #a6a1bf */
    --color-warning-800: 133 128 152; /* ⬅ #858098 */
    --color-warning-900: 108 105 124; /* ⬅ #6c697c */`,
    'error': `--color-error-50: 245 219 226; /* ⬅ #f5dbe2 */
    --color-error-100: 242 208 216; /* ⬅ #f2d0d8 */
    --color-error-200: 239 196 206; /* ⬅ #efc4ce */
    --color-error-300: 229 160 177; /* ⬅ #e5a0b1 */
    --color-error-400: 210 89 119; /* ⬅ #d25977 */
    --color-error-500: 190 18 60; /* ⬅ #BE123C */
    --color-error-600: 171 16 54; /* ⬅ #ab1036 */
    --color-error-700: 143 14 45; /* ⬅ #8f0e2d */
    --color-error-800: 114 11 36; /* ⬅ #720b24 */
    --color-error-900: 93 9 29; /* ⬅ #5d091d */`,
    'surface': `--color-surface-50: 255 254 252; /* ⬅ #fffefc */
    --color-surface-100: 255 254 251; /* ⬅ #fffefb */
    --color-surface-200: 255 254 250; /* ⬅ #fffefa */
    --color-surface-300: 255 253 247; /* ⬅ #fffdf7 */
    --color-surface-400: 255 252 241; /* ⬅ #fffcf1 */
    --color-surface-500: 255 251 235; /* ⬅ #FFFBEB */
    --color-surface-600: 230 226 212; /* ⬅ #e6e2d4 */
    --color-surface-700: 191 188 176; /* ⬅ #bfbcb0 */
    --color-surface-800: 153 151 141; /* ⬅ #99978d */
    --color-surface-900: 125 123 115; /* ⬅ #7d7b73 */`,
}

function renderType(type) {
    strings[type].split('\n').forEach(str => {
        const { groups } = str.match(/--color-(?<label>(?<type>[a-z]+)-\d{2,3}): (?<r>\d+) (?<g>\d+) (?<b>\d+)/);
        const { label, type } = groups;
        const r = parseInt(groups.r);
        const g = parseInt(groups.g);
        const b = parseInt(groups.b);
    
        const container = document.createElement('div');
        container.setAttribute('class', 'color-block-container');
    
        const colorBlock = document.createElement('div');
        colorBlock.setAttribute('class', 'color-block');
        colorBlock.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b});`);
        container.appendChild(colorBlock);
    
        const colorBlockLabel = document.createElement('div');
        colorBlockLabel.textContent = label;
        container.appendChild(colorBlockLabel);
    
        const parent = document.querySelector(`#${type} .color-blocks`);
        parent.appendChild(container);
    });
}

for (const key of Object.keys(strings)) {
    renderType(key);
}