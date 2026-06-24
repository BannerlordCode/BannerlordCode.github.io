<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGamepadEffectsView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGamepadEffectsView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGamepadEffectsView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionGamepadEffectsView.cs`

## Overview

`MissionGamepadEffectsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGamepadEffectsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**Purpose:** Called when the `mission state activated` event is raised.

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Called when the `mission state deactivated` event is raised.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var view = new MissionGamepadEffectsView();
```

## See Also

- [Complete Class Catalog](../catalog)