---
title: "TacticBreachWalls"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TacticBreachWalls`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticBreachWalls

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticBreachWalls : TacticComponent`
**Base:** `TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticBreachWalls.cs`

## 概述

`TacticBreachWalls` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### TickOccasionally
`public override void TickOccasionally()`

**用途 / Purpose:** 处理 `tick occasionally` 相关逻辑。

### GetRetreatThresholdRatio
`public float GetRetreatThresholdRatio(List<SiegeLane> lanes, int insideFormationCount)`

**用途 / Purpose:** 获取 `retreat threshold ratio` 的当前值。

## 使用示例

```csharp
var value = new TacticBreachWalls();
value.TickOccasionally();
```

## 参见

- [完整类目录](../catalog)