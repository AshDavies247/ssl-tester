<div class="flex w-full">
    <div>{{$slot}}</div>

    @isset($main)
        <div class="w-full pb-4">
            {{$main}}
        </div>
    @endisset
    
</div>