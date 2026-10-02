---
title: "DefaultTournamentModel"
description: "DefaultTournamentModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting TournamentModel; 11 exposed members (11 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultTournamentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTournamentModel : TournamentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultTournamentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs. It is a public class, implementing/inheriting TournamentModel; the inheritance chain is DefaultTournamentModel → TournamentModel → MBGameModel → GameModel. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTournamentModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultTournamentModel → TournamentModel → MBGameModel → GameModel. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TournamentModel](../TournamentModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
