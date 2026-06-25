---
title: "UIContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
| `Name` | `public string Name { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
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

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetBrush
`public Brush GetBrush(string name)`

**用途 / Purpose:** 获取 `brush` 的当前值。

### RefreshResources
`public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)`

**用途 / Purpose:** 刷新 `resources` 的显示或缓存。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### Update
`public void Update(float dt)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### LateUpdate
`public void LateUpdate(float dt)`

**用途 / Purpose:** 处理 `late update` 相关逻辑。

### RenderTick
`public void RenderTick(float dt)`

**用途 / Purpose:** 处理 `render tick` 相关逻辑。

### InitializeGamepadNavigation
`public void InitializeGamepadNavigation(IGamepadNavigationContext context)`

**用途 / Purpose:** 初始化 `gamepad navigation` 的状态、资源或绑定。

### OnOnScreenkeyboardTextInputDone
`public void OnOnScreenkeyboardTextInputDone(string inputText)`

**用途 / Purpose:** 当 `on screenkeyboard text input done` 事件触发时调用此方法。

### OnOnScreenKeyboardCanceled
`public void OnOnScreenKeyboardCanceled()`

**用途 / Purpose:** 当 `on screen keyboard canceled` 事件触发时调用此方法。

### HitTest
`public bool HitTest(Widget root, Vector2 position)`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### HitTest
`public bool HitTest(Widget root)`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### FocusTest
`public bool FocusTest(Widget root)`

**用途 / Purpose:** 处理 `focus test` 相关逻辑。

### SetIsMouseEnabled
`public void SetIsMouseEnabled(bool isMouseEnabled)`

**用途 / Purpose:** 设置 `is mouse enabled` 的值或状态。

### UpdateInput
`public void UpdateInput(InputType handleInputs)`

**用途 / Purpose:** 更新 `input` 的状态或数据。

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**用途 / Purpose:** 当 `movie loaded` 事件触发时调用此方法。

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**用途 / Purpose:** 当 `movie released` 事件触发时调用此方法。

### DrawWidgetDebugInfo
`public void DrawWidgetDebugInfo()`

**用途 / Purpose:** 处理 `draw widget debug info` 相关逻辑。

### DebugDraw
`public void DebugDraw()`

**用途 / Purpose:** 处理 `debug draw` 相关逻辑。

## 使用示例

```csharp
var value = new UIContext();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)