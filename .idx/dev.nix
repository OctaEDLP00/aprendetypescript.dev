# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.corepack_21
    pkgs.nodejs_21
    pkgs.typescript
  ];
  # Sets environment variables in the workspace
  env = { };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "13xforever.language-x86-64-assembly"
      "aaron-bond.better-comments"
      "alefragnani.pascal-formatter"
      "alexcvzz.vscode-sqlite"
      "antfu.browse-lite"
      "antfu.unocss"
      "antfu.vite"
      "astro-build.astro-vscode"
      "bierner.emojisense"
      "bmewburn.vscode-intelephense-client"
      "bradlc.vscode-tailwindcss"
      "christian-kohler.npm-intellisense"
      "christian-kohler.path-intellisense"
      "codezombiech.gitignore"
      "ctcuff.font-preview"
      "Darkempire78.discord-tools"
      "dbaeumer.vscode-eslint"
      "deibit.devdocs"
      "denoland.vscode-deno"
      "DigitalBrainstem.javascript-ejs-support"
      "dsznajder.es7-react-js-snippets"
      "eamodio.gitlens"
      "EditorConfig.EditorConfig"
      "emmanuelbeziat.vscode-great-icons"
      "esbenp.prettier-vscode"
      "expo.vscode-expo-tools"
      "file-icons.file-icons"
      "formulahendry.code-runner"
      "GitHub.github-vscode-theme"
      "github.vscode-github-actions"
      "heybourn.headwind"
      "hoovercj.vscode-power-mode"
      "humao.rest-client"
      "IronGeek.vscode-env"
      "jeff-hykin.better-shellscript-syntax"
      "jock.svg"
      "JScearcy.rust-doc-viewer"
      "kaiwood.endwise"
      "kamikillerto.vscode-colorize"
      "karunamurti.rspec-snippets"
      "kisstkondoros.vscode-gutter-preview"
      "kumar-harsh.graphql-for-vscode"
      "LaurentTreguier.vscode-simple-icons"
      "LeonardSSH.vscord"
      "mads-hartmann.bash-ide-vscode"
      "mathiasfrohlich.Kotlin"
      "mechatroner.rainbow-csv"
      "mhutchie.git-graph"
      "miguelsolorio.fluent-icons"
      "mikestead.dotenv"
      "Misodee.vscode-nbt"
      "moalamri.inline-fold"
      "mrmlnc.vscode-duplicate"
      "ms-vscode.js-debug"
      "oouo-diogo-perdigao.docthis"
      "pflannery.vscode-versionlens"
      "PKief.material-icon-theme"
      "redhat.java"
      "SPGoding.datapack-language-server"
      "Tobermory.es6-string-html"
      "unifiedjs.vscode-mdx"
      "usernamehw.errorlens"
      "vitest.explorer"
      "YoavBls.pretty-ts-errors"
      "yzhang.markdown-all-in-one"
      "zhuangtongfa.material-theme"
      "ms-vscode.vscode-typescript-next"
      "wix.vscode-import-cost"
      "xabikos.JavaScriptSnippets"
      "biomejs.biome"
      "MinecraftCommands.syntax-mcfunction"
      "bierner.markdown-preview-github-styles"
      "svelte.svelte-vscode"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        install = ''
          npm install
          yes | npx astro add tailwind'';
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
