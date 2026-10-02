---
title: "LauncherDebugManager"
description: "LauncherDebugManager — class in TaleWorlds.MountAndBlade.Launcher.Library. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# LauncherDebugManager

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class LauncherDebugManager : IDebugManager`  
**Base:** `IDebugManager`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs`

## Overview

`LauncherDebugManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IDebugManager, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LauncherDebugManager`.
- **Instance members** (1): `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `LauncherDebugManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public LauncherDebugManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var launcherDebugManager = new LauncherDebugManager();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [User32](../../gui/User32/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.

Section: [api/mission-ext/](../) — the other types in this bucket.
