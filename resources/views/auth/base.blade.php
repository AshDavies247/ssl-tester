@extends("app")

@section("content")

    <main>

        <x-wrappers.site-wrapper>

            <x-sidebar></x-sidebar>

            <x-slot name="main">
                <x-header></x-header>

                <x-wrappers.content-wrapper>
                    @yield("content")
                </x-wrappers.content-wrapper>
            </x-slot>
            
        </x-site-wrapper>

    </main>

@overwrite
