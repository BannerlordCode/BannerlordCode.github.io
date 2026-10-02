---
title: "DefaultBuildingConstructionModel"
description: "DefaultBuildingConstructionModel: a public class in TaleWorlds.CampaignSystem, inheriting BuildingConstructionModel; 8 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs."
---
# DefaultBuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`

## Overview

DefaultBuildingConstructionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs. It is a public class, implementing/inheriting BuildingConstructionModel; the inheritance chain is DefaultBuildingConstructionModel → BuildingConstructionModel → MBGameModel. It exposes 8 public/protected members: 4 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBuildingConstructionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBuildingConstructionModel → BuildingConstructionModel → MBGameModel. The surface is method-led (methods 4/8, properties 4/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BuildingConstructionModel](../BuildingConstructionModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
