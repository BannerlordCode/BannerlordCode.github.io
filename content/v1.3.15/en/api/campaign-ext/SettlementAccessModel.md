---
title: "SettlementAccessModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementAccessModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**Base:** `MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## Overview

`SettlementAccessModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementAccessModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var implementation = new CustomSettlementAccessModel();
```

## See Also

- [Complete Class Catalog](../catalog)