---
title: "TournamentParticipant"
description: "TournamentParticipant：TaleWorlds.CampaignSystem 的 public 类；公开成员 11 个（方法 3、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs。"
---
# TournamentParticipant

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentParticipant`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs`

## 概述

TournamentParticipant 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs。它是一个 public 类，继承链为 TournamentParticipant。public/protected 成员共 11 个：3 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentParticipant 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.TournamentGames），继承链 TournamentParticipant。成员构成以属性为主（属性 7/11，方法 3/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Score` | `public int Score` | 属性 |
| `Character` | `public CharacterObject Character` | 属性 |
| `Descriptor` | `public UniqueTroopDescriptor Descriptor` | 属性 |
| `Team` | `public TournamentTeam Team` | 属性 |
| `MatchEquipment` | `public Equipment MatchEquipment` | 属性 |
| `IsAssigned` | `public bool IsAssigned` | 属性 |
| `IsPlayer` | `public bool IsPlayer` | 属性 |
| `TournamentParticipant` | `public TournamentParticipant(CharacterObject character, UniqueTroopDescriptor descriptor = default(UniqueTroopDescriptor))` | 构造函数 |
| `SetTeam` | `public void SetTeam(TournamentTeam team)` | 方法 |
| `AddScore` | `public int AddScore(int score)` | 方法 |
| `ResetScore` | `public void ResetScore()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FightTournamentGame](../FightTournamentGame)
- [同命名空间 ITournamentManager](../ITournamentManager)
- [同命名空间 TournamentCampaignBehavior](../TournamentCampaignBehavior)
- [同命名空间 TournamentGame](../TournamentGame)
