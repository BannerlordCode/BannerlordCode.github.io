---
title: "TournamentMatch"
description: "TournamentMatch 的自动生成类参考。"
---
# TournamentMatch

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentMatch`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs`

## 概述

`TournamentMatch` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Teams` | `public IEnumerable<TournamentTeam> Teams { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `State` | `public TournamentMatch.MatchState State { get; }` |
| `Winners` | `public IEnumerable<TournamentParticipant> Winners { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## 主要方法

### End
`public void End()`

**用途 / Purpose:** 处理与 「end」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
tournamentMatch.End();
```

### Start
`public void Start()`

**用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
tournamentMatch.Start();
```

### GetParticipant
`public TournamentParticipant GetParticipant(int uniqueSeed)`

**用途 / Purpose:** 读取并返回当前对象中 「participant」 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.GetParticipant(0);
```

### IsParticipantRequired
`public bool IsParticipantRequired()`

**用途 / Purpose:** 判断当前对象是否处于 「participant required」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.IsParticipantRequired();
```

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime)`

**用途 / Purpose:** 将 「participant」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
tournamentMatch.AddParticipant(participant, false);
```

### IsPlayerParticipating
`public bool IsPlayerParticipating()`

**用途 / Purpose:** 判断当前对象是否处于 「player participating」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.IsPlayerParticipating();
```

### IsPlayerWinner
`public bool IsPlayerWinner()`

**用途 / Purpose:** 判断当前对象是否处于 「player winner」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentMatch 实例
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.IsPlayerWinner();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentMatch tournamentMatch = ...;
tournamentMatch.End();
```

## 参见

- [本区域目录](../)