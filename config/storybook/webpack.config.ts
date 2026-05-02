import path from "path";
import webpack, { DefinePlugin } from "webpack";
import {BuildPaths} from "../build/types/config";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  // `entities/*` иначе уходит в npm-пакет `entities`; голый `entities` (ansi-to-html и др.) не трогаем.
  config.resolve = config.resolve ?? {};
  config.resolve.modules = config.resolve.modules ?? [];
  config.resolve.modules.unshift(paths.src);
  config.resolve.extensions = config.resolve.extensions ?? [];
  config.resolve.extensions.push('.ts', '.tsx');
  const entitiesFsdRoot = path.join(paths.src, 'entities');
  config.resolve.alias = {
    ...(config.resolve.alias as Record<string, string | string[] | false> | undefined),
    'entities/': `${entitiesFsdRoot}/`,
  };

  config.module = config.module ?? { rules: [] };
  config.module.rules = (config.module.rules ?? []).map((rule) => {
    if (rule && typeof rule === 'object' && 'test' in rule && /svg/.test(String(rule.test))) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module.rules.push(buildCssLoader(true));

  config.plugins = config.plugins ?? [];
  config.plugins.push(new DefinePlugin({
    __IS_DEV__: true,
  }));

  return config;
}