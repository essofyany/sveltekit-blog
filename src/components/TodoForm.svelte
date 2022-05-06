<script lang="ts">
	import { addTodo } from '../stores/todoSlice';
	let value: string;
	function handleSubmit() {
		console.log(value);
		if (value) {
			addTodo(value);
			value = '';
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="py-4 flex flex-col">
		<div class="w-full px-4 flex justify-center gap-2">
			<input
				class="h-8 w-full focus:outline-white focus:ring-0 focus:border-teal-500 placeholder:text-sm border-slate-400"
				type="text"
				placeholder="What do you want to do"
				bind:value
			/>
			<button class="bg-teal-500 text-white px-2 py-1" type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-plus-lg"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
					/>
				</svg>
			</button>
		</div>
	</div>
</form>
