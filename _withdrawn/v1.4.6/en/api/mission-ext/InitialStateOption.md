---
title: "InitialStateOption"
description: "InitialStateOption: a public class in TaleWorlds.MountAndBlade; 8 exposed members (1 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/InitialStateOption.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InitialStateOption

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class InitialStateOption`
**File:** `TaleWorlds.MountAndBlade/InitialStateOption.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

InitialStateOption lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/InitialStateOption.cs. It is a public class; the inheritance chain is InitialStateOption. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InitialStateOption lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain InitialStateOption. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/InitialStateOption.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderIndex` | `public int OrderIndex` | property |
| `Name` | `public TextObject Name` | property |
| `Id` | `public string Id` | property |
| `Func` | `public Func<bool>IsHidden` | property |
| `TextObject>>IsDisabledAndReason` | `public Func<ValueTuple<bool, TextObject>>IsDisabledAndReason` | property |
| `EnabledHint` | `public TextObject EnabledHint` | property |
| `InitialStateOption` | `public InitialStateOption(string id, TextObject name, int orderIndex, Action action, Func<ValueTuple<bool, TextObject>>isDisabledAndReason, TextObject enabledHint = null, Func<bool>isHidden = null)` | constructor |
| `DoAction` | `public void DoAction()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
