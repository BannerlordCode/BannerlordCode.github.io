---
title: "DependentVersionMissmatchItem"
description: "DependentVersionMissmatchItem: a public struct in TaleWorlds.MountAndBlade.Launcher.Library; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DependentVersionMissmatchItem

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public struct DependentVersionMissmatchItem`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DependentVersionMissmatchItem lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs. It is a public struct; the inheritance chain is DependentVersionMissmatchItem. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DependentVersionMissmatchItem lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain DependentVersionMissmatchItem. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/DependentVersionMissmatchItem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissmatchedModuleId` | `public string MissmatchedModuleId` | property |
| `ApplicationVersion>>MissmatchedDependencies` | `public List<Tuple<DependedModule, ApplicationVersion>>MissmatchedDependencies` | property |
| `DependentVersionMissmatchItem` | `public DependentVersionMissmatchItem(string missmatchedModuleId, List<Tuple<DependedModule, ApplicationVersion>>missmatchedDependencies)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
- [same namespace LauncherDLLData](../LauncherDLLData/)
