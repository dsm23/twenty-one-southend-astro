import { useId, useRef, useState } from "react";
import type { FunctionComponent, HTMLAttributes } from "react";
import { Transition } from "@headlessui/react";
import Hamburger from "~/components/hamburger";
import useClickOutside from "~/hooks";
import cn from "~/utils";

type Props = HTMLAttributes<HTMLElement>;

const Navbar: FunctionComponent<Props> = ({ children, ...props }) => {
  const id = useId();
  const container = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prevOpen) => !prevOpen);

  const close = () => setOpen(false);

  useClickOutside(container, () => {
    close();
  });

  return (
    <nav {...props} aria-label="Primary" ref={container}>
      <div className="tw-flex tw-items-center tw-px-5">
        <a href="/" rel="home">
          <img
            width="350"
            height="100"
            src="https://twentyonesouthend.co.uk/wp-content/uploads/2021/11/Twenty_One_Southend_Logo-1.png"
            alt="Twenty One Southend"
            decoding="async"
            srcSet="https://twentyonesouthend.co.uk/wp-content/uploads/2021/11/Twenty_One_Southend_Logo-1.png 350w, https://twentyonesouthend.co.uk/wp-content/uploads/2021/11/Twenty_One_Southend_Logo-1-300x86.png 300w, https://twentyonesouthend.co.uk/wp-content/uploads/2021/11/Twenty_One_Southend_Logo-1-200x57.png 200w"
            sizes="(max-width: 350px) 100vw, 350px"
          />
        </a>
        <div className="tw-ml-auto tw-hidden md:tw-flex">{children}</div>

        <button
          className="tw-ml-auto tw-bg-[#0000000d] tw-p-1 md:tw-hidden"
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={id}
        >
          <Hamburger className="tw-size-6 tw-text-[#494c4f]" open={open} />
        </button>
      </div>
      <Transition show={open}>
        <div
          className={cn(
            "tw-grid tw-transition-[grid-template-rows] tw-duration-150 motion-reduce:tw-transition-none md:tw-hidden",
            "data-[enter]:data-[closed]:tw-grid-rows-[0fr] data-[enter]:tw-grid-rows-[1fr]",
            "data-[leave]:data-[closed]:tw-grid-rows-[0fr] data-[leave]:tw-grid-rows-[1fr]",
          )}
        >
          <div id={id} className="tw-overflow-hidden">
            {children}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
