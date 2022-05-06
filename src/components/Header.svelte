<script lang="ts">
	import { clearTodo } from '../stores/todoSlice';
</script>

<nav class="w-full flex justify-between items-center bg-teal-500 text-white shadow-md p-2">
	<h1 class="text-sm font-medium tracking-wide">
		{new Date().toLocaleString('en-us', { weekday: 'long' })}
	</h1>
	<button class="" on:click={() => clearTodo()}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			fill="currentColor"
			class="bi bi-list-nested"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
			/>
		</svg></button
	>
</nav>
