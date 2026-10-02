---
title: "MapVisibilityModel"
description: "Auto-generated class reference for MapVisibilityModel."
---
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel> `
**Base:** MBGameModel<MapVisibilityModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs

## Overview

Auto-generated stub for `MapVisibilityModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### MaximumSeeingRange
`public abstract float MaximumSeeingRange()`

### GetPartySeeingRangeBase
`public abstract float GetPartySeeingRangeBase(MobileParty party)`

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party,bool includeDescriptions = false)`

### GetPartySpottingRatioForMainPartySeeingRange
`public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

### GetMobilePartyVisibilityAndInspectedState
`public abstract void GetMobilePartyVisibilityAndInspectedState(MobileParty mobileParty,Vec2[] points,float seeingRange,out bool isVisible,out bool isInspected,out bool isDistanceDependent)`

### GetSettlementInspectedState
`public abstract void GetSettlementInspectedState(Settlement settlement,Vec2[] points,float seeingRange,out bool isInspected,out bool isDistanceDependent)`

## See Also

- [Section index](../)
