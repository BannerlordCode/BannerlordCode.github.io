---
title: "BadgeManager"
description: "BadgeManager 的自动生成类参考。"
---
# BadgeManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BadgeManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/BadgeManager.cs`

## 概述

`BadgeManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BadgeManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Badges` | `public static List<Badge> Badges { get; }` |
| `IsInitialized` | `public static bool IsInitialized { get; }` |

## 主要方法

### InitializeWithXML
`public static void InitializeWithXML(string xmlPath)`

**用途 / Purpose:** 为 「with x m l」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
BadgeManager.InitializeWithXML("example");
```

### OnFinalize
`public static void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
BadgeManager.OnFinalize();
```

### GetByIndex
`public static Badge GetByIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「by index」 的结果。

```csharp
// 静态调用，不需要实例
BadgeManager.GetByIndex(0);
```

### GetById
`public static Badge GetById(string id)`

**用途 / Purpose:** 读取并返回当前对象中 「by id」 的结果。

```csharp
// 静态调用，不需要实例
BadgeManager.GetById("example");
```

### GetByType
`public static List<Badge> GetByType(BadgeType type)`

**用途 / Purpose:** 读取并返回当前对象中 「by type」 的结果。

```csharp
// 静态调用，不需要实例
BadgeManager.GetByType(type);
```

### GetBadgeConditionValue
`public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)`

**用途 / Purpose:** 读取并返回当前对象中 「badge condition value」 的结果。

```csharp
// 静态调用，不需要实例
BadgeManager.GetBadgeConditionValue(playerData, condition);
```

### GetBadgeConditionNumericValue
`public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)`

**用途 / Purpose:** 读取并返回当前对象中 「badge condition numeric value」 的结果。

```csharp
// 静态调用，不需要实例
BadgeManager.GetBadgeConditionNumericValue(playerData, condition);
```

## 使用示例

```csharp
var manager = BadgeManager.Current;
```

## 参见

- [本区域目录](../)