set -U EDITOR vim
set -g -x fish_greeting ''
set -g fish_key_bindings fish_vi_key_bindings

alias phpgrep='find . -type f -name "*.php" -print0 | xargs -0 grep -n $1'
alias jsgrep='find . -type f \( -name "*.js" -o -name "*.jsx" \) -print0 | xargs -0 grep -n $1'
alias exgrep='find . -type f \( -name "*.ex" -o -name "*.exs" \) -print0 | xargs -0 grep -n $1'

alias c='cd ~/code'
alias d='cd ~/Downloads'
alias dt='cd ~/Desktop'
alias mc='cd ~/code/automattic-sandbox/missioncontrol/public_html'
alias uni='unison -ui text -repeat watch automattic-sandbox'
alias wpcom='cd ~/code/automattic-sandbox/wpcom/public_html'
alias www='cd ~/vagrant-local/www'
