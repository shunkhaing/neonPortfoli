import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: {
        files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        relative: true,
        transform: (content) => content.replace(/taos:/g, ''),
    },
	theme: {
		extend: {
			
			fontFamily: {
                inter: ['Inter', 'sans-serif'],
                vt323: ['VT323', 'monospace'],
            },
            animation: {
                'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
                'fade-out-down': 'fade-out-down 0.5s ease-out-in',
				
            },
            safelist: [
                '!duration-[0ms]',
                '!delay-[0ms]',
                'html.js :where([class*="taos:"]:not(.taos-init))'
            ],

            keyframes: {
                'text-slide': {
                    '0%, 16%': {
                        transform: 'translateY(0%)',
                    },
                    '20%, 36%': {
                        transform: 'translateY(-16.66%)',
                    },
                    '40%, 56%': {
                        transform: 'translateY(-33.33%)',
                    },
                    '60%, 76%': {
                        transform: 'translateY(-50%)',
                    },
                    '80%, 96%': {
                        transform: 'translateY(-66.66%)',
                    },
                    '100%': {
                        transform: 'translateY(-83.33%)',
                    },
                },    

				'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                    },

                'fade-out-down': {
                    from: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    to: {
                        opacity: '0',
                        transform: 'translateY(90%)',
                    },
                }

			
            },
        
		},
	},
	plugins: [
        require('taos/plugin')
    ],
	
}

