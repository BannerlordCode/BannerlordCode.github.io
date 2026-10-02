---
title: "TournamentModel"
description: "TournamentModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<TournamentModel>; 11 exposed members (11 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

TournamentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TournamentModel>; the inheritance chain is TournamentModel → MBGameModel → GameModel. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain TournamentModel → MBGameModel → GameModel. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTournamentStartChance` | `public abstract float GetTournamentStartChance(Town town);` | method |
| `CreateTournament` | `public abstract TournamentGame CreateTournament(Town town);` | method |
| `GetTournamentEndChance` | `public abstract float GetTournamentEndChance(TournamentGame tournament);` | method |
| `GetNumLeaderboardVictoriesAtGameStart` | `public abstract int GetNumLeaderboardVictoriesAtGameStart();` | method |
| `GetTournamentSimulationScore` | `public abstract float GetTournamentSimulationScore(CharacterObject character);` | method |
| `GetRenownReward` | `public abstract int GetRenownReward(Hero winner, Town town);` | method |
| `GetInfluenceReward` | `public abstract int GetInfluenceReward(Hero winner, Town town);` | method |
| `int>GetSkillXpGainFromTournament` | `public abstract ValueTuple<SkillObject, int>GetSkillXpGainFromTournament(Town town);` | method |
| `GetParticipantArmor` | `public abstract Equipment GetParticipantArmor(CharacterObject participant);` | method |
| `MBList` | `public abstract MBList<ItemObject>GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue);` | method |
| `MBList` | `public abstract MBList<ItemObject>GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
