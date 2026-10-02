---
title: "SteamLauncherModuleExtension"
description: "SteamLauncherModuleExtension: a public class in TaleWorlds.MountAndBlade.Launcher.Steam, inheriting IPlatformModuleExtension; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SteamLauncherModuleExtension

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Steam`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Steam`
**Type:** `public class SteamLauncherModuleExtension : IPlatformModuleExtension`
**File:** `TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SteamLauncherModuleExtension lives in the TaleWorlds.MountAndBlade.Launcher.Steam module, source file TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs. It is a public class, implementing/inheriting IPlatformModuleExtension; the inheritance chain is SteamLauncherModuleExtension → IPlatformModuleExtension. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SteamLauncherModuleExtension lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Steam`, inheritance chain SteamLauncherModuleExtension → IPlatformModuleExtension. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SteamLauncherModuleExtension` | `public SteamLauncherModuleExtension()` | constructor |
| `Initialize` | `public void Initialize(List<string>args)` | method |
| `string[]GetModulePaths` | `public string[]GetModulePaths()` | method |
| `Destroy` | `public void Destroy()` | method |
| `SetLauncherMode` | `public void SetLauncherMode(bool isLauncherModeActive)` | method |
| `CheckEntitlement` | `public bool CheckEntitlement(string title)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IPlatformModuleExtension](../../modulemanager/IPlatformModuleExtension/)
