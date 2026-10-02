---
title: "TacticHoldChokePoint"
description: "TacticHoldChokePoint: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TacticHoldChokePoint.cs."
---
# TacticHoldChokePoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticHoldChokePoint : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticHoldChokePoint.cs`

## Overview

TacticHoldChokePoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticHoldChokePoint.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticHoldChokePoint → TacticComponent. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticHoldChokePoint is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TacticHoldChokePoint → TacticComponent. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticHoldChokePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TacticHoldChokePoint` | `public TacticHoldChokePoint(Team team) : base(team)` | constructor |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | method |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | method |
| `ResetTacticalPositions` | `protected internal override bool ResetTacticalPositions()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TacticComponent](../TacticComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
