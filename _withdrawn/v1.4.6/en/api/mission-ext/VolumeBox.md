---
title: "VolumeBox"
description: "VolumeBox: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 8 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/VolumeBox.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VolumeBox

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VolumeBox : MissionObject`
**File:** `TaleWorlds.MountAndBlade/VolumeBox.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

VolumeBox lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/VolumeBox.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is VolumeBox → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 8 public/protected members: 7 methods, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VolumeBox lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain VolumeBox → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/VolumeBox.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AddToCheckList` | `public void AddToCheckList(Agent agent)` | method |
| `RemoveFromCheckList` | `public void RemoveFromCheckList(Agent agent)` | method |
| `SetIsOccupiedDelegate` | `public void SetIsOccupiedDelegate(VolumeBox.VolumeBoxDelegate volumeBoxDelegate)` | method |
| `HasAgentsInAttackerSide` | `public bool HasAgentsInAttackerSide()` | method |
| `IsPointIn` | `public bool IsPointIn(Vec3 point)` | method |
| `VolumeBoxDelegate` | `public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent>agentsInVolume);` | method |
| `VolumeBoxDelegate` | `public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent>agentsInVolume)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObject](../MissionObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
