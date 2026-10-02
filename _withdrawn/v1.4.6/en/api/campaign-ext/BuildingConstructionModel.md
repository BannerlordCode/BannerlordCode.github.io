---
title: "BuildingConstructionModel"
description: "BuildingConstructionModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BuildingConstructionModel>; 8 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BuildingConstructionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BuildingConstructionModel>; the inheritance chain is BuildingConstructionModel → MBGameModel → GameModel. It exposes 8 public/protected members: 4 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BuildingConstructionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BuildingConstructionModel → MBGameModel → GameModel. The surface is method-led (methods 4/8, properties 4/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TownBoostCost` | `public abstract int TownBoostCost` | property |
| `TownBoostBonus` | `public abstract int TownBoostBonus` | property |
| `CastleBoostCost` | `public abstract int CastleBoostCost` | property |
| `CastleBoostBonus` | `public abstract int CastleBoostBonus` | property |
| `CalculateDailyConstructionPower` | `public abstract ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false);` | method |
| `CalculateDailyConstructionPowerWithoutBoost` | `public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town);` | method |
| `GetBoostCost` | `public abstract int GetBoostCost(Town town);` | method |
| `GetBoostAmount` | `public abstract int GetBoostAmount(Town town);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
