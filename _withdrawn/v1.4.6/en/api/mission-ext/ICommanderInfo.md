---
title: "ICommanderInfo"
description: "ICommanderInfo: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 6 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ICommanderInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICommanderInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ICommanderInfo : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/ICommanderInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ICommanderInfo lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ICommanderInfo.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is ICommanderInfo → IMissionBehavior. It exposes 6 public/protected members: 1 methods, 2 properties, 3 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICommanderInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ICommanderInfo → IMissionBehavior. The surface is property-led (properties 2/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ICommanderInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `float>OnMoraleChangedEvent;` | `event Action<BattleSideEnum, float>OnMoraleChangedEvent;` | event |
| `OnFlagNumberChangedEvent;` | `event Action OnFlagNumberChangedEvent;` | event |
| `Team>OnCapturePointOwnerChangedEvent;` | `event Action<FlagCapturePoint, Team>OnCapturePointOwnerChangedEvent;` | event |
| `IEnumerable` | `IEnumerable<FlagCapturePoint>AllCapturePoints` | property |
| `GetFlagOwner` | `Team GetFlagOwner(FlagCapturePoint flag);` | method |
| `AreMoralesIndependent` | `bool AreMoralesIndependent` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
