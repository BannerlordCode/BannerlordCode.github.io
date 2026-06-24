<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionReinforcementsHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionReinforcementsHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionReinforcementsHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`MissionReinforcementsHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionReinforcementsHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Compare
`public int Compare(ReinforcementFormationPriority left, ReinforcementFormationPriority right)`

**Purpose:** Handles logic related to `compare`.

### Initialize
`public void Initialize(Formation formation, uint initTime)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddProspectiveTroop
`public void AddProspectiveTroop(FormationClass troopClass)`

**Purpose:** Adds `prospective troop` to the current collection or state.

### IsInitialized
`public bool IsInitialized(uint initTime)`

**Purpose:** Handles logic related to `is initialized`.

### GetPriority
`public ReinforcementFormationPriority GetPriority(FormationClass troopClass)`

**Purpose:** Gets the current value of `priority`.

### OnMissionStart
`public static void OnMissionStart()`

**Purpose:** Called when the `mission start` event is raised.

### OnMissionEnd
`public static void OnMissionEnd()`

**Purpose:** Called when the `mission end` event is raised.

## Usage Example

```csharp
MissionReinforcementsHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)