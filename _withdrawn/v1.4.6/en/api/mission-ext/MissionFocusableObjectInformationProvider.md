---
title: "MissionFocusableObjectInformationProvider"
description: "MissionFocusableObjectInformationProvider: a public class in TaleWorlds.MountAndBlade; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionFocusableObjectInformationProvider

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionFocusableObjectInformationProvider`
**File:** `TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionFocusableObjectInformationProvider lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs. It is a public class; the inheritance chain is MissionFocusableObjectInformationProvider. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionFocusableObjectInformationProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionFocusableObjectInformationProvider. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionFocusableObjectInformationProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionFocusableObjectInformationProvider` | `public MissionFocusableObjectInformationProvider()` | constructor |
| `OnFinalize` | `public void OnFinalize()` | method |
| `AddInfoCallback` | `public void AddInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)` | method |
| `RemoveInfoCallback` | `public void RemoveInfoCallback(GetFocusableObjectInteractionTextsDelegate callback)` | method |
| `GetInteractionTexts` | `public void GetInteractionTexts(Agent requesterAgent, IFocusable focusable, bool isInteractable, out FocusableObjectInformation focusableObjectInformation)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
