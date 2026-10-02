---
title: "MissionInteractionItemBaseVM"
description: "MissionInteractionItemBaseVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems, inheriting ViewModel; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionInteractionItemBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionInteractionItemBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class MissionInteractionItemBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionInteractionItemBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionInteractionItemBaseVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionInteractionItemBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is MissionInteractionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionInteractionItemBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`, inheritance chain MissionInteractionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionInteractionItemBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsDisplayed` | `public bool IsDisplayed` | property |
| `MissionInteractionItemBaseVM` | `public MissionInteractionItemBaseVM()` | constructor |
| `IsDisabled` | `public bool IsDisabled` | property |
| `Message` | `public string Message` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionGenericInteractionItemVM](../MissionGenericInteractionItemVM/)
- [same namespace MissionPrimaryInteractionItemVM](../MissionPrimaryInteractionItemVM/)
