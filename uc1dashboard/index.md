---
layout: page
---

<script setup>
    import '../dist/eo-dash.js'
    import '../dist/style.css'
    import { useData } from 'vitepress'

    // params is a Vue ref
    const { params } = useData();
    document.antonio = params;
</script>

<eo-dash/>