---
title: "LauncherInformationVM"
description: "LauncherInformationVM: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherInformationVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherInformationVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherInformationVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherInformationVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherInformationVM lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherInformationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is LauncherInformationVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherInformationVM lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherInformationVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherInformationVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LauncherInformationVM` | `public LauncherInformationVM()` | constructor |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Text` | `public string Text` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
