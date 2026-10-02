---
title: "TroopFilteringUtilities"
description: "TroopFilteringUtilities: a public class in TaleWorlds.MountAndBlade; 11 exposed members (7 methods, 0 properties, 4 fields). Source: TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs."
---
# TroopFilteringUtilities

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class TroopFilteringUtilities`
**File:** `TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs`

## Overview

TroopFilteringUtilities lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs. It is a public class; the inheritance chain is TroopFilteringUtilities. It exposes 11 public/protected members: 7 methods, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopFilteringUtilities is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TroopFilteringUtilities. The surface is method-led (methods 7/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetFilter` | `public static TroopTraitsMask GetFilter(bool isMounted, bool isRanged, bool isMelee, bool hasHeavyArmor, bool hasThrown, bool hasSpear, bool hasShield)` | method |
| `GetFilter` | `public static TroopTraitsMask GetFilter(params FormationClass[]formationClasses)` | method |
| `GetFilter` | `public static TroopTraitsMask GetFilter(params FormationFilterType[]filterTypes)` | method |
| `GetPriorityFunction` | `public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int>priorityFunc)` | method |
| `GetPriorityFunction` | `public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int>priorityFunc)` | method |
| `GetTroopPriority` | `public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)` | method |
| `GetMaxPriority` | `public static int GetMaxPriority(TroopTraitsMask filter)` | method |
| `MinPriority` | `public const int MinPriority` | field |
| `EquipmentPriority` | `public const int EquipmentPriority` | field |
| `EngagementTypePriority` | `public const int EngagementTypePriority` | field |
| `MountedPriority` | `public const int MountedPriority` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
