<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DestructableComponentRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestructableComponentRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DestructableComponentRecord` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)