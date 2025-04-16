<script lang="ts">
  interface Props {
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    class?: string;
    children?: () => any;
  }

  let {
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    class: class_e = "",
    children = () => "",
  }: Props = $props();

  const base =
    "w-full rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "btn preset-filled-primary-500",
    secondary: "btn preset-filled-secondary-500",
    ghost: "btn hover:preset-tonal",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
</script>

<button
  class={`${base} ${variants[variant]} ${sizes[size]} ${class_e}`}
  {type}
  {disabled}
>
  {@render children()}
</button>
