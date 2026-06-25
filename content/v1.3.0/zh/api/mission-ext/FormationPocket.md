---
title: "FormationPocket"
description: "FormationPocket 的自动生成类参考。"
---
# FormationPocket

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationPocket`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FormationPocket.cs`

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

**用途 / Purpose:** 将 「troop」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FormationPocket 实例
FormationPocket formationPocket = ...;
formationPocket.AddTroop();
```

### IsFormationPocketFilled
`public bool IsFormationPocketFilled()`

**用途 / Purpose:** 判断当前对象是否处于 「formation pocket filled」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FormationPocket 实例
FormationPocket formationPocket = ...;
var result = formationPocket.IsFormationPocketFilled();
```

### UpdateScoreToSeek
`public void UpdateScoreToSeek()`

**用途 / Purpose:** 重新计算并更新 「score to seek」 的最新表示。

```csharp
// 先通过子系统 API 拿到 FormationPocket 实例
FormationPocket formationPocket = ...;
formationPocket.UpdateScoreToSeek();
```

### SetBestScoreSoFar
`public void SetBestScoreSoFar(int bestScoreSoFar)`

**用途 / Purpose:** 为 「best score so far」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 FormationPocket 实例
FormationPocket formationPocket = ...;
formationPocket.SetBestScoreSoFar(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FormationPocket formationPocket = ...;
formationPocket.AddTroop();
```

## 参见

- [本区域目录](../)