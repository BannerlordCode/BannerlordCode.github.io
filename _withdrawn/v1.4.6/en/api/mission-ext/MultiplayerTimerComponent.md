---
title: "MultiplayerTimerComponent"
description: "MultiplayerTimerComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerTimerComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerTimerComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MultiplayerTimerComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerTimerComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerTimerComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsTimerRunning` | `public bool IsTimerRunning` | property |
| `StartTimerAsServer` | `public void StartTimerAsServer(float duration)` | method |
| `StartTimerAsClient` | `public void StartTimerAsClient(float startTime, float duration)` | method |
| `GetRemainingTime` | `public float GetRemainingTime(bool isSynched)` | method |
| `CheckIfTimerPassed` | `public bool CheckIfTimerPassed()` | method |
| `GetCurrentTimerStartTime` | `public MissionTime GetCurrentTimerStartTime()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
