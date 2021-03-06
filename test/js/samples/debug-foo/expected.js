/* generated by Svelte vX.Y.Z */
import { SvelteComponentDev, addLoc, append, createElement, createText, destroyEach, detachNode, flush, init, insert, noop, safe_not_equal, setData } from "svelte/internal";

const file = undefined;

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thing = list[i];
	return child_ctx;
}

// (1:0) {#each things as thing}
function create_each_block($$, ctx) {
	var span, text0_value = ctx.thing.name, text0, text1;

	return {
		c: function create() {
			span = createElement("span");
			text0 = createText(text0_value);
			text1 = createText("\n\t");

			{
				const { foo } = ctx;
				console.log({ foo });
				debugger;
			}
			addLoc(span, file, 1, 1, 25);
		},

		m: function mount(target, anchor) {
			insert(target, span, anchor);
			append(span, text0);
			insert(target, text1, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.things) && text0_value !== (text0_value = ctx.thing.name)) {
				setData(text0, text0_value);
			}

			if (changed.foo) {
				const { foo } = ctx;
				console.log({ foo });
				debugger;
			}
		},

		d: function destroy(detach) {
			if (detach) {
				detachNode(span);
				detachNode(text1);
			}
		}
	};
}

function create_fragment($$, ctx) {
	var text0, p, text1, text2;

	var each_value = ctx.things;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block($$, get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text0 = createText("\n\n");
			p = createElement("p");
			text1 = createText("foo: ");
			text2 = createText(ctx.foo);
			addLoc(p, file, 5, 0, 74);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, text0, anchor);
			insert(target, p, anchor);
			append(p, text1);
			append(p, text2);
		},

		p: function update(changed, ctx) {
			if (changed.things) {
				each_value = ctx.things;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block($$, child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(text0.parentNode, text0);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.foo) {
				setData(text2, ctx.foo);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detach) {
			destroyEach(each_blocks, detach);

			if (detach) {
				detachNode(text0);
				detachNode(p);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { things, foo } = $$props;

	$$self.$set = $$props => {
		if ('things' in $$props) $$invalidate('things', things = $$props.things);
		if ('foo' in $$props) $$invalidate('foo', foo = $$props.foo);
	};

	return { things, foo };
}

class SvelteComponent extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.things === undefined && !('things' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'things'");
		}
		if (ctx.foo === undefined && !('foo' in props)) {
			console.warn("<SvelteComponent> was created without expected prop 'foo'");
		}
	}

	get things() {
		return this.$$.ctx.things;
	}

	set things(things) {
		this.$set({ things });
		flush();
	}

	get foo() {
		return this.$$.ctx.foo;
	}

	set foo(foo) {
		this.$set({ foo });
		flush();
	}
}

export default SvelteComponent;