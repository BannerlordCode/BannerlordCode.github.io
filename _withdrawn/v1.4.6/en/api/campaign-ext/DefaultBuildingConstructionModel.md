---
title: "DefaultBuildingConstructionModel"
description: "DefaultBuildingConstructionModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting BuildingConstructionModel; 8 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultBuildingConstructionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs. It is a public class, implementing/inheriting BuildingConstructionModel; the inheritance chain is DefaultBuildingConstructionModel → BuildingConstructionModel → MBGameModel → GameModel. It exposes 8 public/protected members: 4 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBuildingConstructionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultBuildingConstructionModel → BuildingConstructionModel → MBGameModel → GameModel. The surface is method-led (methods 4/8, properties 4/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TownBoostCost` | `public override int TownBoostCost` | property |
| `TownBoostBonus` | `public override int TownBoostBonus` | property |
| `CastleBoostCost` | `public override int CastleBoostCost` | property |
| `CastleBoostBonus` | `public override int CastleBoostBonus` | property |
| `CalculateDailyConstructionPower` | `public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)` | method |
| `CalculateDailyConstructionPowerWithoutBoost` | `public override int CalculateDailyConstructionPowerWithoutBoost(Town town)` | method |
| `GetBoostAmount` | `public override int GetBoostAmount(Town town)` | method |
| `GetBoostCost` | `public override int GetBoostCost(Town town)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BuildingConstructionModel](../BuildingConstructionModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
