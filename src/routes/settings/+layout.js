/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
      sections: [
        { slug: 'profile', title: 'Profile' },
        { slug: 'billing', title: 'Billing' },
        { slug: 'advanced', title: 'Advanced' }
      ]
    };
  }