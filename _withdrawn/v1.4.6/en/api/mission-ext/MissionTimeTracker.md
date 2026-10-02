---
title: "MissionTimeTracker"
description: "MissionTimeTracker: a public class in TaleWorlds.MountAndBlade; 7 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionTimeTracker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionTimeTracker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionTimeTracker`
**File:** `TaleWorlds.MountAndBlade/MissionTimeTracker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionTimeTracker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionTimeTracker.cs. It is a public class; the inheritance chain is MissionTimeTracker. It exposes 7 public/protected members: 3 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTimeTracker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionTimeTracker. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionTimeTracker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NumberOfTicks` | `public long NumberOfTicks` | property |
| `DeltaTimeInTicks` | `public long DeltaTimeInTicks` | property |
| `MissionTimeTracker` | `public MissionTimeTracker(MissionTime initialMapTime)` | constructor |
| `MissionTimeTracker` | `public MissionTimeTracker()` | constructor |
| `Tick` | `public void Tick(float seconds)` | method |
| `UpdateSync` | `public void UpdateSync(float newValue)` | method |
| `GetLastSyncDifference` | `public float GetLastSyncDifference()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
