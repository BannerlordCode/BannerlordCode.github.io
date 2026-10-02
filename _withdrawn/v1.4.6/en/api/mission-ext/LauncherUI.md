---
title: "LauncherUI"
description: "LauncherUI: a public class in TaleWorlds.MountAndBlade.Launcher.Library; 12 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherUI

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherUI`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherUI lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs. It is a public class; the inheritance chain is LauncherUI. It exposes 12 public/protected members: 7 methods, 2 properties, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherUI lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherUI. The surface is method-led (methods 7/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public static event Action<string>OnAddHintInformation;` | event |
| `OnHideHintInformation;` | `public static event Action OnHideHintInformation;` | event |
| `HasUnofficialModulesSelected` | `public bool HasUnofficialModulesSelected` | property |
| `LauncherUI` | `public LauncherUI(UserDataManager userDataManager, UIContext context, Action onClose, Action onMinimize)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `Update` | `public void Update()` | method |
| `CheckMouseOverWindowDragArea` | `public bool CheckMouseOverWindowDragArea()` | method |
| `HitTest` | `public bool HitTest()` | method |
| `AddHintInformation` | `public static void AddHintInformation(string message)` | method |
| `HideHintInformation` | `public static void HideHintInformation()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
