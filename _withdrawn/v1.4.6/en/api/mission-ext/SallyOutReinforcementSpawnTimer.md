---
title: "SallyOutReinforcementSpawnTimer"
description: "SallyOutReinforcementSpawnTimer: a public class in TaleWorlds.MountAndBlade, inheriting ICustomReinforcementSpawnTimer; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SallyOutReinforcementSpawnTimer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SallyOutReinforcementSpawnTimer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SallyOutReinforcementSpawnTimer : ICustomReinforcementSpawnTimer`
**File:** `TaleWorlds.MountAndBlade/SallyOutReinforcementSpawnTimer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SallyOutReinforcementSpawnTimer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SallyOutReinforcementSpawnTimer.cs. It is a public class, implementing/inheriting ICustomReinforcementSpawnTimer; the inheritance chain is SallyOutReinforcementSpawnTimer → ICustomReinforcementSpawnTimer. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SallyOutReinforcementSpawnTimer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SallyOutReinforcementSpawnTimer → ICustomReinforcementSpawnTimer. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SallyOutReinforcementSpawnTimer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SallyOutReinforcementSpawnTimer` | `public SallyOutReinforcementSpawnTimer(float besiegedInterval, float besiegerInterval, float besiegerIntervalChange, int besiegerIntervalChangeCount)` | constructor |
| `Check` | `public bool Check(BattleSideEnum side)` | method |
| `ResetTimer` | `public void ResetTimer(BattleSideEnum side)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICustomReinforcementSpawnTimer](../ICustomReinforcementSpawnTimer/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
