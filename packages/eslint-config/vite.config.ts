/* eslint-disable no-console */
import { resolve } from 'node:path';
import { visualizer } from 'rollup-plugin-visualizer';
import { type ConfigEnv, type UserConfig } from 'vite';
import packageJson from './package.json';
const resolvePath = (str: string) => resolve(__dirname, str);
// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    console.info(configEnv);
    return {
        plugins: [
            visualizer({
                open: false,
                gzipSize: true,
            }),
        ],
        build: {
            sourcemap: false,
            lib: {
                formats: ['cjs'],
                fileName: (format, entryName) => `${entryName}.${format}`,
                entry: [resolvePath('./src/ts.ts'), resolvePath('./src/vue.ts')],
                name: packageJson.name.replace(/-(\w)/gi, (_, v) => v.toUpperCase()),
            },
        },
    } as UserConfig;
};
