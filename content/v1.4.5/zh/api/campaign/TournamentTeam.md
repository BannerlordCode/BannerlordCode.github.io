---
title: "TournamentTeam"
description: "TournamentTeam 的自动生成类参考。"
---
# TournamentTeam

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentTeam`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentTeam.cs`

## 概述

`TournamentTeam` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TeamSize` | `public int TeamSize { get; }` |
| `TeamColor` | `public uint TeamColor { get; }` |
| `TeamBanner` | `public Banner TeamBanner { get; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; }` |
| `Score` | `public int Score { get; }` |

## 主要方法

### IsParticipantRequired
`public bool IsParticipantRequired()`

**用途 / Purpose:** 判断当前对象是否处于 participant required 状态或条件。

```csharp
// 先通过子系统 API 拿到 TournamentTeam 实例
TournamentTeam tournamentTeam = ...;
var result = tournamentTeam.IsParticipantRequired();
```

### AddParticipant
`public void AddParticipant(TournamentParticipant participant)`

**用途 / Purpose:** 将 participant 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TournamentTeam 实例
TournamentTeam tournamentTeam = ...;
tournamentTeam.AddParticipant(participant);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TournamentTeam tournamentTeam = ...;
tournamentTeam.IsParticipantRequired();
```

## 参见

- [本区域目录](../)