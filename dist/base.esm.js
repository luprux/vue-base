/* base-js v0.1.0 (c) undefined - undefined */
import Vue from 'vue';
import keyBy from 'lodash-es/keyBy';
import mapValues from 'lodash-es/mapValues';
import pick from 'lodash-es/pick';
import values from 'lodash-es/values';
import omit from 'lodash-es/omit';

class Base$1 {
    constructor(config) {
        this.bus = new Vue();
        this.bootingCallbacks = [];
        this.config = config;
    }

    /**
     * Register a callback to be called before Nova starts. This is used to bootstrap
     * addons, tools, custom fields, or anything else Nova needs
     */
    booting(callback) {
        this.bootingCallbacks.push(callback);
    }

    /**
     * Execute all of the booting callbacks.
     */
    boot() {
        //this.bootingCallbacks.forEach(callback => callback(Vue, router))

        this.bootingCallbacks = [];
    }

    /**
     * Register a listener on Nova's built-in event bus
     */
    $on(...args) {
        this.bus.$on(...args);
    }

    /**
     * Register a one-time listener on the event bus
     */
    $once(...args) {
        this.bus.$once(...args);
    }

    /**
     * De-register a listener on the event bus
     */
    $off(...args) {
        this.bus.$off(...args);
    }

    /**
     * Emit an event on the event bus
     */
    $emit(...args) {
        this.bus.$emit(...args);
    }
}

//
//
//
//
//
//
//
//
//
//
//

var script = {
	name: "Field",
	props: {
		field: {
			default: function () {
				return {
					component: 'undefined'
				}
			}
		},
		model: Object,
		errors: {},
		layout: {}
	},
	methods: {
		input: function ($event) {
			this.$emit('input', $event);
		}
	}
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("form-" + _vm.field.component, {
    tag: "component",
    attrs: {
      field: _vm.field,
      model: _vm.model,
      errors: _vm.errors,
      layout: _vm.layout
    },
    on: { input: _vm.input }
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/common/Field.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Field = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor(errors = {}) {
        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */
    all() {
        return this.errors;
    }

    /**
     * Determine if any errors exists for the given field or object.
     *
     * @param {string} field
     */
    has(field) {
        let hasError = this.errors.hasOwnProperty(field);

        if (!hasError) {
            const errors = Object.keys(this.errors).filter(
                e => e.startsWith(`${field}.`) || e.startsWith(`${field}[`)
            );

            hasError = errors.length > 0;
        }

        return hasError;
    }

    first(field) {
        return this.get(field)[0];
    }

    get(field) {
        return this.errors[field] || [];
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors = {}) {
        this.errors = errors;
    }

    /**
     * Clear a specific field, object or all error fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        if (!field) {
            this.errors = {};

            return;
        }
        
        let errors = Object.assign({}, this.errors);

        Object.keys(errors)
            .filter(e => e === field || e.startsWith(`${field}.`) || e.startsWith(`${field}[`))
            .forEach(e => delete errors[e]);
        
        this.errors = errors;
    }
}

//

var script$1 = {
	name: "Fields",

	props: {
		fields: {},
		model: Object,
		errors: {
			default: () => new Errors()
		},
		layout: String
	}
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._l(_vm.fields, function(field) {
      return _c("field", {
        key: field.attribute,
        attrs: {
          field: field,
          model: _vm.model,
          errors: _vm.errors,
          layout: _vm.layout
        }
      })
    })
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/common/Fields.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Fields = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var FieldLayoutMixin = {
	props: {
		field: {type: Object, required: true},
		fieldLabel: {type: String},
		layoutClass: {type: String},
		showLabel: {type: Boolean, default: true},
		showHelpText: {type: Boolean, default: true},
	},
};

//

var script$2 = {
	mixins: [ FieldLayoutMixin ]
};

/* script */
            const __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.layoutClass }, [_vm._t("field")], 2)
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/common/DefaultLayout.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var DefaultLayout = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
//
//
//

var script$3 = {
	name: 'FormUndefinedField'
};

/* script */
            const __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div")
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/Undefined.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Undefined = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//

var script$4 = {
	mixins: [ FieldLayoutMixin ]
};

/* script */
            const __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "form-group" },
    [
      _vm.showLabel
        ? _c("label", { attrs: { for: _vm.field.attribute } }, [
            _vm._v(
              "\n\t\t" + _vm._s(_vm.field.label || _vm.fieldLabel) + "\n\t"
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._t("field"),
      _vm._v(" "),
      _vm._t("errors"),
      _vm._v(" "),
      _vm.showHelpText
        ? _c("small", { staticClass: "form-text text-muted" }, [
            _vm._v("\n\t\t" + _vm._s(_vm.field.helpText) + "\n\t")
          ])
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/VericalLayout.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var VericalLayout = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

//

var script$5 = {
	mixins: [ FieldLayoutMixin ]
};

/* script */
            const __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "form-group row" }, [
    _c(
      "label",
      {
        staticClass: "col-sm-4 col-form-label text-sm-right",
        attrs: { for: _vm.field.attribute }
      },
      [_vm._v("\n\t\t" + _vm._s(_vm.field.label || _vm.fieldLabel) + "\n\t")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-sm-8" },
      [
        _vm._t("field"),
        _vm._v(" "),
        _vm._t("errors"),
        _vm._v(" "),
        _vm.showHelpText
          ? _c("small", { staticClass: "form-text text-muted" }, [
              _vm._v("\n\t\t\t" + _vm._s(_vm.field.helpText) + "\n\t\t")
            ])
          : _vm._e()
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/HorizontalLayout.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var HorizontalLayout = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var HandlesValidationErrors = {
	props: {
		errors: {
			default: () => new Errors(),
		},
	},

	data: () => ({
		errorClass: 'is-invalid',
	}),

	computed: {
		errorClasses() {
			return this.hasError ? [this.errorClass] : []
		},

		hasError() {
			return this.errors.has(this.field.attribute)
		},

		firstError() {
			if (this.hasError) {
				return this.errors.first(this.field.attribute)
			}
		},
	},
};

var FormField = {
	mixins: [ HandlesValidationErrors ],

	props: {
		field: { type: Object, required: true },
		model: { type: Object },
		layout: { default: 'default' },
		layoutClass: { type: String },
	},

	data: () => ({}),

	computed: {
		layoutComponent: function () {
			return this.layout + '-layout';
		}
	},

	mounted() {
		this.setInitialValue();

		// Add a default fill methods for the field
		this.field.fillFormData = this.fillFormData;

		// Register a global event for setting the field's value
		Base.$on(this.field.attribute + '-value', this.handleChange);

		if (this.field.depends && this.field.depends.length) {
			this.field.depends.forEach(attr => {
				Base.$on(attr + '-change', value => {
					this.triggerDependentChange(attr, value);
				});
			});

			this.triggerDependentChange();
		}
	},

	watch: {
		'field.value': function (value) {
			Base.$emit(this.field.attribute + '-change', value);

			this.fillModel();
		}
	},

	destroyed() {
		Base.$off(this.field.attribute + '-value');

		if (this.field.depends && this.field.depends.length) {
			this.field.depends.forEach(attr => {
				Base.$off(attr + '-change');
			});
		}
	},

	methods: {
		/*
		 * Set the initial value for the field
		 */
		setInitialValue() {
		},

		/**
		 * Provide a function that fills a passed FormData object with the
		 * field's internal value attribute
		 */
		fillFormData(formData) {
			formData.append(this.field.attribute, this.field.value || '');
		},

		/**
		 * Provide a function that fills a passed model object with the
		 * field's internal value attribute
		 */
		fillModel() {
			if (!this.model) {
				return;
			}

			this.$set(this.model, this.field.attribute, this.field.value);
		},

		/**
		 * Update the field's internal value
		 */
		handleChange(value) {
			this.field.value = value;
			this.fillModel();
		},

		triggerDependentChange(attribute, value) {
			let values$$1 = mapValues(keyBy(this.field.dependentFields, 'attribute'), 'value');
			this.handleDependentChange(attribute, value, values$$1);
		},

		handleDependentChange(attribute, value, values$$1) {
			//console.log(this.field.attribute + ':handleDependentChange', arguments)
		}
	},
};

class FieldList {

	constructor(fields) {
		this.list = fields;
		this.byAttribute = keyBy(fields, 'attribute');

		// Collect dependencies and assign
		fields.forEach(field => {
			// Add default form data fill method
			field.fillFormData = formData => {
				formData.append(field.attribute, field.value || '');
			};

			// Add default model data fill method
			field.fillModel = model => {
				model[field.attribute] = field.value;
			};

			if (!field.depends) {
				return;
			}

			field.dependentFields = this.only(...field.depends);
		});
	}

	all() {
		return this.list
	}

	get(attribute) {
		return this.byAttribute[attribute];
	}

	only(...attributes) {
		return values(pick(this.byAttribute, attributes))
	}

	except(...attributes) {
		return values(omit(this.byAttribute, attributes))
	}

}

var FormComponent = {
	data() {
		return {
			fields: new FieldList([]),
			errors: new Errors()
		}
	},

	methods: {
		setFields(fields) {
			this.fields = new FieldList(fields);
		},

		formData(only) {
			let formData = new FormData();
			let fields = only || this.fields.all();

			fields.forEach(field => {
				field.fillFormData(formData);
			});

			return formData
		},

		setValidationErrors(errors) {
			this.errors = new Errors(errors);
		},

	}
};

//

var script$6 = {
	name: 'FormTextField',

	mixins: [ FormField ],

	props: {
		placeholder: {},
		step: {},
		min: {},
		max: {},
		pattern: {},
	},

	computed: {
		/**
		 * Get the input type.
		 */
		inputType() {
			return this.field.type || 'text'
		},
		/**
		 * Get the input placeholder.
		 */
		inputPlaceholder() {
			return this.placeholder || this.field.placeholder
		},

		/**
		 * Get the input step amount.
		 */
		inputStep() {
			return this.step || this.field.step
		},

		/**
		 * Get the input minimum amount.
		 */
		inputMin() {
			return this.min || this.field.min
		},

		/**
		 * Get the input maximum amount.
		 */
		inputMax() {
			return this.max || this.field.max
		},

		/**
		 * Get the pattern that should be used for the field
		 */
		inputPattern() {
			return this.pattern || this.field.pattern
		},
	},
};

/* script */
            const __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.layoutComponent,
    { tag: "component", attrs: { field: _vm.field } },
    [
      _c("template", { slot: "field" }, [
        _vm.inputType === "checkbox"
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "form-control",
              class: _vm.errorClasses,
              attrs: {
                id: _vm.field.attribute,
                dusk: _vm.field.attribute,
                min: _vm.inputMin,
                max: _vm.inputMax,
                step: _vm.inputStep,
                pattern: _vm.inputPattern,
                placeholder: _vm.inputPlaceholder,
                type: "checkbox"
              },
              domProps: {
                checked: Array.isArray(_vm.field.value)
                  ? _vm._i(_vm.field.value, null) > -1
                  : _vm.field.value
              },
              on: {
                change: function($event) {
                  var $$a = _vm.field.value,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(_vm.field, "value", $$a.concat([$$v]));
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.field,
                          "value",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        );
                    }
                  } else {
                    _vm.$set(_vm.field, "value", $$c);
                  }
                }
              }
            })
          : _vm.inputType === "radio"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.field.value,
                    expression: "field.value"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errorClasses,
                attrs: {
                  id: _vm.field.attribute,
                  dusk: _vm.field.attribute,
                  min: _vm.inputMin,
                  max: _vm.inputMax,
                  step: _vm.inputStep,
                  pattern: _vm.inputPattern,
                  placeholder: _vm.inputPlaceholder,
                  type: "radio"
                },
                domProps: { checked: _vm._q(_vm.field.value, null) },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.field, "value", null);
                  }
                }
              })
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.field.value,
                    expression: "field.value"
                  }
                ],
                staticClass: "form-control",
                class: _vm.errorClasses,
                attrs: {
                  id: _vm.field.attribute,
                  dusk: _vm.field.attribute,
                  min: _vm.inputMin,
                  max: _vm.inputMax,
                  step: _vm.inputStep,
                  pattern: _vm.inputPattern,
                  placeholder: _vm.inputPlaceholder,
                  type: _vm.inputType
                },
                domProps: { value: _vm.field.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.field, "value", $event.target.value);
                  }
                }
              })
      ]),
      _vm._v(" "),
      _c("template", { slot: "errors" }, [
        _vm.hasError
          ? _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v("\n\t\t\t" + _vm._s(_vm.firstError) + "\n\t\t")
            ])
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/TextField.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextField = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

//

var script$7 = {
	name: 'FormTextField',

	mixins: [ FormField ],

	props: {
		placeholder: {}
	},

	computed: {
		/**
		 * Get the input placeholder.
		 */
		inputPlaceholder() {
			return this.placeholder || this.field.placeholder
		}
	},

	methods: {

		input ($event) {
			let files = [];
			for (let i = 0; i < $event.target.files.length; i++) {
				files.push($event.target.files[i]);
			}

			this.field.value = this.field.multiple ? files : files[0];
		}

	}

};

/* script */
            const __vue_script__$7 = script$7;
            
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.layoutComponent,
    { tag: "component", attrs: { field: _vm.field } },
    [
      _c("template", { slot: "field" }, [
        _c("input", {
          staticClass: "form-control",
          class: _vm.errorClasses,
          attrs: {
            id: _vm.field.attribute,
            dusk: _vm.field.attribute,
            type: "file",
            multiple: _vm.field.multiple || false,
            placeholder: _vm.inputPlaceholder
          },
          on: {
            input: function($event) {
              _vm.input($event);
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("template", { slot: "errors" }, [
        _vm.hasError
          ? _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v("\n\t\t\t" + _vm._s(_vm.firstError) + "\n\t\t")
            ])
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* component normalizer */
  function __vue_normalize__$7(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/FileField.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var FileField = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

//

var script$8 = {
	mixins: [ FormField ],
};

/* script */
            const __vue_script__$8 = script$8;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.layoutComponent,
    { tag: "component", attrs: { field: _vm.field } },
    [
      _c("template", { slot: "field" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.field.value,
                expression: "field.value"
              }
            ],
            staticClass: "form-control",
            class: _vm.errorClasses,
            attrs: {
              id: _vm.field.name,
              multiple: _vm.field.multiple || false
            },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value;
                    return val
                  });
                _vm.$set(
                  _vm.field,
                  "value",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                );
              }
            }
          },
          [
            _c("option", { attrs: { value: "", selected: "", disabled: "" } }, [
              _vm._v(
                "\n\t\t\t\t" +
                  _vm._s(_vm.field.placeholder || "Choose an option") +
                  "\n\t\t\t"
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.field.options, function(option) {
              return _c(
                "option",
                {
                  domProps: {
                    value: option.value,
                    selected: option.value == _vm.field.value
                  }
                },
                [_vm._v("\n\t\t\t\t" + _vm._s(option.label) + "\n\t\t\t")]
              )
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "errors" }, [
        _vm.hasError
          ? _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v("\n\t\t\t" + _vm._s(_vm.firstError) + "\n\t\t")
            ])
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* component normalizer */
  function __vue_normalize__$8(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/SelectField.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var SelectField = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//

var script$9 = {
	name: 'FormTextField',

	mixins: [ FormField ],

	props: {
		fieldLabel: { type: String },
	},

	computed: {
		/**
		 * Get the input placeholder.
		 */
		inputPlaceholder() {
			return this.placeholder || this.field.placeholder
		}
	},

	methods: {

		input ($event) {
			let files = [];
			for (let i = 0; i < $event.target.files.length; i++) {
				files.push($event.target.files[i]);
			}

			this.field.value = this.field.multiple ? files : files[0];
		}

	}

};

/* script */
            const __vue_script__$9 = script$9;
            
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "form-check" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field.value,
          expression: "field.value"
        }
      ],
      staticClass: "form-check-input",
      class: _vm.errorClasses,
      attrs: {
        id: _vm.field.attribute,
        dusk: _vm.field.attribute,
        type: "checkbox",
        placeholder: _vm.inputPlaceholder
      },
      domProps: {
        checked: Array.isArray(_vm.field.value)
          ? _vm._i(_vm.field.value, null) > -1
          : _vm.field.value
      },
      on: {
        change: function($event) {
          var $$a = _vm.field.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.field, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 &&
                _vm.$set(
                  _vm.field,
                  "value",
                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                );
            }
          } else {
            _vm.$set(_vm.field, "value", $$c);
          }
        }
      }
    }),
    _vm._v(" "),
    _c("label", { attrs: { for: "field.attribute" } }, [
      _vm._v("\n\t\t" + _vm._s(_vm.field.label || _vm.fieldLabel) + "\n\t")
    ]),
    _vm._v(" "),
    _vm.hasError
      ? _c("div", { staticClass: "invalid-feedback" }, [
          _vm._v("\n\t\t" + _vm._s(_vm.firstError) + "\n\t")
        ])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* component normalizer */
  function __vue_normalize__$9(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/CheckboxField.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var CheckboxField = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

//

var script$a = {
	name: 'FormTextareaField',

	mixins: [ FormField ],

	props: {
		placeholder: {},
		cols: {},
		rows: {},
	},

	computed: {

		/**
		 * Get the input placeholder.
		 */
		inputPlaceholder() {
			return this.placeholder || this.field.placeholder
		},

		/**
		 * Get the textarea cols.
		 */
		inputCols() {
			return this.cols || this.field.rows
		},

		/**
		 * Get the textarea rows.
		 */
		inputRows() {
			return this.rows || this.field.rows
		},
	},
};

/* script */
            const __vue_script__$a = script$a;
            
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    _vm.layoutComponent,
    { tag: "component", attrs: { field: _vm.field } },
    [
      _c("template", { slot: "field" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.field.value,
              expression: "field.value"
            }
          ],
          staticClass: "form-control",
          class: _vm.errorClasses,
          attrs: {
            id: _vm.field.attribute,
            dusk: _vm.field.attribute,
            cols: _vm.inputCols,
            rows: _vm.inputRows,
            placeholder: _vm.inputPlaceholder
          },
          domProps: { value: _vm.field.value },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.field, "value", $event.target.value);
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("template", { slot: "errors" }, [
        _vm.hasError
          ? _c("div", { staticClass: "invalid-feedback" }, [
              _vm._v("\n\t\t\t" + _vm._s(_vm.firstError) + "\n\t\t")
            ])
          : _vm._e()
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* component normalizer */
  function __vue_normalize__$a(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/azamatx/projects/base-js/base-js/src/form/TextareaField.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaField = __vue_normalize__$a(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

// import Vue from 'vue'

var components = /*#__PURE__*/Object.freeze({
Field: Field,
Fields: Fields,
FormUndefined: Undefined,
DefaultLayout: DefaultLayout,
VerticalLayout: VericalLayout,
HorizontalLayout: HorizontalLayout,
FormTextField: TextField,
FormFileField: FileField,
FormSelectField: SelectField,
FormCheckboxField: CheckboxField,
FormTextareaField: TextareaField
});

var plugin = {
	install (Vue$$1, options) {
		window.Base = new Base$1();
		Object.keys(components).forEach(function (name) {
			Vue$$1.component(name, components[name]);
		});
	}
};

export { Base$1 as Base, plugin as Plugin, HandlesValidationErrors, FieldLayoutMixin, FormField, FormComponent, Field, Fields, Undefined as FormUndefined, DefaultLayout, VericalLayout as VerticalLayout, HorizontalLayout, TextField as FormTextField, FileField as FormFileField, SelectField as FormSelectField, CheckboxField as FormCheckboxField, TextareaField as FormTextareaField };
//# sourceMappingURL=base.esm.js.map