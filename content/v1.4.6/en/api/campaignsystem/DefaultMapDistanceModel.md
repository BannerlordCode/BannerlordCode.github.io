---
title: "DefaultMapDistanceModel"
description: "DefaultMapDistanceModel: a public class in TaleWorlds.CampaignSystem, inheriting MapDistanceModel; 18 exposed members (15 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs."
---
# DefaultMapDistanceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapDistanceModel : MapDistanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs`

## Overview

DefaultMapDistanceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs. It is a public class, implementing/inheriting MapDistanceModel; the inheritance chain is DefaultMapDistanceModel → MapDistanceModel → MBGameModel. It exposes 18 public/protected members: 15 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMapDistanceModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMapDistanceModel → MapDistanceModel → MBGameModel. The surface is method-led (methods 15/18, properties 3/18), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMapDistanceModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegionSwitchCostFromLandToSea` | `public override int RegionSwitchCostFromLandToSea` | property |
| `RegionSwitchCostFromSeaToLand` | `public override int RegionSwitchCostFromSeaToLand` | property |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public override float MaximumSpawnDistanceForCompanionsAfterDisband` | property |
| `RegisterDistanceCache` | `public override void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister)` | method |
| `GetMaximumDistanceBetweenTwoConnectedSettlements` | `public override float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationCapabilities)` | method |
| `GetLandRatioOfPathBetweenSettlements` | `public override float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort)` | method |
| `GetDistance` | `public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort = false, bool isTargetingPort = false, MobileParty.NavigationType navigationCapability = MobileParty.NavigationType.Default)` | method |
| `GetDistance` | `public override float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio)` | method |
| `GetDistance` | `public override float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio)` | method |
| `GetDistance` | `public override float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)` | method |
| `GetDistance` | `public override bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio)` | method |
| `GetDistance` | `public override float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType customCapability, out float landRatio)` | method |
| `GetDistance` | `public override float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType customCapability)` | method |
| `GetPortToGateDistanceForSettlement` | `public override float GetPortToGateDistanceForSettlement(Settlement settlement)` | method |
| `PathExistBetweenPoints` | `public override bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType)` | method |
| `bool>GetClosestEntranceToFace` | `public override ValueTuple<Settlement, bool>GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities)` | method |
| `MBReadOnlyList` | `public override MBReadOnlyList<Settlement>GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities)` | method |
| `GetTransitionCostAdjustment` | `public override float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapDistanceModel](../MapDistanceModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
