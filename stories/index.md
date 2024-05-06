---
layout: page
---
<script setup>
    import { data } from './config.data.js';
    import { withBase } from 'vitepress'
    let storyid, storyurl;
    if ('URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        storyid = searchParams.get('storyid');
        if (storyid && storyid in data) {
            storyurl = data[storyid].file;
        }
    }
</script>

<eox-storytelling v-if="storyurl" :markdown-url=withBase(storyurl)></eox-storytelling>
<div v-else>
    <h2 style="font-size: 40px; height: 50px; margin: 20px;"> Story gallery </h2>
    <div v-for="key in Object.keys(data)">
        <a style="color: blue; margin: 20px;" :href="'./?storyid='+key">{{data[key].title}}</a>
    </div>
</div>

