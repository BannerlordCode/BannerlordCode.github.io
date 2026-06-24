<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReinforcementFormationData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ReinforcementFormationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

`ReinforcementFormationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ReinforcementFormationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

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

## Usage Example

```csharp
var value = new ReinforcementFormationData();
```

## See Also

- [Complete Class Catalog](../catalog)