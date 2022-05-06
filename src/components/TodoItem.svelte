<script lang="ts">
	import { deleteTodo } from '../stores/todoSlice';
	import { slide } from 'svelte/transition';
	export let done: boolean;
	export let name: string;
	export let id: number;
</script>

<div class="w-full px-3 py-1 flex items-center justify-between gap-1" transition:slide>
	<input
		class="form-checkbox mb-0.5 focus:outline-white text-teal-500 cursor-pointer"
		type="checkbox"
		bind:checked={done}
	/>
	<p
		class={`text-sm text-slate-800 tracking-wide mb-1 flex-1 ${
			done && 'line-through decoration-teal-500 decoration-2 text-slate-400'
		}`}
	>
		{name}
	</p>
	<button class="text-gray-400 hover:text-red-500" on:click={() => deleteTodo(id)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-trash3"
			viewBox="0 0 16 16"
		>
			<path
				d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
			/>
		</svg>
	</button>
</div>
