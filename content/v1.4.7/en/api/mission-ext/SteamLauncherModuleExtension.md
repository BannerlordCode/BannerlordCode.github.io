---
title: "SteamLauncherModuleExtension"
description: "SteamLauncherModuleExtension — class in TaleWorlds.MountAndBlade.Launcher.Steam. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# SteamLauncherModuleExtension

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Steam`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Steam`  
**Type:** `public class SteamLauncherModuleExtension : IPlatformModuleExtension`  
**Base:** `IPlatformModuleExtension`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs`

## Overview

`SteamLauncherModuleExtension` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

It extends IPlatformModuleExtension, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SteamLauncherModuleExtension`.
- **Instance members** (5): `Initialize`, `GetModulePaths`, `Destroy`, `SetLauncherMode`, `CheckEntitlement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CheckEntitlement` | method | Instance entry point. Takes 1 argument: `string title`. Returns `bool`. |
| `Destroy` | method | Instance entry point. Takes no arguments. |
| `GetModulePaths` | method | Instance entry point. Takes no arguments. Returns `string[]`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method | Instance entry point. Takes 1 argument: `List<string> args`. |
| `SetLauncherMode` | method | Instance entry point. Takes 1 argument: `bool isLauncherModeActive`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SteamLauncherModuleExtension` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public SteamLauncherModuleExtension()`.

## Usage Example

```csharp
var steamLauncherModuleExtension = new SteamLauncherModuleExtension();
steamLauncherModuleExtension.Initialize(args);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IPlatformModuleExtension](../../modulemanager/IPlatformModuleExtension/) — `TaleWorlds.ModuleManager`.

Section: [api/mission-ext/](../) — the other types in this bucket.
