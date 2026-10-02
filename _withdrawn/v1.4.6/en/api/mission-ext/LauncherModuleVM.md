---
title: "LauncherModuleVM"
description: "LauncherModuleVM: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting ViewModel; 11 exposed members (0 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherModuleVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherModuleVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherModuleVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModuleVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherModuleVM lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherModuleVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is LauncherModuleVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherModuleVM lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherModuleVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/11, methods 0/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherModuleVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LauncherModuleVM` | `public LauncherModuleVM(ModuleInfo moduleInfo, Action<LauncherModuleVM, int, string>onChangeLoadingOrder, Action<LauncherModuleVM>onSelect, Func<ModuleInfo, bool>areAllDependenciesPresent, Func<SubModuleInfo, LauncherDLLData>queryIsSubmoduleDangerous)` | constructor |
| `MBBindingList` | `public MBBindingList<LauncherSubModule>SubModules` | property |
| `DangerousHint` | `public LauncherHintVM DangerousHint` | property |
| `DependencyHint` | `public LauncherHintVM DependencyHint` | property |
| `VersionText` | `public string VersionText` | property |
| `Name` | `public string Name` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `AnyDependencyAvailable` | `public bool AnyDependencyAvailable` | property |
| `IsDangerous` | `public bool IsDangerous` | property |
| `IsOfficial` | `public bool IsOfficial` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
