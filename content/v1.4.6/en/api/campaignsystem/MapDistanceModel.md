---
title: "MapDistanceModel"
description: "MapDistanceModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MapDistanceModel>; 21 exposed members (15 methods, 4 properties, 1 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs."
---
# MapDistanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapDistanceModel : MBGameModel<MapDistanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs`

## Overview

MapDistanceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MapDistanceModel>; the inheritance chain is MapDistanceModel → MBGameModel. It exposes 21 public/protected members: 15 methods, 4 properties, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapDistanceModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MapDistanceModel → MBGameModel. The surface is method-led (methods 15/21, properties 4/21), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MapDistanceModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegionSwitchCostFromLandToSea` | `public abstract int RegionSwitchCostFromLandToSea` | property |
| `RegionSwitchCostFromSeaToLand` | `public abstract int RegionSwitchCostFromSeaToLand` | property |
| `MaximumSpawnDistanceForCompanionsAfterDisband` | `public abstract float MaximumSpawnDistanceForCompanionsAfterDisband` | property |
| `GetMaximumDistanceBetweenTwoConnectedSettlements` | `public abstract float GetMaximumDistanceBetweenTwoConnectedSettlements(MobileParty.NavigationType navigationType);` | method |
| `GetLandRatioOfPathBetweenSettlements` | `public abstract float GetLandRatioOfPathBetweenSettlements(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort);` | method |
| `GetDistance` | `public abstract float GetDistance(MobileParty fromMobileParty, Settlement toSettlement, bool isTargetingPort, MobileParty.NavigationType customCapability, out float estimatedLandRatio);` | method |
| `GetDistance` | `public abstract float GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio);` | method |
| `GetDistance` | `public abstract bool GetDistance(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, float maxDistance, out float distance, out float landRatio);` | method |
| `GetDistance` | `public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability);` | method |
| `GetDistance` | `public abstract float GetDistance(Settlement fromSettlement, Settlement toSettlement, bool isFromPort, bool isTargetingPort, MobileParty.NavigationType navigationCapability, out float landRatio);` | method |
| `GetDistance` | `public abstract float GetDistance(MobileParty fromMobileParty, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType, out float landRatio);` | method |
| `GetDistance` | `public abstract float GetDistance(Settlement fromSettlement, in CampaignVec2 toPoint, bool isFromPort, MobileParty.NavigationType navigationType);` | method |
| `GetPortToGateDistanceForSettlement` | `public abstract float GetPortToGateDistanceForSettlement(Settlement settlement);` | method |
| `PathExistBetweenPoints` | `public abstract bool PathExistBetweenPoints(in CampaignVec2 fromPoint, in CampaignVec2 toPoint, MobileParty.NavigationType navigationType);` | method |
| `RegisterDistanceCache` | `public abstract void RegisterDistanceCache(MobileParty.NavigationType navigationCapability, MapDistanceModel.INavigationCache cacheToRegister);` | method |
| `bool>GetClosestEntranceToFace` | `public abstract ValueTuple<Settlement, bool>GetClosestEntranceToFace(PathFaceRecord face, MobileParty.NavigationType navigationCapabilities);` | method |
| `MBReadOnlyList` | `public abstract MBReadOnlyList<Settlement>GetNeighborsOfFortification(Town town, MobileParty.NavigationType navigationCapabilities);` | method |
| `GetTransitionCostAdjustment` | `public abstract float GetTransitionCostAdjustment(Settlement settlement1, bool isFromPort, Settlement settlement2, bool isTargetingPort, bool fromIsCurrentlyAtSea, bool toIsCurrentlyAtSea);` | method |
| `PossibleMaximumMapBoundary` | `public const float PossibleMaximumMapBoundary` | field |
| `INavigationCache` | `public interface INavigationCache` | property |
| `INavigationCache` | `public interface INavigationCache` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
