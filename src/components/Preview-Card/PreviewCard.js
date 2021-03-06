import React from 'react';
import defaultPhotoGolden from '../../images/Viejas2.png';
import defaultImage from './defaultImage';

class PreviewCard extends React.Component {
  render() {
    return (
      <section className="section__card preview__section">
        <div className="preview__container">
          <button
            className="button__reset"
            type="submit"
            onClick={this.props.resetAll}
            value="Reset form"
          >
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <article
            className={`preview__card palette${this.props.objectInfo.palette}`}
          >
            <div className="title">
              <h2 className="title__name">
                {this.props.objectInfo.name || 'Nombre Apellidos'}
              </h2>
              <h3 className="title__position">
                {this.props.objectInfo.job || 'Front-end developer'}
              </h3>
            </div>
            <div className="profile__image">
              <div
                className="profile__avatar"
                style={{
                  backgroundImage: `url(${
                    this.props.isGolden !== false &&
                    this.props.avatar === defaultImage
                      ? defaultPhotoGolden
                      : this.props.avatar
                  }`,
                }}
              ></div>
            </div>
            <div>
              <ul className="social__links">
                <li>
                  <a
                    className={`social__button phone__icon ${
                      this.props.objectInfo.phone === '' ? 'opacity' : ''
                    }`}
                    href={`tel:${this.props.objectInfo.phone}`}
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    className={`social__button buttonMail ${
                      this.props.objectInfo.email === '' ? 'opacity' : ''
                    }`}
                    href={`mailto:${this.props.objectInfo.email}`}
                  >
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    className={`social__button linkedin ${
                      this.props.objectInfo.linkedin === '' ? 'opacity' : ''
                    }`}
                    href={`https://www.linkedin.com/${this.props.objectInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    className={`social__button github ${
                      this.props.objectInfo.github === '' ? 'opacity' : ''
                    }`}
                    href={`https://github.com/${this.props.objectInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default PreviewCard;
