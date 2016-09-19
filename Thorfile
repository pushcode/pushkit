require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def install_npm_dependencies
      run 'npm install .'
    end

    def copy_tachyons_to_src
      if yes?('Do you to copy the Tachyons source to your local project?')
        run 'rake tachyons:copy'
      end
    end
    
  end
end
