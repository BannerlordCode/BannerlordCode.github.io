---
title: "DuelZoneLandmark"
description: "DuelZoneLandmark: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior, IFocusable; 6 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DuelZoneLandmark.cs."
---
# DuelZoneLandmark

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DuelZoneLandmark : ScriptComponentBehavior, IFocusable`
**File:** `TaleWorlds.MountAndBlade/DuelZoneLandmark.cs`

## Overview

DuelZoneLandmark lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DuelZoneLandmark.cs. It is a public class, implementing/inheriting ScriptComponentBehavior, IFocusable; the inheritance chain is DuelZoneLandmark → ScriptComponentBehavior. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DuelZoneLandmark is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DuelZoneLandmark → ScriptComponentBehavior. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DuelZoneLandmark.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `public virtual bool IsFocusable` | property |
| `OnFocusGain` | `public void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public void OnFocusLose(Agent userAgent)` | method |
| `GetInfoTextForBeingNotInteractable` | `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `GetDescriptionText` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IFocusable](../IFocusable)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
