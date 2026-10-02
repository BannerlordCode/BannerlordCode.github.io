---
title: "SiegeLordsHallFightModel"
description: "SiegeLordsHallFightModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SiegeLordsHallFightModel>; 8 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLordsHallFightModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SiegeLordsHallFightModel : MBGameModel<SiegeLordsHallFightModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SiegeLordsHallFightModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SiegeLordsHallFightModel>; the inheritance chain is SiegeLordsHallFightModel → MBGameModel → GameModel. It exposes 8 public/protected members: 1 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeLordsHallFightModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SiegeLordsHallFightModel → MBGameModel → GameModel. The surface is property-led (properties 7/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AreaLostRatio` | `public abstract float AreaLostRatio` | property |
| `AttackerDefenderTroopCountRatio` | `public abstract float AttackerDefenderTroopCountRatio` | property |
| `DefenderTroopNumberForSuccessfulPullBack` | `public abstract int DefenderTroopNumberForSuccessfulPullBack` | property |
| `DefenderMaxArcherRatio` | `public abstract float DefenderMaxArcherRatio` | property |
| `MaxDefenderSideTroopCount` | `public abstract int MaxDefenderSideTroopCount` | property |
| `MaxDefenderArcherCount` | `public abstract int MaxDefenderArcherCount` | property |
| `MaxAttackerSideTroopCount` | `public abstract int MaxAttackerSideTroopCount` | property |
| `GetPriorityListForLordsHallFightMission` | `public abstract FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
