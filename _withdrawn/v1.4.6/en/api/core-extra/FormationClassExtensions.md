---
title: "FormationClassExtensions"
description: "FormationClassExtensions: a public class in TaleWorlds.Core; 12 exposed members (7 methods, 0 properties, 5 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/FormationClassExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationClassExtensions

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class FormationClassExtensions`
**File:** `TaleWorlds.Core/FormationClassExtensions.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

FormationClassExtensions lives in the TaleWorlds.Core module, source file TaleWorlds.Core/FormationClassExtensions.cs. It is a public class; the inheritance chain is FormationClassExtensions. It exposes 12 public/protected members: 7 methods, 5 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationClassExtensions lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain FormationClassExtensions. The surface is method-led (methods 7/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/FormationClassExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetName` | `public static string GetName(this FormationClass formationClass)` | method |
| `GetLocalizedName` | `public static TextObject GetLocalizedName(this FormationClass formationClass)` | method |
| `GetTroopUsageFlags` | `public static TroopUsageFlags GetTroopUsageFlags(this FormationClass troopClass)` | method |
| `GetTroopTypeForRegularFormation` | `public static TroopType GetTroopTypeForRegularFormation(this FormationClass formationClass)` | method |
| `IsDefaultFormationClass` | `public static bool IsDefaultFormationClass(this FormationClass formationClass)` | method |
| `IsRegularFormationClass` | `public static bool IsRegularFormationClass(this FormationClass formationClass)` | method |
| `FallbackClass` | `public static FormationClass FallbackClass(this FormationClass formationClass)` | method |
| `DefaultInfantryTroopUsageFlags` | `public const TroopUsageFlags DefaultInfantryTroopUsageFlags` | field |
| `DefaultRangedTroopUsageFlags` | `public const TroopUsageFlags DefaultRangedTroopUsageFlags` | field |
| `DefaultCavalryTroopUsageFlags` | `public const TroopUsageFlags DefaultCavalryTroopUsageFlags` | field |
| `DefaultHorseArcherTroopUsageFlags` | `public const TroopUsageFlags DefaultHorseArcherTroopUsageFlags` | field |
| `FormationClass[]FormationClassValues` | `public static FormationClass[]FormationClassValues` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
