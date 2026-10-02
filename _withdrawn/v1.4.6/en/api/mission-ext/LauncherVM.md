---
title: "LauncherVM"
description: "LauncherVM: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting ViewModel; 25 exposed members (3 methods, 21 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherVM

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherVM lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is LauncherVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 25 public/protected members: 3 methods, 21 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherVM lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 21/25, methods 3/25), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameTypeArgument` | `public string GameTypeArgument` | property |
| `ContinueGameArgument` | `public string ContinueGameArgument` | property |
| `LauncherVM` | `public LauncherVM(UserDataManager userDataManager, Action onClose, Action onMinimize)` | constructor |
| `ExecuteStartGame` | `public void ExecuteStartGame(int mode)` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `ExecuteMinimize` | `public void ExecuteMinimize()` | method |
| `IsSingleplayer` | `public bool IsSingleplayer` | property |
| `IsMultiplayer` | `public bool IsMultiplayer` | property |
| `IsDigitalCompanion` | `public bool IsDigitalCompanion` | property |
| `IsSingleplayerAvailable` | `public bool IsSingleplayerAvailable` | property |
| `IsDigitalCompanionAvailable` | `public bool IsDigitalCompanionAvailable` | property |
| `VersionText` | `public string VersionText` | property |
| `News` | `public LauncherNewsVM News` | property |
| `ConfirmStart` | `public LauncherConfirmStartVM ConfirmStart` | property |
| `ModsData` | `public LauncherModsVM ModsData` | property |
| `Hint` | `public LauncherInformationVM Hint` | property |
| `PlayText` | `public string PlayText` | property |
| `ContinueText` | `public string ContinueText` | property |
| `LaunchText` | `public string LaunchText` | property |
| `SingleplayerText` | `public string SingleplayerText` | property |
| `DigitalCompanionText` | `public string DigitalCompanionText` | property |
| `MultiplayerText` | `public string MultiplayerText` | property |
| `NewsText` | `public string NewsText` | property |
| `DlcText` | `public string DlcText` | property |
| `ModsText` | `public string ModsText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
