import React from 'react';

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerChild = this.clickHandlerChild.bind(this);
    this.objectHandlerChild = this.objectHandlerChild.bind(this);
  }
  clickHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
  }

  objectHandlerChild(event) {
    this.props.objectHandler(event);
  }

  render() {
    return (
      <div className="box__design">
        <div
          className="design__menu  arrow"
          id={this.props.id}
          onClick={this.clickHandlerChild}
        >
          <div className="content__title">
            <i
              className={
                this.props.isGolden
                  ? 'fontawesome fas fa-drafting-compass'
                  : 'icon far fa-object-ungroup'
              }
            ></i>

            <h2 className="titleMenu golden_title">Diseña</h2>
          </div>
          <i
            className={`${
              this.props.isGolden ? 'fas fa-glasses' : 'fa fa-chevron-down'
            } ${this.props.isOpen === this.props.id ? '' : 'transform'}`}
          ></i>
        </div>
        <div
          className={`design__content  ${
            this.props.isOpen === this.props.id ? '' : 'hidden'
          }`}
        >
          <h3 className="design__content__title">colores</h3>
          <div className="design__content__form">
            <label htmlFor="color1">
              <div className="design__content__input">
                <input
                  className="inputDesign "
                  id="palette"
                  type="radio"
                  value="1"
                  name="palette"
                  checked={this.props.objectInfo.palette === '1' ? true : false}
                  onChange={this.objectHandlerChild}
                />
                <div className="design__boxColor">
                  <div className="boxColor1"></div>
                  <div className="boxColor2"></div>
                  <div className="boxColor3"></div>
                </div>
              </div>
            </label>
            <label htmlFor="color2">
              <div className="design__content__input">
                <input
                  className="inputDesign "
                  id="palette"
                  type="radio"
                  value="2"
                  name="palette"
                  onChange={this.objectHandlerChild}
                  checked={this.props.objectInfo.palette === '2' ? true : false}
                />
                <div className="design__boxColor">
                  <div className="boxColor4"></div>
                  <div className="boxColor5"></div>
                  <div className="boxColor6"></div>
                </div>
              </div>
            </label>
            <label htmlFor="color3">
              <div className="design__content__input">
                <input
                  className="inputDesign "
                  id="palette"
                  type="radio"
                  value="3"
                  name="palette"
                  onChange={this.objectHandlerChild}
                  checked={this.props.objectInfo.palette === '3' ? true : false}
                />
                <div className="design__boxColor">
                  <div className="boxColor7"></div>
                  <div className="boxColor8"></div>
                  <div className="boxColor9"></div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Design;
