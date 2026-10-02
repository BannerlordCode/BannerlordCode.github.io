---
title: "SiegeWeaponMovementComponent"
description: "SiegeWeaponMovementComponent: a public class in TaleWorlds.MountAndBlade, inheriting UsableMissionObjectComponent; 34 exposed members (19 methods, 11 properties, 4 fields). Source: TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs."
---
# SiegeWeaponMovementComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeWeaponMovementComponent : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs`

## Overview

SiegeWeaponMovementComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs. It is a public class, implementing/inheriting UsableMissionObjectComponent; the inheritance chain is SiegeWeaponMovementComponent → UsableMissionObjectComponent. It exposes 34 public/protected members: 19 methods, 11 properties, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeWeaponMovementComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeWeaponMovementComponent → UsableMissionObjectComponent. The surface is method-led (methods 19/34, properties 11/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasApproachedTarget` | `public bool HasApproachedTarget` | property |
| `Velocity` | `public Vec3 Velocity` | property |
| `OnAdded` | `protected internal override void OnAdded(Scene scene)` | method |
| `HighlightPath` | `public void HighlightPath()` | method |
| `SetupGhostEntity` | `public void SetupGhostEntity()` | method |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget` | property |
| `CurrentSpeed` | `public float CurrentSpeed` | property |
| `MovementSoundCodeID` | `public int MovementSoundCodeID` | property |
| `MinSpeed` | `public float MinSpeed` | property |
| `MaxSpeed` | `public float MaxSpeed` | property |
| `PathEntityName` | `public string PathEntityName` | property |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier` | property |
| `WheelDiameter` | `public float WheelDiameter` | property |
| `MainObject` | `public SynchedMissionObject MainObject` | property |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `SetGhostVisibility` | `public void SetGhostVisibility(bool isVisible)` | method |
| `OnEditorInit` | `public void OnEditorInit()` | method |
| `SetDistanceTraveledAsClient` | `public void SetDistanceTraveledAsClient(float distance)` | method |
| `IsOnTickRequired` | `public override bool IsOnTickRequired()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `TickParallelManually` | `public void TickParallelManually(float dt)` | method |
| `GetInitialFrame` | `public MatrixFrame GetInitialFrame()` | method |
| `GetTargetFrame` | `public MatrixFrame GetTargetFrame()` | method |
| `SetDestinationNavMeshIdState` | `public void SetDestinationNavMeshIdState(bool enabled)` | method |
| `MoveToTargetAsClient` | `public void MoveToTargetAsClient()` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `GetTotalDistanceTraveledForPathTracker` | `public float GetTotalDistanceTraveledForPathTracker()` | method |
| `SetTotalDistanceTraveledForPathTracker` | `public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)` | method |
| `SetTargetFrameForPathTracker` | `public void SetTargetFrameForPathTracker()` | method |
| `FindGroundFrameForWheelsStatic` | `public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity>wheels, Scene scene)` | method |
| `GhostObjectTag` | `public const string GhostObjectTag` | field |
| `MoveStandingPointTag` | `public const string MoveStandingPointTag` | field |
| `AxleLength` | `public float AxleLength` | field |
| `NavMeshIdToDisableOnDestination` | `public int NavMeshIdToDisableOnDestination` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMissionObjectComponent](../UsableMissionObjectComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
