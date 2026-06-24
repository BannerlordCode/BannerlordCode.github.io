<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthFailCounterMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthFailCounterMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/StealthFailCounterMissionLogic.cs`

## Overview

`StealthFailCounterMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `StealthFailCounterMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime { get; }` |

## Key Methods

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Called when the `agent alarmed state changed` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### SetFailTexts
`public void SetFailTexts(TextObject title, TextObject description)`

**Purpose:** Sets the value or state of `fail texts`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new StealthFailCounterMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)