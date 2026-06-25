---
title: "UsableMachine"
description: "UsableMachine 的自动生成类参考。"
---
# UsableMachine

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/UsableMachine.cs`

## 概述

`UsableMachine` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; }` |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint { get; }` |
| `DestructionComponent` | `public DestructableComponent DestructionComponent { get; }` |
| `IsDestructible` | `public bool IsDestructible { get; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; }` |
| `PilotAgent` | `public Agent PilotAgent { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset { get; }` |
| `Ai` | `public UsableMachineAIBase Ai { get; }` |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType { get; }` |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint { get; set; }` |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo { get; }` |
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction { get; }` |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction { get; }` |
| `MaxUserCount` | `public virtual int MaxUserCount { get; }` |
| `HasWaitFrame` | `public virtual bool HasWaitFrame { get; }` |
| `WaitFrame` | `public MatrixFrame WaitFrame { get; }` |
| `WaitEntity` | `public GameEntity WaitEntity { get; }` |
| `IsDeactivated` | `public virtual bool IsDeactivated { get; }` |

## 主要方法

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.AddComponent(component);
```

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 component。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.RemoveComponent(component);
```

### GetOrder
`public virtual OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetOrder(side);
```

### CreateAIBehaviorObject
`public virtual UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 a i behavior object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.CreateAIBehaviorObject();
```

### GetValidStandingPointForAgent
`public WeakGameEntity GetValidStandingPointForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 valid standing point for agent 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetValidStandingPointForAgent(agent);
```

### SetAI
`public void SetAI(UsableMachineAIBase ai)`

**用途 / Purpose:** **用途 / Purpose:** 为 a i 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.SetAI(ai);
```

### GetValidStandingPointForAgentWithoutDistanceCheck
`public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 valid standing point for agent without distance check 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetValidStandingPointForAgentWithoutDistanceCheck(agent);
```

### GetVacantStandingPointForAI
`public StandingPoint GetVacantStandingPointForAI(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 vacant standing point for a i 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetVacantStandingPointForAI(agent);
```

### GetTargetStandingPointOfAIAgent
`public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target standing point of a i agent 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetTargetStandingPointOfAIAgent(agent);
```

### OnMissionEnded
`public override void OnMissionEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.OnMissionEnded();
```

### SetVisibleSynched
`public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**用途 / Purpose:** **用途 / Purpose:** 为 visible synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.SetVisibleSynched(false, false);
```

### SetPhysicsStateSynched
`public override void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**用途 / Purpose:** **用途 / Purpose:** 为 physics state synched 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.SetPhysicsStateSynched(false, false);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetTickRequirement();
```

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus gain 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.OnFocusGain(userAgent);
```

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 focus lose 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 info text for being not interactable 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetInfoTextForBeingNotInteractable(userAgent);
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** **用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.Deactivate();
```

### Activate
`public void Activate()`

**用途 / Purpose:** **用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.Activate();
```

### IsDisabledForBattleSide
`public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 disabled for battle side 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.IsDisabledForBattleSide(sideEnum);
```

### IsDisabledForBattleSideAI
`public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 disabled for battle side a i 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.IsDisabledForBattleSideAI(sideEnum);
```

### ShouldAutoLeaveDetachmentWhenDisabled
`public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldAutoLeaveDetachmentWhenDisabled 对应的操作。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.ShouldAutoLeaveDetachmentWhenDisabled(sideEnum);
```

### AutoAttachUserToFormation
`public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AutoAttachUserToFormation 对应的操作。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.AutoAttachUserToFormation(sideEnum);
```

### HasToBeDefendedByUser
`public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 to be defended by user。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.HasToBeDefendedByUser(sideEnum);
```

### Disable
`public virtual void Disable()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Disable 对应的操作。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.Disable();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.ToString();
```

### GetActionTextForStandingPoint
`public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetActionTextForStandingPoint(usableGameObject);
```

### GetBestPointAlternativeTo
`public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 best point alternative to 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetBestPointAlternativeTo(standingPoint, agent);
```

### IsInRangeToCheckAlternativePoints
`public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 in range to check alternative points 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.IsInRangeToCheckAlternativePoints(agent);
```

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**用途 / Purpose:** **用途 / Purpose:** 将 agent at slot index 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.AddAgentAtSlotIndex(agent, 0);
```

### SetIsDisabledForAI
`public void SetIsDisabledForAI(bool isDisabledForAI)`

**用途 / Purpose:** **用途 / Purpose:** 为 is disabled for a i 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.SetIsDisabledForAI(false);
```

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 number of usable slots 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetNumberOfUsableSlots();
```

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 standing point available for agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.IsStandingPointAvailableForAgent(agent);
```

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 used by formation 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.IsUsedByFormation(formation);
```

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
var result = usableMachine.GetDescriptionText(gameEntity);
```

### SetEnemyRangeToStopUsing
`public void SetEnemyRangeToStopUsing(float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 enemy range to stop using 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMachine 实例
UsableMachine usableMachine = ...;
usableMachine.SetEnemyRangeToStopUsing(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
UsableMachine instance = ...;
```

## 参见

- [本区域目录](../)