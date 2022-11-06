 <!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role security-anchor-rel-noreferrer --> 
 <script>
    import { getContext } from "svelte";

    const user = getContext('user')

    
</script>
 <div class="info-card" role="list">
    <div role="listitem" class="info-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <span>{user.location}</span>
    </div>

    <a role="listitem" href="{user.url}" rel="noreferrer noopener"
        title="Go to Github profile" target="_blank2" class="info-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_102_22)">
                <path
                    d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_102_22">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <span>Github</span>
    </a>

    <a role="listitem" href="{user.LinkedIn}" rel="noreferrer noopener"
        target="_blank3" title="Go to LinkedIn profile" class="info-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 9H2V21H6V9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <span>LinkedIn</span>
    </a>
</div>