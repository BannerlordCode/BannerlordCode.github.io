---
title: "InitialMenuVM"
description: "InitialMenuVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InitialMenuVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class InitialMenuVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

InitialMenuVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InitialMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InitialMenuVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu`, inheritance chain InitialMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InitialMenuVM` | `public InitialMenuVM(InitialState initialState)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public void Tick()` | method |
| `RefreshMenuOptions` | `public void RefreshMenuOptions()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MBBindingList` | `public MBBindingList<InitialMenuOptionVM>MenuOptions` | property |
| `Announcement` | `public InitialMenuAnnouncementVM Announcement` | property |
| `DownloadingText` | `public string DownloadingText` | property |
| `SelectProfileText` | `public string SelectProfileText` | property |
| `ProfileName` | `public string ProfileName` | property |
| `IsProfileSelectionEnabled` | `public bool IsProfileSelectionEnabled` | property |
| `IsDownloadingContent` | `public bool IsDownloadingContent` | property |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled` | property |
| `CurrentLanguageString` | `public string CurrentLanguageString` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace InitialMenuAnnouncementVM](../InitialMenuAnnouncementVM/)
- [same namespace InitialMenuOptionVM](../InitialMenuOptionVM/)
