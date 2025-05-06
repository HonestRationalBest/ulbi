import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { Portal } from "@/shared/ui";

export const Navigation: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t("navigation.main")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navigation.about")}</Link>
        </li>
        <li>
          <button onClick={() => setIsOpenModal(true)}>
            {t("navigation.login")}
          </button>
        </li>
        <Portal>
          {/*eslint-disable-next-line i18next/no-literal-string */}
          <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            Modal window
          </Modal>
        </Portal>
      </ul>
    </nav>
  );
};
