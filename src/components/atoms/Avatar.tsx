import MuiAvatar from "@mui/material/Avatar";
import type { AvatarProps } from "@mui/material/Avatar";

const Avatar = ({ variant, src, alt, sizes, sx }: AvatarProps) => {
  return (
    <MuiAvatar variant={variant} src={src} alt={alt} sizes={sizes} sx={sx} />
  );
};

export default Avatar;
