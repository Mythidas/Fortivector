<script lang="ts">
  interface Props {
    name: string;
    type: "password" | "email" | "text";
    placeholder: string;
    value?: any;
    required?: boolean;
    direction?: "vertical" | "horizontal";
  }

  let {
    name,
    type,
    placeholder,
    value = $bindable(),
    required = false,
    direction = "vertical",
  }: Props = $props();

  const base = "input";

  const directions = {
    vertical: "flex flex-col",
    horizontal: "flex",
  };
</script>

<div>
  <label class="label-text" for={name}>{name}</label>
  <input
    bind:value
    id={name}
    {type}
    {name}
    {placeholder}
    {required}
    class={`${base} ${directions[direction]}`}
  />
</div>
