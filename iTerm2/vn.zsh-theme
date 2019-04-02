# ano.zsh-theme

# Use with a dark background and 256-color terminal!
# Meant for people with node, ruby and git.

function box_name {
    [ -f ~/.box-name ] && cat ~/.box-name || echo ${SHORT_HOST:-$HOST}
}

#local node_version='$(node --version)'
#local py_version="py-$(python -V | awk -F ' ' '{print $2}')"
#local ruby_env='$(rvm current)'
#local go_version="$(go version | awk -F ' ' '{print $3}')"

local current_dir='${PWD/#$HOME/~}'
local git_info='$(git_prompt_info)'


ZSH_THEME_GIT_PROMPT_PREFIX=""
ZSH_THEME_GIT_PROMPT_SUFFIX=""
ZSH_THEME_GIT_PROMPT_DIRTY="$reset_color($FG[200]✘✘✘$reset_color)"
ZSH_THEME_GIT_PROMPT_CLEAN="$reset_color($FG[040]✔✔✔$reset_color)"


PROMPT="──$FG[040]%n$reset_color@$FG[033]$(box_name) $FG[040]${current_dir} $FG[200]${git_info}$reset_color 
➤➤"
