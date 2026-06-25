---
title: "TroopUpgradeTracker"
description: "Auto-generated class reference for TroopUpgradeTracker."
---
# TroopUpgradeTracker

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopUpgradeTracker`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs`

## Overview

`TroopUpgradeTracker` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddParty
`public void AddParty(MapEventParty mapEventParty)`

**Purpose:** Adds party to the current collection or state.

```csharp
// Obtain an instance of TroopUpgradeTracker from the subsystem API first
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.AddParty(mapEventParty);
```

### RemoveParty
`public void RemoveParty(MapEventParty mapEventParty)`

**Purpose:** Removes party from the current collection or state.

```csharp
// Obtain an instance of TroopUpgradeTracker from the subsystem API first
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.RemoveParty(mapEventParty);
```

### AddTrackedTroop
`public void AddTrackedTroop(PartyBase party, CharacterObject character)`

**Purpose:** Adds tracked troop to the current collection or state.

```csharp
// Obtain an instance of TroopUpgradeTracker from the subsystem API first
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.AddTrackedTroop(party, character);
```

### CheckSkillUpgrades
`public IEnumerable<SkillObject> CheckSkillUpgrades(Hero hero)`

**Purpose:** Verifies whether skill upgrades holds true for the this instance.

```csharp
// Obtain an instance of TroopUpgradeTracker from the subsystem API first
TroopUpgradeTracker troopUpgradeTracker = ...;
var result = troopUpgradeTracker.CheckSkillUpgrades(hero);
```

### CheckUpgradedCount
`public int CheckUpgradedCount(PartyBase party, CharacterObject character)`

**Purpose:** Verifies whether upgraded count holds true for the this instance.

```csharp
// Obtain an instance of TroopUpgradeTracker from the subsystem API first
TroopUpgradeTracker troopUpgradeTracker = ...;
var result = troopUpgradeTracker.CheckUpgradedCount(party, character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.AddParty(mapEventParty);
```

## See Also

- [Area Index](../)