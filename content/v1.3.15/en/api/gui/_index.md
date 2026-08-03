---
title: "gui index"
description: Gauntlet UI system class reference index
---
## Mental Model

The GUI bucket owns the Gauntlet content runtime: `ScreenManager` selects active layers, `GauntletMovie` binds a view-model to a widget tree, and layout, text, and navigation helpers update that tree. The movie and widgets are transient; the screen or layer that loaded them owns cleanup.

Use these APIs to compose or inspect UI content. Use `ViewModel` for data and `GauntletLayer` for the engine host. Do not mutate campaign state from layout or widget callbacks, and do not retain widgets after a movie is unloaded.

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.ScreenSystem | [ScreenManager](./ScreenManager) | Owns the screen stack and dispatches frame work to active layers. | During application and screen transitions. |
| TaleWorlds.GauntletUI.Data | [GauntletMovie](./GauntletMovie) | Represents one loaded XAML movie with its root widget and data context. | From `LoadMovie` until unload. |
| TaleWorlds.GauntletUI | [WidgetContainer](./WidgetContainer) | Maintains widget children across update and layout phases. | While a widget tree is active. |
| TaleWorlds.GauntletUI.Layout | [LayoutBox](./LayoutBox) | Carries the measured rectangle used by layout passes. | During measure and arrange. |
| TaleWorlds.TwoDimension.BitmapFont | [TextHelper](./TextHelper) | Converts localized text into bitmap-font layout data. | When text widgets refresh. |
| TaleWorlds.GauntletUI.GamepadNavigation | [GamepadNavigationHelper](./GamepadNavigationHelper) | Chooses directional navigation candidates from widget geometry. | During focus movement. |
| TaleWorlds.GauntletUI | [EmptyWidget](./EmptyWidget) | Provides a no-visual widget used for spacing or conditional layout. | While a parent tree is built. |
| TaleWorlds.GauntletUI.Data | [ViewBindCommandInfo](./ViewBindCommandInfo) | Describes a command binding discovered by the movie data layer. | During view-model binding. |

<!-- BEGIN SECTION INDEX -->

## Parent Navigation

- [API Reference](../)
- [Version Home](../../)

## Child Classes — Alphabetical

### A

- [ArrayType](./ArrayType)
- [AttribueMask](./AttribueMask)
- [AutoPinner](./AutoPinner)

### B

- [BeginMode](./BeginMode)
- [BlendingDestinationFactor](./BlendingDestinationFactor)
- [BlendingSourceFactor](./BlendingSourceFactor)

### C

- [CursorMovementDirection](./CursorMovementDirection)

### D

- [DataType](./DataType)
- [Dwmapi](./Dwmapi)
- [DwmBlurBehind](./DwmBlurBehind)

### E

- [EmptyWidget](./EmptyWidget)

### G

- [GamepadNavigationHelper](./GamepadNavigationHelper)
- [GamepadNavigationScopeCollection](./GamepadNavigationScopeCollection)
- [GauntletEvent](./GauntletEvent)
- [GauntletMovie](./GauntletMovie)
- [Gdi32](./Gdi32)

### H

- [HintMode](./HintMode)

### I

- [ImageFitResult](./ImageFitResult)
- [ITexture](./ITexture)

### K

- [KeyboardAction](./KeyboardAction)

### L

- [LayoutBox](./LayoutBox)

### M

- [Material](./Material)
- [MatrixMode](./MatrixMode)
- [MouseState](./MouseState)

### O

- [Opengl32](./Opengl32)
- [Opengl32ARB](./Opengl32ARB)

### P

- [PixelFormat](./PixelFormat)
- [PixelFormatDescriptor](./PixelFormatDescriptor)
- [PixelFormatDescriptorFlags](./PixelFormatDescriptorFlags)
- [PixelFormatDescriptorLayerTypes](./PixelFormatDescriptorLayerTypes)
- [PixelFormatDescriptorPixelTypes](./PixelFormatDescriptorPixelTypes)

### S

- [ScreenManager](./ScreenManager)
- [ScrollbarInterpolationController](./ScrollbarInterpolationController)
- [Shader](./Shader)
- [ShadingModel](./ShadingModel)
- [SpriteFromTexture](./SpriteFromTexture)
- [SpriteSizeComparer](./SpriteSizeComparer)

### T

- [Target](./Target)
- [TextHelper](./TextHelper)
- [TextLineOutput](./TextLineOutput)
- [TextMeshGenerator](./TextMeshGenerator)
- [TextOutput](./TextOutput)
- [TextTokenOutput](./TextTokenOutput)
- [Texture](./Texture)
- [TextureInternalFormat](./TextureInternalFormat)
- [TextureMagFilter](./TextureMagFilter)
- [TextureParameterName](./TextureParameterName)
- [TextureWrapParameter](./TextureWrapParameter)
- [TokenType](./TokenType)
- [TwoDimensionDrawData](./TwoDimensionDrawData)
- [Type](./Type)

### U

- [UpdateAction](./UpdateAction)

### V

- [ViewBindCommandInfo](./ViewBindCommandInfo)
- [ViewBindDataInfo](./ViewBindDataInfo)

### W

- [WidgetContainer](./WidgetContainer)
- [WidgetInstantiationResultExtensionData](./WidgetInstantiationResultExtensionData)


<!-- END SECTION INDEX -->
