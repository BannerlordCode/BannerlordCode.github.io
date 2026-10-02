---
title: "NativeMessageBox"
description: "NativeMessageBox: a public class in TaleWorlds.MountAndBlade.Launcher.Library; 7 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeMessageBox

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public static class NativeMessageBox`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

NativeMessageBox lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs. It is a public class; the inheritance chain is NativeMessageBox. It exposes 7 public/protected members: 1 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeMessageBox lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain NativeMessageBox. The surface is property-led (properties 3/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Show` | `public static NativeMessageBox.Result Show(string text, string caption = " ", NativeMessageBox.Buttons buttons = NativeMessageBox.Buttons.OK, NativeMessageBox.Icon icon = NativeMessageBox.Icon.None)` | method |
| `uint` | `public enum Buttons : uint` | property |
| `uint` | `public enum Icon : uint` | property |
| `Result` | `public enum Result` | property |
| `uint` | `public enum Buttons : uint` | nested type |
| `uint` | `public enum Icon : uint` | nested type |
| `Result` | `public enum Result` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
