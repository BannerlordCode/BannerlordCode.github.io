---
title: "CoverAnimalAgentComponent"
description: "CoverAnimalAgentComponent: a public class in SandBox, inheriting AgentComponent, IFocusable; 14 exposed members (9 methods, 4 properties, 0 fields). Source: SandBox/Missions/CoverAnimalAgentComponent.cs."
---
# CoverAnimalAgentComponent

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CoverAnimalAgentComponent : AgentComponent, IFocusable`
**File:** `SandBox/Missions/CoverAnimalAgentComponent.cs`

## Overview

CoverAnimalAgentComponent lives in the SandBox module, source file SandBox/Missions/CoverAnimalAgentComponent.cs. It is a public class, implementing/inheriting AgentComponent, IFocusable; the inheritance chain is CoverAnimalAgentComponent → AgentComponent. It exposes 14 public/protected members: 9 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CoverAnimalAgentComponent is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain CoverAnimalAgentComponent → AgentComponent. The surface is method-led (methods 9/14, properties 4/14), so it mostly exposes operations. AgentComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/CoverAnimalAgentComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMovementStarted` | `public bool IsMovementStarted` | property |
| `IsAtFinalPoint` | `public bool IsAtFinalPoint` | property |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `public virtual bool IsFocusable` | property |
| `CoverAnimalAgentComponent` | `public CoverAnimalAgentComponent(Agent agent) : base(agent)` | constructor |
| `SetDynamicPatrolArea` | `public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)` | method |
| `StartMovement` | `public void StartMovement()` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `IsTargetReached` | `public bool IsTargetReached()` | method |
| `SetTargetFrame` | `public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, Agent.AIScriptedFrameFlags flags = Agent.AIScriptedFrameFlags.None)` | method |
| `OnFocusGain` | `public void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public void OnFocusLose(Agent userAgent)` | method |
| `GetInfoTextForBeingNotInteractable` | `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `GetDescriptionText` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic)
