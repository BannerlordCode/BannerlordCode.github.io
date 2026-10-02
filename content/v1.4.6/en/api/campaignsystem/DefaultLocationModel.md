---
title: "DefaultLocationModel"
description: "DefaultLocationModel: a public class in TaleWorlds.CampaignSystem, inheriting LocationModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs."
---
# DefaultLocationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultLocationModel : LocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs`

## Overview

DefaultLocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs. It is a public class, implementing/inheriting LocationModel; the inheritance chain is DefaultLocationModel → LocationModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultLocationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultLocationModel → LocationModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSettlementUpgradeLevel` | `public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)` | method |
| `GetCivilianSceneLevel` | `public override string GetCivilianSceneLevel(Settlement settlement)` | method |
| `GetCivilianUpgradeLevelTag` | `public override string GetCivilianUpgradeLevelTag(int upgradeLevel)` | method |
| `GetUpgradeLevelTag` | `public override string GetUpgradeLevelTag(int upgradeLevel)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface LocationModel](../LocationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
