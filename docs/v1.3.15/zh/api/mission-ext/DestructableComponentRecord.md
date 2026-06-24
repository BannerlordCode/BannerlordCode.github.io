<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DestructableComponentRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestructableComponentRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**领域:** mission-ext

## 概述

`DestructableComponentRecord` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

**用途 / Purpose:** 获取 `original state` 的当前值。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### TriggerOnHit
`public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)`

**用途 / Purpose:** 处理 `trigger on hit` 相关逻辑。

### BurstHeavyHitParticles
`public void BurstHeavyHitParticles()`

**用途 / Purpose:** 处理 `burst heavy hit particles` 相关逻辑。

### SetDestructionLevel
`public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)`

**用途 / Purpose:** 设置 `destruction level` 的值或状态。

### PreDestroy
`public void PreDestroy()`

**用途 / Purpose:** 处理 `pre destroy` 相关逻辑。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### AddStuckMissile
`public override void AddStuckMissile(GameEntity missileEntity)`

**用途 / Purpose:** 向当前集合/状态中添加 `stuck missile`。

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 当 `focus lose` 事件触发时调用此方法。

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 获取 `info text for being not interactable` 的当前值。

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 当 `after read from network` 事件触发时调用此方法。

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

### OnHitTakenAndDestroyedDelegate
`public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**用途 / Purpose:** 当 `hit taken and destroyed delegate` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 DestructableComponentRecord 实例，再调用它的公开方法
var value = new DestructableComponentRecord();
value.GetOriginalState(parent);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
