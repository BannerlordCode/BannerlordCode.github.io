---
title: "MissionReinforcementsHelper"
description: "MissionReinforcementsHelper: a public class in TaleWorlds.MountAndBlade; 9 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs."
---
# MissionReinforcementsHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MissionReinforcementsHelper`
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## Overview

MissionReinforcementsHelper lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs. It is a public class; the inheritance chain is MissionReinforcementsHelper. It exposes 9 public/protected members: 3 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionReinforcementsHelper is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionReinforcementsHelper. The surface is method-led (methods 3/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public static void OnMissionStart()` | method |
| `int>>GetReinforcementAssignments` | `public unsafe static List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | method |
| `OnMissionEnd` | `public static void OnMissionEnd()` | method |
| `ReinforcementFormationPriority` | `public enum ReinforcementFormationPriority` | property |
| `IComparer` | `public class ReinforcementFormationPreferenceComparer : IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>` | property |
| `ReinforcementFormationData` | `public class ReinforcementFormationData` | property |
| `ReinforcementFormationPriority` | `public enum ReinforcementFormationPriority` | nested type |
| `IComparer` | `public class ReinforcementFormationPreferenceComparer : IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>` | nested type |
| `ReinforcementFormationData` | `public class ReinforcementFormationData` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
