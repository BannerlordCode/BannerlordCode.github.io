---
title: "AgentInteractionInterfaceVM"
description: "AgentInteractionInterfaceVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction, inheriting ViewModel; 22 exposed members (10 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentInteractionInterfaceVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

AgentInteractionInterfaceVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is AgentInteractionInterfaceVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 22 public/protected members: 10 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentInteractionInterfaceVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`, inheritance chain AgentInteractionInterfaceVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/22, methods 10/22), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/AgentInteractionInterfaceVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentInteractionInterfaceVM` | `public AgentInteractionInterfaceVM(Mission mission)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnFocusedHealthChanged` | `public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)` | method |
| `OnActiveMissionHintChanged` | `public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)` | method |
| `AddSecondaryMessage` | `public void AddSecondaryMessage(MissionInteractionItemBaseVM message)` | method |
| `RemoveSecondaryMessage` | `public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)` | method |
| `HasSecondaryInteractionMessage` | `public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `ResetFocus` | `public void ResetFocus()` | method |
| `SetForcedInteractionTexts` | `public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)` | method |
| `ClearForcedInteractionTexts` | `public void ClearForcedInteractionTexts()` | method |
| `TargetHealth` | `public int TargetHealth` | property |
| `ShowHealthBar` | `public bool ShowHealthBar` | property |
| `MBBindingList` | `public MBBindingList<MissionPrimaryInteractionItemVM>PrimaryInteractionMessages` | property |
| `MBBindingList` | `public MBBindingList<MissionInteractionItemBaseVM>SecondaryInteractionMessages` | property |
| `BackgroundColor` | `public string BackgroundColor` | property |
| `TextColor` | `public string TextColor` | property |
| `IsActive` | `public bool IsActive` | property |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages` | property |
| `DisplayInteractionText` | `public bool DisplayInteractionText` | property |
| `MBBindingList` | `public MBBindingList<MissionPrimaryInteractionItemVM>ForcedInteractionMessages` | property |
| `HasForcedMessages` | `public bool HasForcedMessages` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IInteractionInterfaceHandler](../IInteractionInterfaceHandler/)
