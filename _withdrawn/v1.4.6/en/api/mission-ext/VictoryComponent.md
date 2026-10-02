---
title: "VictoryComponent"
description: "VictoryComponent: a public class in TaleWorlds.MountAndBlade, inheriting AgentComponent; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/VictoryComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VictoryComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VictoryComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/VictoryComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

VictoryComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/VictoryComponent.cs. It is a public class, implementing/inheriting AgentComponent; the inheritance chain is VictoryComponent → AgentComponent. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VictoryComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain VictoryComponent → AgentComponent. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/VictoryComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VictoryComponent` | `public VictoryComponent(Agent agent, RandomTimer timer) : base(agent)` | constructor |
| `CheckTimer` | `public bool CheckTimer()` | method |
| `ChangeTimerDuration` | `public void ChangeTimerDuration(float min, float max)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentComponent](../AgentComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
