import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../../styles/Rules.module.css'
import Image from "next/image";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
    const modalContent = show ? (
      <div className={styles.modalContainer}>
        <div className={styles.modalBox}>
          <div className={styles.modalHeader}>
            <h1>Rules</h1>
            <button onClick={handleCloseClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
            </button>
           </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="336" height="330"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF" stop-opacity=".097"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(233 92)"><ellipse cx="51.5" cy="50.172" fill="#B1B4C5" rx="51.5" ry="50.172"/><ellipse cx="51.5" cy="50.172" fill="url(#a)" rx="51.5" ry="50.172"/><g transform="translate(11.965 11.897)"><ellipse cx="39.535" cy="39.31" fill="#E1E4ED" rx="39.535" ry="39.31"/><path fill="#8A90AC" fill-rule="nonzero" d="M54.896 29.133a2.078 2.078 0 00-.874-.14c-.405.028-.732.192-.925.46-1.14 1.595-2.074 4.607-2.827 7.028-.345 1.119-.81 2.616-1.145 3.327-.35-1.991.045-9.287.199-12.096l.002-.046c.107-1.952.121-2.294.098-2.444-.17-1.07-.599-1.774-1.278-2.088-.686-.32-1.577-.178-2.537.399-.481.29-.614 1.288-1.028 5.81l-.001.02c-.228 2.485-.751 8.206-1.395 9.159-.727-1.333-1.728-8.907-2.16-12.185-.301-2.296-.477-3.614-.596-4.012-.249-.834-1.3-1.544-2.34-1.583-.867-.043-1.578.397-1.917 1.162-.635.705-.41 3.045.29 8.586.335 2.637 1.024 8.084.59 8.695-.865-.094-2.35-3.506-4.414-10.144-.58-1.86-.759-2.418-.937-2.663-.35-.853-1.542-1.51-2.61-1.436-.092.006-.18.018-.268.035-.56.11-1.836.625-1.564 2.998.754 3.29 1.573 5.705 2.367 8.05l.016.046c.476 1.404.925 2.731 1.343 4.204.984 3.476.601 5.633.596 5.658-.032.222-.1.357-.204.405a.396.396 0 01-.139.031c-.311.022-.78-.185-1.02-.319-.551-1.051-3.293-6.062-5.778-6.757l-.09-.026-.09.008c-.911.086-1.581.43-1.991 1.023-.649.937-.38 2.13-.315 2.369l.036.086c.02.036 2.013 3.664 2.322 5.352.266 1.447 1.642 3.015 2.748 4.275l.046.051c.36.413.672.769.917 1.099 3.21 3.343 8.287 6.156 8.328 6.179.633.466.985.917 1.023 1.306a.566.566 0 01-.114.41l-.11.116.702.681 13.392-.94.571-2.613c1.766-7.38 1.397-13.672 1.391-13.714.007-.232.502-2.47.9-4.28l.011-.046c.794-3.603 1.78-8.087 1.97-9.793.082-.73-.386-1.399-1.19-1.703z"/></g></g><g transform="translate(0 92)"><ellipse cx="51.5" cy="52.5" fill="#B1B4C5" rx="51.5" ry="52.5"/><ellipse cx="51.5" cy="50.172" fill="url(#a)" rx="51.5" ry="50.172"/><g transform="translate(11.965 11.897)"><ellipse cx="39.535" cy="39.31" fill="#E1E4ED" rx="39.535" ry="39.31"/><path fill="#8A90AC" fill-rule="nonzero" d="M56.968 42.321l-.613-.61c-1.465-1.456-3.86-1.774-5.647-.752l-3.82 2.17.797-17.382a2.654 2.654 0 00-2.659-2.644c-.317 0-.621.056-.904.158l.095-.933c0-1.474-1.211-2.673-2.698-2.673-1.375 0-2.528 1.025-2.674 2.34l-2.45 14.721c-.032.2-.381.18-.418.054l-2.895-11.802a2.598 2.598 0 00-2.487-1.865c-.794 0-1.533.356-2.027.975a2.546 2.546 0 00-.49 2.186l.563 2.376a2.376 2.376 0 00-.949.12 2.445 2.445 0 00-1.652 2.708l1.703 9.739c0 3.842.678 6.685 1.246 8.392.324.974.488 1.999.488 3.045 0 .911-.127 1.818-.38 2.693l-1.32 4.599a.863.863 0 00.833 1.098h15.607a.866.866 0 00.823-1.135c-.009-.022-.734-2.248-.048-5.276.87-.703 3.917-3.166 5.011-4.16 1.809-1.642 6.764-6.716 6.974-6.932a.858.858 0 00-.009-1.21z"/></g></g><g transform="translate(117)"><ellipse cx="51.5" cy="52.5" fill="#B1B4C5" rx="51.5" ry="52.5"/><ellipse cx="51.5" cy="50.172" fill="url(#a)" rx="51.5" ry="50.172"/><g transform="translate(11.965 11.897)"><ellipse cx="39.535" cy="39.31" fill="#E1E4ED" rx="39.535" ry="39.31"/><path fill="#8A90AC" fill-rule="nonzero" d="M29.214 38.974l4.271-5.97c-1.775-.295-5.035-.36-7.705 2.295-4.208 4.184-5.913 13.225-6.268 15.413l10.696 10.636c1.926-.164 10.452-1.296 18.667-9.464.087-.177 2.088-1.647.452-3.274-.78-.776-2.073-.762-2.871.032a1.01 1.01 0 01-1.436.014.996.996 0 01.014-1.428l2.903-2.886c1.476-1.467.085-3.941-1.974-3.347l-2.377 2.023a1.022 1.022 0 01-1.435-.099c-.369-.424-.29-1.067.13-1.429 8.301-7.242 7.09-6.37 12.43-11.347 1.996-1.652-.515-4.575-2.481-2.901L39.31 38.794a1.01 1.01 0 01-1.322-.014c-.427-.367-.437-.895-.158-1.312l9.012-13.931c1.318-1.774-1.275-3.744-2.663-1.956l-13.325 18.53a1.009 1.009 0 01-1.41.246.976.976 0 01-.23-1.383z"/></g></g><g transform="translate(187 225)"><ellipse cx="51.5" cy="52.5" fill="#B1B4C5" rx="51.5" ry="52.5"/><ellipse cx="51.5" cy="50.172" fill="url(#a)" rx="51.5" ry="50.172"/><g transform="translate(11.965 11.897)"><ellipse cx="39.535" cy="39.31" fill="#E1E4ED" rx="39.535" ry="39.31"/><path fill="#8A90AC" fill-rule="nonzero" d="M54.85 33.665c-.455-5.744-6.914-5.157-6.914-5.157-2.726-4.8-6.984-1.323-6.984-1.323-3.272-4.704-7.374-.345-7.374-.345-7.072-.762-6.798 5.013-6.798 5.013-.167 1.836.996 7.515.996 7.515-1.049-3.273-3.325-.556-3.325-.556-2.797 4.312-.691 6.673-.691 6.673 3.785 4.431 11.854 9.75 11.854 9.75 2.92 1.671 1.685 3.161 1.685 3.161l17.67-2.916.407-3.346c2.686-8.114-.525-18.47-.525-18.47z"/></g></g><g transform="translate(46 225)"><ellipse cx="51.5" cy="52.5" fill="#B1B4C5" rx="51.5" ry="52.5"/><ellipse cx="51.5" cy="50.172" fill="url(#a)" rx="51.5" ry="50.172"/><g transform="translate(11.965 11.897)"><ellipse cx="39.535" cy="39.31" fill="#E1E4ED" rx="39.535" ry="39.31"/><path fill="#8A90AC" fill-rule="nonzero" d="M52.31 21.516c2.294-1.419 4.492-1.726 6.19-.865 3.806 1.93 3.255 9.113 1.698 12.226-.88 1.757-2.438 3.04-4.637 3.821-.852 2.695-2.048 5.011-3.575 6.927a5.615 5.615 0 003.607 1.304h.064l2.146-2.116a1.397 1.397 0 011.956 0 1.35 1.35 0 010 1.929l-.19.187H60c.764 0 1.383.61 1.383 1.364 0 .753-.62 1.363-1.383 1.363h-.432l.19.188a1.35 1.35 0 010 1.928c-.27.267-.624.4-.978.4s-.708-.133-.978-.4l-2.146-2.116h-.064a8.404 8.404 0 01-5.487-2.027 15.99 15.99 0 01-.913.77c-2.65 2.07-5.892 3.275-9.68 3.604.478 1.435.571 2.99.244 4.507l-.013.063 1.651 2.598a1.416 1.416 0 01-.418 1.944 1.387 1.387 0 01-1.924-.423l-.146-.23-.093.43a1.396 1.396 0 01-1.656 1.075 1.407 1.407 0 01-1.065-1.674l.093-.43-.228.148c-.647.42-1.508.231-1.924-.423a1.416 1.416 0 01.419-1.944l2.57-1.67.014-.063a5.721 5.721 0 00-.507-3.827 31.796 31.796 0 01-3.407-.283c-3.328-.45-5.215 1.016-5.714 1.476-3.92 3.613-4.679 9.998-4.686 10.062a1.403 1.403 0 01-1.391 1.247 1.4 1.4 0 01-1.158-.615c-.063-.093-1.538-2.295-2.185-5.403-.879-4.22.169-8.093 3.03-11.197a14.707 14.707 0 016.21-3.985l-.292.076a5.682 5.682 0 00-2.397-.53h-.064l-2.154 2.116c-.271.267-.627.4-.982.4s-.71-.133-.982-.4a1.347 1.347 0 010-1.928l.191-.188h-.433c-.767 0-1.389-.61-1.389-1.363 0-.754.622-1.364 1.389-1.364h.433l-.19-.188a1.347 1.347 0 010-1.928 1.406 1.406 0 011.963 0l2.154 2.116h.064c2.345 0 4.568.96 6.152 2.643l-.154-.158a16.297 16.297 0 013.802.067c3.513.475 6.386-.013 8.604-1.456a8.658 8.658 0 01-1.924-5.463v-.065l-2.124-2.19a1.442 1.442 0 010-1.995 1.34 1.34 0 011.936 0l.187.194v-.44c0-.78.613-1.411 1.37-1.411.755 0 1.368.631 1.368 1.41v.441l.188-.194a1.34 1.34 0 011.935 0c.815.84.227 1.762 0 1.996l-2.123 2.189v.065c0 1.332.45 2.606 1.259 3.618 1.002-1.198 1.79-2.703 2.36-4.514-.417-1.153-1.065-3.882.589-6.978.866-1.622 2.531-3.326 4.345-4.448z"/></g></g><g fill="#B1B4C5" transform="rotate(-40 152.162 -62.778)"><rect width="32.692" height="2.667" y="6.667" rx="1.333"/><path d="M27.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M25.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><g fill="#B1B4C5" transform="scale(1 -1) rotate(-40 11.858 -344.091)"><rect width="32.692" height="2.667" y="6.667" rx="1.333"/><path d="M27.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M25.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><g fill="#B1B4C5" transform="rotate(127 100.649 180.558)"><rect width="32.692" height="2.667" y="6.667" rx="1.333"/><path d="M27.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M25.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><g fill="#B1B4C5" transform="matrix(-1 0 0 1 186 297)"><rect width="32.692" height="2.667" y="6.667" rx="1.333"/><path d="M27.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M25.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><g fill="#B1B4C5" transform="scale(-1 1) rotate(-53 195.597 178.185)"><rect width="32.692" height="2.667" y="6.667" rx="1.333"/><path d="M27.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M25.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><g fill="#B1B4C5"><g transform="matrix(-1 0 0 1 212 131)"><rect width="85" height="2.667" x=".692" y="6.667" rx="1.333"/><path d="M80.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M78.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><text font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="6" font-style="condensed" font-weight="bold" transform="translate(124 131)"><tspan x="36" y="14">BEATS</tspan></text><g transform="rotate(40 -169.505 247.617)"><rect width="85" height="2.667" x=".692" y="6.667" rx="1.333"/><path d="M80.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M78.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><text font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="6" font-style="condensed" font-weight="bold" transform="rotate(40 -161.263 250.617)"><tspan x="36" y="6">BEATS</tspan></text><g transform="rotate(-40 381.505 -93.07)"><rect width="85" height="2.667" x=".692" y="6.667" rx="1.333"/><path d="M80.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M78.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><text font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="6" font-style="condensed" font-weight="bold" transform="rotate(-40 373.263 -90.07)"><tspan x="36" y="6">BEATS</tspan></text><g><g transform="rotate(-110 176.867 31.934)"><rect width="85" height="2.667" x=".692" y="6.667" rx="1.333"/><path d="M80.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M78.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><text font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="6" font-style="condensed" font-weight="bold" transform="rotate(-110 174.766 34.934)"><tspan x="36" y="6">BEATS</tspan></text></g><g><g transform="rotate(110 35.133 118.76)"><rect width="85" height="2.667" x=".692" y="6.667" rx="1.333"/><path d="M80.437 1.343l5.617 5.819c.47.487.466 1.26-.009 1.744a1.187 1.187 0 01-1.7-.009l-5.617-5.819a1.249 1.249 0 01.009-1.744 1.187 1.187 0 011.7.009z"/><path d="M78.728 12.922l5.617-5.82a1.187 1.187 0 011.7-.008c.475.483.48 1.257.009 1.744l-5.617 5.82a1.187 1.187 0 01-1.7.008 1.249 1.249 0 01-.009-1.744z"/></g><text font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="6" font-style="condensed" font-weight="bold" transform="rotate(110 37.234 121.76)"><tspan x="36" y="6">BEATS</tspan></text></g></g><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="11" font-style="condensed" font-weight="bold"><tspan x="252" y="64">BEATS</tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="11" font-style="condensed" font-weight="bold"><tspan x="55" y="64">BEATS</tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="11" font-style="condensed" font-weight="bold"><tspan x="305" y="225">BEATS</tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="11" font-style="condensed" font-weight="bold"><tspan x="1" y="225">BEATS</tspan></text><text fill="#B1B4C5" font-family="BarlowSemiCondensed-Bold, Barlow Semi Condensed" font-size="11" font-style="condensed" font-weight="bold"><tspan x="154" y="328">BEATS</tspan></text></g></svg>
         </div>
       </div>
    ) : null;

    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };
  
  export default Modal;
