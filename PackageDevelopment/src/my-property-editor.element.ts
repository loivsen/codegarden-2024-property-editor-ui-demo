import {
	LitElement,
	css,
	customElement,
	html,
	ifDefined,
	nothing,
	property,
	state,
} from '@umbraco-cms/backoffice/external/lit';
import { UUIInputEvent } from '@umbraco-cms/backoffice/external/uui';
import {
	UmbPropertyEditorConfigCollection,
	UmbPropertyValueChangeEvent,
} from '@umbraco-cms/backoffice/property-editor';

@customElement('property-editor-ui-imaging-filter')
export class MyPropertyEditorUiImagingFilter extends LitElement {
	#unique: string | undefined;

	@property({ type: Object })
	public set value(value: MyImagingFilterValue | undefined) {
		if (!value) return;

		this._hueRotation = value.hueRotate ?? 0;
		this._contrast = value.contrast ?? 1;
		this._saturate = value.saturate ?? 1;

		this.#unique = value.unique;
		this.#loadImage();
	}
	public get value(): MyImagingFilterValue {
		return {
			unique: this.#unique,
			hueRotate: this._hueRotation,
			contrast: this._contrast,
			saturate: this._saturate,
		};
	}

	async #loadImage() {
		// Load image from server
		this._src = '/media/uiij1mlc/umbraco_journey.png';
	}

	@state()
	private _src: string | undefined;

	// Default values

	@state()
	private _hueRotation = 0;

	@state()
	private _contrast = 1;

	@state()
	private _saturate = 1;

	// Configuration

	@state()
	private _allowContrast: boolean | undefined;

	@state()
	private _allowSaturate: boolean | undefined;

	@state()
	private _allowHueRotate: boolean | undefined;

	set config(config: UmbPropertyEditorConfigCollection) {
		this._allowContrast = config.getValueByAlias<boolean>('allowContrast');
		this._allowSaturate = config.getValueByAlias<boolean>('allowSaturate');
		this._allowHueRotate = config.getValueByAlias<boolean>('allowHueRotate');
	}

	// Filter events

	#onInputContrast(e: UUIInputEvent) {
		const value = e.target.value as string;
		const contrast = Number(value);

		this.value = { ...this.value, contrast };
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	#onInputSaturate(e: UUIInputEvent) {
		const value = e.target.value as string;
		const saturate = Number(value);

		this.value = { ...this.value, saturate };
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	#onInputHueRotation(e: UUIInputEvent) {
		const value = e.target.value as string;
		const hueRotate = Number(value);

		this.value = { ...this.value, hueRotate };
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	// Renders

	render() {
		return html`<img
				src=${ifDefined(this._src)}
				.style="filter: hue-rotate(${this._hueRotation}deg) contrast(${this._contrast}) saturate(${this._saturate})" />

			${this._allowContrast ? this.#renderContrast() : nothing}
			${this._allowSaturate ? this.#renderSaturate() : nothing}
			${this._allowHueRotate ? this.#renderHueRotate() : nothing}`;
	}

	#renderContrast() {
		return html`Contrast: ${this._contrast}
			<uui-slider
				hide-step-values
				min="0"
				max="2"
				step="0.25"
				.value=${this._contrast.toString()}
				@input=${this.#onInputContrast}></uui-slider>`;
	}

	#renderSaturate() {
		return html`Saturate: ${this._saturate}
			<uui-slider
				hide-step-values
				min="0"
				max="2"
				step="0.25"
				.value=${this._saturate.toString()}
				@input=${this.#onInputSaturate}></uui-slider>`;
	}

	#renderHueRotate() {
		return html`Hue rotate: ${this._hueRotation}
			<uui-slider
				hide-step-values
				min="0"
				max="360"
				step="1"
				.value=${this._hueRotation.toString()}
				@input=${this.#onInputHueRotation}></uui-slider>`;
	}

	// Styling

	static styles = css`
		img {
			display: block;
			width: 300px;
		}
	`;
}

type MyImagingFilterValue = {
	unique?: string;
	hueRotate?: number;
	saturate?: number;
	contrast?: number;
};

export default MyPropertyEditorUiImagingFilter;

declare global {
	interface HTMLElementTagNameMap {
		'property-editor-ui-imaging-filter': MyPropertyEditorUiImagingFilter;
	}
}
