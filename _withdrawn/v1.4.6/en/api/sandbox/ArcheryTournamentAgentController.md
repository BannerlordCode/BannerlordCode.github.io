---
title: "ArcheryTournamentAgentController"
description: "ArcheryTournamentAgentController: a public class in SandBox.Tournaments.AgentControllers, inheriting AgentController; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArcheryTournamentAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`
**Module:** `SandBox`
**Type:** `public class ArcheryTournamentAgentController : AgentController`
**File:** `SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ArcheryTournamentAgentController lives in the SandBox module, source file SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs. It is a public class, implementing/inheriting AgentController; the inheritance chain is ArcheryTournamentAgentController → AgentController. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArcheryTournamentAgentController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Tournaments.AgentControllers`, inheritance chain ArcheryTournamentAgentController → AgentController. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInitialize` | `public override void OnInitialize()` | method |
| `OnTick` | `public void OnTick()` | method |
| `SetTargets` | `public void SetTargets(List<DestructableComponent>targetList)` | method |
| `OnTargetHit` | `public void OnTargetHit(Agent agent, DestructableComponent target)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentController](../../mission-ext/AgentController/)
- [same namespace JoustingAgentController](../JoustingAgentController/)
- [same namespace TownHorseRaceAgentController](../TownHorseRaceAgentController/)
