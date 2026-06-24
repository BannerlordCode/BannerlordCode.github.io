<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletLayer`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `ScreenLayer`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## 概述

`GauntletLayer` 位于 `TaleWorlds.Engine.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; }` |
| `UIContext` | `public UIContext UIContext { get; }` |

## 主要方法

### OnResourceRefreshBegin
`public void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**用途 / Purpose:** 当 `resource refresh begin` 事件触发时调用此方法。

### OnResourceRefreshEnd
`public void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)`

**用途 / Purpose:** 当 `resource refresh end` 事件触发时调用此方法。

### GetMovieIdentifier
`public GauntletMovieIdentifier GetMovieIdentifier(string movieName)`

**用途 / Purpose:** 获取 `movie identifier` 的当前值。

### LoadMovie
`public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`

**用途 / Purpose:** 加载 `movie` 数据。

### ReleaseMovie
`public void ReleaseMovie(GauntletMovieIdentifier identifier)`

**用途 / Purpose:** 处理 `release movie` 相关逻辑。

### ProcessEvents
`public override void ProcessEvents()`

**用途 / Purpose:** 处理 `process events` 相关逻辑。

### HitTest
`public override bool HitTest(Vector2 position)`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### HitTest
`public override bool HitTest()`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### FocusTest
`public override bool FocusTest()`

**用途 / Purpose:** 处理 `focus test` 相关逻辑。

### IsFocusedOnInput
`public override bool IsFocusedOnInput()`

**用途 / Purpose:** 处理 `is focused on input` 相关逻辑。

### OnOnScreenKeyboardDone
`public override void OnOnScreenKeyboardDone(string inputText)`

**用途 / Purpose:** 当 `on screen keyboard done` 事件触发时调用此方法。

### OnOnScreenKeyboardCanceled
`public override void OnOnScreenKeyboardCanceled()`

**用途 / Purpose:** 当 `on screen keyboard canceled` 事件触发时调用此方法。

### UpdateLayout
`public override void UpdateLayout()`

**用途 / Purpose:** 更新 `layout` 的状态或数据。

### GetIsAvailableForGamepadNavigation
`public bool GetIsAvailableForGamepadNavigation()`

**用途 / Purpose:** 获取 `is available for gamepad navigation` 的当前值。

### DrawDebugInfo
`public override void DrawDebugInfo()`

**用途 / Purpose:** 处理 `draw debug info` 相关逻辑。

## 使用示例

```csharp
var value = new GauntletLayer();
value.OnResourceRefreshBegin(previouslyLoadedMovies);
```

## 参见

- [完整类目录](../catalog)