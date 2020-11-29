<template>
	<div>
		<table v-show="libraries && libraries.length > 0" class="table-auto w-full base-array">
			<thead>
				<tr>
					<th class="w-1/5">Name</th>
					<th class="w-1/5">Genre</th>
					<th class="w-1/5">Release year</th>
					<th class="w-1/5">Type</th>
					<th class="w-1/5">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(Discography, index) in libraries" :key="index" :class="[(index%2==0) ? 'green-line' : 'white-line']">
					<td class="w-1/5 text-center">{{Discography.Name}}</td>
					<td class="w-1/5 text-center">{{Discography.Genre}}</td>
					<td class="w-1/5 text-center">{{Discography.Year}}</td>
					<td class="w-1/5 text-center">{{Discography.Type}}</td>
					<td class="w-1/5 text-center">
						<base-button
							v-show="title.length > 0 && title === 'libraries'"
							title="Add"
							:index="index"
							:class="[discographyPicked(Discography)]"
							@click="addOne(Discography)"
						/>
						<base-button
							title="Remove"
							:index="index"
							@click="removeData(Discography)"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: "discography-table",
	data() {
		return {
			error: ""
		}
	},
	props: {
		libraries: Array,
		title: String
	},
	methods: {
		...mapActions({
			add: 'add',
			remove: 'remove'
		}),
		addOne: function(Discography) {
      if (!this.$store.state.libraries.includes(Discography)) {
        this.add(Discography)
      }
		},
		removeData: function(Discography) {
			this.error = "";
			// Remove an item accordting to the name
			this.remove(Discography);
		},
		discographyPicked: function(Discography) {
			return (this.$store.state.libraries.find(item => item.name === Discography.name)) ? 'selected' : '';
		},
	}
}
</script>
<style>
</style>