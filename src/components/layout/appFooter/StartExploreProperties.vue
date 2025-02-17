<template>
    <section class="py-[100px] border-y border-gray-15 start-bg">
        <div class="container items-center justify-between
            xl:flex">
                
            <div class="w-full xl:w-[979px] 2xl:w-[1154px]">
                <h2 class="mb-1">{{ $t('footer.start explore properties.title') }}</h2>
                <p> {{ $t('footer.start explore properties.discription') }} </p>
            </div>
            <router-link :to="'/'" class="cta-link mt-8 w-full 
                xl:mt-0 xl:w-auto">{{ $t('footer.start explore properties.cta title') }}</router-link>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .start-bg{
        background-image: url('/src/assets/images/bg-2.png');
        background-size: contain;
        background-position: bottom right;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            width: 60%;
            height: 60%;
            top: -10%;
            z-index: -1;
            background-image: url('/src/assets/images/bg-1.png');
            background-size: cover;
            background-position: top left;
            transform: rotate(90deg);
            background-repeat: no-repeat;
        }
        @include laptop {
            background-image: url('/src/assets/images/bg-1.png'), url('/src/assets/images/bg-2.png');
            background-size: contain, contain;
            background-position: bottom left, bottom right;
            background-repeat: no-repeat, no-repeat;
            background-size: 474px 258px, 569px 310px;

            &::before{
                content: none;
            }
        }
        @include desktop {
            background-size: 566px 308px, 725px 394px;
        }
    }
</style>