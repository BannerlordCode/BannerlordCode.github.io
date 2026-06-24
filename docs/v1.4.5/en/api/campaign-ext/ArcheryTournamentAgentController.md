<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArcheryTournamentAgentController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArcheryTournamentAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class ArcheryTournamentAgentController : AgentController`
**Base:** `AgentController`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Tournaments.AgentControllers/ArcheryTournamentAgentController.cs`

## Overview

`ArcheryTournamentAgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ArcheryTournamentAgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnInitialize
`public override void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### OnTick
`public void OnTick()`

**Purpose:** Called when the `tick` event is raised.

### SetTargets
`public void SetTargets(List<DestructableComponent> targetList)`

**Purpose:** Sets the value or state of `targets`.

### OnTargetHit
`public void OnTargetHit(Agent agent, DestructableComponent target)`

**Purpose:** Called when the `target hit` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ArcheryTournamentAgentController>();
```

## See Also

- [Complete Class Catalog](../catalog)