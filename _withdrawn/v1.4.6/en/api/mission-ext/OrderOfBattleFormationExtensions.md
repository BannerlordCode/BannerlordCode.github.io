---
title: "OrderOfBattleFormationExtensions"
description: "OrderOfBattleFormationExtensions: a public class in TaleWorlds.MountAndBlade; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleFormationExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class OrderOfBattleFormationExtensions`
**File:** `TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OrderOfBattleFormationExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs. It is a public class; the inheritance chain is OrderOfBattleFormationExtensions. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationExtensions lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain OrderOfBattleFormationExtensions. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Refresh` | `public unsafe static void Refresh(this Formation formation)` | method |
| `GetOrderOfBattleFormationClass` | `public static DeploymentFormationClass GetOrderOfBattleFormationClass(this FormationClass formationClass)` | method |
| `List` | `public static List<FormationClass>GetFormationClasses(this DeploymentFormationClass orderOfBattleFormationClass)` | method |
| `GetFilterName` | `public static TextObject GetFilterName(this FormationFilterType filterType)` | method |
| `GetFilterDescription` | `public static TextObject GetFilterDescription(this FormationFilterType filterType)` | method |
| `GetClassName` | `public static TextObject GetClassName(this DeploymentFormationClass formationClass)` | method |
| `List` | `public static List<Agent>GetHeroAgents(this Team team)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
