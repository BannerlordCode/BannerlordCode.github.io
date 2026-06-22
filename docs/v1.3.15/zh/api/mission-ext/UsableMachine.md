<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMachine`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMachine

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`UsableMachine` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; }` |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint { get; }` |
| `PilotStandingPointSlotIndex` | `public int PilotStandingPointSlotIndex { get; }` |
| `DestructionComponent` | `public DestructableComponent DestructionComponent { get; }` |
| `IsDestructible` | `public bool IsDestructible { get; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; }` |
| `PilotAgent` | `public Agent PilotAgent { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset { get; }` |
| `Ai` | `public UsableMachineAIBase Ai { get; }` |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType { get; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get; set; }` |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint { get; set; }` |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo { get; set; }` |
| `IsDisabledForAI` | `public bool IsDisabledForAI { get; set; }` |
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction { get; }` |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction { get; }` |
| `MaxUserCount` | `public virtual int MaxUserCount { get; }` |
| `HasWaitFrame` | `public virtual bool HasWaitFrame { get; }` |


## 主要方法

### AddComponent

```csharp
public void AddComponent(UsableMissionObjectComponent component)
```

### RemoveComponent

```csharp
public void RemoveComponent(UsableMissionObjectComponent component)
```

### GetOrder

```csharp
public virtual OrderType GetOrder(BattleSideEnum side)
```

### CreateAIBehaviorObject

```csharp
public virtual UsableMachineAIBase CreateAIBehaviorObject()
```

### GetValidStandingPointForAgent

```csharp
public WeakGameEntity GetValidStandingPointForAgent(Agent agent)
```

### SetAI

```csharp
public void SetAI(UsableMachineAIBase ai)
```

### GetValidStandingPointForAgentWithoutDistanceCheck

```csharp
public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)
```

### GetVacantStandingPointForAI

```csharp
public StandingPoint GetVacantStandingPointForAI(Agent agent)
```

### GetTargetStandingPointOfAIAgent

```csharp
public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)
```

### OnMissionEnded

```csharp
public override void OnMissionEnded()
```

### SetVisibleSynched

```csharp
public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)
```

### SetPhysicsStateSynched

```csharp
public override void SetPhysicsStateSynched(bool value, bool setChildren = true)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### OnFocusGain

```csharp
public virtual void OnFocusGain(Agent userAgent)
```

### OnFocusLose

```csharp
public virtual void OnFocusLose(Agent userAgent)
```

### OnPilotAssignedDuringSpawn

```csharp
public virtual void OnPilotAssignedDuringSpawn()
```

### GetInfoTextForBeingNotInteractable

```csharp
public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)
```

### Deactivate

```csharp
public void Deactivate()
```

### Activate

```csharp
public void Activate()
```

### IsDisabledForBattleSide

```csharp
public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)