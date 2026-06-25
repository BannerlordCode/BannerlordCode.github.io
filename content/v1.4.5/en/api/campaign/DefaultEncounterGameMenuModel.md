---
title: "DefaultEncounterGameMenuModel"
description: "Auto-generated class reference for DefaultEncounterGameMenuModel."
---
# DefaultEncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEncounterGameMenuModel.cs`

## Overview

`DefaultEncounterGameMenuModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEncounterGameMenuModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEncounterMenu
`public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** Reads and returns the `encounter menu` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetRaidCompleteMenu
`public override string GetRaidCompleteMenu()`

**Purpose:** Reads and returns the `raid complete menu` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetRaidCompleteMenu();
```

### GetNewPartyJoinMenu
`public override string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** Reads and returns the `new party join menu` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetGenericStateMenu
`public override string GetGenericStateMenu()`

**Purpose:** Reads and returns the `generic state menu` value held by the current object.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.GetGenericStateMenu();
```

### IsPlunderMenu
`public override bool IsPlunderMenu(string gameMenuId)`

**Purpose:** Determines whether the current object is in the `plunder menu` state or condition.

```csharp
// Obtain an instance of DefaultEncounterGameMenuModel from the subsystem API first
DefaultEncounterGameMenuModel defaultEncounterGameMenuModel = ...;
var result = defaultEncounterGameMenuModel.IsPlunderMenu("example");
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEncounterGameMenuModel>(new MyDefaultEncounterGameMenuModel());
```

## See Also

- [Area Index](../)