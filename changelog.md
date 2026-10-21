# Steam Backlog Changes
- 10/19 finished making the Carousel generic

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

- 10/20 updated Index to use the SteamImage component

- 10/20 updated Index to have a smaller styled image for the home image.

- 10/20 finished updating Review List Item.

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

## To Do:
Research more into [npm obscenity](https://www.npmjs.com/package/obscenity) for inputs. Review is only text input but the dropdown will be changed later.  
Tomorrow I'm going to add in:
1. text input instead of dropdown
2. the progressbar in the main page
3. add editing into the ReviewListItem rather then the profile
4. searchbar functionality in profile

- 10/20 Changed AddReviewModal to take a text input rather then using a dropdown. Also adjusted ReviewListItem to make more sense.

- 10/20 Created Progress Bar Component.

```JavaScript
// This gets me the styling numbers for each section. It should work for any size array.
for (let index = 0; index < barLength; index++) {
    if(!isNotFirst){
        //if it is the first (not not first) then it gets its own styling
        stylingBar.push(2);
        isNotFirst=true;
    }else{
        if(!hasBeenTrue){
            //True in this program is the current location of the user. so if we pass true, everything should be not done yet.
            if(this.progress[index]){
                //this.progress is how far they are. if its true, then that is their current step, and everything else in the list hasn't been done yet.
                stylingBar.push(1);
                hasBeenTrue = true;
            }else{
                //styles as already done. these will be false values in this.progress, so this is how we track to see if they have been done already 
                stylingBar.push(3);
            }
        }else{
            //these are all things undone yet.
            stylingBar.push(0);
        }
    }
}

//if nothing has been done yet, then !hasBeenTrue hasn't been flicked yet. That means that we can watch for this.
//we have to do this check because of !isNotFirst.
if(!hasBeenTrue){
    stylingBar[0] = 4;
            
    for (let index = 1; index < stylingBar.length; index++) {
        stylingBar[index] = 0;
    }
}
```

```HTML
<!-- This beast interperets what the stylingBar array created above gives us. -->
<div v-for="(section, index) in getStylingBarArray" :class="{'w-fill':true,'flex-fill':true,'text-center':true,'rounded':true, 'bg-light':section>0,'rounded':section>0,'border':section>0,'border-2':section>0,'border-primary-subtle':section>0,'border-end-0':section==2 || section==3,'rounded-end-0':section==2|| section==3,'border-start-0':section==1|| section==3,'rounded-start-0':section==3,'rounded-end-5':section==1 || section==4,'rounded-start-4':section==4}">{{getText(index)}}</div>
```

The progress bar component has two required props: an array of String names for each section, and an array of Boolean values for the current progress.

