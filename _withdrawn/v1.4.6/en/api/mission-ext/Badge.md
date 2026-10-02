---
title: "Badge"
description: "Badge: a public class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges; 13 exposed members (1 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Badge

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class Badge`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

Badge lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs. It is a public class; the inheritance chain is Badge. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Badge lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`, inheritance chain Badge. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Index` | `public int Index` | property |
| `Type` | `public BadgeType Type` | property |
| `StringId` | `public string StringId` | property |
| `GroupId` | `public string GroupId` | property |
| `Name` | `public TextObject Name` | property |
| `Description` | `public TextObject Description` | property |
| `IsVisibleOnlyWhenEarned` | `public bool IsVisibleOnlyWhenEarned` | property |
| `PeriodStart` | `public DateTime PeriodStart` | property |
| `PeriodEnd` | `public DateTime PeriodEnd` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsTimed` | `public bool IsTimed` | property |
| `Badge` | `public Badge(int index, BadgeType badgeType)` | constructor |
| `Deserialize` | `public virtual void Deserialize(XmlNode node)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BadgeCondition](../BadgeCondition/)
- [same namespace BadgeManager](../BadgeManager/)
- [same namespace BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
- [same namespace BadgeType](../BadgeType/)
