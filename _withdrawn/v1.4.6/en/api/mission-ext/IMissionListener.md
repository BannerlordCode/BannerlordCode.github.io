---
title: "IMissionListener"
description: "IMissionListener: a public interface in TaleWorlds.MountAndBlade; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IMissionListener.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionListener

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionListener`
**File:** `TaleWorlds.MountAndBlade/IMissionListener.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IMissionListener lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IMissionListener.cs. It is a public interface; the inheritance chain is IMissionListener. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMissionListener lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IMissionListener. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IMissionListener.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnEquipItemsFromSpawnEquipmentBegin` | `void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType);` | method |
| `OnEquipItemsFromSpawnEquipment` | `void OnEquipItemsFromSpawnEquipment(Agent agent, Agent.CreationType creationType);` | method |
| `OnEndMission` | `void OnEndMission();` | method |
| `OnMissionModeChange` | `void OnMissionModeChange(MissionMode oldMissionMode, bool atStart);` | method |
| `OnConversationCharacterChanged` | `void OnConversationCharacterChanged();` | method |
| `OnResetMission` | `void OnResetMission();` | method |
| `OnDeploymentPlanMade` | `void OnDeploymentPlanMade(Team team, bool isFirstPlan);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
