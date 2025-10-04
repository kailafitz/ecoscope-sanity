import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { EcoscopeButtonProps } from "../../interfaces";
import PropTypes from "prop-types";

const EcoscopeButton: React.FC<EcoscopeButtonProps> = (props) => {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: props.variant ? props.variant! : "default",
        }),
        `${props.full ? "w-full" : "w-auto"} ${props.className} text-md md:text-sm`
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

EcoscopeButton.propTypes = {
  variant: PropTypes.oneOf(["secondary", "outline"]),
  full: PropTypes.bool,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default EcoscopeButton;
