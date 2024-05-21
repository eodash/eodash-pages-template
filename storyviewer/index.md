---
layout: page
---
<script setup>
    import { onMounted } from 'vue';
    import { data } from '../stories/config.data.js';
    import { withBase } from 'vitepress'

    let storyid, storyurl;
    if (typeof window !== 'undefined' && 'URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        storyid = searchParams.get('storyid');
        if (storyid && storyid in data) {
            storyurl = data[storyid].file;
        }
    }

</script>

<eox-storytelling 
    v-if="storyurl" 
    :markdown-url="withBase(storyurl)"
    style="overflow-y: auto; height: calc(var(--vh, 2vh) * 100);">
</eox-storytelling>