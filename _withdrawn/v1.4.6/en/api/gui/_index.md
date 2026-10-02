---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "gui bucket index"
description: "gui: canonical bucket with 229 public types. The UI layer: `TaleWorlds.ScreenSystem` (screen stack and lifecycle), `TaleWorlds.GauntletUI*` (widget library) and `TaleWorlds.TwoDimension*` (2D atlases). Note that `TaleWorlds.Engine.GauntletUI` is **not** here — it belongs to `engine/`."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# gui bucket index

**Bucket:** `gui`
**Types:** 229
**Routing rule:** `rule:TaleWorlds.GauntletUI`

## Bucket Tour

The UI layer: `TaleWorlds.ScreenSystem` (screen stack and lifecycle), `TaleWorlds.GauntletUI*` (widget library) and `TaleWorlds.TwoDimension*` (2D atlases). Note that `TaleWorlds.Engine.GauntletUI` is **not** here — it belongs to `engine/`.

> Every page route carries a trailing slash: same-bucket types are `./<Type>`, cross-bucket is `../../<bucket>/<Type>`, the parent index is `../`.

- - [↑ API reference](..//) · - [↑ version home](../..//)

> 3 further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: ScreenBase, ScreenManager, Widget.

## Complete Class Catalog

### A

- [AlignmentAxis](./AlignmentAxis) — `TaleWorlds.GauntletUI` · enum · exposed 2
- [AlphaFormatFlags](./AlphaFormatFlags) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · enum · exposed 2
- [AnimatedDropdownWidget](./AnimatedDropdownWidget) — `TaleWorlds.GauntletUI` · class · exposed 20
- [AnimatedNumberTextWidget](./AnimatedNumberTextWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 9
- [AnimationInterpolation](./AnimationInterpolation) — `TaleWorlds.GauntletUI` · class · exposed 5
- [AudioProperty](./AudioProperty) — `TaleWorlds.GauntletUI` · class · exposed 4

### B

- [BasicContainer](./BasicContainer) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 6
- [BitmapFontCharacter](./BitmapFontCharacter) — `TaleWorlds.TwoDimension` · struct · exposed 0
- [BitmapInfo](./BitmapInfo) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · struct · exposed 0
- [BitmapInfoHeader](./BitmapInfoHeader) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · struct · exposed 0
- [BlendFunction](./BlendFunction) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · struct · exposed 2
- [BlurBehindConstraints](./BlurBehindConstraints) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · enum · exposed 3
- [Brush](./Brush) — `TaleWorlds.GauntletUI` · class · exposed 48
- [BrushAnimation](./BrushAnimation) — `TaleWorlds.GauntletUI` · class · exposed 12
- [BrushAnimationKeyFrame](./BrushAnimationKeyFrame) — `TaleWorlds.GauntletUI` · class · exposed 13
- [BrushAnimationProperty](./BrushAnimationProperty) — `TaleWorlds.GauntletUI` · class · exposed 11
- [BrushFactory](./BrushFactory) — `TaleWorlds.GauntletUI` · class · exposed 9
- [BrushLayer](./BrushLayer) — `TaleWorlds.GauntletUI` · class · exposed 39
- [BrushLayerAnimation](./BrushLayerAnimation) — `TaleWorlds.GauntletUI` · class · exposed 5
- [BrushLayerSizePolicy](./BrushLayerSizePolicy) — `TaleWorlds.GauntletUI` · enum · exposed 3
- [BrushLayerState](./BrushLayerState) — `TaleWorlds.GauntletUI` · struct · exposed 9
- [BrushListPanel](./BrushListPanel) — `TaleWorlds.GauntletUI` · class · exposed 13
- [BrushOverlayMethod](./BrushOverlayMethod) — `TaleWorlds.GauntletUI` · enum · exposed 2
- [BrushRenderer](./BrushRenderer) — `TaleWorlds.GauntletUI` · class · exposed 14
- [BrushState](./BrushState) — `TaleWorlds.GauntletUI` · struct · exposed 9
- [BrushWidget](./BrushWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 16
- [BufferBindingTarget](./BufferBindingTarget) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` · enum · exposed 2
- [ButtonType](./ButtonType) — `TaleWorlds.GauntletUI.BaseTypes` · enum · exposed 3
- [ButtonWidget](./ButtonWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 17

### C

- [CircleActionSelectorWidget](./CircleActionSelectorWidget) — `TaleWorlds.GauntletUI` · class · exposed 13
- [CircleItemPlacerWidget](./CircleItemPlacerWidget) — `TaleWorlds.GauntletUI` · class · exposed 7
- [Container](./Container) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 21
- [ContainerItemDescription](./ContainerItemDescription) — `TaleWorlds.GauntletUI` · class · exposed 5
- [ContextParameter](./ContextParameter) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` · enum · exposed 4
- [CursorType](./CursorType) — `TaleWorlds.ScreenSystem` · enum · exposed 12
- [CustomWidgetManager](./CustomWidgetManager) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 1

### D

- [D3D11](./D3D11) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · class · exposed 3
- [DefaultLayout](./DefaultLayout) — `TaleWorlds.GauntletUI.Layout` · class · exposed 0
- [DelayedStateChanger](./DelayedStateChanger) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 11
- [DialogButtonsParentWidget](./DialogButtonsParentWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 7
- [DisabledAlphaChangerWidget](./DisabledAlphaChangerWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 5
- [DragCarrierLayout](./DragCarrierLayout) — `TaleWorlds.GauntletUI.Layout` · class · exposed 0
- [DragCarrierWidget](./DragCarrierWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 1
- [DropdownWidget](./DropdownWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 19
- [DXGI](./DXGI) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · class · exposed 15

### E

- [EditableText](./EditableText) — `TaleWorlds.TwoDimension` · class · exposed 19
- [EditableTextWidget](./EditableTextWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 35
- [EditorAttribute](./EditorAttribute) — `TaleWorlds.GauntletUI` · class · exposed 1
- [EventManager](./EventManager) — `TaleWorlds.GauntletUI` · class · exposed 37

### F

- [FillBar](./FillBar) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 11
- [FillBarHorizontalWidget](./FillBarHorizontalWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 13
- [FillBarVerticalClipTierColorsWidget](./FillBarVerticalClipTierColorsWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 6
- [FillBarVerticalClipWidget](./FillBarVerticalClipWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 15
- [FillBarVerticalWidget](./FillBarVerticalWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 13
- [FillBarWidget](./FillBarWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 14
- [FloatInputTextWidget](./FloatInputTextWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 9
- [Font](./Font) — `TaleWorlds.TwoDimension` · class · exposed 15
- [FontFactory](./FontFactory) — `TaleWorlds.GauntletUI` · class · exposed 14
- [FontStyle](./FontStyle) — `TaleWorlds.TwoDimension` · enum · exposed 1
- [FrameworkDomain](./FrameworkDomain) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 2

### G

- [GamepadNavigationForcedScopeCollection](./GamepadNavigationForcedScopeCollection) — `TaleWorlds.GauntletUI.GamepadNavigation` · class · exposed 14
- [GamepadNavigationScope](./GamepadNavigationScope) — `TaleWorlds.GauntletUI.GamepadNavigation` · class · exposed 46
- [GamepadNavigationTypes](./GamepadNavigationTypes) — `TaleWorlds.GauntletUI.GamepadNavigation` · enum · exposed 7
- [GauntletExtensions](./GauntletExtensions) — `TaleWorlds.GauntletUI` · class · exposed 5
- [GauntletGamepadNavigationManager](./GauntletGamepadNavigationManager) — `TaleWorlds.GauntletUI.GamepadNavigation` · class · exposed 15
- [GauntletInputContext](./GauntletInputContext) — `TaleWorlds.GauntletUI.GauntletInput` · class · exposed 11
- [GauntletMovie](./GauntletMovie) — `TaleWorlds.GauntletUI.Data` · class · exposed 15
- [GauntletView](./GauntletView) — `TaleWorlds.GauntletUI.Data` · class · exposed 13
- [GeneratedGauntletMovie](./GeneratedGauntletMovie) — `TaleWorlds.GauntletUI.Data` · class · exposed 10
- [GeneratedWidgetData](./GeneratedWidgetData) — `TaleWorlds.GauntletUI.Data` · class · exposed 2
- [GlobalLayer](./GlobalLayer) — `TaleWorlds.ScreenSystem` · class · exposed 6
- [GraphicsContext](./GraphicsContext) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 25
- [GraphicsForm](./GraphicsForm) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 32
- [GraphLinePointWidget](./GraphLinePointWidget) — `TaleWorlds.GauntletUI.ExtraWidgets.Graph` · class · exposed 3
- [GraphLineWidget](./GraphLineWidget) — `TaleWorlds.GauntletUI.ExtraWidgets.Graph` · class · exposed 3
- [GraphWidget](./GraphWidget) — `TaleWorlds.GauntletUI.ExtraWidgets.Graph` · class · exposed 23
- [GridDirection](./GridDirection) — `TaleWorlds.GauntletUI.Layout` · enum · exposed 2
- [GridHorizontalLayoutMethod](./GridHorizontalLayoutMethod) — `TaleWorlds.GauntletUI.Layout` · enum · exposed 3
- [GridLayout](./GridLayout) — `TaleWorlds.GauntletUI.Layout` · class · exposed 6
- [GridVerticalLayoutMethod](./GridVerticalLayoutMethod) — `TaleWorlds.GauntletUI.Layout` · enum · exposed 3
- [GridWidget](./GridWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 17
- [GuiEventResult](./GuiEventResult) — `TaleWorlds.GauntletUI` · enum · exposed 4
- [GuiEventType](./GuiEventType) — `TaleWorlds.GauntletUI` · enum · exposed 10

### H

- [HorizontalAlignment](./HorizontalAlignment) — `TaleWorlds.GauntletUI` · enum · exposed 3

### I

- [IBrushAnimationState](./IBrushAnimationState) — `TaleWorlds.GauntletUI` · interface · exposed 8
- [IBrushLayerData](./IBrushLayerData) — `TaleWorlds.GauntletUI` · interface · exposed 35
- [IDataSource](./IDataSource) — `TaleWorlds.GauntletUI` · interface · exposed 0
- [IDrawObject](./IDrawObject) — `TaleWorlds.TwoDimension` · interface · exposed 2
- [IDropContainer](./IDropContainer) — `TaleWorlds.GauntletUI` · interface · exposed 2
- [IGauntletMovie](./IGauntletMovie) — `TaleWorlds.GauntletUI.Data` · interface · exposed 7
- [IGeneratedGauntletMovieRoot](./IGeneratedGauntletMovieRoot) — `TaleWorlds.GauntletUI.Data` · interface · exposed 2
- [ILanguage](./ILanguage) — `TaleWorlds.TwoDimension` · interface · exposed 11
- [ILayout](./ILayout) — `TaleWorlds.GauntletUI.Layout` · interface · exposed 2
- [ImageDrawObject](./ImageDrawObject) — `TaleWorlds.TwoDimension` · struct · exposed 2
- [ImageFit](./ImageFit) — `TaleWorlds.GauntletUI` · class · exposed 13
- [ImageFitResult](./ImageFitResult) — `TaleWorlds.GauntletUI` · struct · exposed 1
- [ImageWidget](./ImageWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 4
- [IMessageCommunicator](./IMessageCommunicator) — `TaleWorlds.TwoDimension.Standalone` · interface · exposed 1
- [InputData](./InputData) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 10
- [InputKeyVisualWidget](./InputKeyVisualWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 3
- [InputRestrictions](./InputRestrictions) — `TaleWorlds.ScreenSystem` · class · exposed 8
- [IntegerInputPercentageTextWidget](./IntegerInputPercentageTextWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 4
- [IntegerInputTextWidget](./IntegerInputTextWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 9
- [IReadonlyInputContext](./IReadonlyInputContext) — `TaleWorlds.GauntletUI.GauntletInput` · interface · exposed 8
- [IScreenManagerEngineConnection](./IScreenManagerEngineConnection) — `TaleWorlds.ScreenSystem` · interface · exposed 13
- [ItemTemplateUsage](./ItemTemplateUsage) — `TaleWorlds.GauntletUI.Data` · class · exposed 4
- [ItemTemplateUsageWithData](./ItemTemplateUsageWithData) — `TaleWorlds.GauntletUI.Data` · class · exposed 6
- [IText](./IText) — `TaleWorlds.TwoDimension` · interface · exposed 4
- [ITexture](./ITexture) — `TaleWorlds.TwoDimension` · interface · exposed 6
- [ITwoDimensionPlatform](./ITwoDimensionPlatform) — `TaleWorlds.TwoDimension` · interface · exposed 25
- [ITwoDimensionResourceContext](./ITwoDimensionResourceContext) — `TaleWorlds.TwoDimension` · interface · exposed 1

### K

- [Kernel32](./Kernel32) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · class · exposed 7

### L

- [Language](./Language) — `TaleWorlds.GauntletUI` · class · exposed 10
- [LayeredWindowController](./LayeredWindowController) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 4
- [LayoutMethod](./LayoutMethod) — `TaleWorlds.GauntletUI.Layout` · enum · exposed 8
- [ListPanel](./ListPanel) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 12

### M

- [MaskedTextureWidget](./MaskedTextureWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 9
- [Material](./Material) — `TaleWorlds.TwoDimension` · class · exposed 3
- [MaterialPool<T>](./MaterialPool__1) — `TaleWorlds.TwoDimension` · class · exposed 3
- [Mathf](./Mathf) — `TaleWorlds.TwoDimension` · class · exposed 22
- [MatrixExtensions](./MatrixExtensions) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 5
- [MeshTopology](./MeshTopology) — `TaleWorlds.TwoDimension` · enum · exposed 2
- [MouseWidget](./MouseWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 11

### N

- [NativeMessage](./NativeMessage) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · struct · exposed 0

### O

- [OnActiveTabChangeEvent](./OnActiveTabChangeEvent) — `TaleWorlds.GauntletUI.BaseTypes` · delegate · exposed 0
- [OnlineImageTextureWidget](./OnlineImageTextureWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 6
- [OpenGLTexture](./OpenGLTexture) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 14

### P

- [Point](./Point) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · struct · exposed 1
- [PrefabDatabindingExtension](./PrefabDatabindingExtension) — `TaleWorlds.GauntletUI.Data` · class · exposed 7
- [PrimitivePolygonMaterial](./PrimitivePolygonMaterial) — `TaleWorlds.TwoDimension` · class · exposed 4
- [PropertyOwnerObject](./PropertyOwnerObject) — `TaleWorlds.GauntletUI` · class · exposed 18

### Q

- [Quad](./Quad) — `TaleWorlds.TwoDimension` · struct · exposed 0

### R

- [Rectangle2D](./Rectangle2D) — `TaleWorlds.TwoDimension` · struct · exposed 26
- [ResourceTextureProvider](./ResourceTextureProvider) — `TaleWorlds.GauntletUI` · class · exposed 1
- [RichText](./RichText) — `TaleWorlds.TwoDimension` · class · exposed 18
- [RichTextException](./RichTextException) — `TaleWorlds.TwoDimension` · class · exposed 0
- [RichTextLinkGroup](./RichTextLinkGroup) — `TaleWorlds.TwoDimension` · class · exposed 1
- [RichTextParser](./RichTextParser) — `TaleWorlds.TwoDimension` · class · exposed 1
- [RichTextPart](./RichTextPart) — `TaleWorlds.TwoDimension` · class · exposed 10
- [RichTextPartType](./RichTextPartType) — `TaleWorlds.TwoDimension` · enum · exposed 2
- [RichTextTag](./RichTextTag) — `TaleWorlds.TwoDimension` · class · exposed 5
- [RichTextTagParser](./RichTextTagParser) — `TaleWorlds.TwoDimension` · class · exposed 1
- [RichTextTagType](./RichTextTagType) — `TaleWorlds.TwoDimension` · enum · exposed 4
- [RichTextWidget](./RichTextWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 14

### S

- [ScissorTestInfo](./ScissorTestInfo) — `TaleWorlds.TwoDimension` · struct · exposed 8
- [ScreenComponent](./ScreenComponent) — `TaleWorlds.ScreenSystem` · class · exposed 0
- [ScreenLayer](./ScreenLayer) — `TaleWorlds.ScreenSystem` · class · exposed 37
- [ScrollablePanel](./ScrollablePanel) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 33
- [ScrollablePanelFixedHeaderWidget](./ScrollablePanelFixedHeaderWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 9
- [ScrollbarWidget](./ScrollbarWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 16
- [ScrollingRichTextWidget](./ScrollingRichTextWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 10
- [ScrollingTextWidget](./ScrollingTextWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 10
- [SelectedStateBrushWidget](./SelectedStateBrushWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 3
- [Shader](./Shader) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 10
- [ShaderType](./ShaderType) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` · enum · exposed 7
- [SiblingIndexVisibilityWidget](./SiblingIndexVisibilityWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 7
- [SimpleMaterial](./SimpleMaterial) — `TaleWorlds.TwoDimension` · class · exposed 30
- [SimpleRectangle](./SimpleRectangle) — `TaleWorlds.TwoDimension` · struct · exposed 10
- [SizePolicy](./SizePolicy) — `TaleWorlds.GauntletUI` · enum · exposed 3
- [SliderWidget](./SliderWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 28
- [SmoothDecreaseIndicatorFillBar](./SmoothDecreaseIndicatorFillBar) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 6
- [SoundProperties](./SoundProperties) — `TaleWorlds.GauntletUI` · class · exposed 8
- [Sprite](./Sprite) — `TaleWorlds.TwoDimension` · class · exposed 9
- [SpriteCategory](./SpriteCategory) — `TaleWorlds.TwoDimension` · class · exposed 21
- [SpriteData](./SpriteData) — `TaleWorlds.TwoDimension` · class · exposed 9
- [SpriteGeneric](./SpriteGeneric) — `TaleWorlds.TwoDimension` · class · exposed 5
- [SpriteNinePatchParameters](./SpriteNinePatchParameters) — `TaleWorlds.TwoDimension` · struct · exposed 1
- [SpritePart](./SpritePart) — `TaleWorlds.TwoDimension` · class · exposed 16
- [StackLayout](./StackLayout) — `TaleWorlds.GauntletUI.Layout` · class · exposed 8
- [StandaloneInputManager](./StandaloneInputManager) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 6
- [StateSyncWidget](./StateSyncWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 4
- [StringBasedVisibilityWidget](./StringBasedVisibilityWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 6
- [Style](./Style) — `TaleWorlds.GauntletUI` · class · exposed 37
- [StyleAnimationMode](./StyleAnimationMode) — `TaleWorlds.GauntletUI` · enum · exposed 3
- [StyleFontContainer](./StyleFontContainer) — `TaleWorlds.TwoDimension` · class · exposed 6
- [StyleLayer](./StyleLayer) — `TaleWorlds.GauntletUI` · class · exposed 41

### T

- [TabControl](./TabControl) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 7
- [TabToggleWidget](./TabToggleWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 5
- [Text](./Text) — `TaleWorlds.TwoDimension` · class · exposed 18
- [TextDrawObject](./TextDrawObject) — `TaleWorlds.TwoDimension` · struct · exposed 3
- [TextHorizontalAlignment](./TextHorizontalAlignment) — `TaleWorlds.TwoDimension` · enum · exposed 4
- [TextLayout](./TextLayout) — `TaleWorlds.GauntletUI.Layout` · class · exposed 1
- [TextMaterial](./TextMaterial) — `TaleWorlds.TwoDimension` · class · exposed 22
- [TextParser](./TextParser) — `TaleWorlds.TwoDimension` · class · exposed 1
- [TextPart](./TextPart) — `TaleWorlds.TwoDimension` · class · exposed 4
- [TextToken](./TextToken) — `TaleWorlds.TwoDimension` · class · exposed 18
- [Texture](./Texture) — `TaleWorlds.TwoDimension` · class · exposed 6
- [TextureProvider](./TextureProvider) — `TaleWorlds.GauntletUI` · class · exposed 8
- [TextureProviderFactory](./TextureProviderFactory) — `TaleWorlds.GauntletUI` · class · exposed 2
- [TextureUnit](./TextureUnit) — `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` · enum · exposed 64
- [TextureWidget](./TextureWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 15
- [TextVerticalAlignment](./TextVerticalAlignment) — `TaleWorlds.TwoDimension` · enum · exposed 3
- [TextWidget](./TextWidget) — `TaleWorlds.GauntletUI.BaseTypes` · class · exposed 9
- [TooltipPositioningType](./TooltipPositioningType) — `TaleWorlds.GauntletUI.ExtraWidgets` · enum · exposed 5
- [TooltipWidget](./TooltipWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 5
- [TwoDimensionContext](./TwoDimensionContext) — `TaleWorlds.TwoDimension` · class · exposed 23
- [TwoDimensionContextObject](./TwoDimensionContextObject) — `TaleWorlds.TwoDimension` · class · exposed 2
- [TwoDimensionDrawContext](./TwoDimensionDrawContext) — `TaleWorlds.TwoDimension` · class · exposed 20
- [TwoDimensionPlatform](./TwoDimensionPlatform) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 1
- [TwoWaySliderWidget](./TwoWaySliderWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 4

### U

- [UIContext](./UIContext) — `TaleWorlds.GauntletUI` · class · exposed 49
- [User32](./User32) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · class · exposed 41

### V

- [ValueBasedVisibilityWidget](./ValueBasedVisibilityWidget) — `TaleWorlds.GauntletUI.ExtraWidgets` · class · exposed 8
- [VertexArrayObject](./VertexArrayObject) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 7
- [VerticalAlignment](./VerticalAlignment) — `TaleWorlds.GauntletUI` · enum · exposed 3
- [VisualDefinition](./VisualDefinition) — `TaleWorlds.GauntletUI` · class · exposed 9
- [VisualState](./VisualState) — `TaleWorlds.GauntletUI` · class · exposed 21
- [VisualStateAnimationState](./VisualStateAnimationState) — `TaleWorlds.GauntletUI` · enum · exposed 3

### W

- [WidgetAttributeKeyTypeCommand](./WidgetAttributeKeyTypeCommand) — `TaleWorlds.GauntletUI.Data` · class · exposed 3
- [WidgetAttributeKeyTypeCommandParameter](./WidgetAttributeKeyTypeCommandParameter) — `TaleWorlds.GauntletUI.Data` · class · exposed 3
- [WidgetAttributeKeyTypeDataSource](./WidgetAttributeKeyTypeDataSource) — `TaleWorlds.GauntletUI.Data` · class · exposed 3
- [WidgetAttributeValueTypeBinding](./WidgetAttributeValueTypeBinding) — `TaleWorlds.GauntletUI.Data` · class · exposed 3
- [WidgetAttributeValueTypeBindingPath](./WidgetAttributeValueTypeBindingPath) — `TaleWorlds.GauntletUI.Data` · class · exposed 3
- [WidgetComponent](./WidgetComponent) — `TaleWorlds.GauntletUI` · class · exposed 2
- [WidgetInfo](./WidgetInfo) — `TaleWorlds.GauntletUI` · class · exposed 10
- [WidgetInstantiationResultDatabindingExtension](./WidgetInstantiationResultDatabindingExtension) — `TaleWorlds.GauntletUI.Data` · class · exposed 1
- [WidgetSearchDelegate](./WidgetSearchDelegate) — `TaleWorlds.GauntletUI.BaseTypes` · delegate · exposed 0
- [WindowClass](./WindowClass) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · struct · exposed 0
- [WindowMessage](./WindowMessage) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · enum · exposed 16
- [WindowsForm](./WindowsForm) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 13
- [WindowsFormMessageHandler](./WindowsFormMessageHandler) — `TaleWorlds.TwoDimension.Standalone` · delegate · exposed 0
- [WindowsFramework](./WindowsFramework) — `TaleWorlds.TwoDimension.Standalone` · class · exposed 10
- [WindowsFrameworkThreadConfig](./WindowsFrameworkThreadConfig) — `TaleWorlds.TwoDimension.Standalone` · enum · exposed 3
- [WindowShowStyle](./WindowShowStyle) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · enum · exposed 12
- [WindowStyle](./WindowStyle) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · enum · exposed 19
- [WndProc](./WndProc) — `TaleWorlds.TwoDimension.Standalone.Native.Windows` · delegate · exposed 0

## See Also

- - [↑ API reference](..//)
- - [↑ version home](../..//)
