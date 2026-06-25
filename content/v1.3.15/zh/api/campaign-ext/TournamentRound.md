---
title: "TournamentRound"
description: "TournamentRound 的自动生成类参考。"
---
# TournamentRound

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentRound`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs`

## 概述

`TournamentRound` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Matches` | `public TournamentMatch Matches { get; }` |
| `CurrentMatchIndex` | `public int CurrentMatchIndex { get; }` |
| `CurrentMatch` | `public TournamentMatch CurrentMatch { get; }` |

## 主要方法

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 match ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TournamentRound 实例
TournamentRound tournamentRound = ...;
tournamentRound.OnMatchEnded();
```

### EndMatch
`public void EndMatch()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndMatch 对应的操作。

```csharp
// 先通过子系统 API 拿到 TournamentRound 实例
TournamentRound tournamentRound = ...;
tournamentRound.EndMatch();
```

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime = false)`

**用途 / Purpose:** **用途 / Purpose:** 将 participant 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TournamentRound 实例
TournamentRound tournamentRound = ...;
tournamentRound.AddParticipant(participant, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentRound tournamentRound = ...;
tournamentRound.OnMatchEnded();
```

## 参见

- [本区域目录](../)