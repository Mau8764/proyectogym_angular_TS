function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/agregarcliente/agregarcliente.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/agregarcliente/agregarcliente.component.ts ***!
    \************************************************************/

  /*! exports provided: AgregarclienteComponent */

  /***/
  function srcAppAgregarclienteAgregarclienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgregarclienteComponent", function () {
      return AgregarclienteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");

    function AgregarclienteComponent_div_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre es requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgregarclienteComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgregarclienteComponent_div_8_span_1_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formulariocliente.controls["nombre"].errors.required);
      }
    }

    function AgregarclienteComponent_div_14_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Apellido es requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgregarclienteComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgregarclienteComponent_div_14_span_1_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formulariocliente.controls["apellido"].errors.required);
      }
    }

    function AgregarclienteComponent_div_20_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgregarclienteComponent_div_20_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo invalido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgregarclienteComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgregarclienteComponent_div_20_span_1_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AgregarclienteComponent_div_20_span_2_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formulariocliente.controls["correo"].errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formulariocliente.controls["correo"].errors.email);
      }
    }

    function AgregarclienteComponent_div_31_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha es requerida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgregarclienteComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgregarclienteComponent_div_31_span_1_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formulariocliente.controls["fechanacimiento"].errors.required);
      }
    }

    function AgregarclienteComponent_div_42_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Imagen es requerida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AgregarclienteComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgregarclienteComponent_div_42_span_1_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formulariocliente.controls["imgurl"].errors.required);
      }
    }

    function AgregarclienteComponent_button_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarclienteComponent_button_48_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.agregar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Agregar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.formulariocliente.invalid);
      }
    }

    function AgregarclienteComponent_button_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarclienteComponent_button_49_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.editar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AgregarclienteComponent =
    /*#__PURE__*/
    function () {
      function AgregarclienteComponent(fb, db, storage, activeRoute, msg) {
        _classCallCheck(this, AgregarclienteComponent);

        this.fb = fb;
        this.db = db;
        this.storage = storage;
        this.activeRoute = activeRoute;
        this.msg = msg;
        this.urlimagen = '';
        this.eseditable = false;
      }

      _createClass(AgregarclienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.formulariocliente = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            cedula: [''],
            fechanacimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telefono: [''],
            imgurl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.id = this.activeRoute.snapshot.params.clienteID;

          if (this.id != undefined) {
            this.eseditable = true;
            this.db.doc('clientes/' + this.id).valueChanges().subscribe(function (cliente) {
              _this.formulariocliente.setValue({
                nombre: cliente.nombre,
                apellido: cliente.apellido,
                correo: cliente.correo,
                cedula: cliente.cedula,
                fechanacimiento: new Date(cliente.fechanacimiento.seconds * 1000).toISOString().substr(0, 10),
                telefono: cliente.telefono,
                imgurl: ''
              });

              _this.urlimagen = cliente.imgurl;
            });
          }
        }
      }, {
        key: "agregar",
        value: function agregar() {
          var _this2 = this;

          this.formulariocliente.value.imgurl = this.urlimagen;
          this.formulariocliente.value.fechanacimiento = new Date(this.formulariocliente.value.fechanacimiento);
          console.log(this.formulariocliente.value);
          this.db.collection('clientes').add(this.formulariocliente.value).then(function (termino) {
            _this2.msg.mensajecorrecto('Agregar', 'Se agregó correctamente');
          })["catch"](function () {});
        }
      }, {
        key: "editar",
        value: function editar() {
          var _this3 = this;

          this.formulariocliente.value.imgurl = this.urlimagen;
          this.formulariocliente.value.fechanacimiento = new Date(this.formulariocliente.value.fechanacimiento);
          this.db.doc('clientes/' + this.id).update(this.formulariocliente.value).then(function (resultado) {
            _this3.msg.mensajecorrecto('Editar', 'Se editó correctamente');
          })["catch"](function () {
            _this3.msg.mensajeerror('Error', 'Ha ocurrido un error');
          });
        }
      }, {
        key: "subirimagen",
        value: function subirimagen(evento) {
          var _this4 = this;

          if (evento.target.files.length > 0) {
            var nombreimg = new Date().getTime().toString();
            var foto = evento.target.files[0];
            var extension = nombreimg.toString().substring(foto.name.toString().lastIndexOf('.'));
            var ruta = 'clientes/' + nombreimg + extension;
            var ref = this.storage.ref(ruta);
            var tarea = ref.put(foto);
            tarea.then(function (objeto) {
              console.log('imagen subida');
              ref.getDownloadURL().subscribe(function (url) {
                _this4.urlimagen = url;
              });
            });
            tarea.percentageChanges().subscribe(function (porcentaje) {
              _this4.procentajedesubida = parseInt(porcentaje.toString());
            });
          }
        }
      }]);

      return AgregarclienteComponent;
    }();

    AgregarclienteComponent.ɵfac = function AgregarclienteComponent_Factory(t) {
      return new (t || AgregarclienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]));
    };

    AgregarclienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgregarclienteComponent,
      selectors: [["app-agregarcliente"]],
      decls: 50,
      vars: 11,
      consts: [[1, "container", "mt-5"], ["action", "", 3, "formGroup"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["for", ""], ["type", "text", "formControlName", "nombre", "placeholder", "Agregue el nombre", "name", "", "id", "", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["type", "text", "formControlName", "apellido", "placeholder", "Agregue el apellido", "name", "", "id", "", 1, "form-control"], ["type", "text", "formControlName", "correo", "placeholder", "Agregue el correo", "name", "", "id", "", 1, "form-control"], ["type", "text", "formControlName", "cedula", "placeholder", "Agregue una cedula", "name", "", "id", "", 1, "form-control"], ["type", "date", "formControlName", "fechanacimiento", "placeholder", "Agregue la fecha", "name", "", "id", "", 1, "form-control"], ["type", "tel", "formControlName", "telefono", "placeholder", "Agregue el numero de telefono", "name", "", "id", "", 1, "form-control"], [1, "col-sm-12"], ["type", "file", "formControlName", "imgurl", "placeholder", "Agregue la imagen", "name", "", "id", "", 1, "form-control-file", 3, "change"], ["type", "danger", 3, "value", "striped"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "click"]],
      template: function AgregarclienteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AgregarclienteComponent_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Apellido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AgregarclienteComponent_div_14_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Correo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AgregarclienteComponent_div_20_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "C\xE9dula");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Fecha de Nacimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AgregarclienteComponent_div_31_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tel\xE9fono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AgregarclienteComponent_Template_input_change_41_listener($event) {
            return ctx.subirimagen($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AgregarclienteComponent_div_42_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "progressbar", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AgregarclienteComponent_button_48_Template, 2, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AgregarclienteComponent_button_49_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulariocliente);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariocliente.controls["nombre"].invalid && ctx.formulariocliente.controls["nombre"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariocliente.controls["apellido"].invalid && ctx.formulariocliente.controls["apellido"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariocliente.controls["correo"].invalid && ctx.formulariocliente.controls["correo"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariocliente.controls["fechanacimiento"].invalid && ctx.formulariocliente.controls["fechanacimiento"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariocliente.controls["imgurl"].invalid && ctx.formulariocliente.controls["imgurl"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.procentajedesubida)("striped", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.procentajedesubida, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.eseditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eseditable);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FncmVnYXJjbGllbnRlL2FncmVnYXJjbGllbnRlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgregarclienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agregarcliente',
          templateUrl: './agregarcliente.component.html',
          styleUrls: ['./agregarcliente.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listadoclientes/listadoclientes.component */
    "./src/app/listadoclientes/listadoclientes.component.ts");
    /* harmony import */


    var _agregarcliente_agregarcliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./agregarcliente/agregarcliente.component */
    "./src/app/agregarcliente/agregarcliente.component.ts");
    /* harmony import */


    var _precios_precios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./precios/precios.component */
    "./src/app/precios/precios.component.ts");
    /* harmony import */


    var _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inscripcion/inscripcion.component */
    "./src/app/inscripcion/inscripcion.component.ts");
    /* harmony import */


    var _listadoinscripciones_listadoinscripciones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listadoinscripciones/listadoinscripciones.component */
    "./src/app/listadoinscripciones/listadoinscripciones.component.ts");

    var routes = [{
      path: ' ',
      component: _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_2__["ListadoclientesComponent"]
    }, {
      path: 'listadoclientes',
      component: _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_2__["ListadoclientesComponent"]
    }, {
      path: 'agregarcliente',
      component: _agregarcliente_agregarcliente_component__WEBPACK_IMPORTED_MODULE_3__["AgregarclienteComponent"]
    }, {
      path: 'agregarcliente/:clienteID',
      component: _agregarcliente_agregarcliente_component__WEBPACK_IMPORTED_MODULE_3__["AgregarclienteComponent"]
    }, {
      path: 'precios',
      component: _precios_precios_component__WEBPACK_IMPORTED_MODULE_4__["PreciosComponent"]
    }, {
      path: 'listadoinscripciones',
      component: _listadoinscripciones_listadoinscripciones_component__WEBPACK_IMPORTED_MODULE_6__["ListadoinscripcionesComponent"]
    }, {
      path: 'inscripcion',
      component: _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_5__["InscripcionComponent"]
    }, {
      path: '**',
      component: _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_2__["ListadoclientesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./encabezado/encabezado.component */
    "./src/app/encabezado/encabezado.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    function AppComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-encabezado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_1_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_1_app_login_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
      }
    }

    function AppComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_1_div_0_Template, 10, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_app_login_1_Template, 1, 0, "app-login", 3);
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.cargando);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r36.cargando);
      }
    }

    var AppComponent = function AppComponent(auth) {
      var _this5 = this;

      _classCallCheck(this, AppComponent);

      this.auth = auth;
      this.title = 'proyectogym';
      this.cargando = true;
      this.auth.user.subscribe(function (usuario) {
        setTimeout(function () {
          _this5.cargando = false;
          _this5.usuario = usuario;
        }, 500);
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["showLogin", ""], ["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "lds-roller"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario && !ctx.cargando)("ngIfElse", _r35);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_3__["EncabezadoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./encabezado/encabezado.component */
    "./src/app/encabezado/encabezado.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./listadoclientes/listadoclientes.component */
    "./src/app/listadoclientes/listadoclientes.component.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _agregarcliente_agregarcliente_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./agregarcliente/agregarcliente.component */
    "./src/app/agregarcliente/agregarcliente.component.ts");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _precios_precios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./precios/precios.component */
    "./src/app/precios/precios.component.ts");
    /* harmony import */


    var _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./inscripcion/inscripcion.component */
    "./src/app/inscripcion/inscripcion.component.ts");
    /* harmony import */


    var _seleccionarcliente_seleccionarcliente_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./seleccionarcliente/seleccionarcliente.component */
    "./src/app/seleccionarcliente/seleccionarcliente.component.ts");
    /* harmony import */


    var _listadoinscripciones_listadoinscripciones_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./listadoinscripciones/listadoinscripciones.component */
    "./src/app/listadoinscripciones/listadoinscripciones.component.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_17__["MensajesService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_9__["EncabezadoComponent"], _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_12__["ListadoclientesComponent"], _agregarcliente_agregarcliente_component__WEBPACK_IMPORTED_MODULE_14__["AgregarclienteComponent"], _precios_precios_component__WEBPACK_IMPORTED_MODULE_18__["PreciosComponent"], _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_19__["InscripcionComponent"], _seleccionarcliente_seleccionarcliente_component__WEBPACK_IMPORTED_MODULE_20__["SeleccionarclienteComponent"], _listadoinscripciones_listadoinscripciones_component__WEBPACK_IMPORTED_MODULE_21__["ListadoinscripcionesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _encabezado_encabezado_component__WEBPACK_IMPORTED_MODULE_9__["EncabezadoComponent"], _listadoclientes_listadoclientes_component__WEBPACK_IMPORTED_MODULE_12__["ListadoclientesComponent"], _agregarcliente_agregarcliente_component__WEBPACK_IMPORTED_MODULE_14__["AgregarclienteComponent"], _precios_precios_component__WEBPACK_IMPORTED_MODULE_18__["PreciosComponent"], _inscripcion_inscripcion_component__WEBPACK_IMPORTED_MODULE_19__["InscripcionComponent"], _seleccionarcliente_seleccionarcliente_component__WEBPACK_IMPORTED_MODULE_20__["SeleccionarclienteComponent"], _listadoinscripciones_listadoinscripciones_component__WEBPACK_IMPORTED_MODULE_21__["ListadoinscripcionesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_15__["ProgressbarModule"].forRoot()],
          providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestore"], _services_mensajes_service__WEBPACK_IMPORTED_MODULE_17__["MensajesService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/encabezado/encabezado.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/encabezado/encabezado.component.ts ***!
    \****************************************************/

  /*! exports provided: EncabezadoComponent */

  /***/
  function srcAppEncabezadoEncabezadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncabezadoComponent", function () {
      return EncabezadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EncabezadoComponent =
    /*#__PURE__*/
    function () {
      function EncabezadoComponent(auth) {
        _classCallCheck(this, EncabezadoComponent);

        this.auth = auth;
      }

      _createClass(EncabezadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.auth.signOut();
        }
      }]);

      return EncabezadoComponent;
    }();

    EncabezadoComponent.ɵfac = function EncabezadoComponent_Factory(t) {
      return new (t || EncabezadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
    };

    EncabezadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EncabezadoComponent,
      selectors: [["app-encabezado"]],
      decls: 19,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "/listadoinscripciones", 1, "nav-item", "nav-link"], ["routerLink", "/inscripcion", 1, "nav-item", "nav-link"], ["routerLink", "/agregarcliente", 1, "nav-item", "nav-link"], ["routerLink", "/listadoclientes", 1, "nav-item", "nav-link"], ["routerLink", "/precios", 1, "nav-item", "nav-link"], [1, "btn", "btn-outline-danger", 3, "click"]],
      template: function EncabezadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gimnasio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ver Inscripciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inscripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Agregar Clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ver clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Precios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EncabezadoComponent_Template_button_click_17_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Salir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuY2FiZXphZG8vZW5jYWJlemFkby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EncabezadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-encabezado',
          templateUrl: './encabezado.component.html',
          styleUrls: ['./encabezado.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inscripcion/inscripcion.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/inscripcion/inscripcion.component.ts ***!
    \******************************************************/

  /*! exports provided: InscripcionComponent */

  /***/
  function srcAppInscripcionInscripcionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscripcionComponent", function () {
      return InscripcionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_inscripcion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/inscripcion */
    "./src/app/models/inscripcion.ts");
    /* harmony import */


    var _models_clientes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/clientes */
    "./src/app/models/clientes.ts");
    /* harmony import */


    var _models_precio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/precio */
    "./src/app/models/precio.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _seleccionarcliente_seleccionarcliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../seleccionarcliente/seleccionarcliente.component */
    "./src/app/seleccionarcliente/seleccionarcliente.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InscripcionComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var precio_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", precio_r31.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", precio_r31.nombre, " ");
      }
    }

    function InscripcionComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r30.clienteseleccionado.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var InscripcionComponent =
    /*#__PURE__*/
    function () {
      function InscripcionComponent(db, msj) {
        _classCallCheck(this, InscripcionComponent);

        this.db = db;
        this.msj = msj;
        this.inscripcion = new _models_inscripcion__WEBPACK_IMPORTED_MODULE_1__["Inscripcion"]();
        this.clienteseleccionado = new _models_clientes__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
        this.precios = new Array();
        this.precioseleccionado = new _models_precio__WEBPACK_IMPORTED_MODULE_3__["Precio"]();
        this.idprecio = 'null';
      }

      _createClass(InscripcionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.db.collection('precios').get().subscribe(function (resultado) {
            resultado.docs.forEach(function (item) {
              var precio = item.data();
              precio.id = item.id;
              precio.ref = item.ref;

              _this6.precios.push(precio);
            });
          });
        }
      }, {
        key: "asignarcliente",
        value: function asignarcliente(cliente) {
          this.inscripcion.cliente = cliente.ref;
          this.clienteseleccionado = cliente;
        }
      }, {
        key: "eliminarcliente",
        value: function eliminarcliente() {
          this.clienteseleccionado = new _models_clientes__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
          this.inscripcion.cliente = undefined;
        }
      }, {
        key: "guardar",
        value: function guardar() {
          var _this7 = this;

          if (this.inscripcion.validar().esvalida) {
            var inscripcionagregar = {
              fecha: this.inscripcion.fecha,
              fechafinal: this.inscripcion.fechafinal,
              cliente: this.inscripcion.cliente,
              precios: this.inscripcion.precios,
              subtotal: this.inscripcion.subtotal,
              IVA: this.inscripcion.IVA,
              total: this.inscripcion.total
            };
            this.db.collection('inscripciones').add(inscripcionagregar).then(function (resultado) {
              _this7.inscripcion = new _models_inscripcion__WEBPACK_IMPORTED_MODULE_1__["Inscripcion"]();
              _this7.clienteseleccionado = new _models_clientes__WEBPACK_IMPORTED_MODULE_2__["Cliente"]();
              _this7.precioseleccionado = new _models_precio__WEBPACK_IMPORTED_MODULE_3__["Precio"]();
              _this7.idprecio = 'null';

              _this7.msj.mensajecorrecto('Guardado', 'Guardado correctamente');
            });
          } else {
            this.msj.mensajeadvertencia('Abvertencia', this.inscripcion.validar().mensaje);
          }
        }
      }, {
        key: "seleccionarprecio",
        value: function seleccionarprecio(id) {
          if (id != "null") {
            this.precioseleccionado = this.precios.find(function (x) {
              return x.id == id;
            });
            this.inscripcion.precios = this.precioseleccionado.ref;
            this.inscripcion.subtotal = this.precioseleccionado.costo;
            this.inscripcion.IVA = this.inscripcion.subtotal * 0.15;
            this.inscripcion.total = this.inscripcion.subtotal + this.inscripcion.IVA;
            this.inscripcion.fecha = new Date();

            if (this.precioseleccionado.tipoduracion == 1) {
              var dias = this.precioseleccionado.duracion;
              var fechafinal = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate() + dias);
              this.inscripcion.fechafinal = fechafinal; //fecha final =precioseleccionado.duracio*1
            }

            if (this.precioseleccionado.tipoduracion == 2) {
              var _dias = this.precioseleccionado.duracion * 7;

              var _fechafinal = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate() + _dias);

              this.inscripcion.fechafinal = _fechafinal; //fecha final =precioseleccionado.duracio*7
            }

            if (this.precioseleccionado.tipoduracion == 3) {
              var _dias2 = this.precioseleccionado.duracion * 15;

              var _fechafinal2 = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate() + _dias2);

              this.inscripcion.fechafinal = _fechafinal2; //fecha final =precioseleccionado.duracio*15
            }

            if (this.precioseleccionado.tipoduracion == 4) {
              var meses = this.precioseleccionado.duracion;

              var _fechafinal3 = new Date(this.inscripcion.fecha.getFullYear(), this.inscripcion.fecha.getMonth() + meses, this.inscripcion.fecha.getDate());

              this.inscripcion.fechafinal = _fechafinal3; //fecha final =this.inscripcion.fecha agregar un mes precioseleccionado.duracion
            }

            if (this.precioseleccionado.tipoduracion == 5) {
              var años = this.precioseleccionado.duracion;

              var _fechafinal4 = new Date(this.inscripcion.fecha.getFullYear() + años, this.inscripcion.fecha.getMonth(), this.inscripcion.fecha.getDate());

              this.inscripcion.fechafinal = _fechafinal4; //fecha final =this.inscripcion.fecha agregar los años precioseleccionado.duracion
            }
          } else {
            this.precioseleccionado = new _models_precio__WEBPACK_IMPORTED_MODULE_3__["Precio"]();
            this.inscripcion.precios = null;
            this.inscripcion.subtotal = 0;
            this.inscripcion.IVA = 0;
            this.inscripcion.total = 0;
            this.inscripcion.fecha = null;
            this.inscripcion.fechafinal = null;
          }
        }
      }]);

      return InscripcionComponent;
    }();

    InscripcionComponent.ɵfac = function InscripcionComponent_Factory(t) {
      return new (t || InscripcionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]));
    };

    InscripcionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InscripcionComponent,
      selectors: [["app-inscripcion"]],
      decls: 38,
      vars: 14,
      consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-sm-6"], [3, "nombre", "nombreChange", "seleccionocliente", "cancelocliente"], ["for", ""], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, ""], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["type", "number", 1, "form-control", 3, "value"], [1, "btn", "btn-outline-primary", 3, "click"], [4, "ngIf"], ["alt", "", 1, "imgcliente", 3, "src"]],
      template: function InscripcionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-seleccionarcliente", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nombreChange", function InscripcionComponent_Template_app_seleccionarcliente_nombreChange_3_listener($event) {
            return ctx.clienteseleccionado.nombre = $event;
          })("seleccionocliente", function InscripcionComponent_Template_app_seleccionarcliente_seleccionocliente_3_listener($event) {
            return ctx.asignarcliente($event);
          })("cancelocliente", function InscripcionComponent_Template_app_seleccionarcliente_cancelocliente_3_listener() {
            return ctx.eliminarcliente();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InscripcionComponent_Template_select_ngModelChange_7_listener($event) {
            return ctx.idprecio = $event;
          })("change", function InscripcionComponent_Template_select_change_7_listener($event) {
            return ctx.seleccionarprecio($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seleccione un precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InscripcionComponent_option_10_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fecha Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Fecha Finaliza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subtotal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "IVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InscripcionComponent_Template_button_click_34_listener() {
            return ctx.guardar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, InscripcionComponent_div_37_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nombre", ctx.clienteseleccionado.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.idprecio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.precios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, ctx.inscripcion.fecha));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, ctx.inscripcion.fechafinal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.inscripcion.subtotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.inscripcion.IVA);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.inscripcion.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clienteseleccionado.imgurl);
        }
      },
      directives: [_seleccionarcliente_seleccionarcliente_component__WEBPACK_IMPORTED_MODULE_6__["SeleccionarclienteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
      styles: [".imgcliente[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcGNpb24vQzpcXFVzZXJzXFxNYXVyaWNpb1xcRGVza3RvcFxcVWRlbXlcXHByb3llY3RvZ3ltL3NyY1xcYXBwXFxpbnNjcmlwY2lvblxcaW5zY3JpcGNpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc2NyaXBjaW9uL2luc2NyaXBjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXBjaW9uL2luc2NyaXBjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ2NsaWVudGV7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59IiwiLmltZ2NsaWVudGUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InscripcionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inscripcion',
          templateUrl: './inscripcion.component.html',
          styleUrls: ['./inscripcion.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/listadoclientes/listadoclientes.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/listadoclientes/listadoclientes.component.ts ***!
    \**************************************************************/

  /*! exports provided: ListadoclientesComponent */

  /***/
  function srcAppListadoclientesListadoclientesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadoclientesComponent", function () {
      return ListadoclientesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/agregarcliente/", a1];
    };

    function ListadoclientesComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "Main");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Desactivar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cliente_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cliente_r1.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", cliente_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", cliente_r1.nombre, " ", cliente_r1.apellido, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, cliente_r1.id));
      }
    }

    var ListadoclientesComponent =
    /*#__PURE__*/
    function () {
      function ListadoclientesComponent(firestore) {
        _classCallCheck(this, ListadoclientesComponent);

        this.firestore = firestore;
        this.clientes = new Array();
      }

      _createClass(ListadoclientesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          // this.firestore.collection('clientes').valueChanges().subscribe((resultado)=>{
          //   this.clientes=resultado
          //})
          this.clientes.length = 0;
          this.firestore.collection('clientes').get().subscribe(function (resultado) {
            resultado.docs.forEach(function (item) {
              var cliente = item.data();
              cliente.id = item.id;
              cliente.ref = item.ref;

              _this8.clientes.push(cliente);
            });
          });
        }
      }]);

      return ListadoclientesComponent;
    }();

    ListadoclientesComponent.ɵfac = function ListadoclientesComponent_Factory(t) {
      return new (t || ListadoclientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    ListadoclientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadoclientesComponent,
      selectors: [["app-listadoclientes"]],
      decls: 8,
      vars: 1,
      consts: [[1, "container", "mt-3"], ["action", ""], [1, "form-group"], ["type", "text", "placeholder", "Buscar un cliente", "placeholder", "Buscar un cliente", 1, "form-control"], [1, "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], [1, "card"], [1, "card-img-top", "imgcliente", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-link", 3, "routerLink"], ["href", "#", 1, "card-link", "text-danger"]],
      template: function ListadoclientesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Listado de clientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListadoclientesComponent_div_7_Template, 13, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".imgcliente[_ngcontent-%COMP%] {\n  height: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFkb2NsaWVudGVzL0M6XFxVc2Vyc1xcTWF1cmljaW9cXERlc2t0b3BcXFVkZW15XFxwcm95ZWN0b2d5bS9zcmNcXGFwcFxcbGlzdGFkb2NsaWVudGVzXFxsaXN0YWRvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3RhZG9jbGllbnRlcy9saXN0YWRvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9saXN0YWRvY2xpZW50ZXMvbGlzdGFkb2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ2NsaWVudGV7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG5cclxufSIsIi5pbWdjbGllbnRlIHtcbiAgaGVpZ2h0OiAxNzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoclientesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listadoclientes',
          templateUrl: './listadoclientes.component.html',
          styleUrls: ['./listadoclientes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/listadoinscripciones/listadoinscripciones.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/listadoinscripciones/listadoinscripciones.component.ts ***!
    \************************************************************************/

  /*! exports provided: ListadoinscripcionesComponent */

  /***/
  function srcAppListadoinscripcionesListadoinscripcionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadoinscripcionesComponent", function () {
      return ListadoinscripcionesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListadoinscripcionesComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var inscripcion_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", inscripcion_r33.clienteobtenido.nombre, " ", inscripcion_r33.clienteobtenido.apellido, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, inscripcion_r33.fecha));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, inscripcion_r33.fechafinal));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", inscripcion_r33.clienteobtenido.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ListadoinscripcionesComponent =
    /*#__PURE__*/
    function () {
      function ListadoinscripcionesComponent(db) {
        _classCallCheck(this, ListadoinscripcionesComponent);

        this.db = db;
        this.inscripciones = [];
      }

      _createClass(ListadoinscripcionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.inscripciones.length = 0;
          this.db.collection('inscripciones').get().subscribe(function (resultado) {
            resultado.forEach(function (inscripcion) {
              var inscripcionobtenida = inscripcion.data();
              inscripcionobtenida.id = inscripcion.id;

              _this9.db.doc(inscripcion.data().cliente.path).get().subscribe(function (cliente) {
                inscripcionobtenida.clienteobtenido = cliente.data();
                inscripcionobtenida.fecha = new Date(inscripcionobtenida.fecha.seconds * 1000);
                inscripcionobtenida.fechafinal = new Date(inscripcionobtenida.fechafinal.seconds * 1000);

                _this9.inscripciones.push(inscripcionobtenida);
              });
            });
          });
        }
      }]);

      return ListadoinscripcionesComponent;
    }();

    ListadoinscripcionesComponent.ɵfac = function ListadoinscripcionesComponent_Factory(t) {
      return new (t || ListadoinscripcionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    ListadoinscripcionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadoinscripcionesComponent,
      selectors: [["app-listadoinscripciones"]],
      decls: 14,
      vars: 1,
      consts: [[1, "container"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["width", "50px", "height", "50px", "alt", "", 3, "src"]],
      template: function ListadoinscripcionesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fecha Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fecha Final");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Foto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListadoinscripcionesComponent_tr_13_Template, 11, 9, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inscripciones);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhZG9pbnNjcmlwY2lvbmVzL2xpc3RhZG9pbnNjcmlwY2lvbmVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoinscripcionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listadoinscripciones',
          templateUrl: './listadoinscripciones.component.html',
          styleUrls: ['./listadoinscripciones.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_10_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo requerido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_10_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correo invalido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_10_span_1_Template, 2, 0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_10_span_2_Template, 2, 0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.formulariologin.controls["email"].errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.formulariologin.controls["email"].errors.email);
      }
    }

    function LoginComponent_div_15_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\xF1a requerida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_15_span_1_Template, 2, 0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.formulariologin.controls["password"].errors.required);
      }
    }

    function LoginComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r41.textoerror, " ");
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(creadordeformulario, auth, spinner) {
        _classCallCheck(this, LoginComponent);

        this.creadordeformulario = creadordeformulario;
        this.auth = auth;
        this.spinner = spinner;
        this.datoscorrecto = true;
        this.textoerror = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formulariologin = this.creadordeformulario.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "ingresar",
        value: function ingresar() {
          var _this10 = this;

          if (this.formulariologin.valid) {
            this.spinner.show();
            this.datoscorrecto = true;
            this.auth.signInWithEmailAndPassword(this.formulariologin.value.email, this.formulariologin.value.password).then(function (usuario) {
              console.log(usuario);

              _this10.spinner.hide();
            })["catch"](function (error) {
              _this10.datoscorrecto = false;
              _this10.textoerror = error.message;

              _this10.spinner.hide();
            });
          } else {
            this.datoscorrecto = false;
            this.textoerror = 'Por favor revisa que los datos sean correctos...';
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 22,
      vars: 6,
      consts: [[1, "container"], [1, "text-center"], ["src", "assets/login.png", "alt", ""], [3, "formGroup"], [1, "form-group"], ["for", "email"], ["formControlName", "email", "type", "email", "id", "email", "aria-describedby", "emailHelp", "placeholder", "Ingrese el correo", 1, "form-control"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["formControlName", "password", "type", "password", "id", "password", "placeholder", "Ingrese la contrase\xF1a", 1, "form-control", 3, "keyUp.enter"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#64fa00", "type", "cube-transition", 3, "fullScreen"], [2, "color", "white"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bienvenido, por favor ingrese sus datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Correo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyUp.enter", function LoginComponent_Template_input_keyUp_enter_14_listener() {
            return ctx.ingresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
            return ctx.ingresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-spinner", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Ingresando al sistema... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulariologin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariologin.controls["email"].invalid && ctx.formulariologin.controls["email"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formulariologin.controls["password"].invalid && ctx.formulariologin.controls["password"].dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formulariologin.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.datoscorrecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/clientes.ts":
  /*!************************************!*\
    !*** ./src/app/models/clientes.ts ***!
    \************************************/

  /*! exports provided: Cliente */

  /***/
  function srcAppModelsClientesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cliente", function () {
      return Cliente;
    });

    var Cliente = function Cliente() {
      _classCallCheck(this, Cliente);
    };
    /***/

  },

  /***/
  "./src/app/models/inscripcion.ts":
  /*!***************************************!*\
    !*** ./src/app/models/inscripcion.ts ***!
    \***************************************/

  /*! exports provided: Inscripcion */

  /***/
  function srcAppModelsInscripcionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Inscripcion", function () {
      return Inscripcion;
    });

    var Inscripcion =
    /*#__PURE__*/
    function () {
      function Inscripcion() {
        _classCallCheck(this, Inscripcion);

        this.fecha = null;
        this.fechafinal = null;
        this.cliente = this.cliente;
        this.precios = this.precios;
        this.subtotal = this.subtotal;
        this.IVA = this.IVA;
        this.total = this.total;
      }

      _createClass(Inscripcion, [{
        key: "validar",
        value: function validar() {
          var respuesta = {
            esvalida: false,
            mensaje: ''
          };

          if (this.cliente == null || this.cliente == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'Por favor seleccione un cliente';
            return respuesta;
          }

          if (this.precios == null || this.precios == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'No ha seleccionado un precio';
            return respuesta;
          }

          if (this.fecha == null || this.fecha == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'No tiene fecha de inicio';
            return respuesta;
          }

          if (this.fechafinal == null || this.fechafinal == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'No tiene fecha de fin';
            return respuesta;
          }

          if (this.subtotal <= 0 || this.subtotal == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'No se ha podido calcular el subtotal';
            return respuesta;
          }

          if (this.IVA <= 0 || this.IVA == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'No se ha podido calcular el IVA';
            return respuesta;
          }

          if (this.total <= 0 || this.total == undefined) {
            respuesta.esvalida = false;
            respuesta.mensaje = 'No se ha podido calcular el total';
            return respuesta;
          }

          respuesta.esvalida = true;
          return respuesta;
        }
      }]);

      return Inscripcion;
    }();
    /***/

  },

  /***/
  "./src/app/models/precio.ts":
  /*!**********************************!*\
    !*** ./src/app/models/precio.ts ***!
    \**********************************/

  /*! exports provided: Precio */

  /***/
  function srcAppModelsPrecioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Precio", function () {
      return Precio;
    });

    var Precio = function Precio() {
      _classCallCheck(this, Precio);
    };
    /***/

  },

  /***/
  "./src/app/precios/precios.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/precios/precios.component.ts ***!
    \**********************************************/

  /*! exports provided: PreciosComponent */

  /***/
  function srcAppPreciosPreciosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreciosComponent", function () {
      return PreciosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/mensajes.service */
    "./src/app/services/mensajes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreciosComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreciosComponent_li_6_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var precio_r22 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.editarprecio(precio_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var precio_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", precio_r22.nombre, " id:", precio_r22.id, "");
      }
    }

    function PreciosComponent_button_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreciosComponent_button_37_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.agregar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Agregar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r20.formularioprecios.invalid);
      }
    }

    function PreciosComponent_button_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreciosComponent_button_38_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.editar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r21.formularioprecios.invalid);
      }
    }

    var PreciosComponent =
    /*#__PURE__*/
    function () {
      function PreciosComponent(fb, db, msg) {
        _classCallCheck(this, PreciosComponent);

        this.fb = fb;
        this.db = db;
        this.msg = msg;
        this.precios = new Array();
        this.eseditar = false;
        this.id = '';
      }

      _createClass(PreciosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formularioprecios = this.fb.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            costo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            duracion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoduracion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.mostrarprecio();
        }
      }, {
        key: "mostrarprecio",
        value: function mostrarprecio() {
          var _this11 = this;

          this.db.collection('precios').get().subscribe(function (resultado) {
            _this11.precios.length = 0;
            resultado.docs.forEach(function (dato) {
              var precio = dato.data();
              precio.id = dato.id;
              precio.ref = dato.ref;

              _this11.precios.push(precio);
            });
          });
        }
      }, {
        key: "agregar",
        value: function agregar() {
          var _this12 = this;

          this.db.collection('precios').add(this.formularioprecios.value).then(function () {
            _this12.msg.mensajecorrecto('Agregado', 'Se agregó correctamente');

            _this12.formularioprecios.reset();
          })["catch"](function () {
            _this12.msg.mensajeerror('Error', 'Ha ocurrido un error');
          });
          this.mostrarprecio();
        }
      }, {
        key: "editarprecio",
        value: function editarprecio(precio) {
          this.eseditar = true;
          this.formularioprecios.setValue({
            nombre: precio.nombre,
            costo: precio.costo,
            duracion: precio.duracion,
            tipoduracion: precio.tipoduracion
          });
          this.id = precio.id;
        }
      }, {
        key: "editar",
        value: function editar() {
          var _this13 = this;

          this.db.doc('precios/' + this.id).update(this.formularioprecios.value).then(function () {
            _this13.msg.mensajecorrecto('Editado', 'Se editó correctamente');

            _this13.formularioprecios.reset();

            _this13.eseditar = false;
          })["catch"](function () {
            _this13.msg.mensajeerror('Error', 'Ha ocurrido un error');
          });
          this.mostrarprecio();
        }
      }]);

      return PreciosComponent;
    }();

    PreciosComponent.ɵfac = function PreciosComponent_Factory(t) {
      return new (t || PreciosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]));
    };

    PreciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreciosComponent,
      selectors: [["app-precios"]],
      decls: 39,
      vars: 4,
      consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-sm-8"], [3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [3, "formGroup"], [1, "form-group"], ["for", ""], ["formControlName", "nombre", "type", "text", "name", "", 1, "form-control"], ["formControlName", "costo", "type", "number", "name", "", 1, "form-control"], ["formControlName", "duracion", "type", "number", "name", "", 1, "form-control"], ["formControlName", "tipoduracion", "name", "", 1, "form-control"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], [3, "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "disabled", "click"]],
      template: function PreciosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Precios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreciosComponent_li_6_Template, 2, 2, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Agregar/Editar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Costo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tipo duraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "D\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Semana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Quincena");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PreciosComponent_button_37_Template, 2, 1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PreciosComponent_button_38_Template, 2, 1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.precios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioprecios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.eseditar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eseditar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZWNpb3MvcHJlY2lvcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreciosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-precios',
          templateUrl: './precios.component.html',
          styleUrls: ['./precios.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seleccionarcliente/seleccionarcliente.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/seleccionarcliente/seleccionarcliente.component.ts ***!
    \********************************************************************/

  /*! exports provided: SeleccionarclienteComponent */

  /***/
  function srcAppSeleccionarclienteSeleccionarclienteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeleccionarclienteComponent", function () {
      return SeleccionarclienteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SeleccionarclienteComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cliente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SeleccionarclienteComponent_div_1_Template_input_input_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.buscarcliente($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SeleccionarclienteComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cliente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SeleccionarclienteComponent_div_2_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.nombre = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeleccionarclienteComponent_div_2_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.cancelarcliente();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.nombre);
      }
    }

    function SeleccionarclienteComponent_div_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeleccionarclienteComponent_div_4_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var cliente_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.seleccionarcliente(cliente_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cliente_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", cliente_r53.nombre, " ", cliente_r53.apellido, " ");
      }
    }

    function SeleccionarclienteComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeleccionarclienteComponent_div_4_a_1_Template, 2, 2, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cliente_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cliente_r53.visible);
      }
    }

    var SeleccionarclienteComponent =
    /*#__PURE__*/
    function () {
      function SeleccionarclienteComponent(bd) {
        _classCallCheck(this, SeleccionarclienteComponent);

        this.bd = bd;
        this.clientes = new Array();
        this.seleccionocliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelocliente = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SeleccionarclienteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.bd.collection('clientes').get().subscribe(function (resultado) {
            _this14.clientes.length = 0;
            resultado.docs.forEach(function (item) {
              var cliente = item.data();
              cliente.id = item.id;
              cliente.ref = item.ref;
              cliente.visible = false;

              _this14.clientes.push(cliente);
            });
          });
        }
      }, {
        key: "buscarcliente",
        value: function buscarcliente(nombre) {
          this.clientes.forEach(function (cliente) {
            if (cliente.nombre.toLowerCase().includes(nombre.toLowerCase())) {
              cliente.visible = true;
            } else {
              cliente.visible = false;
            }
          });
        }
      }, {
        key: "seleccionarcliente",
        value: function seleccionarcliente(cliente) {
          this.nombre = cliente.nombre + ' ' + cliente.apellido;
          this.clientes.forEach(function (cliente) {
            cliente.visible = false;
          });
          this.seleccionocliente.emit(cliente);
        }
      }, {
        key: "cancelarcliente",
        value: function cancelarcliente() {
          this.nombre = undefined;
          this.cancelocliente.emit();
        }
      }]);

      return SeleccionarclienteComponent;
    }();

    SeleccionarclienteComponent.ɵfac = function SeleccionarclienteComponent_Factory(t) {
      return new (t || SeleccionarclienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    SeleccionarclienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SeleccionarclienteComponent,
      selectors: [["app-seleccionarcliente"]],
      inputs: {
        nombre: "nombre"
      },
      outputs: {
        seleccionocliente: "seleccionocliente",
        cancelocliente: "cancelocliente"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "clientes"], ["class", "form-group", 4, "ngIf"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "Busque un cliente...", 1, "form-control", 3, "input"], [1, "row"], [1, "col-sm-9"], ["disabled", "", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-3"], [1, "btn", "btn-danger", 3, "click"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "click"]],
      template: function SeleccionarclienteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeleccionarclienteComponent_div_1_Template, 4, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SeleccionarclienteComponent_div_2_Template, 9, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SeleccionarclienteComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjY2lvbmFyY2xpZW50ZS9zZWxlY2Npb25hcmNsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeleccionarclienteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-seleccionarcliente',
          templateUrl: './seleccionarcliente.component.html',
          styleUrls: ['./seleccionarcliente.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, {
        nombre: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['nombre']
        }],
        seleccionocliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['seleccionocliente']
        }],
        cancelocliente: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['cancelocliente']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/mensajes.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/mensajes.service.ts ***!
    \**********************************************/

  /*! exports provided: MensajesService */

  /***/
  function srcAppServicesMensajesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajesService", function () {
      return MensajesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);

    var MensajesService =
    /*#__PURE__*/
    function () {
      function MensajesService() {
        _classCallCheck(this, MensajesService);
      }

      _createClass(MensajesService, [{
        key: "mensajeerror",
        value: function mensajeerror(titulo, mensaje) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: titulo,
            text: mensaje,
            icon: "error"
          });
        }
      }, {
        key: "mensajecorrecto",
        value: function mensajecorrecto(titulo, mensaje) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: titulo,
            text: mensaje,
            icon: "success"
          });
        }
      }, {
        key: "mensajeadvertencia",
        value: function mensajeadvertencia(titulo, mensaje) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: titulo,
            text: mensaje,
            icon: "warning"
          });
        }
      }]);

      return MensajesService;
    }();

    MensajesService.ɵfac = function MensajesService_Factory(t) {
      return new (t || MensajesService)();
    };

    MensajesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MensajesService,
      factory: MensajesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MensajesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      // firebase:{
      //   apiKey: "AIzaSyBmtnTugLqwhqGEgxOTvtLoeUavnlmI-ls",
      //   authDomain: "gym-proyecto.firebaseapp.com",
      //   databaseURL: "https://gym-proyecto.firebaseio.com",
      //   projectId: "gym-proyecto",
      //   storageBucket: "gym-proyecto.appspot.com",
      //   messagingSenderId: "994180137785",
      //   appId: "1:994180137785:web:fc68d9287a170a5b14dee8",
      //   measurementId: "G-YBQZ6V06EP"
      // }
      firebaseConfig: {
        apiKey: "AIzaSyBmtnTugLqwhqGEgxOTvtLoeUavnlmI-ls",
        authDomain: "gym-proyecto.firebaseapp.com",
        databaseURL: "https://gym-proyecto.firebaseio.com",
        projectId: "gym-proyecto",
        storageBucket: "gym-proyecto.appspot.com",
        messagingSenderId: "994180137785",
        appId: "1:994180137785:web:fc68d9287a170a5b14dee8",
        measurementId: "G-YBQZ6V06EP"
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Mauricio\Desktop\Udemy\proyectogym\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map