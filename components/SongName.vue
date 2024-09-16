<template>
  <span v-if="multiline">
    <span :class="{ 'song-name': true, underline: active }">{{
      songName
    }}</span>
    <span
      class="song-secondary-name text-secondary text-sm"
      v-for="name in secondaryNames"
    >
      <br />
      {{ name }}
    </span>
  </span>
  <span v-else>
    <span :class="{ 'song-name': true, underline: active }">{{
      songName
    }}</span>
    <span class="song-secondary-name" v-if="secondaryNames.length">
      ({{ secondaryNames.join(', ') }})
    </span>
  </span>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    songName() {
      return getName(this.song, this.$config.public.singleSongbook);
    },
    names() {
      return getNames(this.song, this.$config.public.singleSongbook);
    },
    secondaryNames() {
      return this.names.slice(1);
    },
  },
};

function getName(song, singleSongbook = undefined) {
  if (singleSongbook) {
    const songbookName = song.songbook_records?.find(
      (record) => record.pivot.songbook.id == singleSongbook
    )?.pivot.song_name;

    if (songbookName) {
      return songbookName;
    }
  }

  return song.name;
}

function getNames(song, singleSongbook = undefined) {
  const names = [
    getName(song, singleSongbook),
    song.secondary_name_1,
    song.secondary_name_2,
  ];
  const result = [];

  for (const name of names) {
    if (name && !result.includes(name)) {
      result.push(name);
    }
  }

  return result;
}

export function getFullName(song, singleSongbook = undefined) {
  const names = getNames(song, singleSongbook);

  if (names.length == 1) {
    return names[0];
  } else {
    return `${names[0]} (${names.slice(1).join(', ')})`;
  }
}
</script>
