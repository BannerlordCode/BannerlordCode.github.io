---
title: "MissionTimeTracker"
description: "MissionTimeTracker: a public class in TaleWorlds.MountAndBlade; 7 exposed members (3 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionTimeTracker.cs."
---
# MissionTimeTracker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionTimeTracker`
**File:** `TaleWorlds.MountAndBlade/MissionTimeTracker.cs`

## Overview

MissionTimeTracker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionTimeTracker.cs. It is a public class; the inheritance chain is MissionTimeTracker. It exposes 7 public/protected members: 3 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTimeTracker is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionTimeTracker. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionTimeTracker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfTicks` | `public long NumberOfTicks` | property |
| `DeltaTimeInTicks` | `public long DeltaTimeInTicks` | property |
| `MissionTimeTracker` | `public MissionTimeTracker(MissionTime initialMapTime)` | constructor |
| `MissionTimeTracker` | `public MissionTimeTracker()` | constructor |
| `Tick` | `public void Tick(float seconds)` | method |
| `UpdateSync` | `public void UpdateSync(float newValue)` | method |
| `GetLastSyncDifference` | `public float GetLastSyncDifference()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
