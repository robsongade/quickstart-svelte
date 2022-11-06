<script>
    import ContextUser from "./contexts/ContextUser.svelte";
    import Profile from "@components/Profile.svelte";
    import InfoCard from "@components/InfoCard.svelte";
    import TechsCard from "@components/TechsCard.svelte";
    import XpCard from "@components/XpCard.svelte";
    import EducationCard from "@components/EducationCard.svelte";
    import ProjectsHeaderCard from "@components/projects-header-card.svelte";
    import ProjectsGridCard from "@components/projects-grid-card.svelte";
    import PostsHeaderCard from "@components/posts-header-card.svelte";
    import PostsCard from "@components/posts-card.svelte";
    
</script>
<ContextUser>
    <aside>
        <Profile />
        <InfoCard />
        <TechsCard />
       
    </aside>
    
    <section>
        <ProjectsHeaderCard />
        <ProjectsGridCard />
      
    </section>
</ContextUser>
