---
title: "TroopUpgradeTracker"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopUpgradeTracker`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopUpgradeTracker

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopUpgradeTracker`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs`

## Overview

`TroopUpgradeTracker` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddParty
`public void AddParty(MapEventParty mapEventParty)`

**Purpose:** Adds `party` to the current collection or state.

### RemoveParty
`public void RemoveParty(MapEventParty mapEventParty)`

**Purpose:** Removes `party` from the current collection or state.

### AddTrackedTroop
`public void AddTrackedTroop(PartyBase party, CharacterObject character)`

**Purpose:** Adds `tracked troop` to the current collection or state.

### CheckSkillUpgrades
`public IEnumerable<SkillObject> CheckSkillUpgrades(Hero hero)`

**Purpose:** Handles logic related to `check skill upgrades`.

### CheckUpgradedCount
`public int CheckUpgradedCount(PartyBase party, CharacterObject character)`

**Purpose:** Handles logic related to `check upgraded count`.

## Usage Example

```csharp
var value = new TroopUpgradeTracker();
value.AddParty(mapEventParty);
```

## See Also

- [Complete Class Catalog](../catalog)