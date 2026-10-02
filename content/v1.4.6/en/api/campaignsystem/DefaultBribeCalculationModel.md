---
title: "DefaultBribeCalculationModel"
description: "DefaultBribeCalculationModel: a public class in TaleWorlds.CampaignSystem, inheriting BribeCalculationModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs."
---
# DefaultBribeCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## Overview

DefaultBribeCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs. It is a public class, implementing/inheriting BribeCalculationModel; the inheritance chain is DefaultBribeCalculationModel → BribeCalculationModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBribeCalculationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBribeCalculationModel → BribeCalculationModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsBribeNotNeededToEnterKeep` | `public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)` | method |
| `IsBribeNotNeededToEnterDungeon` | `public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)` | method |
| `GetBribeToEnterLordsHall` | `public override int GetBribeToEnterLordsHall(Settlement settlement)` | method |
| `GetBribeToEnterDungeon` | `public override int GetBribeToEnterDungeon(Settlement settlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BribeCalculationModel](../BribeCalculationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
