---
title: "KillTracker"
description: "KillTracker: a public class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges, inheriting GameBadgeTracker; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillTracker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KillTracker

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class KillTracker : GameBadgeTracker`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillTracker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

KillTracker lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillTracker.cs. It is a public class, implementing/inheriting GameBadgeTracker; the inheritance chain is KillTracker → GameBadgeTracker. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KillTracker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`, inheritance chain KillTracker → GameBadgeTracker. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillTracker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KillTracker` | `public KillTracker(string badgeId, BadgeCondition condition, Dictionary<ValueTuple<PlayerId, string, string>, int>dataDictionary)` | constructor |
| `OnKill` | `public override void OnKill(KillData killData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameBadgeTracker](../GameBadgeTracker/)
- [same namespace Badge](../Badge/)
- [same namespace BadgeCondition](../BadgeCondition/)
- [same namespace BadgeManager](../BadgeManager/)
- [same namespace BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
