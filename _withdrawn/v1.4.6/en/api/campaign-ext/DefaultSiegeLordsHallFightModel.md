---
title: "DefaultSiegeLordsHallFightModel"
description: "DefaultSiegeLordsHallFightModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SiegeLordsHallFightModel; 8 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSiegeLordsHallFightModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSiegeLordsHallFightModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs. It is a public class, implementing/inheriting SiegeLordsHallFightModel; the inheritance chain is DefaultSiegeLordsHallFightModel → SiegeLordsHallFightModel → MBGameModel → GameModel. It exposes 8 public/protected members: 1 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSiegeLordsHallFightModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSiegeLordsHallFightModel → SiegeLordsHallFightModel → MBGameModel → GameModel. The surface is property-led (properties 7/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SiegeLordsHallFightModel](../SiegeLordsHallFightModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
