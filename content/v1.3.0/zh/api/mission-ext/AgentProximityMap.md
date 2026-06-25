---
title: "AgentProximityMap"
description: "AgentProximityMap 的自动生成类参考。"
---
# AgentProximityMap

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentProximityMap`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentProximityMap.cs`

## 概述

`AgentProximityMap` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastFoundAgent` | `public Agent LastFoundAgent { get; set; }` |

## 主要方法

### CanSearchRadius
`public static bool CanSearchRadius(float searchRadius)`

**用途 / Purpose:** 检查当前对象是否满足 「search radius」 的前置条件。

```csharp
// 静态调用，不需要实例
AgentProximityMap.CanSearchRadius(0);
```

### BeginSearch
`public static AgentProximityMap.ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
AgentProximityMap.BeginSearch(mission, searchPos, 0, false);
```

### FindNext
`public static void FindNext(Mission mission, ref AgentProximityMap.ProximityMapSearchStruct searchStruct)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「next」。

```csharp
// 静态调用，不需要实例
AgentProximityMap.FindNext(mission, searchStruct);
```

## 使用示例

```csharp
AgentProximityMap.CanSearchRadius(0);
```

## 参见

- [本区域目录](../)