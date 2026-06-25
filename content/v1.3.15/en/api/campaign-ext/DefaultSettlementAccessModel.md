---
title: "DefaultSettlementAccessModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementAccessModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementAccessModel : SettlementAccessModel`
**Base:** `SettlementAccessModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementAccessModel.cs`

## Overview

`DefaultSettlementAccessModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementAccessModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanMainHeroEnterSettlement
`public override void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object can `main hero enter settlement`.

### CanMainHeroEnterDungeon
`public override void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object can `main hero enter dungeon`.

### CanMainHeroEnterLordsHall
`public override void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object can `main hero enter lords hall`.

### CanMainHeroAccessLocation
`public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object can `main hero access location`.

### IsRequestMeetingOptionAvailable
`public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**Purpose:** Handles logic related to `is request meeting option available`.

### CanMainHeroDoSettlementAction
`public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object can `main hero do settlement action`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel());
```

## See Also

- [Complete Class Catalog](../catalog)