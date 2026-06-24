<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlarmedBehaviorGroup`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AlarmedBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/AlarmedBehaviorGroup.cs`

## Overview

`AlarmedBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlarmFactor` | `public float AlarmFactor { get; }` |

## Key Methods

### SetCanMoveWhenCautious
`public void SetCanMoveWhenCautious(bool value)`

**Purpose:** Sets the value or state of `can move when cautious`.

### GetVisualFactor
`public float GetVisualFactor(Vec3 usedGlobalLookDirection, Agent currentAgent, MBReadOnlyList<GameEntity> stealthIndoorLightingAreas, ref bool hasVisualOnCorpse, ref bool hasVisualOnEnemy)`

**Purpose:** Gets the current value of `visual factor`.

### ResetAlarmFactor
`public void ResetAlarmFactor()`

**Purpose:** Resets `alarm factor` to its initial state.

### AddAlarmFactor
`public void AddAlarmFactor(float addedAlarmFactor, in WorldPosition suspiciousPosition)`

**Purpose:** Adds `alarm factor` to the current collection or state.

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### GetScore
`public override float GetScore(bool isSimulation)`

**Purpose:** Gets the current value of `score`.

### GetClosestAlarmSource
`public Agent GetClosestAlarmSource(out float distanceSquared)`

**Purpose:** Gets the current value of `closest alarm source`.

### AlarmAgent
`public static void AlarmAgent(Agent agent)`

**Purpose:** Handles logic related to `alarm agent`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### ForceThink
`public override void ForceThink(float inSeconds)`

**Purpose:** Handles logic related to `force think`.

### ConversationTick
`public override void ConversationTick()`

**Purpose:** Handles logic related to `conversation tick`.

## Usage Example

```csharp
var value = new AlarmedBehaviorGroup();
value.SetCanMoveWhenCautious(false);
```

## See Also

- [Complete Class Catalog](../catalog)