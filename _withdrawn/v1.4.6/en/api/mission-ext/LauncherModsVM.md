---
title: "LauncherModsVM"
description: "LauncherModsVM: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting ViewModel; 7 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherModsVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherModsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherModsVM lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is LauncherModsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherModsVM lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherModsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LauncherModsVM` | `public LauncherModsVM(UserDataManager userDataManager)` | constructor |
| `Refresh` | `public void Refresh(bool isDisabled, bool isMultiplayer)` | method |
| `ModuleListCode` | `public string ModuleListCode` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `NameCategoryText` | `public string NameCategoryText` | property |
| `VersionCategoryText` | `public string VersionCategoryText` | property |
| `MBBindingList` | `public MBBindingList<LauncherModuleVM>Modules` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
