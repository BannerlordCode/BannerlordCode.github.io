<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssignPlayerRoleInTeamMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AssignPlayerRoleInTeamMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`

## Overview

`AssignPlayerRoleInTeamMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `AssignPlayerRoleInTeamMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayerInArmy` | `public bool IsPlayerInArmy { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; set; }` |
| `PlayerChosenIndex` | `public int PlayerChosenIndex { get; set; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**Purpose:** Called when the `team deployed` event is raised.

### OnPlayerTeamDeployed
`public virtual void OnPlayerTeamDeployed()`

**Purpose:** Called when the `player team deployed` event is raised.

### OnPlayerChoiceMade
`public virtual void OnPlayerChoiceMade(int chosenIndex)`

**Purpose:** Called when the `player choice made` event is raised.

### OnPlayerChoiceFinalized
`public void OnPlayerChoiceFinalized()`

**Purpose:** Called when the `player choice finalized` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)