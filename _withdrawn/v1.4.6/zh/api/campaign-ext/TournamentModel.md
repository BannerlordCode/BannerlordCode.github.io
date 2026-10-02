---
title: "TournamentModel"
description: "TournamentModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<TournamentModel>；公开成员 11 个（方法 11、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

TournamentModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<TournamentModel>，继承链为 TournamentModel → MBGameModel → GameModel。public/protected 成员共 11 个：11 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 TournamentModel → MBGameModel → GameModel。成员构成以方法为主（方法 11/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTournamentStartChance` | `public abstract float GetTournamentStartChance(Town town);` | 方法 |
| `CreateTournament` | `public abstract TournamentGame CreateTournament(Town town);` | 方法 |
| `GetTournamentEndChance` | `public abstract float GetTournamentEndChance(TournamentGame tournament);` | 方法 |
| `GetNumLeaderboardVictoriesAtGameStart` | `public abstract int GetNumLeaderboardVictoriesAtGameStart();` | 方法 |
| `GetTournamentSimulationScore` | `public abstract float GetTournamentSimulationScore(CharacterObject character);` | 方法 |
| `GetRenownReward` | `public abstract int GetRenownReward(Hero winner, Town town);` | 方法 |
| `GetInfluenceReward` | `public abstract int GetInfluenceReward(Hero winner, Town town);` | 方法 |
| `int>GetSkillXpGainFromTournament` | `public abstract ValueTuple<SkillObject, int>GetSkillXpGainFromTournament(Town town);` | 方法 |
| `GetParticipantArmor` | `public abstract Equipment GetParticipantArmor(CharacterObject participant);` | 方法 |
| `MBList` | `public abstract MBList<ItemObject>GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue);` | 方法 |
| `MBList` | `public abstract MBList<ItemObject>GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
