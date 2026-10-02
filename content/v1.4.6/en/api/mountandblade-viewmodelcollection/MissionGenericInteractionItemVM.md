---
title: "MissionGenericInteractionItemVM"
description: "MissionGenericInteractionItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting MissionInteractionItemBaseVM; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs."
---
# MissionGenericInteractionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionGenericInteractionItemVM : MissionInteractionItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs`

## Overview

MissionGenericInteractionItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs. It is a public class, implementing/inheriting MissionInteractionItemBaseVM; the inheritance chain is MissionGenericInteractionItemVM → MissionInteractionItemBaseVM → ViewModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGenericInteractionItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems) the module directory; inheritance chain MissionGenericInteractionItemVM → MissionInteractionItemBaseVM → ViewModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetData` | `public void SetData(TextObject message, bool isDisabled = false)` | method |
| `ResetData` | `public void ResetData()` | method |
| `OnSetData` | `protected virtual void OnSetData(TextObject message, bool isDisabled)` | method |
| `OnResetData` | `protected virtual void OnResetData()` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM)
- [same namespace MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM)
- [same namespace MissionPrimaryInteractionItemVM](../MissionPrimaryInteractionItemVM)
