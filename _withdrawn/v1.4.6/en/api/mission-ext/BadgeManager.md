---
title: "BadgeManager"
description: "BadgeManager: a public class in TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges; 14 exposed members (7 methods, 2 properties, 5 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public static class BadgeManager`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BadgeManager lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs. It is a public class; the inheritance chain is BadgeManager. It exposes 14 public/protected members: 7 methods, 2 properties, 5 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BadgeManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`, inheritance chain BadgeManager. The surface is method-led (methods 7/14, properties 2/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public static List<Badge>Badges` | property |
| `IsInitialized` | `public static bool IsInitialized` | property |
| `InitializeWithXML` | `public static void InitializeWithXML(string xmlPath)` | method |
| `OnFinalize` | `public static void OnFinalize()` | method |
| `GetByIndex` | `public static Badge GetByIndex(int index)` | method |
| `GetById` | `public static Badge GetById(string id)` | method |
| `List` | `public static List<Badge>GetByType(BadgeType type)` | method |
| `GetBadgeConditionValue` | `public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)` | method |
| `GetBadgeConditionNumericValue` | `public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)` | method |
| `PropertyParameterName` | `public const string PropertyParameterName` | field |
| `ValueParameterName` | `public const string ValueParameterName` | field |
| `MinValueParameterName` | `public const string MinValueParameterName` | field |
| `MaxValueParameterName` | `public const string MaxValueParameterName` | field |
| `IsBestParameterName` | `public const string IsBestParameterName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Badge](../Badge/)
- [same namespace BadgeCondition](../BadgeCondition/)
- [same namespace BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
- [same namespace BadgeType](../BadgeType/)
