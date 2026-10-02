---
title: "DefaultSiegeLordsHallFightModel"
description: "DefaultSiegeLordsHallFightModel: a public class in TaleWorlds.CampaignSystem, inheriting SiegeLordsHallFightModel; 8 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs."
---
# DefaultSiegeLordsHallFightModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`

## Overview

DefaultSiegeLordsHallFightModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs. It is a public class, implementing/inheriting SiegeLordsHallFightModel; the inheritance chain is DefaultSiegeLordsHallFightModel → SiegeLordsHallFightModel → MBGameModel. It exposes 8 public/protected members: 1 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSiegeLordsHallFightModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultSiegeLordsHallFightModel → SiegeLordsHallFightModel → MBGameModel. The surface is property-led (properties 7/8, methods 1/8), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AreaLostRatio` | `public override float AreaLostRatio` | property |
| `AttackerDefenderTroopCountRatio` | `public override float AttackerDefenderTroopCountRatio` | property |
| `DefenderMaxArcherRatio` | `public override float DefenderMaxArcherRatio` | property |
| `MaxDefenderSideTroopCount` | `public override int MaxDefenderSideTroopCount` | property |
| `MaxDefenderArcherCount` | `public override int MaxDefenderArcherCount` | property |
| `MaxAttackerSideTroopCount` | `public override int MaxAttackerSideTroopCount` | property |
| `DefenderTroopNumberForSuccessfulPullBack` | `public override int DefenderTroopNumberForSuccessfulPullBack` | property |
| `GetPriorityListForLordsHallFightMission` | `public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SiegeLordsHallFightModel](../SiegeLordsHallFightModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
