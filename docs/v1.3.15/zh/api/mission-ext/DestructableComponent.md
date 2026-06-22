<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DestructableComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestructableComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DestructableComponent : SynchedMissionObject, IFocusable`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`

## 概述

`DestructableComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<DestructableComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `HitPoint` | `public float HitPoint { get { return this._hitPoint; }` |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get { return FocusableObjectType.None; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get { return true; }` |
| `IsDestroyed` | `public bool IsDestroyed { get { return this.HitPoint <= 0f; }` |

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

## 使用示例

```csharp
// DestructableComponent (Component) 的典型用法
agent.GetComponent<DestructableComponent>();
```

## 参见

- [完整类目录](../catalog)