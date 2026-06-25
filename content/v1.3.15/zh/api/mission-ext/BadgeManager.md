---
title: "BadgeManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BadgeManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BadgeManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BadgeManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`

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

**用途 / Purpose:** 初始化 `with x m l` 的状态、资源或绑定。

### OnFinalize
`public static void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### GetByIndex
`public static Badge GetByIndex(int index)`

**用途 / Purpose:** 获取 `by index` 的当前值。

### GetById
`public static Badge GetById(string id)`

**用途 / Purpose:** 获取 `by id` 的当前值。

### GetByType
`public static List<Badge> GetByType(BadgeType type)`

**用途 / Purpose:** 获取 `by type` 的当前值。

### GetBadgeConditionValue
`public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)`

**用途 / Purpose:** 获取 `badge condition value` 的当前值。

### GetBadgeConditionNumericValue
`public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)`

**用途 / Purpose:** 获取 `badge condition numeric value` 的当前值。

## 使用示例

```csharp
var manager = BadgeManager.Current;
```

## 参见

- [完整类目录](../catalog)