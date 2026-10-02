---
title: "MPConditionalEffect"
description: "MPConditionalEffect: a public class in TaleWorlds.MountAndBlade; 12 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MPConditionalEffect.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPConditionalEffect

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MPConditionalEffect`
**File:** `TaleWorlds.MountAndBlade/MPConditionalEffect.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MPConditionalEffect lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPConditionalEffect.cs. It is a public class; the inheritance chain is MPConditionalEffect. It exposes 12 public/protected members: 5 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPConditionalEffect lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MPConditionalEffect. The surface is method-led (methods 5/12, properties 5/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPConditionalEffect.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<MPPerkCondition>Conditions` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<MPPerkEffectBase>Effects` | property |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags` | property |
| `IsTickRequired` | `public bool IsTickRequired` | property |
| `MPConditionalEffect` | `public MPConditionalEffect(List<string>gameModes, XmlNode node)` | constructor |
| `Check` | `public bool Check(MissionPeer peer)` | method |
| `Check` | `public bool Check(Agent agent)` | method |
| `OnEvent` | `public void OnEvent(bool isWarmup, MissionPeer peer, MPConditionalEffect.ConditionalEffectContainer container)` | method |
| `OnEvent` | `public void OnEvent(bool isWarmup, Agent agent, MPConditionalEffect.ConditionalEffectContainer container)` | method |
| `OnTick` | `public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)` | method |
| `List` | `public class ConditionalEffectContainer : List<MPConditionalEffect>` | property |
| `List` | `public class ConditionalEffectContainer : List<MPConditionalEffect>` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
