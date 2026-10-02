---
title: "MissionMainAgentInteractionComponent"
description: "MissionMainAgentInteractionComponent: a public class in TaleWorlds.MountAndBlade.View.MissionViews; 18 exposed members (9 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentInteractionComponent

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionMainAgentInteractionComponent`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionMainAgentInteractionComponent lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs. It is a public class; the inheritance chain is MissionMainAgentInteractionComponent. It exposes 18 public/protected members: 9 methods, 2 properties, 3 events, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentInteractionComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews`, inheritance chain MissionMainAgentInteractionComponent. The surface is method-led (methods 9/18, properties 2/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnFocusGained;` | `public event MissionMainAgentInteractionComponent.MissionFocusGainedEventDelegate OnFocusGained;` | event |
| `OnFocusLost;` | `public event MissionMainAgentInteractionComponent.MissionFocusLostEventDelegate OnFocusLost;` | event |
| `OnFocusHealthChanged;` | `public event MissionMainAgentInteractionComponent.MissionFocusHealthChangeDelegate OnFocusHealthChanged;` | event |
| `CurrentFocusedObject` | `public IFocusable CurrentFocusedObject` | property |
| `CurrentFocusedMachine` | `public IFocusable CurrentFocusedMachine` | property |
| `SetCurrentFocusedObject` | `public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)` | method |
| `ClearFocus` | `public void ClearFocus()` | method |
| `OnClearScene` | `public void OnClearScene()` | method |
| `MissionMainAgentInteractionComponent` | `public MissionMainAgentInteractionComponent(MissionMainAgentController mainAgentController)` | constructor |
| `FocusTick` | `public void FocusTick()` | method |
| `FocusStateCheckTick` | `public void FocusStateCheckTick()` | method |
| `FocusedItemHealthTick` | `public void FocusedItemHealthTick()` | method |
| `MissionFocusGainedEventDelegate` | `public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable);` | method |
| `MissionFocusLostEventDelegate` | `public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject);` | method |
| `MissionFocusHealthChangeDelegate` | `public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull);` | method |
| `MissionFocusGainedEventDelegate` | `public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)` | nested type |
| `MissionFocusLostEventDelegate` | `public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)` | nested type |
| `MissionFocusHealthChangeDelegate` | `public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView/)
- [same namespace MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView/)
