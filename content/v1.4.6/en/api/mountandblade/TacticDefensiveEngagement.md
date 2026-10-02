---
title: "TacticDefensiveEngagement"
description: "TacticDefensiveEngagement: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TacticDefensiveEngagement.cs."
---
# TacticDefensiveEngagement

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticDefensiveEngagement : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticDefensiveEngagement.cs`

## Overview

TacticDefensiveEngagement lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticDefensiveEngagement.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticDefensiveEngagement → TacticComponent. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticDefensiveEngagement is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TacticDefensiveEngagement → TacticComponent. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticDefensiveEngagement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TacticDefensiveEngagement` | `public TacticDefensiveEngagement(Team team) : base(team)` | constructor |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | method |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TacticComponent](../TacticComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
