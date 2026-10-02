---
title: "GameBadgeTracker"
description: "GameBadgeTracker: a public class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/GameBadgeTracker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameBadgeTracker

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public abstract class GameBadgeTracker`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/GameBadgeTracker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameBadgeTracker lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/GameBadgeTracker.cs. It is a public class (abstract); the inheritance chain is GameBadgeTracker. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameBadgeTracker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`, inheritance chain GameBadgeTracker. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/GameBadgeTracker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnPlayerJoin` | `public virtual void OnPlayerJoin(PlayerData playerData)` | method |
| `OnKill` | `public virtual void OnKill(KillData killData)` | method |
| `OnStartingNextBattle` | `public virtual void OnStartingNextBattle()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Badge](../Badge/)
- [same namespace BadgeCondition](../BadgeCondition/)
- [same namespace BadgeManager](../BadgeManager/)
- [same namespace BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
