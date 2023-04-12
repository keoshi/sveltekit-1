<script>
    import { page } from '$app/stores';

    /** @type {import('./$types').LayoutData} */
    export let data;
  </script>

<h1>Settings</h1>

<div class="settings">
    <ul class="submenu">
        {#each data.sections as section}
            <li>
                <a
                    href="/settings/{section.slug}"
                    aria-current={$page.url.pathname.startsWith( '/settings/' + section.slug) ? 'page' : undefined }
                >{section.title}</a>
            </li>
        {/each}
    </ul>

    <main>
        <slot />
    </main>
</div>

<style>
    .settings {
        display: grid;
        grid-template-columns: 260px 1fr;
    }

    .submenu {
        width: 200px;
        margin: 2rem 0 0;
        padding: 0;
        font-size: 14px;
        list-style: none;
    }
    .submenu a {
        display: block;
        margin-bottom: 2px;
        padding: 4px 8px;
        text-decoration: none;
        border-radius: var(--radius);
    }
    .submenu a:hover,
    .submenu a:focus,
    .submenu a[aria-current='page'] {
		background: var(--color-theme-1-soft);
	}
</style>