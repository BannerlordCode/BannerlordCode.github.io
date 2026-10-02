---
title: "MBItem"
description: "MBItem: a public class in TaleWorlds.MountAndBlade; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBItem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBItem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBItem`
**File:** `TaleWorlds.MountAndBlade/MBItem.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBItem lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBItem.cs. It is a public class; the inheritance chain is MBItem. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBItem lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBItem. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBItem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetItemUsageIndex` | `public static int GetItemUsageIndex(string itemUsageName)` | method |
| `GetItemHolsterIndex` | `public static int GetItemHolsterIndex(string itemHolsterName)` | method |
| `GetItemIsPassiveUsage` | `public static bool GetItemIsPassiveUsage(string itemUsageName)` | method |
| `GetHolsterFrameByIndex` | `public static MatrixFrame GetHolsterFrameByIndex(int index)` | method |
| `GetItemUsageSetFlags` | `public static ItemObject.ItemUsageSetFlags GetItemUsageSetFlags(string ItemUsageName)` | method |
| `GetItemUsageReloadActionCode` | `public static ActionIndexCache GetItemUsageReloadActionCode(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)` | method |
| `GetItemUsageStrikeType` | `public static int GetItemUsageStrikeType(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)` | method |
| `GetMissileRange` | `public static float GetMissileRange(float shotSpeed, float zDiff)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
