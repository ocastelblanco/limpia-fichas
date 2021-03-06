import { Component } from '@angular/core';
import {
	ClarityIcons,
	processOnVmIcon,
	downloadIcon,
	userIcon,
	usersIcon,
	popOutIcon
} from '@cds/core/icon';

const logoA_main = `
<svg version="1.1" id="mainLogo"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 497.5" style="enable-background:new 0 0 512 497.5;" xml:space="preserve">
	<style type="text/css">
	.st0{fill:#FFFFFF;}
	</style>
	<path class="st0" d="M0,316.9c0-103.5,65.9-180.6,159.7-180.6c65.9,0,97.2,39.5,110.2,58h5.2v-49.5h64.6v268.9
	c0,10.6,6.5,15.8,16.9,15.8h15.6v59.3H326c-28,0-49.5-17.8-49.5-47.5h-4.6c-11.7,16.5-40.4,56-108.2,56C69.1,497.5,0,421.7,0,316.9z
	 M277.1,317.6c0-76.5-48.2-120.6-106.3-120.6c-60.6,0-105.6,50.1-105.6,120.6c0,72.5,46.9,119.9,106.3,119.9
	C236,437.5,277.1,382.9,277.1,317.6z"/>
	<path class="st0" d="M446.8,131.8c36,0,65.2-29.5,65.2-65.9C512,29.5,482.8,0,446.8,0s-65.2,29.5-65.2,65.9
	C381.7,102.3,410.8,131.8,446.8,131.8z"/>
</svg>
`;
const logoA_alt = `
<svg version="1.1" id="altLogo"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 497.5" style="enable-background:new 0 0 512 497.5;" xml:space="preserve">
	<style type="text/css">
	.st0{fill:#18126C;}
	</style>
	<path class="st0" d="M0,316.9c0-103.5,65.9-180.6,159.7-180.6c65.9,0,97.2,39.5,110.2,58h5.2v-49.5h64.6v268.9
	c0,10.6,6.5,15.8,16.9,15.8h15.6v59.3H326c-28,0-49.6-17.8-49.6-47.5h-4.6c-11.7,16.5-40.4,56-108.2,56C69.1,497.5,0,421.7,0,316.9z
	 M277.1,317.6c0-76.5-48.2-120.6-106.3-120.6c-60.6,0-105.6,50.1-105.6,120.6c0,72.5,46.9,119.9,106.3,119.9
	C236,437.5,277.1,382.9,277.1,317.6z"/>
	<path class="st0" d="M446.9,131.8c36,0,65.1-29.5,65.1-65.9C512,29.5,482.8,0,446.9,0c-36,0-65.2,29.5-65.2,65.9
	C381.7,102.3,410.8,131.8,446.9,131.8z"/>
</svg>
`;
ClarityIcons.addIcons(
	['logoA_main', logoA_main],
	['logoA_alt', logoA_alt],
	processOnVmIcon,
	downloadIcon,
	userIcon,
	usersIcon,
	popOutIcon
);

@Component({
	selector: 'limpia-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent { }
