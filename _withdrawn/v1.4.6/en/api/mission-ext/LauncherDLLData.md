---
title: "LauncherDLLData"
description: "LauncherDLLData: a public class in TaleWorlds.MountAndBlade.Launcher.Library; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherDLLData

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherDLLData`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherDLLData lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs. It is a public class; the inheritance chain is LauncherDLLData. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherDLLData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherDLLData. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SubModule` | `public SubModuleInfo SubModule` | property |
| `IsDangerous` | `public bool IsDangerous` | property |
| `VerifyInformation` | `public string VerifyInformation` | property |
| `Size` | `public uint Size` | property |
| `LauncherDLLData` | `public LauncherDLLData(SubModuleInfo subModule, bool isDangerous, string verifyInformation, uint size)` | constructor |
| `SetIsDLLDangerous` | `public void SetIsDLLDangerous(bool isDangerous)` | method |
| `SetDLLSize` | `public void SetDLLSize(uint size)` | method |
| `SetDLLVerifyInformation` | `public void SetDLLVerifyInformation(string info)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
