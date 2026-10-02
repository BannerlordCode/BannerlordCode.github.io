---
title: "JoustingAgentController"
description: "JoustingAgentController: a public class in SandBox.Tournaments.AgentControllers, inheriting AgentController; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Tournaments/AgentControllers/JoustingAgentController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# JoustingAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`
**Module:** `SandBox`
**Type:** `public class JoustingAgentController : AgentController`
**File:** `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

JoustingAgentController lives in the SandBox module, source file SandBox/Tournaments/AgentControllers/JoustingAgentController.cs. It is a public class, implementing/inheriting AgentController; the inheritance chain is JoustingAgentController → AgentController. It exposes 11 public/protected members: 5 methods, 5 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: JoustingAgentController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Tournaments.AgentControllers`, inheritance chain JoustingAgentController → AgentController. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/AgentControllers/JoustingAgentController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `State` | `public JoustingAgentController.JoustingAgentState State` | property |
| `JoustingMissionController` | `public TournamentJoustingMissionController JoustingMissionController` | property |
| `Opponent` | `public Agent Opponent` | property |
| `PrepareEquipmentsAfterDismount` | `public bool PrepareEquipmentsAfterDismount` | property |
| `OnInitialize` | `public override void OnInitialize()` | method |
| `UpdateState` | `public void UpdateState()` | method |
| `PrepareAgentToSwordDuel` | `public void PrepareAgentToSwordDuel()` | method |
| `PrepareEquipmentsForSwordDuel` | `public void PrepareEquipmentsForSwordDuel()` | method |
| `IsRiding` | `public bool IsRiding()` | method |
| `JoustingAgentState` | `public enum JoustingAgentState` | property |
| `JoustingAgentState` | `public enum JoustingAgentState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentController](../../mission-ext/AgentController/)
- [same namespace ArcheryTournamentAgentController](../ArcheryTournamentAgentController/)
- [same namespace TownHorseRaceAgentController](../TownHorseRaceAgentController/)
