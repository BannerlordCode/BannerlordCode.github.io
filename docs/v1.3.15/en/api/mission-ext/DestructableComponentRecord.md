<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestructableComponentRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestructableComponentRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DestructableComponentRecord` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)