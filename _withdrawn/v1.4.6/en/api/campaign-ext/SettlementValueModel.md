---
title: "SettlementValueModel"
description: "SettlementValueModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SettlementValueModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementValueModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementValueModel : MBGameModel<SettlementValueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SettlementValueModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementValueModel>; the inheritance chain is SettlementValueModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementValueModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SettlementValueModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FindMostSuitableHomeSettlement` | `public abstract Settlement FindMostSuitableHomeSettlement(Clan clan);` | method |
| `CalculateSettlementValueForFaction` | `public abstract float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction);` | method |
| `CalculateSettlementBaseValue` | `public abstract float CalculateSettlementBaseValue(Settlement settlement);` | method |
| `CalculateSettlementValueForEnemyHero` | `public abstract float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
