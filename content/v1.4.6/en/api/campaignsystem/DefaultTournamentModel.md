---
title: "DefaultTournamentModel"
description: "DefaultTournamentModel: a public class in TaleWorlds.CampaignSystem, inheriting TournamentModel; 11 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs."
---
# DefaultTournamentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTournamentModel : TournamentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`

## Overview

DefaultTournamentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs. It is a public class, implementing/inheriting TournamentModel; the inheritance chain is DefaultTournamentModel → TournamentModel → MBGameModel. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTournamentModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultTournamentModel → TournamentModel → MBGameModel. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateTournament` | `public override TournamentGame CreateTournament(Town town)` | method |
| `GetTournamentStartChance` | `public override float GetTournamentStartChance(Town town)` | method |
| `GetNumLeaderboardVictoriesAtGameStart` | `public override int GetNumLeaderboardVictoriesAtGameStart()` | method |
| `GetTournamentEndChance` | `public override float GetTournamentEndChance(TournamentGame tournament)` | method |
| `GetTournamentSimulationScore` | `public override float GetTournamentSimulationScore(CharacterObject character)` | method |
| `GetRenownReward` | `public override int GetRenownReward(Hero winner, Town town)` | method |
| `GetInfluenceReward` | `public override int GetInfluenceReward(Hero winner, Town town)` | method |
| `int>GetSkillXpGainFromTournament` | `public override ValueTuple<SkillObject, int>GetSkillXpGainFromTournament(Town town)` | method |
| `GetParticipantArmor` | `public override Equipment GetParticipantArmor(CharacterObject participant)` | method |
| `MBList` | `public override MBList<ItemObject>GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)` | method |
| `MBList` | `public override MBList<ItemObject>GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TournamentModel](../TournamentModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
