---
title: "GamepadNavigationForcedScopeCollection"
description: "GamepadNavigationForcedScopeCollection 的自动生成类参考。"
---
# GamepadNavigationForcedScopeCollection

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GamepadNavigationForcedScopeCollection`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`

## 概述

`GamepadNavigationForcedScopeCollection` 位于 `TaleWorlds.GauntletUI.GamepadNavigation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.GamepadNavigation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Scopes` | `public List<GamepadNavigationScope> Scopes { get; }` |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope { get; set; }` |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope { get; set; }` |

## 主要方法

### IsAvailable
`public bool IsAvailable()`

**用途 / Purpose:** 判断当前对象是否处于 「available」 状态或条件。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationForcedScopeCollection 实例
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
var result = gamepadNavigationForcedScopeCollection.IsAvailable();
```

### AddScope
`public void AddScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 将 「scope」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationForcedScopeCollection 实例
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.AddScope(scope);
```

### RemoveScope
`public void RemoveScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 从当前容器或状态中移除 「scope」。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationForcedScopeCollection 实例
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.RemoveScope(scope);
```

### ClearScopes
`public void ClearScopes()`

**用途 / Purpose:** 清空当前对象中的「scopes」。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationForcedScopeCollection 实例
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.ClearScopes();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationForcedScopeCollection 实例
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
var result = gamepadNavigationForcedScopeCollection.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GamepadNavigationForcedScopeCollection gamepadNavigationForcedScopeCollection = ...;
gamepadNavigationForcedScopeCollection.IsAvailable();
```

## 参见

- [本区域目录](../)