---
title: "Announcement"
description: "Announcement: a public class in TaleWorlds.MountAndBlade.Diamond; 7 exposed members (0 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Announcement.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Announcement

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class Announcement`
**File:** `TaleWorlds.MountAndBlade.Diamond/Announcement.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

Announcement lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Announcement.cs. It is a public class; the inheritance chain is Announcement. It exposes 7 public/protected members: 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Announcement lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain Announcement. The surface is property-led (properties 5/7, methods 0/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Announcement.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `BattleId` | `public Guid BattleId` | property |
| `Type` | `public AnnouncementType Type` | property |
| `Text` | `public string Text` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Announcement` | `public Announcement()` | constructor |
| `Announcement` | `public Announcement(int id, Guid battleId, AnnouncementType type, string text, bool isEnabled)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
- [same namespace AvailableCustomGames](../AvailableCustomGames/)
