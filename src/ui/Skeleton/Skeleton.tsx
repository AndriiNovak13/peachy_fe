import { Skeleton as ChakraSkeleton, SkeletonProps } from "@chakra-ui/react";

const Skeleton = ({ ...props }: SkeletonProps) => {
  return (
    <ChakraSkeleton
      borderRadius="12px"
      startColor="#F4F5F7"
      endColor="#E9EBF0"
      {...props}
    />
  );
};

export default Skeleton;
