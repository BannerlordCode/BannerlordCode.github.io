---
title: "BadgeCondition"
description: "BadgeCondition: a public class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges; 8 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeCondition

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BadgeCondition`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BadgeCondition lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs. It is a public class; the inheritance chain is BadgeCondition. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BadgeCondition lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`, inheritance chain BadgeCondition. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Type` | `public ConditionType Type` | property |
| `GroupType` | `public ConditionGroupType GroupType` | property |
| `Description` | `public TextObject Description` | property |
| `StringId` | `public string StringId` | property |
| `string>Parameters` | `public IReadOnlyDictionary<string, string>Parameters` | property |
| `BadgeCondition` | `public BadgeCondition(int index, XmlNode node)` | constructor |
| `Check` | `public bool Check(string value)` | method |
| `Check` | `public bool Check(int value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Badge](../Badge/)
- [same namespace BadgeManager](../BadgeManager/)
- [same namespace BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
- [same namespace BadgeType](../BadgeType/)
