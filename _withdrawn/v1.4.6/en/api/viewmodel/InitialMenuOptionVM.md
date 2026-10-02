---
title: "InitialMenuOptionVM"
description: "InitialMenuOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu, inheriting ViewModel; 8 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InitialMenuOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class InitialMenuOptionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

InitialMenuOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InitialMenuOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InitialMenuOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu`, inheritance chain InitialMenuOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InitialMenuOptionVM` | `public InitialMenuOptionVM(InitialStateOption initialStateOption)` | constructor |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `DisabledHint` | `public HintViewModel DisabledHint` | property |
| `EnabledHint` | `public HintViewModel EnabledHint` | property |
| `NameText` | `public string NameText` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `IsHidden` | `public bool IsHidden` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace InitialMenuAnnouncementVM](../InitialMenuAnnouncementVM/)
- [same namespace InitialMenuVM](../InitialMenuVM/)
