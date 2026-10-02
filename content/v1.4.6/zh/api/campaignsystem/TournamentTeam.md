---
title: "TournamentTeam"
description: "TournamentTeam：TaleWorlds.CampaignSystem 的 public 类；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs。"
---
# TournamentTeam

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentTeam`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs`

## 概述

TournamentTeam 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs。它是一个 public 类，继承链为 TournamentTeam。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentTeam 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.TournamentGames），继承链 TournamentTeam。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TeamSize` | `public int TeamSize` | 属性 |
| `TeamColor` | `public uint TeamColor` | 属性 |
| `TeamBanner` | `public Banner TeamBanner` | 属性 |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | 属性 |
| `IEnumerable` | `public IEnumerable<TournamentParticipant>Participants` | 属性 |
| `Score` | `public int Score` | 属性 |
| `TournamentTeam` | `public TournamentTeam(int teamSize, uint teamColor, Banner teamBanner)` | 构造函数 |
| `IsParticipantRequired` | `public bool IsParticipantRequired()` | 方法 |
| `AddParticipant` | `public void AddParticipant(TournamentParticipant participant)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FightTournamentGame](../FightTournamentGame)
- [同命名空间 ITournamentManager](../ITournamentManager)
- [同命名空间 TournamentCampaignBehavior](../TournamentCampaignBehavior)
- [同命名空间 TournamentGame](../TournamentGame)
