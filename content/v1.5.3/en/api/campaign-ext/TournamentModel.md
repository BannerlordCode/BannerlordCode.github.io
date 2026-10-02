---
title: "TournamentModel"
description: "Auto-generated class reference for TournamentModel."
---
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel> `
**Base:** MBGameModel<TournamentModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs

## Overview

Auto-generated stub for `TournamentModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
