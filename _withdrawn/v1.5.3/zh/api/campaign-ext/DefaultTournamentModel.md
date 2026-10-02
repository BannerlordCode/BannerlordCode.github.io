---
title: "DefaultTournamentModel"
description: "DefaultTournamentModel 的自动生成类参考。"
---
# DefaultTournamentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTournamentModel : TournamentModel `
**Base:** TournamentModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs

## 概述

`DefaultTournamentModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateTournament
`public override TournamentGame CreateTournament(Town town) `

### GetTournamentStartChance
`public override float GetTournamentStartChance(Town town) `

### GetNumLeaderboardVictoriesAtGameStart
`public override int GetNumLeaderboardVictoriesAtGameStart() `

### GetTournamentEndChance
`public override float GetTournamentEndChance(TournamentGame tournament) `

### GetTournamentSimulationScore
`public override float GetTournamentSimulationScore(CharacterObject character) `

### GetRenownReward
`public override int GetRenownReward(Hero winner,Town town) `

### GetInfluenceReward
`public override int GetInfluenceReward(Hero winner,Town town) `

### GetSkillXpGainFromTournament
`public override ValueTuple<SkillObject,int> GetSkillXpGainFromTournament(Town town) `

### GetParticipantArmor
`public override Equipment GetParticipantArmor(CharacterObject participant) `

### GetRegularRewardItems
`public override MBList<ItemObject> GetRegularRewardItems(Town town,int regularRewardMinValue,int regularRewardMaxValue) `

### GetEliteRewardItems
`public override MBList<ItemObject> GetEliteRewardItems(Town town,int regularRewardMinValue,int regularRewardMaxValue) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
