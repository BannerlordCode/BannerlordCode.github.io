---
title: "EncounterGameMenuModel"
description: "Auto-generated class reference for EncounterGameMenuModel."
---
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**Base:** `MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`

## Overview

`EncounterGameMenuModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EncounterGameMenuModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEncounterMenu
`public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**Purpose:** **Purpose:** Reads and returns the encounter menu value held by the this instance.

```csharp
// Obtain an instance of EncounterGameMenuModel from the subsystem API first
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetRaidCompleteMenu
`public abstract string GetRaidCompleteMenu()`

**Purpose:** **Purpose:** Reads and returns the raid complete menu value held by the this instance.

```csharp
// Obtain an instance of EncounterGameMenuModel from the subsystem API first
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetRaidCompleteMenu();
```

### GetNewPartyJoinMenu
`public abstract string GetNewPartyJoinMenu(MobileParty newParty)`

**Purpose:** **Purpose:** Reads and returns the new party join menu value held by the this instance.

```csharp
// Obtain an instance of EncounterGameMenuModel from the subsystem API first
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetGenericStateMenu
`public abstract string GetGenericStateMenu()`

**Purpose:** **Purpose:** Reads and returns the generic state menu value held by the this instance.

```csharp
// Obtain an instance of EncounterGameMenuModel from the subsystem API first
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetGenericStateMenu();
```

### IsPlunderMenu
`public abstract bool IsPlunderMenu(string menuId)`

**Purpose:** **Purpose:** Determines whether the this instance is in the plunder menu state or condition.

```csharp
// Obtain an instance of EncounterGameMenuModel from the subsystem API first
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.IsPlunderMenu("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncounterGameMenuModel instance = ...;
```

## See Also

- [Area Index](../)