---
title: "ToolDebugManager"
description: "ToolDebugManager — class in TaleWorlds.MountAndBlade.SteamWorkshop. No public members of its own."
---

<!-- v147-skeleton -->
# ToolDebugManager

**Namespace:** `TaleWorlds.MountAndBlade.SteamWorkshop`  
**Module:** `TaleWorlds.MountAndBlade.SteamWorkshop`  
**Type:** `internal class ToolDebugManager : IDebugManager`  
**Base:** `IDebugManager`  
**Source:** `TaleWorlds.MountAndBlade.SteamWorkshop/ToolDebugManager.cs`

## Overview

`ToolDebugManager` is an internal class in TaleWorlds.MountAndBlade.SteamWorkshop. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ToolDebugManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IDebugManager, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on ToolDebugManager itself in `TaleWorlds.MountAndBlade.SteamWorkshop`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// ToolDebugManager is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.SteamWorkshop/ToolDebugManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Program](../../core-extra/Program/) — `TaleWorlds.Starter.Library`.

Section: [api/mission-ext/](../) — the other types in this bucket.
