# Steam Backlog Changes
- 10/19 at 11:41pm finished making the Carousel generic

Changed the names of these files to be more accurate to what is being done.  

> Carousel -> ImageCarousel  
>
> CarouselHeader -> SteamCarouselHeader  
>
> CarouselImage -> SteamImage  

```HTML
<!-- Here are how the slots look in the ImageCarousel -->
    <div class="z-0 d-none d-xl-flex position-relative top-0 container justify-content-between">
        <slot name="back-left"></slot>
        <slot name="back-right"></slot>
    </div>
```

```HTML
<!-- Here is how SteamImage works now. Prop of appId, gameName, and format -->
   <img :src='"http://shared.steamstatic.com/store_item_assets/steam/apps/"+appId+"/"+format+".jpg"' 
    :alt='"This is the "+format+" image for "+gameName+"."' class="rounded border border-2 border-primary"></img>
```

```HTML
<!-- Here is how it is filled in the SteamCarouselHeader -->
    <image-carousel>
        <template v-slot:mobile-image>
            <steam-image :app-id="idArray[0]" :game-name="activeGameArray[0].name" format="header" class="w-100"></steam-image>
        </template>
        <template v-slot:back-left>
            <steam-image :app-id="idArray[3]" :game-name="activeGameArray[3].name" format="header"></steam-image>                
        </template>
```

- 10/20 at 12:06am updated Index to use the SteamImage component

- 10/20 at some point updated Index to have a smaller styled image for the home image.

- 10/20 at 01:00am finished updating Review List Item.

```HTML
<p class="fs-4">
    <!-- :class="{}" lets me change the colors for the stars based off rating number. -->
    <i :class="{'bi':true, 'bi-star-fill ms-1':true, 'text-success':review.ratingNumber>2, 'text-danger':review.ratingNumber<=2}" 
        v-for="n in review.ratingNumber"></i>

    <!-- Here both are text-black, so it doesn't reaaaaly matter, but it allows for easy changes later. -->
    <i :class="{'bi':true, 'bi-star ms-1':true, 'text-black':review.ratingNumber>2, 'text-black':review.ratingNumber<=2}" 
        v-for="n in (review.ratingNumber-5)*-1" v-if="(review.ratingNumber-5)*-1"></i>
</p>
```

```HTML
<!-- This styles the review "card", with a dynamic border. No longer changes color of whole card, just the border. -->
    :class="{'container':true, 'pb-3':true, 'my-4':true, 'rounded':true, 'border':true, 'border-opacity-50':true,
    'border-danger': review.ratingNumber <3, 'border-success': review.ratingNumber >2, 'py-3':true, 'px-1':true, 'bg-light':true}">
```

## going to bed - 1:35am
Research more into [npm obscenity](https://www.npmjs.com/package/obscenity) for inputs. Review is only text input but the dropdown will be changed later.  
Tomorrow I'm going to add in:
1. text input instead of dropdown
2. the progressbar in the main page
3. add editing into the ReviewListItem rather then the profile
4. searchbar functionality in profile