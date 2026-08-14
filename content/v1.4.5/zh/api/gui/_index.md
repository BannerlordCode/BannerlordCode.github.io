---
title: "gui 目录"
description: Gauntlet UI 系统类参考目录
---

## 心智模型

一句话洞察：`gui` 桶不是某一个类，而是 Bannerlord Gauntlet UI 运行时的**整套地基**——从屏幕栈门面（ScreenManager）到一次加载出来的 XAML 实例（GauntletMovie），再到控件树、布局测量、文本光栅化、手柄导航，以及最底层的原生 2D 绘制（Shader / Material / Texture / OpenGL / Dwmapi）被粘合在一起，共同构成「界面内容该怎么渲染、怎么跑」这一层。

这个桶把分散在 `TaleWorlds.ScreenSystem`、`TaleWorlds.GauntletUI(.Data/.Layout/.GamepadNavigation)`、`TaleWorlds.TwoDimension` 以及原生图形互操作（Gdi32 / Opengl32 / Dwmapi）中的 UI 相关类型汇到了一处。最高层是 `ScreenManager`——静态门面，持有屏幕栈、选出 `TopScreen`、并把引擎每帧的 `Tick` / `Update` / `LateTick` 派发给活动屏及其 `ScreenLayer`。再往下，`GauntletMovie` 是一次 `LoadMovie` 加载出来的 XAML 实例，内部持有 `RootWidget`（控件树根）、`WidgetFactory`、`BrushFactory` 和绑定的 `ViewModel`。

控件树之下是真正的 UI 机械：`WidgetContainer` 按 `Update` / `LateUpdate` / `VisualDefinition` / `UpdateBrushes` 等阶段收集并刷新 `Widget`；`LayoutBox` 用 `Left/Right/Top/Bottom` 做布局矩形测量；`TextHelper` / `TextMeshGenerator` 做位图字体文本的光栅化与网格生成；`GamepadNavigationHelper` 计算手柄导航的几何与候选控件。最底层则是 `Shader` / `Material` / `Texture` 与 OpenGL / Dwmapi / Gdi32 互操作，把 2D 绘制真正画到屏上。

它站在引擎的 `GauntletLayer` 之上：`ScreenManager` 通过屏幕栈决定哪些层当前活动，而 `GauntletLayer`（见 `../engine/`）正是承载 Gauntlet UI 的 `ScreenLayer` 宿主——你把 `GauntletMovie` 挂到它上面，gui 桶的运行时才真正跑起来。换句话说，gui 桶在 engine 的 `GauntletLayer` 之上提供「界面内容与运行逻辑」，在 `viewmodel` 桶（见 `../viewmodel/`）之下消费它提供的绑定数据。

## 核心入口类型

- [ScreenManager](./ScreenManager)：静态门面，屏幕栈 + `TopScreen` + 每帧层派发，是 GUI 层唯一公开入口。
- [GauntletMovie](./GauntletMovie)：一次 `LoadMovie` 的 XAML 实例，含 `RootWidget` / `WidgetFactory` / `BrushFactory` 与绑定 `ViewModel`。
- [WidgetContainer](./WidgetContainer)：按阶段（`Update` / `LateUpdate` / `VisualDefinition` …）收集维护控件树的容器。
- [LayoutBox](./LayoutBox)：布局矩形（`Left` / `Right` / `Top` / `Bottom`），布局测量的基础结构。
- [TextHelper](./TextHelper)：位图字体文本光栅化，文本排版入口。
- [TextMeshGenerator](./TextMeshGenerator)：由文本生成可渲染网格。
- [GamepadNavigationHelper](./GamepadNavigationHelper)：手柄导航的几何与候选控件计算。
- [TwoDimensionDrawData](./TwoDimensionDrawData)：2D 绘制数据载体。
- [EmptyWidget](./EmptyWidget)：无外观的空控件基元，常用于布局占位。
- [ViewBindCommandInfo](./ViewBindCommandInfo)：XAML 视图绑定命令的元信息。

## 与其他模块的关系

与 **engine 桶**（见 `../engine/`）的关系：gui 桶本身不负责把 UI 接入游戏循环，那是 `GauntletLayer` 的工作。`GauntletLayer` 是 engine 桶里承载 Gauntlet UI 的 `ScreenLayer`，`ScreenManager` 管理的屏幕栈决定哪个 `GauntletLayer` 当前活动；gui 桶的 `GauntletMovie` 与控件树就运行在它里面。

与 **viewmodel 桶**（见 `../viewmodel/`）的关系：`GauntletMovie` 绑定的正是 viewmodel 桶的 ViewModel 家族（`IViewModel` / `ViewModel`）。没有 viewmodel 提供数据，gui 桶的控件树只是空壳；数据变化经 `RefreshDataSource` / `RefreshBindingWithChildren` 回流到控件。此外，UI 运行时任何异常（绑定失败、控件树崩溃）都可能经由架构层的[崩溃边界](../../architecture/crash-boundaries/)策略被隔离，避免拖垮整个游戏循环。

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.ScreenSystem | [ScreenManager](./ScreenManager) | 持有屏幕栈并向活动层派发每帧工作。 | 应用和屏幕切换期间。 |
| TaleWorlds.GauntletUI.Data | [GauntletMovie](./GauntletMovie) | 表示一个加载的 XAML Movie、根控件和数据上下文。 | 从 `LoadMovie` 到卸载期间。 |
| TaleWorlds.GauntletUI | [WidgetContainer](./WidgetContainer) | 在更新和布局阶段维护控件子树。 | 控件树活动期间。 |
| TaleWorlds.GauntletUI.Layout | [LayoutBox](./LayoutBox) | 承载布局测量所使用的矩形。 | measure/arrange 阶段。 |
| TaleWorlds.TwoDimension.BitmapFont | [TextHelper](./TextHelper) | 将本地化文本转换为位图字体布局数据。 | 文本控件刷新时。 |
| TaleWorlds.GauntletUI.GamepadNavigation | [GamepadNavigationHelper](./GamepadNavigationHelper) | 根据控件几何位置选择手柄导航候选项。 | 焦点移动期间。 |
| TaleWorlds.GauntletUI | [EmptyWidget](./EmptyWidget) | 提供无外观控件，用于间距或条件布局。 | 构建父级控件树时。 |
| TaleWorlds.GauntletUI.Data | [ViewBindCommandInfo](./ViewBindCommandInfo) | 描述 Movie 数据层发现的命令绑定。 | ViewModel 绑定期间。 |

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

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
