#!/usr/bin/env bash

set -euxo pipefail

PWD=$(pwd)

# Install brew packages and casks
if [ "$(uname)" = "Darwin" ]; then
	BREW_BIN="/opt/homebrew/bin/brew"

	if [ ! -f "$BREW_BIN" ]; then
		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	fi

	HOMEBREW_BUNDLE_FILE="$PWD/Brewfile" "$BREW_BIN" bundle install
fi

# Symlink configs
ln -sf $PWD/fish ~/.config/fish
ln -sf $PWD/ghostty ~/.config/ghostty
ln -sf $PWD/rio ~/.config/rio
ln -sf $PWD/zed ~/.config/zed

ln -sf $PWD/git/gitconfig ~/.gitconfig
ln -sf $PWD/git/gitignore_global ~/.gitignore_global
ln -sf $PWD/zsh/zshrc ~/.zshrc

mkdir -p ~/code

echo "Dotfiles setup complete."
