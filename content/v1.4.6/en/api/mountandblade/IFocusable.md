---
title: "IFocusable"
description: "IFocusable: a public interface in TaleWorlds.MountAndBlade; 6 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IFocusable.cs."
---
# IFocusable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFocusable`
**File:** `TaleWorlds.MountAndBlade/IFocusable.cs`

## Overview

IFocusable lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IFocusable.cs. It is a public interface; the inheritance chain is IFocusable. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFocusable is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IFocusable. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IFocusable.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnFocusGain` | `void OnFocusGain(Agent userAgent);` | method |
| `OnFocusLose` | `void OnFocusLose(Agent userAgent);` | method |
| `FocusableObjectType` | `FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `bool IsFocusable` | property |
| `GetInfoTextForBeingNotInteractable` | `TextObject GetInfoTextForBeingNotInteractable(Agent userAgent);` | method |
| `GetDescriptionText` | `TextObject GetDescriptionText(WeakGameEntity gameEntity);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
