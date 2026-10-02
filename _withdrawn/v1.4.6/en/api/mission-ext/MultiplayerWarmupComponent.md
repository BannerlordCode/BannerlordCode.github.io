---
title: "MultiplayerWarmupComponent"
description: "MultiplayerWarmupComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 18 exposed members (10 methods, 3 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerWarmupComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerWarmupComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MultiplayerWarmupComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 18 public/protected members: 10 methods, 3 properties, 2 fields, 2 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerWarmupComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerWarmupComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 10/18, properties 3/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TotalWarmupDuration` | `public static float TotalWarmupDuration` | property |
| `OnWarmupEnding;` | `public event Action OnWarmupEnding;` | event |
| `OnWarmupEnded;` | `public event Action OnWarmupEnded;` | event |
| `IsInWarmup` | `public bool IsInWarmup` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | method |
| `CheckForWarmupProgressEnd` | `public bool CheckForWarmupProgressEnd()` | method |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | method |
| `EndWarmupProgress` | `public void EndWarmupProgress()` | method |
| `CanMatchStartAfterWarmup` | `public bool CanMatchStartAfterWarmup()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `CommandEndWarmup` | `public static string CommandEndWarmup(List<string>strings)` | method |
| `RespawnPeriodInWarmup` | `public const int RespawnPeriodInWarmup` | field |
| `WarmupEndWaitTime` | `public const int WarmupEndWaitTime` | field |
| `WarmupStates` | `public enum WarmupStates` | property |
| `WarmupStates` | `public enum WarmupStates` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
