---
title: "DestructableComponentRecord"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestructableComponentRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestructableComponentRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**Area:** mission-ext

## Overview

`DestructableComponentRecord` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HitPoint` | `public float HitPoint { get; set; }` |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get; }` |
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
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

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
// First obtain a DestructableComponentRecord instance from game state, then call one of its public methods
var value = new DestructableComponentRecord();
value.GetOriginalState(parent);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
