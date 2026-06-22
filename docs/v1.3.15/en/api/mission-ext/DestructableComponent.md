<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestructableComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestructableComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DestructableComponent : SynchedMissionObject, IFocusable`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`

## Overview

`DestructableComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<DestructableComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `HitPoint` | `public float HitPoint { get { return this._hitPoint; }` |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get { return FocusableObjectType.None; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get { return true; }` |
| `IsDestroyed` | `public bool IsDestroyed { get { return this.HitPoint <= 0f; }` |

## Key Methods

### GetOriginalState
```csharp
public WeakGameEntity GetOriginalState(WeakGameEntity parent)
```

### Reset
```csharp
public void Reset()
```

### TriggerOnHit
```csharp
public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)
```

### BurstHeavyHitParticles
```csharp
public void BurstHeavyHitParticles()
```

### SetDestructionLevel
```csharp
public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)
```

### PreDestroy
```csharp
public void PreDestroy()
```

### WriteToNetwork
```csharp
public override void WriteToNetwork()
```

### AddStuckMissile
```csharp
public override void AddStuckMissile(GameEntity missileEntity)
```

### OnFocusGain
```csharp
public void OnFocusGain(Agent userAgent)
```

### OnFocusLose
```csharp
public void OnFocusLose(Agent userAgent)
```

### GetInfoTextForBeingNotInteractable
```csharp
public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)
```

### OnAfterReadFromNetwork
```csharp
public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)
```

### GetDescriptionText
```csharp
public TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### ReadFromNetwork
```csharp
public bool ReadFromNetwork(ref bool bufferReadValid)
```

### OnHitTakenAndDestroyedDelegate
```csharp
public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)
```

## Usage Example

```csharp
// Typical usage of DestructableComponent (Component)
agent.GetComponent<DestructableComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)