---
title: "DestructableComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestructableComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DestructableComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DestructableComponent : SynchedMissionObject, IFocusable`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`

## Overview

`DestructableComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `DestructableComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HitPoint` | `public float HitPoint { get; set; }` |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; }` |
| `CurrentState` | `public GameEntity CurrentState { get; }` |
| `HitPoint` | `public float HitPoint { get; }` |
| `DestructionState` | `public int DestructionState { get; }` |
| `ForceIndex` | `public int ForceIndex { get; }` |
| `IsMissionObject` | `public bool IsMissionObject { get; }` |

## Key Methods

### GetOriginalState
`public WeakGameEntity GetOriginalState(WeakGameEntity parent)`

**Purpose:** Gets the current value of `original state`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### TriggerOnHit
`public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)`

**Purpose:** Handles logic related to `trigger on hit`.

### BurstHeavyHitParticles
`public void BurstHeavyHitParticles()`

**Purpose:** Handles logic related to `burst heavy hit particles`.

### SetDestructionLevel
`public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)`

**Purpose:** Sets the value or state of `destruction level`.

### PreDestroy
`public void PreDestroy()`

**Purpose:** Handles logic related to `pre destroy`.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### AddStuckMissile
`public override void AddStuckMissile(GameEntity missileEntity)`

**Purpose:** Adds `stuck missile` to the current collection or state.

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Called when the `focus lose` event is raised.

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Gets the current value of `info text for being not interactable`.

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord)`

**Purpose:** Called when the `after read from network` event is raised.

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

### OnHitTakenAndDestroyedDelegate
`public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**Purpose:** Called when the `hit taken and destroyed delegate` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<DestructableComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)