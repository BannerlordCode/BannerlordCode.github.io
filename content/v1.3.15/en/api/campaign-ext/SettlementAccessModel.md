---
title: "SettlementAccessModel"
description: "Auto-generated class reference for SettlementAccessModel."
---
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

**Purpose:** Checks whether the current object meets the preconditions for `main hero enter settlement`.

```csharp
// Obtain an instance of SettlementAccessModel from the subsystem API first
SettlementAccessModel settlementAccessModel = ...;
settlementAccessModel.CanMainHeroEnterSettlement(settlement, accessDetails);
```

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero enter lords hall`.

```csharp
// Obtain an instance of SettlementAccessModel from the subsystem API first
SettlementAccessModel settlementAccessModel = ...;
settlementAccessModel.CanMainHeroEnterLordsHall(settlement, accessDetails);
```

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero enter dungeon`.

```csharp
// Obtain an instance of SettlementAccessModel from the subsystem API first
SettlementAccessModel settlementAccessModel = ...;
settlementAccessModel.CanMainHeroEnterDungeon(settlement, accessDetails);
```

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero access location`.

```csharp
// Obtain an instance of SettlementAccessModel from the subsystem API first
SettlementAccessModel settlementAccessModel = ...;
var result = settlementAccessModel.CanMainHeroAccessLocation(settlement, "example", disableOption, disabledText);
```

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero do settlement action`.

```csharp
// Obtain an instance of SettlementAccessModel from the subsystem API first
SettlementAccessModel settlementAccessModel = ...;
var result = settlementAccessModel.CanMainHeroDoSettlementAction(settlement, settlementAction, disableOption, disabledText);
```

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**Purpose:** Determines whether the current object is in the `request meeting option available` state or condition.

```csharp
// Obtain an instance of SettlementAccessModel from the subsystem API first
SettlementAccessModel settlementAccessModel = ...;
var result = settlementAccessModel.IsRequestMeetingOptionAvailable(settlement, disableOption, disabledText);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementAccessModel instance = ...;
```

## See Also

- [Area Index](../)