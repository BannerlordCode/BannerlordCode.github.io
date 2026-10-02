---
title: "AgentNavigator"
description: "AgentNavigator: a public class in SandBox; 38 exposed members (26 methods, 9 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/AgentNavigator.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentNavigator

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public sealed class AgentNavigator`
**File:** `SandBox/AgentNavigator.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

AgentNavigator lives in the SandBox module, source file SandBox/AgentNavigator.cs. It is a public class (sealed); the inheritance chain is AgentNavigator. It exposes 38 public/protected members: 26 methods, 9 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentNavigator lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain AgentNavigator. The surface is method-led (methods 26/38, properties 9/38), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/AgentNavigator.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TargetUsableMachine` | `public UsableMachine TargetUsableMachine` | property |
| `TargetPosition` | `public WorldPosition TargetPosition` | property |
| `TargetDirection` | `public Vec2 TargetDirection` | property |
| `TargetEntity` | `public GameEntity TargetEntity` | property |
| `MemberOfAlley` | `public Alley MemberOfAlley` | property |
| `SpecialTargetTag` | `public string SpecialTargetTag` | property |
| `_agentState` | `public AgentNavigator.NavigationState _agentState` | property |
| `CharacterHasVisiblePrefabs` | `public bool CharacterHasVisiblePrefabs` | property |
| `AgentNavigator` | `public AgentNavigator(Agent agent, LocationCharacter locationCharacter) : this(agent)` | constructor |
| `AgentNavigator` | `public AgentNavigator(Agent agent)` | constructor |
| `OnStopUsingGameObject` | `public void OnStopUsingGameObject()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `SetTarget` | `public void SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)` | method |
| `SetTargetFrame` | `public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, Agent.AIScriptedFrameFlags flags = Agent.AIScriptedFrameFlags.None, bool disableClearTargetWhenTargetIsReached = false)` | method |
| `ClearTarget` | `public void ClearTarget()` | method |
| `Tick` | `public void Tick(float dt, bool isSimulation = false)` | method |
| `GetDistanceToTarget` | `public float GetDistanceToTarget(UsableMachine target)` | method |
| `IsTargetReached` | `public bool IsTargetReached()` | method |
| `HoldAndHideRecentlyUsedMeshes` | `public void HoldAndHideRecentlyUsedMeshes()` | method |
| `RecoverRecentlyUsedMeshes` | `public void RecoverRecentlyUsedMeshes()` | method |
| `CanSeeAgent` | `public bool CanSeeAgent(Agent otherAgent)` | method |
| `IsCarryingSomething` | `public bool IsCarryingSomething()` | method |
| `SetPrefabVisibility` | `public void SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)` | method |
| `GetPrefabVisibility` | `public bool GetPrefabVisibility(sbyte realBoneIndex, string prefabName)` | method |
| `SetSpecialItem` | `public void SetSpecialItem()` | method |
| `SetItemsVisibility` | `public void SetItemsVisibility(bool isVisible)` | method |
| `SetCommonArea` | `public void SetCommonArea(Alley alley)` | method |
| `ForceThink` | `public void ForceThink(float inSeconds)` | method |
| `AddBehaviorGroup` | `public T AddBehaviorGroup<T>() where T : AgentBehaviorGroup` | method |
| `GetBehaviorGroup` | `public T GetBehaviorGroup<T>() where T : AgentBehaviorGroup` | method |
| `GetBehavior` | `public AgentBehavior GetBehavior<T>() where T : AgentBehavior` | method |
| `HasBehaviorGroup` | `public bool HasBehaviorGroup<T>()` | method |
| `RemoveBehaviorGroup` | `public void RemoveBehaviorGroup<T>() where T : AgentBehaviorGroup` | method |
| `RefreshBehaviorGroups` | `public void RefreshBehaviorGroups(bool isSimulation)` | method |
| `GetActiveBehavior` | `public AgentBehavior GetActiveBehavior()` | method |
| `GetActiveBehaviorGroup` | `public AgentBehaviorGroup GetActiveBehaviorGroup()` | method |
| `NavigationState` | `public enum NavigationState` | property |
| `NavigationState` | `public enum NavigationState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
