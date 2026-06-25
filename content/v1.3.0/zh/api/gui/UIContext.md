---
title: "UIContext"
description: "UIContext 的自动生成类参考。"
---
# UIContext

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class UIContext`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs`

## 概述

`UIContext` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveCursorOfContext` | `public UIContext.MouseCursors ActiveCursorOfContext { get; set; }` |
| `IsDynamicScaleEnabled` | `public bool IsDynamicScaleEnabled { get; }` |
| `ScaleModifier` | `public float ScaleModifier { get; }` |
| `ContextAlpha` | `public float ContextAlpha { get; }` |
| `Scale` | `public float Scale { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `CustomInverseScale` | `public float CustomInverseScale { get; }` |
| `CurrentLanugageCode` | `public string CurrentLanugageCode { get; }` |
| `UIRandom` | `public Random UIRandom { get; }` |
| `InverseScale` | `public float InverseScale { get; }` |
| `EventManager` | `public EventManager EventManager { get; }` |
| `Root` | `public Widget Root { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `TwoDimensionContext` | `public TwoDimensionContext TwoDimensionContext { get; }` |
| `Brushes` | `public IEnumerable<Brush> Brushes { get; }` |
| `DefaultBrush` | `public Brush DefaultBrush { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |
| `BrushFactory` | `public BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `InputContext` | `public IReadonlyInputContext InputContext { get; }` |
| `GamepadNavigation` | `public IGamepadNavigationContext GamepadNavigation { get; }` |
| `LocalFrameNumber` | `public ulong LocalFrameNumber { get; }` |

## 主要方法

### GetBrush
`public Brush GetBrush(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「brush」 的结果。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
var result = uIContext.GetBrush("example");
```

### RefreshResources
`public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)`

**用途 / Purpose:** 使 「resources」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.RefreshResources(spriteData, fontFactory, brushFactory);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.Initialize();
```

### InitializeGamepadNavigation
`public void InitializeGamepadNavigation(IGamepadNavigationContext context)`

**用途 / Purpose:** 为 「gamepad navigation」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.InitializeGamepadNavigation(context);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.OnFinalize();
```

### Update
`public void Update(float dt)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.Update(0);
```

### LateUpdate
`public void LateUpdate(float dt)`

**用途 / Purpose:** 处理与 「late update」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.LateUpdate(0);
```

### RenderTick
`public void RenderTick(float dt)`

**用途 / Purpose:** 推进 「render」 状态的周期性更新。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.RenderTick(0);
```

### OnOnScreenkeyboardTextInputDone
`public void OnOnScreenkeyboardTextInputDone(string inputText)`

**用途 / Purpose:** 在 「on screenkeyboard text input done」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.OnOnScreenkeyboardTextInputDone("example");
```

### OnOnScreenKeyboardCanceled
`public void OnOnScreenKeyboardCanceled()`

**用途 / Purpose:** 在 「on screen keyboard canceled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.OnOnScreenKeyboardCanceled();
```

### HitTest
`public bool HitTest(Widget root, Vector2 position)`

**用途 / Purpose:** 处理与 「hit test」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
var result = uIContext.HitTest(root, position);
```

### HitTest
`public bool HitTest(Widget root)`

**用途 / Purpose:** 处理与 「hit test」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
var result = uIContext.HitTest(root);
```

### FocusTest
`public bool FocusTest(Widget root)`

**用途 / Purpose:** 处理与 「focus test」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
var result = uIContext.FocusTest(root);
```

### SetIsMouseEnabled
`public void SetIsMouseEnabled(bool isMouseEnabled)`

**用途 / Purpose:** 为 「is mouse enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.SetIsMouseEnabled(false);
```

### UpdateInput
`public void UpdateInput(InputType handleInputs)`

**用途 / Purpose:** 重新计算并更新 「input」 的最新表示。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.UpdateInput(handleInputs);
```

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**用途 / Purpose:** 在 「movie loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.OnMovieLoaded("example");
```

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**用途 / Purpose:** 在 「movie released」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.OnMovieReleased("example");
```

### DrawWidgetDebugInfo
`public void DrawWidgetDebugInfo()`

**用途 / Purpose:** 获取或维护 「draw widget debug info」 数据。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.DrawWidgetDebugInfo();
```

### DebugDraw
`public void DebugDraw()`

**用途 / Purpose:** 处理与 「debug draw」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 UIContext 实例
UIContext uIContext = ...;
uIContext.DebugDraw();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
UIContext uIContext = ...;
uIContext.GetBrush("example");
```

## 参见

- [本区域目录](../)