---
title: "DuelZoneLandmark"
description: "DuelZoneLandmark: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior, IFocusable; 6 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DuelZoneLandmark.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DuelZoneLandmark

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DuelZoneLandmark : ScriptComponentBehavior, IFocusable`
**File:** `TaleWorlds.MountAndBlade/DuelZoneLandmark.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DuelZoneLandmark lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DuelZoneLandmark.cs. It is a public class, implementing/inheriting ScriptComponentBehavior, IFocusable; the inheritance chain is DuelZoneLandmark → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DuelZoneLandmark lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DuelZoneLandmark → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DuelZoneLandmark.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `public virtual bool IsFocusable` | property |
| `OnFocusGain` | `public void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public void OnFocusLose(Agent userAgent)` | method |
| `GetInfoTextForBeingNotInteractable` | `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `GetDescriptionText` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [base / interface IFocusable](../IFocusable/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
