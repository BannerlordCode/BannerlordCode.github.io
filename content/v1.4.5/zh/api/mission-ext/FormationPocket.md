---
title: "FormationPocket"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationPocket`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FormationPocket

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationPocket`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationPocket.cs`

## 概述

`FormationPocket` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PriorityFunction` | `public Func<Agent, int> PriorityFunction { get; }` |
| `MaxValue` | `public int MaxValue { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `Index` | `public int Index { get; }` |
| `AddedTroopCount` | `public int AddedTroopCount { get; }` |
| `ScoreToSeek` | `public int ScoreToSeek { get; }` |
| `BestScoreSoFar` | `public int BestScoreSoFar { get; }` |

## 主要方法

### AddTroop
`public void AddTroop()`

**用途 / Purpose:** 向当前集合/状态中添加 `troop`。

### IsFormationPocketFilled
`public bool IsFormationPocketFilled()`

**用途 / Purpose:** 处理 `is formation pocket filled` 相关逻辑。

### UpdateScoreToSeek
`public void UpdateScoreToSeek()`

**用途 / Purpose:** 更新 `score to seek` 的状态或数据。

### SetBestScoreSoFar
`public void SetBestScoreSoFar(int bestScoreSoFar)`

**用途 / Purpose:** 设置 `best score so far` 的值或状态。

## 使用示例

```csharp
var value = new FormationPocket();
value.AddTroop();
```

## 参见

- [完整类目录](../catalog)