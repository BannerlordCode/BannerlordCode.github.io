---
title: "AgentNavigator"
description: "AgentNavigator：SandBox 的 public 类；公开成员 38 个（方法 26、属性 9、字段 0）。canonical 桶 sandbox。源文件 SandBox/AgentNavigator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentNavigator

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public sealed class AgentNavigator`
**File:** `SandBox/AgentNavigator.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

AgentNavigator 位于 SandBox 模块，源文件 SandBox/AgentNavigator.cs。它是一个 public 类（sealed），继承链为 AgentNavigator。public/protected 成员共 38 个：26 方法、9 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentNavigator 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 AgentNavigator。成员构成以方法为主（方法 26/38，属性 9/38），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/AgentNavigator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetUsableMachine` | `public UsableMachine TargetUsableMachine` | 属性 |
| `TargetPosition` | `public WorldPosition TargetPosition` | 属性 |
| `TargetDirection` | `public Vec2 TargetDirection` | 属性 |
| `TargetEntity` | `public GameEntity TargetEntity` | 属性 |
| `MemberOfAlley` | `public Alley MemberOfAlley` | 属性 |
| `SpecialTargetTag` | `public string SpecialTargetTag` | 属性 |
| `_agentState` | `public AgentNavigator.NavigationState _agentState` | 属性 |
| `CharacterHasVisiblePrefabs` | `public bool CharacterHasVisiblePrefabs` | 属性 |
| `AgentNavigator` | `public AgentNavigator(Agent agent, LocationCharacter locationCharacter) : this(agent)` | 构造函数 |
| `AgentNavigator` | `public AgentNavigator(Agent agent)` | 构造函数 |
| `OnStopUsingGameObject` | `public void OnStopUsingGameObject()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `SetTarget` | `public void SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)` | 方法 |
| `SetTargetFrame` | `public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, Agent.AIScriptedFrameFlags flags = Agent.AIScriptedFrameFlags.None, bool disableClearTargetWhenTargetIsReached = false)` | 方法 |
| `ClearTarget` | `public void ClearTarget()` | 方法 |
| `Tick` | `public void Tick(float dt, bool isSimulation = false)` | 方法 |
| `GetDistanceToTarget` | `public float GetDistanceToTarget(UsableMachine target)` | 方法 |
| `IsTargetReached` | `public bool IsTargetReached()` | 方法 |
| `HoldAndHideRecentlyUsedMeshes` | `public void HoldAndHideRecentlyUsedMeshes()` | 方法 |
| `RecoverRecentlyUsedMeshes` | `public void RecoverRecentlyUsedMeshes()` | 方法 |
| `CanSeeAgent` | `public bool CanSeeAgent(Agent otherAgent)` | 方法 |
| `IsCarryingSomething` | `public bool IsCarryingSomething()` | 方法 |
| `SetPrefabVisibility` | `public void SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)` | 方法 |
| `GetPrefabVisibility` | `public bool GetPrefabVisibility(sbyte realBoneIndex, string prefabName)` | 方法 |
| `SetSpecialItem` | `public void SetSpecialItem()` | 方法 |
| `SetItemsVisibility` | `public void SetItemsVisibility(bool isVisible)` | 方法 |
| `SetCommonArea` | `public void SetCommonArea(Alley alley)` | 方法 |
| `ForceThink` | `public void ForceThink(float inSeconds)` | 方法 |
| `AddBehaviorGroup` | `public T AddBehaviorGroup<T>() where T : AgentBehaviorGroup` | 方法 |
| `GetBehaviorGroup` | `public T GetBehaviorGroup<T>() where T : AgentBehaviorGroup` | 方法 |
| `GetBehavior` | `public AgentBehavior GetBehavior<T>() where T : AgentBehavior` | 方法 |
| `HasBehaviorGroup` | `public bool HasBehaviorGroup<T>()` | 方法 |
| `RemoveBehaviorGroup` | `public void RemoveBehaviorGroup<T>() where T : AgentBehaviorGroup` | 方法 |
| `RefreshBehaviorGroups` | `public void RefreshBehaviorGroups(bool isSimulation)` | 方法 |
| `GetActiveBehavior` | `public AgentBehavior GetActiveBehavior()` | 方法 |
| `GetActiveBehaviorGroup` | `public AgentBehaviorGroup GetActiveBehaviorGroup()` | 方法 |
| `NavigationState` | `public enum NavigationState` | 属性 |
| `NavigationState` | `public enum NavigationState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
