---
title: "DefaultBuildingEffectModel"
description: "DefaultBuildingEffectModel: a public class in TaleWorlds.CampaignSystem, inheriting BuildingEffectModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs."
---
# DefaultBuildingEffectModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBuildingEffectModel : BuildingEffectModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs`

## Overview

DefaultBuildingEffectModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs. It is a public class, implementing/inheriting BuildingEffectModel; the inheritance chain is DefaultBuildingEffectModel → BuildingEffectModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBuildingEffectModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBuildingEffectModel → BuildingEffectModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingEffectModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBuildingEffect` | `public override ExplainedNumber GetBuildingEffect(Building building, BuildingEffectEnum effect)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BuildingEffectModel](../BuildingEffectModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
