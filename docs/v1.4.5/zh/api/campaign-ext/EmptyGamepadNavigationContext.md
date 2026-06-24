<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmptyGamepadNavigationContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EmptyGamepadNavigationContext

**Namespace:** (global)
**Module:** (global)
**Type:** `public class EmptyGamepadNavigationContext : IGamepadNavigationContext`
**Base:** `IGamepadNavigationContext`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/EmptyGamepadNavigationContext.cs`

## 概述

`EmptyGamepadNavigationContext` 位于 `(global)`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `(global)` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddForcedScopeCollection
`public void AddForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**用途 / Purpose:** 向当前集合/状态中添加 `forced scope collection`。

### AddNavigationScope
`public void AddNavigationScope(GamepadNavigationScope scope, bool initialize)`

**用途 / Purpose:** 向当前集合/状态中添加 `navigation scope`。

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate)`

**用途 / Purpose:** 处理 `gain navigation after frames` 相关逻辑。

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate)`

**用途 / Purpose:** 处理 `gain navigation after time` 相关逻辑。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### GetIsBlockedAtPosition
`public bool GetIsBlockedAtPosition(Vector2 position)`

**用途 / Purpose:** 获取 `is blocked at position` 的当前值。

### GetLastScreenOrder
`public int GetLastScreenOrder()`

**用途 / Purpose:** 获取 `last screen order` 的当前值。

### HasNavigationScope
`public bool HasNavigationScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `navigation scope`。

### HasNavigationScope
`public bool HasNavigationScope(Func<GamepadNavigationScope, bool> predicate)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `navigation scope`。

### IsAvailableForNavigation
`public bool IsAvailableForNavigation()`

**用途 / Purpose:** 处理 `is available for navigation` 相关逻辑。

### OnGainNavigation
`public void OnGainNavigation()`

**用途 / Purpose:** 当 `gain navigation` 事件触发时调用此方法。

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**用途 / Purpose:** 当 `movie loaded` 事件触发时调用此方法。

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**用途 / Purpose:** 当 `movie released` 事件触发时调用此方法。

### OnWidgetNavigationIndexUpdated
`public void OnWidgetNavigationIndexUpdated(Widget widget)`

**用途 / Purpose:** 当 `widget navigation index updated` 事件触发时调用此方法。

### OnWidgetNavigationStatusChanged
`public void OnWidgetNavigationStatusChanged(Widget widget)`

**用途 / Purpose:** 当 `widget navigation status changed` 事件触发时调用此方法。

### OnWidgetUsedNavigationMovementsUpdated
`public void OnWidgetUsedNavigationMovementsUpdated(Widget widget)`

**用途 / Purpose:** 当 `widget used navigation movements updated` 事件触发时调用此方法。

### RemoveForcedScopeCollection
`public void RemoveForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**用途 / Purpose:** 从当前集合/状态中移除 `forced scope collection`。

### RemoveNavigationScope
`public void RemoveNavigationScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 从当前集合/状态中移除 `navigation scope`。

## 使用示例

```csharp
var value = new EmptyGamepadNavigationContext();
value.AddForcedScopeCollection(collection);
```

## 参见

- [完整类目录](../catalog)