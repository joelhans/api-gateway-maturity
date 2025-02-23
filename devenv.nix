{ pkgs, lib, config, inputs, ... }:

{
  packages = [ 
    pkgs.git 
  ];
  languages.javascript.enable = true;
  languages.javascript.pnpm.enable = true;
}
