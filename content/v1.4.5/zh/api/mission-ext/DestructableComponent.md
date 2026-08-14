---
title: "DestructableComponent"
description: "DestructableComponent 的自动生成类参考。"
---
# DestructableComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DestructableComponent : SynchedMissionObject, IFocusable`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`

## 概述

`DestructableComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `DestructableComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public WeakGameEntity GetOriginalState(WeakGameEntity parent)`

**用途 / Purpose:** 读取并返回当前对象中 original state 的结果。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
var result = destructableComponent.GetOriginalState(parent);
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.Reset();
```

### TriggerOnHit
`public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)`

**用途 / Purpose:** 触发on hit对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.TriggerOnHit(attackerAgent, 0, impactPosition, impactDirection, weapon, 0, attackerScriptComponentBehavior);
```

### BurstHeavyHitParticles
`public void BurstHeavyHitParticles()`

**用途 / Purpose:** 调用 BurstHeavyHitParticles 对应的操作。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.BurstHeavyHitParticles();
```

### SetDestructionLevel
`public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)`

**用途 / Purpose:** 为 destruction level 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.SetDestructionLevel(0, 0, 0, blowPosition, blowDirection, false);
```

### PreDestroy
`public void PreDestroy()`

**用途 / Purpose:** 调用 PreDestroy 对应的操作。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.PreDestroy();
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将to network写入目标位置。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.WriteToNetwork();
```

### AddStuckMissile
`public override void AddStuckMissile(GameEntity missileEntity)`

**用途 / Purpose:** 将 stuck missile 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.AddStuckMissile(missileEntity);
```

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 在 focus gain 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 在 focus lose 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 读取并返回当前对象中 info text for being not interactable 的结果。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
var result = destructableComponent.GetInfoTextForBeingNotInteractable(userAgent);
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 after read from network 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
var result = destructableComponent.GetDescriptionText(gameEntity);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 从当前实例读取from network相关数据。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
var result = destructableComponent.ReadFromNetwork(bufferReadValid);
```

### OnHitTakenAndDestroyedDelegate
`public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**用途 / Purpose:** 在 hit taken and destroyed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DestructableComponent 实例
DestructableComponent destructableComponent = ...;
destructableComponent.OnHitTakenAndDestroyedDelegate(target, attackerAgent, weapon, attackerScriptComponentBehavior, 0);
```

## 使用示例

```csharp
var component = agent.GetComponent<DestructableComponent>();
```

## 参见

- [本区域目录](../)