---
title: Gauntlet UI 类目录 / Class Catalog
extra:
  sidebar: auto
---
# Gauntlet UI 类目录

## 心智模型

先把 `Gauntlet UI 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.15 源码中该领域全部公开类型，按命名空间分组。共 **265** 个类型，其中 **258** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.GauntletUI (58)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlignmentAxis](./campaign-ext/AlignmentAxis) | 🔗 |
| C | [AnimatedDropdownWidget](./campaign-ext/AnimatedDropdownWidget) | 🔗 |
| C | [AnimationInterpolation](./campaign-ext/AnimationInterpolation) | 🔗 |
| C | [AudioProperty](./campaign-ext/AudioProperty) | 🔗 |
| C | [Brush](./campaign-ext/Brush) | 🔗 |
| C | [BrushAnimation](./campaign-ext/BrushAnimation) | 🔗 |
| C | [BrushAnimationKeyFrame](./campaign-ext/BrushAnimationKeyFrame) | 🔗 |
| C | [BrushAnimationProperty](./campaign-ext/BrushAnimationProperty) | 🔗 |
| E | [BrushAnimationPropertyType](./campaign-ext/BrushAnimationPropertyType) | 🔗 |
| C | [BrushFactory](./campaign-ext/BrushFactory) | 🔗 |
| C | [BrushLayer](./campaign-ext/BrushLayer) | 🔗 |
| C | [BrushLayerAnimation](./campaign-ext/BrushLayerAnimation) | 🔗 |
| E | [BrushLayerSizePolicy](./campaign-ext/BrushLayerSizePolicy) | 🔗 |
| S | [BrushLayerState](./campaign-ext/BrushLayerState) | 🔗 |
| C | [BrushListPanel](./campaign-ext/BrushListPanel) | 🔗 |
| E | [BrushOverlayMethod](./campaign-ext/BrushOverlayMethod) | 🔗 |
| C | [BrushRenderer](./campaign-ext/BrushRenderer) | 🔗 |
| E | [BrushRendererAnimationState](./campaign-ext/BrushRendererAnimationState) | 🔗 |
| S | [BrushState](./campaign-ext/BrushState) | 🔗 |
| C | [CircleActionSelectorWidget](./campaign-ext/CircleActionSelectorWidget) | 🔗 |
| C | [CircleItemPlacerWidget](./campaign-ext/CircleItemPlacerWidget) | 🔗 |
| C | [ContainerItemDescription](./campaign-ext/ContainerItemDescription) | 🔗 |
| C | [EditorAttribute](./campaign-ext/EditorAttribute) | 🔗 |
| C | [EventManager](./campaign-ext/EventManager) | 🔗 |
| C | [FontFactory](./campaign-ext/FontFactory) | 🔗 |
| E | [Function](./campaign-ext/Function) | 🔗 |
| C | [GauntletExtensions](./campaign-ext/GauntletExtensions) | 🔗 |
| E | [GuiEventResult](./campaign-ext/GuiEventResult) | 🔗 |
| E | [GuiEventType](./campaign-ext/GuiEventType) | 🔗 |
| E | [HorizontalAlignment](./campaign-ext/HorizontalAlignment) | 🔗 |
| I | [IBrushAnimationState](./campaign-ext/IBrushAnimationState) | 🔗 |
| I | [IBrushLayerData](./campaign-ext/IBrushLayerData) | 🔗 |
| I | [IDataSource](./campaign-ext/IDataSource) | 🔗 |
| I | [IDropContainer](./campaign-ext/IDropContainer) | 🔗 |
| C | [ImageFit](./campaign-ext/ImageFit) | 🔗 |
| E | [ImageFitTypes](./campaign-ext/ImageFitTypes) | 🔗 |
| E | [ImageHorizontalAlignments](./campaign-ext/ImageHorizontalAlignments) | 🔗 |
| E | [ImageVerticalAlignments](./campaign-ext/ImageVerticalAlignments) | 🔗 |
| C | [Language](./campaign-ext/Language) | 🔗 |
| E | [MouseCursors](./campaign-ext/MouseCursors) | 🔗 |
| C | [PropertyOwnerObject](./campaign-ext/PropertyOwnerObject) | 🔗 |
| C | [ResourceTextureProvider](./campaign-ext/ResourceTextureProvider) | 🔗 |
| E | [SizePolicy](./campaign-ext/SizePolicy) | 🔗 |
| C | [SoundProperties](./campaign-ext/SoundProperties) | 🔗 |
| C | [Style](./campaign-ext/Style) | 🔗 |
| E | [StyleAnimationMode](./campaign-ext/StyleAnimationMode) | 🔗 |
| C | [StyleLayer](./campaign-ext/StyleLayer) | 🔗 |
| C | [TextureProvider](./campaign-ext/TextureProvider) | 🔗 |
| C | [TextureProviderFactory](./campaign-ext/TextureProviderFactory) | 🔗 |
| E | Type | — |
| C | [UIContext](./campaign-ext/UIContext) | 🔗 |
| E | [ValueType](./campaign-ext/ValueType) | 🔗 |
| E | [VerticalAlignment](./campaign-ext/VerticalAlignment) | 🔗 |
| C | [VisualDefinition](./campaign-ext/VisualDefinition) | 🔗 |
| C | [VisualState](./campaign-ext/VisualState) | 🔗 |
| E | [VisualStateAnimationState](./campaign-ext/VisualStateAnimationState) | 🔗 |
| C | [WidgetComponent](./campaign-ext/WidgetComponent) | 🔗 |
| C | [WidgetInfo](./campaign-ext/WidgetInfo) | 🔗 |

## TaleWorlds.GauntletUI.BaseTypes (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AutoScrollParameters](./campaign-ext/AutoScrollParameters) | 🔗 |
| C | [BasicContainer](./campaign-ext/BasicContainer) | 🔗 |
| C | [BrushWidget](./campaign-ext/BrushWidget) | 🔗 |
| E | [ButtonType](./campaign-ext/ButtonType) | 🔗 |
| C | [ButtonWidget](./campaign-ext/ButtonWidget) | 🔗 |
| C | [Container](./campaign-ext/Container) | 🔗 |
| C | [DragCarrierWidget](./campaign-ext/DragCarrierWidget) | 🔗 |
| C | [DropdownWidget](./campaign-ext/DropdownWidget) | 🔗 |
| C | [EditableTextWidget](./campaign-ext/EditableTextWidget) | 🔗 |
| C | [FloatInputTextWidget](./campaign-ext/FloatInputTextWidget) | 🔗 |
| C | [GridWidget](./campaign-ext/GridWidget) | 🔗 |
| E | [ImageSizePolicies](./campaign-ext/ImageSizePolicies) | 🔗 |
| C | [ImageWidget](./campaign-ext/ImageWidget) | 🔗 |
| C | [IntegerInputPercentageTextWidget](./campaign-ext/IntegerInputPercentageTextWidget) | 🔗 |
| C | [IntegerInputTextWidget](./campaign-ext/IntegerInputTextWidget) | 🔗 |
| C | [ListPanel](./campaign-ext/ListPanel) | 🔗 |
| C | [MaskedTextureWidget](./campaign-ext/MaskedTextureWidget) | 🔗 |
| C | [OnlineImageTextureWidget](./campaign-ext/OnlineImageTextureWidget) | 🔗 |
| C | [RichTextWidget](./campaign-ext/RichTextWidget) | 🔗 |
| C | [ScrollablePanel](./campaign-ext/ScrollablePanel) | 🔗 |
| C | [ScrollablePanelFixedHeaderWidget](./campaign-ext/ScrollablePanelFixedHeaderWidget) | 🔗 |
| C | [ScrollbarWidget](./campaign-ext/ScrollbarWidget) | 🔗 |
| C | [SelectedStateBrushWidget](./campaign-ext/SelectedStateBrushWidget) | 🔗 |
| C | [SliderWidget](./campaign-ext/SliderWidget) | 🔗 |
| C | [TabControl](./campaign-ext/TabControl) | 🔗 |
| C | [TabToggleWidget](./campaign-ext/TabToggleWidget) | 🔗 |
| C | [TextureWidget](./campaign-ext/TextureWidget) | 🔗 |
| C | [TextWidget](./campaign-ext/TextWidget) | 🔗 |
| C | [Widget](./campaign-ext/Widget) | 🔗 |

## TaleWorlds.GauntletUI.Data (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | GauntletMovie | — |
| C | [GauntletView](./campaign-ext/GauntletView) | 🔗 |
| C | [GeneratedGauntletMovie](./campaign-ext/GeneratedGauntletMovie) | 🔗 |
| C | [GeneratedWidgetData](./campaign-ext/GeneratedWidgetData) | 🔗 |
| I | [IGauntletMovie](./campaign-ext/IGauntletMovie) | 🔗 |
| I | [IGeneratedGauntletMovieRoot](./campaign-ext/IGeneratedGauntletMovieRoot) | 🔗 |
| C | [ItemTemplateUsage](./campaign-ext/ItemTemplateUsage) | 🔗 |
| C | [ItemTemplateUsageWithData](./campaign-ext/ItemTemplateUsageWithData) | 🔗 |
| C | [PrefabDatabindingExtension](./campaign-ext/PrefabDatabindingExtension) | 🔗 |
| C | [WidgetAttributeKeyTypeCommand](./campaign-ext/WidgetAttributeKeyTypeCommand) | 🔗 |
| C | [WidgetAttributeKeyTypeCommandParameter](./campaign-ext/WidgetAttributeKeyTypeCommandParameter) | 🔗 |
| C | [WidgetAttributeKeyTypeDataSource](./campaign-ext/WidgetAttributeKeyTypeDataSource) | 🔗 |
| C | [WidgetAttributeValueTypeBinding](./campaign-ext/WidgetAttributeValueTypeBinding) | 🔗 |
| C | [WidgetAttributeValueTypeBindingPath](./campaign-ext/WidgetAttributeValueTypeBindingPath) | 🔗 |
| C | [WidgetInstantiationResultDatabindingExtension](./campaign-ext/WidgetInstantiationResultDatabindingExtension) | 🔗 |

## TaleWorlds.GauntletUI.ExtraWidgets (24)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AnimatedNumberTextWidget](./campaign-ext/AnimatedNumberTextWidget) | 🔗 |
| C | [CustomWidgetManager](./campaign-ext/CustomWidgetManager) | 🔗 |
| C | [DelayedStateChanger](./campaign-ext/DelayedStateChanger) | 🔗 |
| C | [DialogButtonsParentWidget](./campaign-ext/DialogButtonsParentWidget) | 🔗 |
| C | [DisabledAlphaChangerWidget](./campaign-ext/DisabledAlphaChangerWidget) | 🔗 |
| C | [FillBar](./campaign-ext/FillBar) | 🔗 |
| C | [FillBarHorizontalWidget](./campaign-ext/FillBarHorizontalWidget) | 🔗 |
| C | [FillBarVerticalClipTierColorsWidget](./campaign-ext/FillBarVerticalClipTierColorsWidget) | 🔗 |
| C | [FillBarVerticalClipWidget](./campaign-ext/FillBarVerticalClipWidget) | 🔗 |
| C | [FillBarVerticalWidget](./campaign-ext/FillBarVerticalWidget) | 🔗 |
| C | [FillBarWidget](./campaign-ext/FillBarWidget) | 🔗 |
| C | [InputKeyVisualWidget](./campaign-ext/InputKeyVisualWidget) | 🔗 |
| C | [MouseWidget](./campaign-ext/MouseWidget) | 🔗 |
| C | [ScrollingRichTextWidget](./campaign-ext/ScrollingRichTextWidget) | 🔗 |
| C | [ScrollingTextWidget](./campaign-ext/ScrollingTextWidget) | 🔗 |
| C | [SiblingIndexVisibilityWidget](./campaign-ext/SiblingIndexVisibilityWidget) | 🔗 |
| C | [SmoothDecreaseIndicatorFillBar](./campaign-ext/SmoothDecreaseIndicatorFillBar) | 🔗 |
| C | [StateSyncWidget](./campaign-ext/StateSyncWidget) | 🔗 |
| C | [StringBasedVisibilityWidget](./campaign-ext/StringBasedVisibilityWidget) | 🔗 |
| E | [TooltipPositioningType](./campaign-ext/TooltipPositioningType) | 🔗 |
| C | [TooltipWidget](./campaign-ext/TooltipWidget) | 🔗 |
| C | [TwoWaySliderWidget](./campaign-ext/TwoWaySliderWidget) | 🔗 |
| C | [ValueBasedVisibilityWidget](./campaign-ext/ValueBasedVisibilityWidget) | 🔗 |
| E | [WatchTypes](./campaign-ext/WatchTypes) | 🔗 |

## TaleWorlds.GauntletUI.ExtraWidgets.Graph (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GraphLinePointWidget](./campaign-ext/GraphLinePointWidget) | 🔗 |
| C | [GraphLineWidget](./campaign-ext/GraphLineWidget) | 🔗 |
| C | [GraphWidget](./campaign-ext/GraphWidget) | 🔗 |

## TaleWorlds.GauntletUI.GamepadNavigation (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GamepadNavigationForcedScopeCollection](./campaign-ext/GamepadNavigationForcedScopeCollection) | 🔗 |
| C | [GamepadNavigationScope](./campaign-ext/GamepadNavigationScope) | 🔗 |
| E | [GamepadNavigationTypes](./campaign-ext/GamepadNavigationTypes) | 🔗 |
| C | [GauntletGamepadNavigationManager](./campaign-ext/GauntletGamepadNavigationManager) | 🔗 |

## TaleWorlds.GauntletUI.GauntletInput (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GauntletInputContext](./campaign-ext/GauntletInputContext) | 🔗 |
| I | [IReadonlyInputContext](./campaign-ext/IReadonlyInputContext) | 🔗 |

## TaleWorlds.GauntletUI.Layout (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultLayout](./campaign-ext/DefaultLayout) | 🔗 |
| C | [DragCarrierLayout](./campaign-ext/DragCarrierLayout) | 🔗 |
| E | [GridDirection](./campaign-ext/GridDirection) | 🔗 |
| E | [GridHorizontalLayoutMethod](./campaign-ext/GridHorizontalLayoutMethod) | 🔗 |
| C | [GridLayout](./campaign-ext/GridLayout) | 🔗 |
| E | [GridVerticalLayoutMethod](./campaign-ext/GridVerticalLayoutMethod) | 🔗 |
| I | [ILayout](./campaign-ext/ILayout) | 🔗 |
| E | [LayoutMethod](./campaign-ext/LayoutMethod) | 🔗 |
| C | [StackLayout](./campaign-ext/StackLayout) | 🔗 |
| C | [TextLayout](./campaign-ext/TextLayout) | 🔗 |

## TaleWorlds.GauntletUI.PrefabSystem (26)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ConstantDefinition](./campaign-ext/ConstantDefinition) | 🔗 |
| E | [ConstantDefinitionType](./campaign-ext/ConstantDefinitionType) | 🔗 |
| C | [CustomWidgetType](./campaign-ext/CustomWidgetType) | 🔗 |
| C | [GeneratedPrefabContext](./campaign-ext/GeneratedPrefabContext) | 🔗 |
| C | [GeneratedPrefabInstantiationResult](./campaign-ext/GeneratedPrefabInstantiationResult) | 🔗 |
| I | [IGeneratedUIPrefabCreator](./campaign-ext/IGeneratedUIPrefabCreator) | 🔗 |
| C | [PrefabExtension](./campaign-ext/PrefabExtension) | 🔗 |
| C | [PrefabExtensionContext](./campaign-ext/PrefabExtensionContext) | 🔗 |
| C | [VisualDefinitionTemplate](./campaign-ext/VisualDefinitionTemplate) | 🔗 |
| C | [VisualStateTemplate](./campaign-ext/VisualStateTemplate) | 🔗 |
| C | [WidgetAttributeContext](./campaign-ext/WidgetAttributeContext) | 🔗 |
| C | [WidgetAttributeKeyType](./campaign-ext/WidgetAttributeKeyType) | 🔗 |
| C | [WidgetAttributeKeyTypeAttribute](./campaign-ext/WidgetAttributeKeyTypeAttribute) | 🔗 |
| C | [WidgetAttributeKeyTypeId](./campaign-ext/WidgetAttributeKeyTypeId) | 🔗 |
| C | [WidgetAttributeKeyTypeParameter](./campaign-ext/WidgetAttributeKeyTypeParameter) | 🔗 |
| C | [WidgetAttributeTemplate](./campaign-ext/WidgetAttributeTemplate) | 🔗 |
| C | [WidgetAttributeValueType](./campaign-ext/WidgetAttributeValueType) | 🔗 |
| C | [WidgetAttributeValueTypeConstant](./campaign-ext/WidgetAttributeValueTypeConstant) | 🔗 |
| C | [WidgetAttributeValueTypeDefault](./campaign-ext/WidgetAttributeValueTypeDefault) | 🔗 |
| C | [WidgetAttributeValueTypeParameter](./campaign-ext/WidgetAttributeValueTypeParameter) | 🔗 |
| C | [WidgetCreationData](./campaign-ext/WidgetCreationData) | 🔗 |
| C | [WidgetExtensions](./campaign-ext/WidgetExtensions) | 🔗 |
| C | [WidgetFactory](./campaign-ext/WidgetFactory) | 🔗 |
| C | [WidgetInstantiationResult](./campaign-ext/WidgetInstantiationResult) | 🔗 |
| C | [WidgetPrefab](./campaign-ext/WidgetPrefab) | 🔗 |
| C | [WidgetTemplate](./campaign-ext/WidgetTemplate) | 🔗 |

## TaleWorlds.TwoDimension (51)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [BitmapFontCharacter](./campaign-ext/BitmapFontCharacter) | 🔗 |
| C | [EditableText](./campaign-ext/EditableText) | 🔗 |
| C | [Font](./campaign-ext/Font) | 🔗 |
| S | [FontData](./campaign-ext/FontData) | 🔗 |
| E | [FontStyle](./campaign-ext/FontStyle) | 🔗 |
| I | [IDrawObject](./campaign-ext/IDrawObject) | 🔗 |
| I | [ILanguage](./campaign-ext/ILanguage) | 🔗 |
| S | [ImageDrawObject](./campaign-ext/ImageDrawObject) | 🔗 |
| I | [IText](./campaign-ext/IText) | 🔗 |
| I | ITexture | — |
| I | [ITwoDimensionPlatform](./campaign-ext/ITwoDimensionPlatform) | 🔗 |
| I | [ITwoDimensionResourceContext](./campaign-ext/ITwoDimensionResourceContext) | 🔗 |
| C | Material | — |
| C | [MaterialPool](./campaign-ext/MaterialPool) | 🔗 |
| C | [Mathf](./campaign-ext/Mathf) | 🔗 |
| E | [MeshTopology](./campaign-ext/MeshTopology) | 🔗 |
| C | [PrimitivePolygonMaterial](./campaign-ext/PrimitivePolygonMaterial) | 🔗 |
| S | [Quad](./campaign-ext/Quad) | 🔗 |
| S | [Rectangle2D](./campaign-ext/Rectangle2D) | 🔗 |
| C | [RichText](./campaign-ext/RichText) | 🔗 |
| C | [RichTextException](./campaign-ext/RichTextException) | 🔗 |
| C | [RichTextLinkGroup](./campaign-ext/RichTextLinkGroup) | 🔗 |
| C | [RichTextParser](./campaign-ext/RichTextParser) | 🔗 |
| C | [RichTextPart](./campaign-ext/RichTextPart) | 🔗 |
| E | [RichTextPartType](./campaign-ext/RichTextPartType) | 🔗 |
| C | [RichTextTag](./campaign-ext/RichTextTag) | 🔗 |
| C | [RichTextTagParser](./campaign-ext/RichTextTagParser) | 🔗 |
| E | [RichTextTagType](./campaign-ext/RichTextTagType) | 🔗 |
| S | [ScissorTestInfo](./campaign-ext/ScissorTestInfo) | 🔗 |
| C | [SimpleMaterial](./campaign-ext/SimpleMaterial) | 🔗 |
| S | [SimpleRectangle](./campaign-ext/SimpleRectangle) | 🔗 |
| C | [Sprite](./campaign-ext/Sprite) | 🔗 |
| C | [SpriteCategory](./campaign-ext/SpriteCategory) | 🔗 |
| C | [SpriteData](./campaign-ext/SpriteData) | 🔗 |
| C | [SpriteGeneric](./campaign-ext/SpriteGeneric) | 🔗 |
| S | [SpriteNinePatchParameters](./campaign-ext/SpriteNinePatchParameters) | 🔗 |
| C | [SpritePart](./campaign-ext/SpritePart) | 🔗 |
| C | [StyleFontContainer](./campaign-ext/StyleFontContainer) | 🔗 |
| C | [Text](./campaign-ext/Text) | 🔗 |
| S | [TextDrawObject](./campaign-ext/TextDrawObject) | 🔗 |
| E | [TextHorizontalAlignment](./campaign-ext/TextHorizontalAlignment) | 🔗 |
| C | [TextMaterial](./campaign-ext/TextMaterial) | 🔗 |
| C | [TextParser](./campaign-ext/TextParser) | 🔗 |
| C | [TextPart](./campaign-ext/TextPart) | 🔗 |
| C | [TextToken](./campaign-ext/TextToken) | 🔗 |
| C | Texture | — |
| E | [TextVerticalAlignment](./campaign-ext/TextVerticalAlignment) | 🔗 |
| E | TokenType | — |
| C | [TwoDimensionContext](./campaign-ext/TwoDimensionContext) | 🔗 |
| C | [TwoDimensionContextObject](./campaign-ext/TwoDimensionContextObject) | 🔗 |
| C | [TwoDimensionDrawContext](./campaign-ext/TwoDimensionDrawContext) | 🔗 |

## TaleWorlds.TwoDimension.Standalone (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FrameworkDomain](./campaign-ext/FrameworkDomain) | 🔗 |
| C | [GraphicsContext](./campaign-ext/GraphicsContext) | 🔗 |
| C | [GraphicsForm](./campaign-ext/GraphicsForm) | 🔗 |
| I | [IMessageCommunicator](./campaign-ext/IMessageCommunicator) | 🔗 |
| C | [InputData](./campaign-ext/InputData) | 🔗 |
| C | [LayeredWindowController](./campaign-ext/LayeredWindowController) | 🔗 |
| C | [OpenGLTexture](./campaign-ext/OpenGLTexture) | 🔗 |
| C | Shader | — |
| C | [StandaloneInputManager](./campaign-ext/StandaloneInputManager) | 🔗 |
| C | [TwoDimensionPlatform](./campaign-ext/TwoDimensionPlatform) | 🔗 |
| C | [VertexArrayObject](./campaign-ext/VertexArrayObject) | 🔗 |
| C | [WindowsForm](./campaign-ext/WindowsForm) | 🔗 |
| C | [WindowsFramework](./campaign-ext/WindowsFramework) | 🔗 |
| E | [WindowsFrameworkThreadConfig](./campaign-ext/WindowsFrameworkThreadConfig) | 🔗 |

## TaleWorlds.TwoDimension.Standalone.Native.OpenGL (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [BufferBindingTarget](./campaign-ext/BufferBindingTarget) | 🔗 |
| E | [ContextParameter](./campaign-ext/ContextParameter) | 🔗 |
| C | [OpenGlLoadException](./campaign-ext/OpenGlLoadException) | 🔗 |
| E | [ShaderType](./campaign-ext/ShaderType) | 🔗 |
| E | [TextureUnit](./campaign-ext/TextureUnit) | 🔗 |

## TaleWorlds.TwoDimension.Standalone.Native.Windows (24)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlphaFormatFlags](./campaign-ext/AlphaFormatFlags) | 🔗 |
| S | [BitmapInfo](./campaign-ext/BitmapInfo) | 🔗 |
| S | [BitmapInfoHeader](./campaign-ext/BitmapInfoHeader) | 🔗 |
| S | [BlendFunction](./campaign-ext/BlendFunction) | 🔗 |
| E | [BlurBehindConstraints](./campaign-ext/BlurBehindConstraints) | 🔗 |
| E | [D3D_DRIVER_TYPE](./campaign-ext/D3D_DRIVER_TYPE) | 🔗 |
| C | [D3D11](./campaign-ext/D3D11) | 🔗 |
| C | [DXGI](./campaign-ext/DXGI) | 🔗 |
| S | [DXGI_ADAPTER_DESC](./campaign-ext/DXGI_ADAPTER_DESC) | 🔗 |
| S | [DXGI_OUTPUT_DESC](./campaign-ext/DXGI_OUTPUT_DESC) | 🔗 |
| E | [GeoTypeId](./campaign-ext/GeoTypeId) | 🔗 |
| I | [IDXGIAdapter](./campaign-ext/IDXGIAdapter) | 🔗 |
| I | [IDXGIFactory](./campaign-ext/IDXGIFactory) | 🔗 |
| I | [IDXGIOutput](./campaign-ext/IDXGIOutput) | 🔗 |
| C | [Kernel32](./campaign-ext/Kernel32) | 🔗 |
| S | [MONITORINFOEX](./campaign-ext/MONITORINFOEX) | 🔗 |
| S | [NativeMessage](./campaign-ext/NativeMessage) | 🔗 |
| S | [Point](./campaign-ext/Point) | 🔗 |
| S | [RECT](./campaign-ext/RECT) | 🔗 |
| C | [User32](./campaign-ext/User32) | 🔗 |
| S | [WindowClass](./campaign-ext/WindowClass) | 🔗 |
| E | [WindowMessage](./campaign-ext/WindowMessage) | 🔗 |
| E | [WindowShowStyle](./campaign-ext/WindowShowStyle) | 🔗 |
| E | [WindowStyle](./campaign-ext/WindowStyle) | 🔗 |
