---
title: "TrainingFieldMissionController"
description: "TrainingFieldMissionController: a public class in StoryMode, inheriting MissionLogic; 17 exposed members (8 methods, 5 properties, 0 fields). Source: StoryMode/Missions/TrainingFieldMissionController.cs."
---
# TrainingFieldMissionController

**Namespace:** `StoryMode.Missions`
**Module:** `StoryMode`
**Type:** `public class TrainingFieldMissionController : MissionLogic`
**File:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## Overview

TrainingFieldMissionController lives in the StoryMode module, source file StoryMode/Missions/TrainingFieldMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is TrainingFieldMissionController → MissionLogic. It exposes 17 public/protected members: 8 methods, 5 properties, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingFieldMissionController is a top-level type in StoryMode, namespace differing from (StoryMode.Missions) the module directory; inheritance chain TrainingFieldMissionController → MissionLogic. The surface is method-led (methods 8/17, properties 5/17), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/Missions/TrainingFieldMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialCurrentObjective` | `public TextObject InitialCurrentObjective` | property |
| `OnCreated` | `public override void OnCreated()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `LoadCrossbowForStarting` | `public void LoadCrossbowForStarting()` | method |
| `OnAgentShootMissile` | `public override void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `TutorialObjective` | `public class TutorialObjective` | property |
| `DelayedAction` | `public readonly struct DelayedAction` | property |
| `MouseObjectives` | `public enum MouseObjectives` | property |
| `ObjectivePerformingType` | `public enum ObjectivePerformingType` | property |
| `TutorialObjective` | `public class TutorialObjective` | nested type |
| `DelayedAction` | `public readonly struct DelayedAction` | nested type |
| `MouseObjectives` | `public enum MouseObjectives` | nested type |
| `ObjectivePerformingType` | `public enum ObjectivePerformingType` | nested type |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeMissions](../StoryModeMissions)
