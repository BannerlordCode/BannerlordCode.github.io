---
title: "DefaultSettlementAccessModel"
description: "Auto-generated class reference for DefaultSettlementAccessModel."
---
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

**Purpose:** Checks whether the current object meets the preconditions for `main hero enter settlement`.

```csharp
// Obtain an instance of DefaultSettlementAccessModel from the subsystem API first
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
defaultSettlementAccessModel.CanMainHeroEnterSettlement(settlement, accessDetails);
```

### CanMainHeroEnterDungeon
`public override void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero enter dungeon`.

```csharp
// Obtain an instance of DefaultSettlementAccessModel from the subsystem API first
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
defaultSettlementAccessModel.CanMainHeroEnterDungeon(settlement, accessDetails);
```

### CanMainHeroEnterLordsHall
`public override void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero enter lords hall`.

```csharp
// Obtain an instance of DefaultSettlementAccessModel from the subsystem API first
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
defaultSettlementAccessModel.CanMainHeroEnterLordsHall(settlement, accessDetails);
```

### CanMainHeroAccessLocation
`public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero access location`.

```csharp
// Obtain an instance of DefaultSettlementAccessModel from the subsystem API first
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
var result = defaultSettlementAccessModel.CanMainHeroAccessLocation(settlement, "example", disableOption, disabledText);
```

### IsRequestMeetingOptionAvailable
`public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**Purpose:** Determines whether the current object is in the `request meeting option available` state or condition.

```csharp
// Obtain an instance of DefaultSettlementAccessModel from the subsystem API first
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
var result = defaultSettlementAccessModel.IsRequestMeetingOptionAvailable(settlement, disableOption, disabledText);
```

### CanMainHeroDoSettlementAction
`public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**Purpose:** Checks whether the current object meets the preconditions for `main hero do settlement action`.

```csharp
// Obtain an instance of DefaultSettlementAccessModel from the subsystem API first
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
var result = defaultSettlementAccessModel.CanMainHeroDoSettlementAction(settlement, settlementAction, disableOption, disabledText);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel());
```

## See Also

- [Area Index](../)