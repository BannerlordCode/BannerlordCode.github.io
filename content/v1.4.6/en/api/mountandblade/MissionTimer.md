---
title: "MissionTimer"
description: "MissionTimer: a public class in TaleWorlds.MountAndBlade; 9 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionTimer.cs."
---
# MissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionTimer`
**File:** `TaleWorlds.MountAndBlade/MissionTimer.cs`

## Overview

MissionTimer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionTimer.cs. It is a public class; the inheritance chain is MissionTimer. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTimer is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionTimer. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionTimer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
