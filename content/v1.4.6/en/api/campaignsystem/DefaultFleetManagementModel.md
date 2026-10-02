---
title: "DefaultFleetManagementModel"
description: "DefaultFleetManagementModel: a public class in TaleWorlds.CampaignSystem, inheriting FleetManagementModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs."
---
# DefaultFleetManagementModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultFleetManagementModel : FleetManagementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs`

## Overview

DefaultFleetManagementModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs. It is a public class, implementing/inheriting FleetManagementModel; the inheritance chain is DefaultFleetManagementModel → FleetManagementModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultFleetManagementModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultFleetManagementModel → FleetManagementModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultFleetManagementModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumTroopCountRequiredToSendShips` | `public override int MinimumTroopCountRequiredToSendShips` | property |
| `CanSendShipToPlayerClan` | `public override bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint)` | method |
| `CanTroopsReturn` | `public override bool CanTroopsReturn()` | method |
| `GetReturnTimeForTroops` | `public override CampaignTime GetReturnTimeForTroops(Ship ship)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface FleetManagementModel](../FleetManagementModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
