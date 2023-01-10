// import { useEffect } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// // import Portal from "./portal";
// import img from "../Image/logo.png";
// const Modal = ({ className, onClose, maskClosable, closeable, visible }) => {
//   const onMaskClick = (e) => {
//     if (e.target == e.currentTarget) {
//       onClose(e);
//     }
//   };
//   const VISITED_BEFORE_DATE = localStorage.getItem("VisitCookie");
//   const VISITED_NOW_DATE = Math.floor(new Date().getDate());

//   useEffect(() => {
//     if (VISITED_BEFORE_DATE !== null) {
//       if (VISITED_BEFORE_DATE === VISITED_NOW_DATE) {
//         localStorage.removeItem("VisitCookie");
//         onClose(true);
//       }
//       if (VISITED_BEFORE_DATE !== VISITED_NOW_DATE) {
//         onClose(false);
//       }
//     }
//   }, [VISITED_BEFORE_DATE]);

//   const Dayclose = (e) => {
//     if (onClose) {
//       onClose(e);

//       const expiry = new Date();
//       const expiryDate = expiry.getDate() + 1;
//       localStorage.setItem("VisitCookie", expiryDate);
//     }
//   };

//   const close = (e) => {
//     if (onClose) {
//       onClose(e);
//     }
//   };
//   return (
//     <div elementId="modal-root">
//       <ModalOverlay visible={visible} />
//       <ModalWrapper
//         className={className}
//         onClick={maskClosable ? onMaskClick : null}
//         tabIndex="-1"
//         visible={visible}
//       >
//         <ModalInner tabIndex="0" className="modal-inner">
//           <ModalInner2>
//             <ImgStyle>
//               <a
//                 href=""
//                 rel="noopner noreferrer"
//                 target={"_blank"}
//                 cursor="pointer"
//               >
//                 <img
//                   src={img}
//                   style={{ width: "100%", height: "100%" }}
//                   alt=""
//                 />
//               </a>
//             </ImgStyle>
//             {closeable && (
//               <CloseStyle>
//                 <Close className="modal-close" onClick={Dayclose}>
//                   오늘 하루 닫기
//                 </Close>
//                 <Close className="modal-close" onClick={close}>
//                   닫기
//                 </Close>
//               </CloseStyle>
//             )}
//           </ModalInner2>
//         </ModalInner>
//       </ModalWrapper>
//     </div>
//   );
// };
// Modal.protoType = {
//   visible: PropTypes.bool,
// };
// const ModalInner2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// const ImgStyle = styled.div``;

// const CloseStyle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: #282828;
//   width: 210px;
//   padding: 15px;
//   border-radius: 0 0 15px 15px;
//   color: #ffffff;
// `;

// const Close = styled.span`
//   cursor: pointer;
// `;

// const ModalWrapper = styled.div`
//   box-sizing: border-box;
//   display: ${(props) => (props.visible ? "block" : "none")};
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 1000;
//   overflow: auto;
//   outline: 0;
// `;

// const ModalOverlay = styled.div`
//   box-sizing: border-box;
//   display: ${(props) => (props.visible ? "block" : "none")};
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.6);
//   z-index: 999;
// `;

// const ModalInner = styled.div`
//   box-sizing: border-box;
//   position: relative;
//   width: 360px;
//   max-width: 480px;
//   top: 50%;
//   transform: translateY(-50%);
//   margin: 0 auto;
//   padding: 40px 20px;
// `;

// export default Modal;
