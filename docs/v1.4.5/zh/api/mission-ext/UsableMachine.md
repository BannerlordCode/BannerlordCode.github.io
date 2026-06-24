<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMachine`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMachine

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachine.cs`

## 概述

`UsableMachine` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; }` |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint { get; }` |
| `PilotStandingPointSlotIndex` | `public int PilotStandingPointSlotIndex { get; }` |
| `DestructionComponent` | `public DestructableComponent DestructionComponent { get; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; }` |
| `Ai` | `public UsableMachineAIBase Ai { get; }` |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint { get; set; }` |
| `IsDisabledForAI` | `public bool IsDisabledForAI { get; set; }` |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction { get; }` |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction { get; }` |
| `WaitFrame` | `public MatrixFrame WaitFrame { get; }` |
| `IsDeactivated` | `public virtual bool IsDeactivated { get; }` |

## 主要方法

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### GetOrder
`public virtual OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 获取 `order` 的当前值。

### CreateAIBehaviorObject
`public virtual UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

### GetValidVacantReachableStandingPointForAgent
`public WeakGameEntity GetValidVacantReachableStandingPointForAgent(Agent agent)`

**用途 / Purpose:** 获取 `valid vacant reachable standing point for agent` 的当前值。

### SetAI
`public void SetAI(UsableMachineAIBase ai)`

**用途 / Purpose:** 设置 `a i` 的值或状态。

### GetValidStandingPointForAgentWithoutDistanceCheck
`public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)`

**用途 / Purpose:** 获取 `valid standing point for agent without distance check` 的当前值。

### GetVacantStandingPointForAI
`public StandingPoint GetVacantStandingPointForAI(Agent agent)`

**用途 / Purpose:** 获取 `vacant standing point for a i` 的当前值。

### GetTargetStandingPointOfAIAgent
`public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)`

**用途 / Purpose:** 获取 `target standing point of a i agent` 的当前值。

### OnMissionEnded
`public override void OnMissionEnded()`

**用途 / Purpose:** 当 `mission ended` 事件触发时调用此方法。

### SetVisibleSynched
`public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**用途 / Purpose:** 设置 `visible synched` 的值或状态。

### SetPhysicsStateSynched
`public override void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**用途 / Purpose:** 设置 `physics state synched` 的值或状态。

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 当 `focus lose` 事件触发时调用此方法。

### OnPilotAssignedDuringSpawn
`public virtual void OnPilotAssignedDuringSpawn()`

**用途 / Purpose:** 当 `pilot assigned during spawn` 事件触发时调用此方法。

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 获取 `info text for being not interactable` 的当前值。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### IsDisabledForBattleSide
`public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `is disabled for battle side` 相关逻辑。

### IsDisabledForBattleSideAI
`public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `is disabled for battle side a i` 相关逻辑。

### ShouldAutoLeaveDetachmentWhenDisabled
`public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `should auto leave detachment when disabled` 相关逻辑。

### AutoAttachUserToFormation
`public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**用途 / Purpose:** 处理 `auto attach user to formation` 相关逻辑。

### HasToBeDefendedByUser
`public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `to be defended by user`。

### Disable
`public virtual void Disable()`

**用途 / Purpose:** 处理 `disable` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetActionTextForStandingPoint
`public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### GetBestPointAlternativeTo
`public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** 获取 `best point alternative to` 的当前值。

### IsInRangeToCheckAlternativePoints
`public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)`

**用途 / Purpose:** 处理 `is in range to check alternative points` 相关逻辑。

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent at slot index`。

### SetIsDisabledForAI
`public void SetIsDisabledForAI(bool isDisabledForAI)`

**用途 / Purpose:** 设置 `is disabled for a i` 的值或状态。

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**用途 / Purpose:** 获取 `number of usable slots` 的当前值。

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is standing point available for agent` 相关逻辑。

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**用途 / Purpose:** 处理 `is used by formation` 相关逻辑。

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### SetEnemyRangeToStopUsing
`public void SetEnemyRangeToStopUsing(float value)`

**用途 / Purpose:** 设置 `enemy range to stop using` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomUsableMachine();
```

## 参见

- [完整类目录](../catalog)