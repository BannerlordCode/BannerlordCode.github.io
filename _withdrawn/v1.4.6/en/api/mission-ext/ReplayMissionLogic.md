---
title: "ReplayMissionLogic"
description: "ReplayMissionLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ReplayMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ReplayMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ReplayMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ReplayMissionLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ReplayMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ReplayMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ReplayMissionLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ReplayMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ReplayMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FileName` | `public string FileName` | property |
| `ReplayMissionLogic` | `public ReplayMissionLogic(bool isMultiplayer, string fileName = "")` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
