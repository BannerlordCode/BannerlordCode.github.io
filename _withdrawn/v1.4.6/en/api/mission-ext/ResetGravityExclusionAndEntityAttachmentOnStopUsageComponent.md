---
title: "ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent"
description: "ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent: a public class in TaleWorlds.MountAndBlade, inheriting UsableMissionObjectComponent; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs. It is a public class, implementing/inheriting UsableMissionObjectComponent; the inheritance chain is ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent → UsableMissionObjectComponent. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent → UsableMissionObjectComponent. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent` | `public ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent(Action<Agent>onUseAction)` | constructor |
| `OnUse` | `protected internal override void OnUse(Agent userAgent)` | method |
| `OnUseStopped` | `protected internal override void OnUseStopped(Agent userAgent, bool isSuccessful = true)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObjectComponent](../UsableMissionObjectComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
