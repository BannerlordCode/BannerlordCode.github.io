<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoustingAgentController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JoustingAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class JoustingAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs`

## Overview

`JoustingAgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `JoustingAgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public JoustingAgentController.JoustingAgentState State { get; set; }` |
| `JoustingMissionController` | `public TournamentJoustingMissionController JoustingMissionController { get; }` |
| `Opponent` | `public Agent Opponent { get; }` |
| `PrepareEquipmentsAfterDismount` | `public bool PrepareEquipmentsAfterDismount { get; }` |

## Key Methods

### OnInitialize
`public override void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### UpdateState
`public void UpdateState()`

**Purpose:** Updates the state or data of `state`.

### PrepareAgentToSwordDuel
`public void PrepareAgentToSwordDuel()`

**Purpose:** Handles logic related to `prepare agent to sword duel`.

### PrepareEquipmentsForSwordDuel
`public void PrepareEquipmentsForSwordDuel()`

**Purpose:** Handles logic related to `prepare equipments for sword duel`.

### IsRiding
`public bool IsRiding()`

**Purpose:** Handles logic related to `is riding`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<JoustingAgentController>();
```

## See Also

- [Complete Class Catalog](../catalog)