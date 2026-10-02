---
title: "TacticDefendCastle"
description: "TacticDefendCastle: a public class in TaleWorlds.MountAndBlade, inheriting TacticComponent; 9 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/TacticDefendCastle.cs."
---
# TacticDefendCastle

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticDefendCastle : TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticDefendCastle.cs`

## Overview

TacticDefendCastle lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticDefendCastle.cs. It is a public class, implementing/inheriting TacticComponent; the inheritance chain is TacticDefendCastle → TacticComponent. It exposes 9 public/protected members: 5 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticDefendCastle is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TacticDefendCastle → TacticComponent. The surface is method-led (methods 5/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticDefendCastle.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentTacticState` | `public TacticDefendCastle.TacticState CurrentTacticState` | property |
| `TacticDefendCastle` | `public TacticDefendCastle(Team team) : base(team)` | constructor |
| `CheckAndSetAvailableFormationsChanged` | `protected override bool CheckAndSetAvailableFormationsChanged()` | method |
| `ManageFormationCounts` | `protected override void ManageFormationCounts()` | method |
| `StopUsingAllMachines` | `protected override void StopUsingAllMachines()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `GetTacticWeight` | `protected internal override float GetTacticWeight()` | method |
| `TacticState` | `public enum TacticState` | property |
| `TacticState` | `public enum TacticState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TacticComponent](../TacticComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
