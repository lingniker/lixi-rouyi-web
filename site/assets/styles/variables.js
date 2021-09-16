// base color
var $blue='#324157';
var $lightBlue='#3A71A8';
var $red='#C03639';
var $pink= '#E65D6E';
var $green= '#30B08F';
var $tiffany= '#4AB7BD';
var $yellow='#FEC171';
var $panGreen= '#30B08F';

// 默认菜单主题风格
var $baseMenuColor = '#bfcbd9';
var $baseMenuColorActive = '#f4f4f5';
var $baseMenuBackground= '#304156';
var $baseLogoTitleColor= '#ffffff';

var $baseMenuLightColor = 'rgba(0,0,0,.70)';
var $baseMenuLightBackground = '#ffffff';
var $baseLogoLightTitleColor = '#001529';

var $baseSubMenuBackground = '#1f2d3d';
var $baseSubMenuHover = '#001528';

// 自定义暗色菜单风格
/**
$base-menu-color:hsla(0,0%,100%,.65);
$base-menu-color-active:#fff;
$base-menu-background:#001529;
$base-logo-title-color: #ffffff;

$base-menu-light-color:rgba(0,0,0,.70);
$base-menu-light-background:#ffffff;
$base-logo-light-title-color: #001529;

$base-sub-menu-background:#000c17;
$base-sub-menu-hover:#001528;
*/

var $baseSidebarWidth = '200px';

// the :export directive is the magic sauce for webpack
// https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass
export default {
  menuColor: $baseMenuColor,
  menuLightColor: $baseMenuLightColor,
  menuColorActive: $baseMenuColorActive,
  menuBackground: $baseMenuBackground,
  menuLightBackground: $baseMenuLightBackground,
  subMenuBackground: $baseSubMenuBackground,
  subMenuHover: $baseSubMenuHover,
  sideBarWidth: $baseSidebarWidth,
  logoTitleColor: $baseLogoTitleColor,
  logoLightTitleColor: $baseLogoLightTitleColor
}
