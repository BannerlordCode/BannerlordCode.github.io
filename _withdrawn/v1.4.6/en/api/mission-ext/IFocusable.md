---
title: "IFocusable"
description: "IFocusable: a public interface in TaleWorlds.MountAndBlade; 6 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IFocusable.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IFocusable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFocusable`
**File:** `TaleWorlds.MountAndBlade/IFocusable.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IFocusable lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IFocusable.cs. It is a public interface; the inheritance chain is IFocusable. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFocusable lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IFocusable. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IFocusable.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnFocusGain` | `void OnFocusGain(Agent userAgent);` | method |
| `OnFocusLose` | `void OnFocusLose(Agent userAgent);` | method |
| `FocusableObjectType` | `FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `bool IsFocusable` | property |
| `GetInfoTextForBeingNotInteractable` | `TextObject GetInfoTextForBeingNotInteractable(Agent userAgent);` | method |
| `GetDescriptionText` | `TextObject GetDescriptionText(WeakGameEntity gameEntity);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
