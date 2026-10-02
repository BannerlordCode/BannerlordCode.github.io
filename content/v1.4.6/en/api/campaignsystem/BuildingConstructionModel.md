---
title: "BuildingConstructionModel"
description: "BuildingConstructionModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<BuildingConstructionModel>; 8 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs."
---
# BuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs`

## Overview

BuildingConstructionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BuildingConstructionModel>; the inheritance chain is BuildingConstructionModel → MBGameModel. It exposes 8 public/protected members: 4 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BuildingConstructionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain BuildingConstructionModel → MBGameModel. The surface is method-led (methods 4/8, properties 4/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingConstructionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
