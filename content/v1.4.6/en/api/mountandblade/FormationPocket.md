---
title: "FormationPocket"
description: "FormationPocket: a public class in TaleWorlds.MountAndBlade; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade/FormationPocket.cs."
---
# FormationPocket

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationPocket`
**File:** `TaleWorlds.MountAndBlade/FormationPocket.cs`

## Overview

FormationPocket lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FormationPocket.cs. It is a public class; the inheritance chain is FormationPocket. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationPocket is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain FormationPocket. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FormationPocket.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `int>PriorityFunction` | `public Func<Agent, int>PriorityFunction` | property |
| `MaxValue` | `public int MaxValue` | property |
| `TroopCount` | `public int TroopCount` | property |
| `Index` | `public int Index` | property |
| `AddedTroopCount` | `public int AddedTroopCount` | property |
| `ScoreToSeek` | `public int ScoreToSeek` | property |
| `BestScoreSoFar` | `public int BestScoreSoFar` | property |
| `FormationPocket` | `public FormationPocket(Func<Agent, int>priorityFunction, int maxValue, int troopCount, int index)` | constructor |
| `AddTroop` | `public void AddTroop()` | method |
| `IsFormationPocketFilled` | `public bool IsFormationPocketFilled()` | method |
| `UpdateScoreToSeek` | `public void UpdateScoreToSeek()` | method |
| `SetBestScoreSoFar` | `public void SetBestScoreSoFar(int bestScoreSoFar)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
