---
title: "PartyTrainingModel"
description: "PartyTrainingModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PartyTrainingModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTrainingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PartyTrainingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyTrainingModel>; the inheritance chain is PartyTrainingModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTrainingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PartyTrainingModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GenerateSharedXp` | `public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty);` | method |
| `CalculateXpGainFromBattles` | `public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party);` | method |
| `GetXpReward` | `public abstract int GetXpReward(CharacterObject character);` | method |
| `GetEffectiveDailyExperience` | `public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
