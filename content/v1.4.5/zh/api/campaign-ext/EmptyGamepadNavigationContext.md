---
title: "EmptyGamepadNavigationContext"
description: "EmptyGamepadNavigationContext 的自动生成类参考。"
---
# EmptyGamepadNavigationContext

**Namespace:** (global)
**Module:** (global)
**Type:** `public class EmptyGamepadNavigationContext : IGamepadNavigationContext`
**Base:** `IGamepadNavigationContext`
**File:** `bin/TaleWorlds.GauntletUI/EmptyGamepadNavigationContext.cs`

## 概述

`EmptyGamepadNavigationContext` 位于 `(global)`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `(global)` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddForcedScopeCollection
`public void AddForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**用途 / Purpose:** 将 「forced scope collection」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.AddForcedScopeCollection(collection);
```

### AddNavigationScope
`public void AddNavigationScope(GamepadNavigationScope scope, bool initialize)`

**用途 / Purpose:** 将 「navigation scope」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.AddNavigationScope(scope, false);
```

### GainNavigationAfterFrames
`public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate)`

**用途 / Purpose:** 处理与 「gain navigation after frames」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.GainNavigationAfterFrames(0, predicate);
```

### GainNavigationAfterTime
`public void GainNavigationAfterTime(float seconds, Func<bool> predicate)`

**用途 / Purpose:** 处理与 「gain navigation after time」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.GainNavigationAfterTime(0, predicate);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnFinalize();
```

### GetIsBlockedAtPosition
`public bool GetIsBlockedAtPosition(Vector2 position)`

**用途 / Purpose:** 读取并返回当前对象中 「is blocked at position」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.GetIsBlockedAtPosition(position);
```

### GetLastScreenOrder
`public int GetLastScreenOrder()`

**用途 / Purpose:** 读取并返回当前对象中 「last screen order」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.GetLastScreenOrder();
```

### HasNavigationScope
`public bool HasNavigationScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 判断当前对象是否已经持有 「navigation scope」。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.HasNavigationScope(scope);
```

### HasNavigationScope
`public bool HasNavigationScope(Func<GamepadNavigationScope, bool> predicate)`

**用途 / Purpose:** 判断当前对象是否已经持有 「navigation scope」。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.HasNavigationScope(func<GamepadNavigationScope, false);
```

### IsAvailableForNavigation
`public bool IsAvailableForNavigation()`

**用途 / Purpose:** 判断当前对象是否处于 「available for navigation」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
var result = emptyGamepadNavigationContext.IsAvailableForNavigation();
```

### OnGainNavigation
`public void OnGainNavigation()`

**用途 / Purpose:** 在 「gain navigation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnGainNavigation();
```

### OnMovieLoaded
`public void OnMovieLoaded(string movieName)`

**用途 / Purpose:** 在 「movie loaded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnMovieLoaded("example");
```

### OnMovieReleased
`public void OnMovieReleased(string movieName)`

**用途 / Purpose:** 在 「movie released」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnMovieReleased("example");
```

### OnWidgetNavigationIndexUpdated
`public void OnWidgetNavigationIndexUpdated(Widget widget)`

**用途 / Purpose:** 在 「widget navigation index updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnWidgetNavigationIndexUpdated(widget);
```

### OnWidgetNavigationStatusChanged
`public void OnWidgetNavigationStatusChanged(Widget widget)`

**用途 / Purpose:** 在 「widget navigation status changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnWidgetNavigationStatusChanged(widget);
```

### OnWidgetUsedNavigationMovementsUpdated
`public void OnWidgetUsedNavigationMovementsUpdated(Widget widget)`

**用途 / Purpose:** 在 「widget used navigation movements updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.OnWidgetUsedNavigationMovementsUpdated(widget);
```

### RemoveForcedScopeCollection
`public void RemoveForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)`

**用途 / Purpose:** 从当前容器或状态中移除 「forced scope collection」。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.RemoveForcedScopeCollection(collection);
```

### RemoveNavigationScope
`public void RemoveNavigationScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 从当前容器或状态中移除 「navigation scope」。

```csharp
// 先通过子系统 API 拿到 EmptyGamepadNavigationContext 实例
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.RemoveNavigationScope(scope);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EmptyGamepadNavigationContext emptyGamepadNavigationContext = ...;
emptyGamepadNavigationContext.AddForcedScopeCollection(collection);
```

## 参见

- [本区域目录](../)