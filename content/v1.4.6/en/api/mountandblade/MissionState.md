---
title: "MissionState"
description: "MissionState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 16 exposed members (10 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionState.cs."
---
# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionState : GameState`
**File:** `TaleWorlds.MountAndBlade/MissionState.cs`

## Overview

MissionState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is MissionState → GameState. It exposes 16 public/protected members: 10 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionState is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionState → GameState. The surface is method-led (methods 10/16, properties 6/16), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Handler` | `public IMissionSystemHandler Handler` | property |
| `Current` | `public static MissionState Current` | property |
| `CurrentMission` | `public Mission CurrentMission` | property |
| `MissionName` | `public string MissionName` | property |
| `FirstMissionTickAfterLoading` | `public bool FirstMissionTickAfterLoading` | property |
| `Paused` | `public bool Paused` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnTick` | `protected override void OnTick(float realDt)` | method |
| `HandleOpenNew` | `protected Mission HandleOpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors, bool needsMemoryCleanup)` | method |
| `IsRecordingActive` | `protected static bool IsRecordingActive()` | method |
| `OpenNew` | `public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)` | method |
| `BeginDelayedDisconnectFromMission` | `public void BeginDelayedDisconnectFromMission()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
