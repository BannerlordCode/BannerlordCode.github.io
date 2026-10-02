---
title: "AnimationPoint"
description: "AnimationPoint：SandBox.Objects.AnimationPoints 的 public 类，继承 StandingPoint；公开成员 53 个（方法 31、属性 7、字段 13）。canonical 桶 sandbox。源文件 SandBox/Objects/AnimationPoints/AnimationPoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AnimationPoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class AnimationPoint : StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/AnimationPoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

AnimationPoint 位于 SandBox 模块，源文件 SandBox/Objects/AnimationPoints/AnimationPoint.cs。它是一个 public 类，实现/继承 StandingPoint，继承链为 AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 53 个：31 方法、7 属性、13 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AnimationPoint 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Objects.AnimationPoints`，继承链 AnimationPoint → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 31/53，属性 7/53），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AnimationPoints/AnimationPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther` | 属性 |
| `IsArriveActionFinished` | `public bool IsArriveActionFinished` | 属性 |
| `SelectedRightHandItem` | `protected string SelectedRightHandItem` | 属性 |
| `SelectedLeftHandItem` | `protected string SelectedLeftHandItem` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `AnimationPoint` | `public AnimationPoint()` | 构造函数 |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse` | 属性 |
| `OnEditModeVisibilityChanged` | `protected override void OnEditModeVisibilityChanged(bool currentVisibility)` | 方法 |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `OnEditorInit` | `protected override void OnEditorInit()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `ResetAnimations` | `protected void ResetAnimations()` | 方法 |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | 方法 |
| `RequestResync` | `public void RequestResync()` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `ShouldUpdateOnEditorVariableChanged` | `protected virtual bool ShouldUpdateOnEditorVariableChanged(string variableName)` | 方法 |
| `ClearAssignedItems` | `protected void ClearAssignedItems()` | 方法 |
| `AssignItemToBone` | `protected void AssignItemToBone(AnimationPoint.ItemForBone newItem)` | 方法 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `SetActionCodes` | `protected virtual void SetActionCodes()` | 方法 |
| `DoesActionTypeStopUsingGameObject` | `protected override bool DoesActionTypeStopUsingGameObject(Agent.ActionCodeType actionType)` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `GetUserFrameForAgent` | `public override WorldFrame GetUserFrameForAgent(Agent agent)` | 方法 |
| `IsUsableByAgent` | `public override bool IsUsableByAgent(Agent userAgent)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `SimulateTick` | `public override void SimulateTick(float dt)` | 方法 |
| `HasAlternative` | `public override bool HasAlternative()` | 方法 |
| `GetRandomWaitInSeconds` | `public float GetRandomWaitInSeconds()` | 方法 |
| `List` | `public List<AnimationPoint>GetAlternatives()` | 方法 |
| `IsRotationCorrectDuringUsage` | `public bool IsRotationCorrectDuringUsage()` | 方法 |
| `CanAgentUseItem` | `protected bool CanAgentUseItem(Agent agent)` | 方法 |
| `AddItemsToAgent` | `protected void AddItemsToAgent()` | 方法 |
| `OnUserConversationStart` | `public override void OnUserConversationStart()` | 方法 |
| `OnUserConversationEnd` | `public override void OnUserConversationEnd()` | 方法 |
| `SetAgentItemsVisibility` | `public void SetAgentItemsVisibility(bool isVisible)` | 方法 |
| `ArriveAction` | `public string ArriveAction` | 字段 |
| `LoopStartAction` | `public string LoopStartAction` | 字段 |
| `PairLoopStartAction` | `public string PairLoopStartAction` | 字段 |
| `LeaveAction` | `public string LeaveAction` | 字段 |
| `GroupId` | `public int GroupId` | 字段 |
| `RightHandItem` | `public string RightHandItem` | 字段 |
| `RightHandItemBone` | `public HumanBone RightHandItemBone` | 字段 |
| `LeftHandItem` | `public string LeftHandItem` | 字段 |
| `LeftHandItemBone` | `public HumanBone LeftHandItemBone` | 字段 |
| `MinUserToStartInteraction` | `public int MinUserToStartInteraction` | 字段 |
| `MinWaitinSeconds` | `public float MinWaitinSeconds` | 字段 |
| `MaxWaitInSeconds` | `public float MaxWaitInSeconds` | 字段 |
| `ActionSpeed` | `protected float ActionSpeed` | 字段 |
| `ItemForBone` | `public class ItemForBone` | 属性 |
| `ItemForBone` | `public class ItemForBone` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 StandingPoint](../../mission-ext/StandingPoint/)
- [同命名空间 ChairUsePoint](../ChairUsePoint/)
- [同命名空间 DynamicObjectAnimationPoint](../DynamicObjectAnimationPoint/)
- [同命名空间 PlayMusicPoint](../PlayMusicPoint/)
