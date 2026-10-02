---
title: "Gui — UI: ScreenSystem, Gauntlet and 2D drawing"
description: "Three namespaces merged: `TaleWorlds.ScreenSystem` (`ScreenManager`, `ScreenBase`, `ScreenLayer`, `GlobalLayer`), `TaleW"
---
# Gui — UI: ScreenSystem, Gauntlet and 2D drawing

Three namespaces merged: `TaleWorlds.ScreenSystem` (`ScreenManager`, `ScreenBase`, `ScreenLayer`, `GlobalLayer`), `TaleWorlds.GauntletUI` (`GauntletMovie`, widgets) and `TaleWorlds.TwoDimension` (the `Brush` family and 2D drawing).

**`GauntletLayer` is not here.** Its namespace is `TaleWorlds.Engine.GauntletUI`, which lands in [Engine](../engine/). See [UI Stack](../../architecture/ui-stack) for the four-layer picture.

Pushing a screen needs two types: `ScreenBase` (lifecycle) and `GauntletLayer` (loads XML and binds a [ViewModel](../viewmodel/)).

## Pages in this area (72)

[AlignmentAxis](AlignmentAxis) · [AlphaFormatFlags](AlphaFormatFlags) · [AnimatedDropdownWidget](AnimatedDropdownWidget)
[AnimatedNumberTextWidget](AnimatedNumberTextWidget) · [AnimationInterpolation](AnimationInterpolation) · [ArrayType](ArrayType)
[AttribueMask](AttribueMask) · [AudioProperty](AudioProperty) · [AutoPinner](AutoPinner)
[BasicContainer](BasicContainer) · [BeginMode](BeginMode) · [BitmapFontCharacter](BitmapFontCharacter)
[BitmapInfo](BitmapInfo) · [BitmapInfoHeader](BitmapInfoHeader) · [BlendFunction](BlendFunction)
[BlendingDestinationFactor](BlendingDestinationFactor) · [BlendingSourceFactor](BlendingSourceFactor) · [BrushFactory](BrushFactory)
[BrushWidget](BrushWidget) · [BufferBindingTarget](BufferBindingTarget) · [ButtonType](ButtonType)
[ButtonWidget](ButtonWidget) · [Container](Container) · [CursorType](CursorType)
[CustomWidgetManager](CustomWidgetManager) · [DXGI](DXGI) · [DefaultLayout](DefaultLayout)
[DelayedStateChanger](DelayedStateChanger) · [DialogButtonsParentWidget](DialogButtonsParentWidget) · [DisabledAlphaChangerWidget](DisabledAlphaChangerWidget)
[DragCarrierLayout](DragCarrierLayout) · [FillBar](FillBar) · [FrameworkDomain](FrameworkDomain)
[GamepadNavigationForcedScopeCollection](GamepadNavigationForcedScopeCollection) · [GamepadNavigationHelper](GamepadNavigationHelper) · [GamepadNavigationScope](GamepadNavigationScope)
[GamepadNavigationScopeCollection](GamepadNavigationScopeCollection) · [GamepadNavigationTypes](GamepadNavigationTypes) · [GauntletGamepadNavigationManager](GauntletGamepadNavigationManager)
[GauntletInputContext](GauntletInputContext) · [GauntletMovie](GauntletMovie) · [GauntletView](GauntletView)
[GeneratedGauntletMovie](GeneratedGauntletMovie) · [GeneratedWidgetData](GeneratedWidgetData) · [GlobalLayer](GlobalLayer)
[GraphLinePointWidget](GraphLinePointWidget) · [GraphLineWidget](GraphLineWidget) · [GraphWidget](GraphWidget)
[GraphicsContext](GraphicsContext) · [GraphicsForm](GraphicsForm) · [GridDirection](GridDirection)
[GridHorizontalLayoutMethod](GridHorizontalLayoutMethod) · [GridLayout](GridLayout) · [GridVerticalLayoutMethod](GridVerticalLayoutMethod)
[IGauntletMovie](IGauntletMovie) · [IGeneratedGauntletMovieRoot](IGeneratedGauntletMovieRoot) · [IMessageCommunicator](IMessageCommunicator)
[IReadonlyInputContext](IReadonlyInputContext) · [IScreenManagerEngineConnection](IScreenManagerEngineConnection) · [InputData](InputData)
[InputRestrictions](InputRestrictions) · [LayeredWindowController](LayeredWindowController) · [Rectangle2D](Rectangle2D)
[ScreenComponent](ScreenComponent) · [ScrollablePanel](ScrollablePanel) · [SpriteCategory](SpriteCategory)
[SpriteData](SpriteData) · [StyleFontContainer](StyleFontContainer) · [TextHelper](TextHelper)
[TextMeshGenerator](TextMeshGenerator) · [UIContext](UIContext) · [User32](User32)

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [ui-stack](../../architecture/ui-stack)
