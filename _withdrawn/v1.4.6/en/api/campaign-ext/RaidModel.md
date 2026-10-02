---
title: "RaidModel"
description: "RaidModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<RaidModel>; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RaidModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

RaidModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<RaidModel>; the inheritance chain is RaidModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RaidModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain RaidModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `float>>GetCommonLootItemScores` | `public abstract MBReadOnlyList<ValueTuple<ItemObject, float>>GetCommonLootItemScores();` | method |
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth` | property |
| `CalculateHitDamage` | `public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints);` | method |
| `GetRaidLootMultiplier` | `public abstract ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
