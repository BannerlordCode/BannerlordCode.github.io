---
title: "BadgeOwnerKillTracker"
description: "BadgeOwnerKillTracker: a public class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges, inheriting GameBadgeTracker; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeOwnerKillTracker

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BadgeOwnerKillTracker : GameBadgeTracker`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BadgeOwnerKillTracker lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs. It is a public class, implementing/inheriting GameBadgeTracker; the inheritance chain is BadgeOwnerKillTracker → GameBadgeTracker. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BadgeOwnerKillTracker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`, inheritance chain BadgeOwnerKillTracker → GameBadgeTracker. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeOwnerKillTracker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BadgeOwnerKillTracker` | `public BadgeOwnerKillTracker(string badgeId, BadgeCondition condition, Dictionary<ValueTuple<PlayerId, string, string>, int>dataDictionary)` | constructor |
| `OnPlayerJoin` | `public override void OnPlayerJoin(PlayerData playerData)` | method |
| `OnKill` | `public override void OnKill(KillData killData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameBadgeTracker](../GameBadgeTracker/)
- [same namespace Badge](../Badge/)
- [same namespace BadgeCondition](../BadgeCondition/)
- [same namespace BadgeManager](../BadgeManager/)
- [same namespace BadgeType](../BadgeType/)
