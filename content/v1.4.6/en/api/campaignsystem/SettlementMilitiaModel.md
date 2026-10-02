---
title: "SettlementMilitiaModel"
description: "SettlementMilitiaModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementMilitiaModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs."
---
# SettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`

## Overview

SettlementMilitiaModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementMilitiaModel>; the inheritance chain is SettlementMilitiaModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementMilitiaModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementMilitiaModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege` | `public abstract int MilitiaToSpawnAfterSiege(Town town);` | method |
| `CalculateMilitiaChange` | `public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false);` | method |
| `CalculateVeteranMilitiaSpawnChance` | `public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement);` | method |
| `CalculateMilitiaSpawnRate` | `public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
