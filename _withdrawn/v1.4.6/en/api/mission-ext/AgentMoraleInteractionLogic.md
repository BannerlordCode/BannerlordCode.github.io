---
title: "AgentMoraleInteractionLogic"
description: "AgentMoraleInteractionLogic: a public class in TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic, inheriting MissionLogic; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentMoraleInteractionLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentMoraleInteractionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentMoraleInteractionLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is AgentMoraleInteractionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentMoraleInteractionLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic`, inheritance chain AgentMoraleInteractionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AgentMoraleInteractionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentMoraleInteractionLogic` | `public AgentMoraleInteractionLogic()` | constructor |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnAgentFleeing` | `public override void OnAgentFleeing(Agent affectedAgent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace AmmoSupplyLogic](../AmmoSupplyLogic/)
- [same namespace BattleMissionAgentInteractionLogic](../BattleMissionAgentInteractionLogic/)
