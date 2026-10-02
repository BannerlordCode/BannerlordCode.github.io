---
title: "UsableMachine"
description: "UsableMachine：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject、IFocusable；公开成员 84 个（方法 52、属性 24、字段 7）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/UsableMachine.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UsableMachine

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**File:** `TaleWorlds.MountAndBlade/UsableMachine.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

UsableMachine 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/UsableMachine.cs。它是一个 public 类（abstract），实现/继承 SynchedMissionObject、IFocusable、IOrderable、IDetachment，继承链为 UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 84 个：52 方法、24 属性、7 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UsableMachine 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 52/84，属性 24/84），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/UsableMachine.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public MBList<StandingPoint>StandingPoints` | 属性 |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint` | 属性 |
| `PilotStandingPointSlotIndex` | `public int PilotStandingPointSlotIndex` | 属性 |
| `List` | `protected internal List<StandingPoint>AmmoPickUpPoints` | 属性 |
| `DestructionComponent` | `public DestructableComponent DestructionComponent` | 属性 |
| `IsDestructible` | `public bool IsDestructible` | 属性 |
| `IsDestroyed` | `public bool IsDestroyed` | 属性 |
| `PilotAgent` | `public Agent PilotAgent` | 属性 |
| `IsLoose` | `public bool IsLoose` | 属性 |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset` | 属性 |
| `Ai` | `public UsableMachineAIBase Ai` | 属性 |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType` | 属性 |
| `IsFocusable` | `public virtual bool IsFocusable` | 属性 |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint` | 属性 |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo` | 属性 |
| `IsDisabledForAI` | `public bool IsDisabledForAI` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<Formation>UserFormations` | 属性 |
| `UsableMachine` | `protected UsableMachine()` | 构造函数 |
| `AddComponent` | `public void AddComponent(UsableMissionObjectComponent component)` | 方法 |
| `RemoveComponent` | `public void RemoveComponent(UsableMissionObjectComponent component)` | 方法 |
| `GetComponent` | `public T GetComponent<T>() where T : UsableMissionObjectComponent` | 方法 |
| `GetOrder` | `public virtual OrderType GetOrder(BattleSideEnum side)` | 方法 |
| `CreateAIBehaviorObject` | `public virtual UsableMachineAIBase CreateAIBehaviorObject()` | 方法 |
| `GetValidVacantReachableStandingPointForAgent` | `public WeakGameEntity GetValidVacantReachableStandingPointForAgent(Agent agent)` | 方法 |
| `SetAI` | `public void SetAI(UsableMachineAIBase ai)` | 方法 |
| `GetValidStandingPointForAgentWithoutDistanceCheck` | `public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)` | 方法 |
| `GetVacantStandingPointForAI` | `public StandingPoint GetVacantStandingPointForAI(Agent agent)` | 方法 |
| `GetTargetStandingPointOfAIAgent` | `public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)` | 方法 |
| `OnMissionEnded` | `public override void OnMissionEnded()` | 方法 |
| `SetVisibleSynched` | `public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)` | 方法 |
| `SetPhysicsStateSynched` | `public override void SetPhysicsStateSynched(bool value, bool setChildren = true)` | 方法 |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction` | 属性 |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction` | 属性 |
| `MaxUserCount` | `public virtual int MaxUserCount` | 属性 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `DebugTick` | `protected virtual void DebugTick(float dt)` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnEditorValidate` | `protected internal override void OnEditorValidate()` | 方法 |
| `OnFocusGain` | `public virtual void OnFocusGain(Agent userAgent)` | 方法 |
| `OnFocusLose` | `public virtual void OnFocusLose(Agent userAgent)` | 方法 |
| `OnPilotAssignedDuringSpawn` | `public virtual void OnPilotAssignedDuringSpawn()` | 方法 |
| `GetInfoTextForBeingNotInteractable` | `public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | 方法 |
| `HasWaitFrame` | `public virtual bool HasWaitFrame` | 属性 |
| `WaitFrame` | `public MatrixFrame WaitFrame` | 属性 |
| `WaitEntity` | `public GameEntity WaitEntity` | 属性 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `IsDeactivated` | `public virtual bool IsDeactivated` | 属性 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `Activate` | `public void Activate()` | 方法 |
| `IsDisabledForBattleSide` | `public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)` | 方法 |
| `IsDisabledForBattleSideAI` | `public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)` | 方法 |
| `ShouldAutoLeaveDetachmentWhenDisabled` | `public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)` | 方法 |
| `IsDisabledDueToEnemyInRange` | `protected bool IsDisabledDueToEnemyInRange(BattleSideEnum sideEnum)` | 方法 |
| `AutoAttachUserToFormation` | `public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)` | 方法 |
| `HasToBeDefendedByUser` | `public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)` | 方法 |
| `Disable` | `public virtual void Disable()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `GetActionTextForStandingPoint` | `public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject);` | 方法 |
| `GetBestPointAlternativeTo` | `public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | 方法 |
| `IsInRangeToCheckAlternativePoints` | `public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)` | 方法 |
| `GetWeightOfStandingPoint` | `protected virtual float GetWeightOfStandingPoint(StandingPoint sp)` | 方法 |
| `GetDetachmentWeightAux` | `protected virtual float GetDetachmentWeightAux(BattleSideEnum side)` | 方法 |
| `IsAgentOnInconvenientNavmesh` | `protected virtual bool IsAgentOnInconvenientNavmesh(Agent agent, StandingPoint standingPoint)` | 方法 |
| `AddAgentAtSlotIndex` | `public void AddAgentAtSlotIndex(Agent agent, int slotIndex)` | 方法 |
| `SetIsDisabledForAI` | `public void SetIsDisabledForAI(bool isDisabledForAI)` | 方法 |
| `GetNumberOfUsableSlots` | `public int GetNumberOfUsableSlots()` | 方法 |
| `IsStandingPointAvailableForAgent` | `public bool IsStandingPointAvailableForAgent(Agent agent)` | 方法 |
| `IsUsedByFormation` | `public bool IsUsedByFormation(Formation formation)` | 方法 |
| `IsStandingPointNotUsedOnAccountOfBeingAmmoLoad` | `protected internal virtual bool IsStandingPointNotUsedOnAccountOfBeingAmmoLoad(StandingPoint standingPoint)` | 方法 |
| `GetSuitableStandingPointFor` | `protected virtual StandingPoint GetSuitableStandingPointFor(BattleSideEnum side, Agent agent = null, List<Agent>agents = null, List<ValueTuple<Agent, float>>agentValuePairs = null)` | 方法 |
| `GetDescriptionText` | `public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity);` | 方法 |
| `ShouldDisableTickIfMachineDisabled` | `protected virtual bool ShouldDisableTickIfMachineDisabled()` | 方法 |
| `SetEnemyRangeToStopUsing` | `public void SetEnemyRangeToStopUsing(float value)` | 方法 |
| `UsableMachineParentTag` | `public const string UsableMachineParentTag` | 字段 |
| `PilotStandingPointTag` | `public string PilotStandingPointTag` | 字段 |
| `AmmoPickUpTag` | `public string AmmoPickUpTag` | 字段 |
| `WaitStandingPointTag` | `public string WaitStandingPointTag` | 字段 |
| `AreUsableStandingPointsVacant` | `protected bool AreUsableStandingPointsVacant` | 字段 |
| `MachinePositionOffsetToStopUsingLocal` | `protected Vec2 MachinePositionOffsetToStopUsingLocal` | 字段 |
| `MakeVisibilityCheck` | `protected bool MakeVisibilityCheck` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject/)
- [基类/接口 IFocusable](../IFocusable/)
- [基类/接口 IOrderable](../IOrderable/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
