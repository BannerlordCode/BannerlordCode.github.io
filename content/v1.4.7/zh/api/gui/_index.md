---
title: "Gui — 界面：ScreenSystem、Gauntlet 与二维绘制"
description: "`TaleWorlds.ScreenSystem`（`ScreenManager`、`ScreenBase`、`ScreenLayer`、`GlobalLayer`）、`TaleWorlds.GauntletUI`（`GauntletMov"
---
# Gui — 界面：ScreenSystem、Gauntlet 与二维绘制

`TaleWorlds.ScreenSystem`（`ScreenManager`、`ScreenBase`、`ScreenLayer`、`GlobalLayer`）、`TaleWorlds.GauntletUI`（`GauntletMovie`、控件）、`TaleWorlds.TwoDimension`（`Brush` 家族与二维绘制）三个命名空间合并。

**注意 `GauntletLayer` 不在这里**：它的命名空间是 `TaleWorlds.Engine.GauntletUI`，落在 [Engine](../engine/)。四层结构见 [界面栈](../../architecture/ui-stack)。

推一个界面只需要两个类型：`ScreenBase`（生命周期）+ `GauntletLayer`（加载 XML 并绑定 [ViewModel](../viewmodel/)）。

## 本区页面（75）

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
[ScreenBase](ScreenBase) · [ScreenLayer](ScreenLayer) · [ScreenManager](ScreenManager)

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [ui-stack](../../architecture/ui-stack)
