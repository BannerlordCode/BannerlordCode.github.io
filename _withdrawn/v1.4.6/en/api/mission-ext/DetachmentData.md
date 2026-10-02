---
title: "DetachmentData"
description: "DetachmentData: a public class in TaleWorlds.MountAndBlade; 6 exposed members (2 methods, 1 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DetachmentData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DetachmentData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DetachmentData`
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DetachmentData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DetachmentData.cs. It is a public class; the inheritance chain is DetachmentData. It exposes 6 public/protected members: 2 methods, 1 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DetachmentData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DetachmentData. The surface is method-led (methods 2/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DetachmentData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentCount` | `public int AgentCount` | property |
| `IsPrecalculated` | `public bool IsPrecalculated()` | method |
| `DetachmentData` | `public DetachmentData()` | constructor |
| `RemoveScoreOfAgent` | `public void RemoveScoreOfAgent(Agent agent)` | method |
| `List` | `public List<Formation>joinedFormations` | field |
| `List` | `public List<ValueTuple<Agent, List<float>>>agentScores` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
