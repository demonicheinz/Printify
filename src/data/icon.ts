import type { IconType } from "react-icons";

// Lucide Icons (LU)
import { LuCheck, LuEye, LuEyeClosed, LuLink } from "react-icons/lu";

// IonIcons4 (IO)
import { IoIosMenu, IoMdSearch, IoIosMail } from "react-icons/io";

// IonIcons5 (IO5)
import {
  IoCheckmarkCircleOutline,
  IoWarning,
  IoHelpCircle,
  IoLocationSharp,
  IoClipboard,
  IoCalendarOutline,
} from "react-icons/io5";

// Phosphor Icons (PI)
import { PiHouseDuotone } from "react-icons/pi";

// Font Awesome (FA)
import { FaGlobeAsia } from "react-icons/fa";

// Font Awesome (FA6)
import {
  FaChevronUp,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
  FaArrowRight,
  FaArrowLeft,
  FaXmark,
  FaArrowsRotate,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

// Material Design Icons (MD)
import {
  MdPhone,
  MdAccessTime,
  MdWarning,
  MdError,
  MdShoppingCart,
  MdPerson,
  MdSettings,
  MdLogout,
  MdDescription,
  MdImage,
  MdUpload,
  MdDownload,
  MdPrint,
  MdCreditCard,
  MdEdit,
  MdDelete,
  MdContentCopy,
  MdShare,
  MdStar,
  MdFavorite,
  MdAdd,
  MdRemove,
  MdGroups,
  MdLightMode,
  MdDarkMode,
  MdFormatQuote,
  MdBolt,
  MdEmojiEvents,
} from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  // Navigasi & UI
  chevronUp: FaChevronUp,
  chevronDown: FaChevronDown,
  chevronRight: FaChevronRight,
  chevronLeft: FaChevronLeft,
  arrowRight: FaArrowRight,
  arrowLeft: FaArrowLeft,
  close: FaXmark,
  menu: IoIosMenu,
  search: IoMdSearch,

  // Status & Feedback
  check: LuCheck,
  refresh: FaArrowsRotate,
  info: IoWarning,
  warning: MdWarning,
  error: MdError,
  success: IoCheckmarkCircleOutline,
  helpCircle: IoHelpCircle,

  // Sosial Media & Kontak
  mail: FaRegEnvelope,
  email: IoIosMail,
  phone: MdPhone,
  mapPin: IoLocationSharp,
  clock: MdAccessTime,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  discord: FaDiscord,
  github: FaGithub,
  linkedin: FaLinkedin,

  // Navigasi Aplikasi
  home: PiHouseDuotone,
  user: MdPerson,
  settings: MdSettings,
  logOut: MdLogout,

  // Fitur Printing
  fileText: MdDescription,
  image: MdImage,
  upload: MdUpload,
  download: MdDownload,
  printer: MdPrint,

  // E-commerce
  shoppingCart: MdShoppingCart,
  creditCard: MdCreditCard,
  calendar: IoCalendarOutline,

  // Aksi
  edit: MdEdit,
  trash: MdDelete,
  eye: LuEye,
  eyeOff: LuEyeClosed,
  copy: MdContentCopy,
  share: MdShare,
  plus: MdAdd,
  minus: MdRemove,

  // Tema
  sun: MdLightMode,
  moon: MdDarkMode,

  // Lainnya
  star: MdStar,
  heart: MdFavorite,
  globe: FaGlobeAsia,
  openLink: LuLink,
  clipboard: IoClipboard,
  users: MdGroups,
  quote: MdFormatQuote,
  zap: MdBolt,
  award: MdEmojiEvents,
};

// Tipe untuk komponen Icon
export type IconName = keyof typeof iconLibrary;
