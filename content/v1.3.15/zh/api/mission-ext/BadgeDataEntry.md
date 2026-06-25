---
title: "BadgeDataEntry"
description: "BadgeDataEntry 的自动生成类参考。"
---
# BadgeDataEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BadgeDataEntry`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs`

## 概述

`BadgeDataEntry` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BadgeId` | `public string BadgeId { get; set; }` |
| `ConditionId` | `public string ConditionId { get; set; }` |
| `Count` | `public int Count { get; set; }` |

## 主要方法

### ToDictionary
`public static Dictionary<ValueTuple<PlayerId, string, string>, int> ToDictionary(List<BadgeDataEntry> entries)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToDictionary 对应的操作。

```csharp
// 静态调用，不需要实例
BadgeDataEntry.ToDictionary(entries);
```

### ToList
`public static List<BadgeDataEntry> ToList(Dictionary<ValueTuple<PlayerId, string, string>, int> dictionary)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToList 对应的操作。

```csharp
// 静态调用，不需要实例
BadgeDataEntry.ToList(dictionary<ValueTuple<PlayerId, "example", "example", 0);
```

## 使用示例

```csharp
BadgeDataEntry.ToDictionary(entries);
```

## 参见

- [本区域目录](../)