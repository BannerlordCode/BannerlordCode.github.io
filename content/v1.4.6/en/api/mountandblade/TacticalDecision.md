---
title: "TacticalDecision"
description: "TacticalDecision: a public struct in TaleWorlds.MountAndBlade; 7 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TacticalDecision.cs."
---
# TacticalDecision

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct TacticalDecision`
**File:** `TaleWorlds.MountAndBlade/TacticalDecision.cs`

## Overview

TacticalDecision lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticalDecision.cs. It is a public struct; the inheritance chain is TacticalDecision. It exposes 7 public/protected members: 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticalDecision is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TacticalDecision. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticalDecision.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DecidingComponent` | `public TacticComponent DecidingComponent` | property |
| `DecisionCode` | `public byte DecisionCode` | property |
| `SubjectFormation` | `public Formation SubjectFormation` | property |
| `TargetFormation` | `public Formation TargetFormation` | property |
| `TargetPosition` | `public WorldPosition? TargetPosition` | property |
| `TargetObject` | `public MissionObject TargetObject` | property |
| `TacticalDecision` | `public TacticalDecision(TacticComponent decidingComponent, byte decisionCode, Formation subjectFormation = null, Formation targetFormation = null, WorldPosition? targetPosition = null, MissionObject targetObject = null)` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
