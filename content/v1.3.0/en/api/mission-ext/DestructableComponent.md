---
title: "DestructableComponent"
description: "Auto-generated class reference for DestructableComponent."
---
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

**Purpose:** Reads and returns the `original state` value held by the current object.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
var result = destructableComponent.GetOriginalState(parent);
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.Reset();
```

### TriggerOnHit
`public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)`

**Purpose:** Triggers the logic or event associated with `on hit`.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.TriggerOnHit(attackerAgent, 0, impactPosition, impactDirection, weapon, 0, attackerScriptComponentBehavior);
```

### BurstHeavyHitParticles
`public void BurstHeavyHitParticles()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.BurstHeavyHitParticles();
```

### SetDestructionLevel
`public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)`

**Purpose:** Assigns a new value to `destruction level` and updates the object's internal state.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.SetDestructionLevel(0, 0, 0, blowPosition, blowDirection, false);
```

### PreDestroy
`public void PreDestroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.PreDestroy();
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Writes `to network` to the target location.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.WriteToNetwork();
```

### AddStuckMissile
`public override void AddStuckMissile(GameEntity missileEntity)`

**Purpose:** Adds `stuck missile` to the current collection or state.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.AddStuckMissile(missileEntity);
```

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the `focus gain` event is raised.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the `focus lose` event is raised.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the `info text for being not interactable` value held by the current object.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
var result = destructableComponent.GetInfoTextForBeingNotInteractable(userAgent);
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord)`

**Purpose:** Invoked when the `after read from network` event is raised.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord);
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
var result = destructableComponent.GetDescriptionText(gameEntity);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Reads the data or state of `from network`.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
var result = destructableComponent.ReadFromNetwork(bufferReadValid);
```

### OnHitTakenAndDestroyedDelegate
`public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**Purpose:** Invoked when the `hit taken and destroyed delegate` event is raised.

```csharp
// Obtain an instance of DestructableComponent from the subsystem API first
DestructableComponent destructableComponent = ...;
destructableComponent.OnHitTakenAndDestroyedDelegate(target, attackerAgent, weapon, attackerScriptComponentBehavior, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<DestructableComponent>();
```

## See Also

- [Area Index](../)