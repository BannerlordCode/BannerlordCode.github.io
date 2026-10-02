---
title: "ICommanderInfo"
description: "ICommanderInfo: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 6 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ICommanderInfo.cs."
---
# ICommanderInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ICommanderInfo : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/ICommanderInfo.cs`

## Overview

ICommanderInfo lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ICommanderInfo.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is ICommanderInfo → IMissionBehavior. It exposes 6 public/protected members: 1 methods, 2 properties, 3 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICommanderInfo is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ICommanderInfo → IMissionBehavior. The surface is property-led (properties 2/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ICommanderInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `float>OnMoraleChangedEvent;` | `event Action<BattleSideEnum, float>OnMoraleChangedEvent;` | event |
| `OnFlagNumberChangedEvent;` | `event Action OnFlagNumberChangedEvent;` | event |
| `Team>OnCapturePointOwnerChangedEvent;` | `event Action<FlagCapturePoint, Team>OnCapturePointOwnerChangedEvent;` | event |
| `IEnumerable` | `IEnumerable<FlagCapturePoint>AllCapturePoints` | property |
| `GetFlagOwner` | `Team GetFlagOwner(FlagCapturePoint flag);` | method |
| `AreMoralesIndependent` | `bool AreMoralesIndependent` | property |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
