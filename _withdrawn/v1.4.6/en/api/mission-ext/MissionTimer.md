---
title: "MissionTimer"
description: "MissionTimer: a public class in TaleWorlds.MountAndBlade; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionTimer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionTimer`
**File:** `TaleWorlds.MountAndBlade/MissionTimer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionTimer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionTimer.cs. It is a public class; the inheritance chain is MissionTimer. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTimer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionTimer. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionTimer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionTimer` | `public MissionTimer(float duration)` | constructor |
| `GetStartTime` | `public MissionTime GetStartTime()` | method |
| `GetTimerDuration` | `public float GetTimerDuration()` | method |
| `GetRemainingTimeInSeconds` | `public float GetRemainingTimeInSeconds(bool synched = false)` | method |
| `Check` | `public bool Check(bool reset = false)` | method |
| `Reset` | `public void Reset()` | method |
| `Set` | `public void Set(float timeInSeconds)` | method |
| `SetDuration` | `public void SetDuration(float duration)` | method |
| `CreateSynchedTimerClient` | `public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
