---
title: "DefencePoint"
description: "DefencePoint: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 6 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DefencePoint.cs."
---
# DefencePoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefencePoint : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/DefencePoint.cs`

## Overview

DefencePoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefencePoint.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is DefencePoint → ScriptComponentBehavior. It exposes 6 public/protected members: 5 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefencePoint is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DefencePoint → ScriptComponentBehavior. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefencePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddDefender` | `public void AddDefender(Agent defender)` | method |
| `RemoveDefender` | `public bool RemoveDefender(Agent defender)` | method |
| `IEnumerable` | `public IEnumerable<Agent>Defenders` | property |
| `PurgeInactiveDefenders` | `public void PurgeInactiveDefenders()` | method |
| `GetVacantPosition` | `public MatrixFrame GetVacantPosition(Agent a)` | method |
| `CountOccupiedDefenderPositions` | `public int CountOccupiedDefenderPositions()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
