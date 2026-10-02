---
title: "DefencePoint"
description: "DefencePoint: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DefencePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefencePoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefencePoint : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/DefencePoint.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DefencePoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefencePoint.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is DefencePoint → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefencePoint lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DefencePoint → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefencePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AddDefender` | `public void AddDefender(Agent defender)` | method |
| `RemoveDefender` | `public bool RemoveDefender(Agent defender)` | method |
| `IEnumerable` | `public IEnumerable<Agent>Defenders` | property |
| `PurgeInactiveDefenders` | `public void PurgeInactiveDefenders()` | method |
| `GetVacantPosition` | `public MatrixFrame GetVacantPosition(Agent a)` | method |
| `CountOccupiedDefenderPositions` | `public int CountOccupiedDefenderPositions()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
