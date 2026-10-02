---
title: "TournamentModel"
description: "TournamentModel 的自动生成类参考。"
---
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel> `
**Base:** MBGameModel<TournamentModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs

## 概述

`TournamentModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTournamentStartChance
`public abstract float GetTournamentStartChance(Town town)`

### CreateTournament
`public abstract TournamentGame CreateTournament(Town town)`

### GetTournamentEndChance
`public abstract float GetTournamentEndChance(TournamentGame tournament)`

### GetNumLeaderboardVictoriesAtGameStart
`public abstract int GetNumLeaderboardVictoriesAtGameStart()`

### GetTournamentSimulationScore
`public abstract float GetTournamentSimulationScore(CharacterObject character)`

### GetRenownReward
`public abstract int GetRenownReward(Hero winner,Town town)`

### GetInfluenceReward
`public abstract int GetInfluenceReward(Hero winner,Town town)`

### GetSkillXpGainFromTournament
`public abstract ValueTuple<SkillObject,int> GetSkillXpGainFromTournament(Town town)`

### GetParticipantArmor
`public abstract Equipment GetParticipantArmor(CharacterObject participant)`

### GetRegularRewardItems
`public abstract MBList<ItemObject> GetRegularRewardItems(Town town,int regularRewardMinValue,int regularRewardMaxValue)`

### GetEliteRewardItems
`public abstract MBList<ItemObject> GetEliteRewardItems(Town town,int regularRewardMinValue,int regularRewardMaxValue)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
