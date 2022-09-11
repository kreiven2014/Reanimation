/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [
      'db',
      'mp3',
      'ttf',
      'obj',
      'png',
      'jpg',
      'gltf',
      'otf',
      'ttf',
      'mp4',
    ],
  },
};
