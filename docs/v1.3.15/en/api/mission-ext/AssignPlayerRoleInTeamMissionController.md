<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssignPlayerRoleInTeamMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AssignPlayerRoleInTeamMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`

## Overview

`AssignPlayerRoleInTeamMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayerInArmy` | `public bool IsPlayerInArmy { get; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; }` |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant { get; }` |
| `PlayerChosenIndex` | `public int PlayerChosenIndex { get; protected set; }` |

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

### OnTeamDeployed
```csharp
public override void OnTeamDeployed(Team team)
```

### OnPlayerTeamDeployed
```csharp
public virtual void OnPlayerTeamDeployed()
```

### OnPlayerChoiceMade
```csharp
public virtual void OnPlayerChoiceMade(int chosenIndex)
```

### OnPlayerChoiceFinalized
```csharp
public void OnPlayerChoiceFinalized()
```

## Usage Example

```csharp
// Typical usage of AssignPlayerRoleInTeamMissionController (Controller)
Mission.Current.GetMissionBehavior<AssignPlayerRoleInTeamMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)