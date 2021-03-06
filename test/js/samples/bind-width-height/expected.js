/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addResizeListener, add_render_callback, createElement, detachNode, flush, init, insert, noop, safe_not_equal } from "svelte/internal";

function create_fragment($$, ctx) {
	var div, div_resize_listener;

	return {
		c() {
			div = createElement("div");
			div.textContent = "some content";
			add_render_callback(() => ctx.div_resize_handler.call(div));
		},

		m(target, anchor) {
			insert(target, div, anchor);
			div_resize_listener = addResizeListener(div, ctx.div_resize_handler.bind(div));
		},

		p: noop,
		i: noop,
		o: noop,

		d(detach) {
			if (detach) {
				detachNode(div);
			}

			div_resize_listener.cancel();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { w, h } = $$props;

	function div_resize_handler() {
		w = this.offsetWidth;
		h = this.offsetHeight;
		$$invalidate('w', w);
		$$invalidate('h', h);
	}

	$$self.$set = $$props => {
		if ('w' in $$props) $$invalidate('w', w = $$props.w);
		if ('h' in $$props) $$invalidate('h', h = $$props.h);
	};

	return { w, h, div_resize_handler };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get w() {
		return this.$$.ctx.w;
	}

	set w(w) {
		this.$set({ w });
		flush();
	}

	get h() {
		return this.$$.ctx.h;
	}

	set h(h) {
		this.$set({ h });
		flush();
	}
}

export default SvelteComponent;