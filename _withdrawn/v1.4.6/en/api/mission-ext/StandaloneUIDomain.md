---
title: "StandaloneUIDomain"
description: "StandaloneUIDomain: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting FrameworkDomain; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandaloneUIDomain

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class StandaloneUIDomain : FrameworkDomain`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

StandaloneUIDomain lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs. It is a public class, implementing/inheriting FrameworkDomain; the inheritance chain is StandaloneUIDomain → FrameworkDomain. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandaloneUIDomain lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain StandaloneUIDomain → FrameworkDomain. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/StandaloneUIDomain.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UserDataManager` | `public UserDataManager UserDataManager` | property |
| `StandaloneUIDomain` | `public StandaloneUIDomain(GraphicsForm graphicsForm, ResourceDepot resourceDepot)` | constructor |
| `Update` | `public override void Update()` | method |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `HasUnofficialModulesSelected` | `public bool HasUnofficialModulesSelected` | property |
| `Destroy` | `public override void Destroy()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface FrameworkDomain](../../gui/FrameworkDomain/)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
