set -U fish_greeting

set -x EDITOR hx
set -x PAGER less
set -x SHELL (which fish)

fish_add_path --append --move $HOME/.bin /opt/homebrew/bin /opt/homebrew/sbin /usr/local/bin
