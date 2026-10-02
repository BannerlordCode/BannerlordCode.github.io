---
title: "MPPerkCondition<T>"
description: "MPPerkCondition<T>: a public class in TaleWorlds.MountAndBlade, inheriting MPPerkCondition; 2 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MPPerkCondition.2.cs."
---
# MPPerkCondition<T>

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MPPerkCondition<T>: MPPerkCondition where T : MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MPPerkCondition.2.cs`

## Overview

MPPerkCondition<T> lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MPPerkCondition.2.cs. It is a public class (abstract), implementing/inheriting MPPerkCondition; the inheritance chain is MPPerkCondition → MPPerkCondition. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPPerkCondition<T> is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MPPerkCondition → MPPerkCondition. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MPPerkCondition.2.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameModeInstance` | `protected T GameModeInstance` | property |
| `IsGameModesValid` | `protected override bool IsGameModesValid(List<string>gameModes)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
