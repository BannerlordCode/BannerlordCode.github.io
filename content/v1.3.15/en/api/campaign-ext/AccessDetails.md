---
title: "AccessDetails"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AccessDetails`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessDetails

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct AccessDetails`
**Area:** campaign-ext

## Overview

`AccessDetails` lives in `TaleWorlds.CampaignSystem.ComponentInterfaces`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ComponentInterfaces` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CanMainHeroEnterSettlement
`public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object can `main hero enter settlement`.

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object can `main hero enter lords hall`.

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object can `main hero enter dungeon`.

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object can `main hero access location`.

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object can `main hero do settlement action`.

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**Purpose:** Handles logic related to `is request meeting option available`.

## Usage Example

```csharp
// First obtain a AccessDetails instance from game state, then call one of its public methods
var value = new AccessDetails();
value.CanMainHeroEnterSettlement(settlement, accessDetails);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
