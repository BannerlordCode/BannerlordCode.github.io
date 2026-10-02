---
title: "LauncherConfirmStartVM"
description: "LauncherConfirmStartVM: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherConfirmStartVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherConfirmStartVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherConfirmStartVM lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is LauncherConfirmStartVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherConfirmStartVM lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherConfirmStartVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherConfirmStartVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LauncherConfirmStartVM` | `public LauncherConfirmStartVM(Action onConfirm)` | constructor |
| `EnableWith` | `public void EnableWith(List<SubModuleInfo>unverifiedSubModules, List<DependentVersionMissmatchItem>missmatchedDependentModules)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Description` | `public string Description` | property |
| `Title` | `public string Title` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
- [same namespace LauncherDLLData](../LauncherDLLData/)
