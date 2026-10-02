---
title: "CombatLogManager"
description: "CombatLogManager: a public class in TaleWorlds.MountAndBlade; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CombatLogManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CombatLogManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class CombatLogManager`
**File:** `TaleWorlds.MountAndBlade/CombatLogManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CombatLogManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CombatLogManager.cs. It is a public class; the inheritance chain is CombatLogManager. It exposes 3 public/protected members: 2 methods, 1 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CombatLogManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CombatLogManager. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CombatLogManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public static event Action<CombatLogData>OnGenerateCombatLog;` | event |
| `PrintDebugLogForInfo` | `public static void PrintDebugLogForInfo(Agent attackerAgent, Agent victimAgent, DamageTypes damageType, int speedBonus, int armorAmount, int inflictedDamage, int absorbedByArmor, sbyte collisionBone, float lostHpPercentage)` | method |
| `GenerateCombatLog` | `public static void GenerateCombatLog(CombatLogData logData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
