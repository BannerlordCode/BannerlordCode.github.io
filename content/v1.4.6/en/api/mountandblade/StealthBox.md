---
title: "StealthBox"
description: "StealthBox: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 7 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Objects/StealthBox.cs."
---
# StealthBox

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StealthBox : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/StealthBox.cs`

## Overview

StealthBox lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/StealthBox.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is StealthBox → ScriptComponentBehavior. It exposes 7 public/protected members: 4 methods, 1 properties, 2 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthBox is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects) the module directory; inheritance chain StealthBox → ScriptComponentBehavior. The surface is method-led (methods 4/7, properties 1/7), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/StealthBox.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<StealthBox>OnBoxInitialized;` | event |
| `Action` | `public static event Action<StealthBox>OnBoxRemoved;` | event |
| `CoversStandingAgents` | `public bool CoversStandingAgents` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `IsPointInside` | `public bool IsPointInside(Vec3 point)` | method |
| `IsAgentInside` | `public bool IsAgentInside(Agent agent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings)
- [same namespace AreaMarker](../AreaMarker)
- [same namespace FightAreaMarker](../FightAreaMarker)
- [same namespace FlagCapturePoint](../FlagCapturePoint)
