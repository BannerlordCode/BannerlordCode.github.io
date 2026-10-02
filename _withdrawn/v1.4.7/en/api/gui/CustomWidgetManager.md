---
title: "CustomWidgetManager"
description: "CustomWidgetManager — class in TaleWorlds.GauntletUI.ExtraWidgets. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# CustomWidgetManager

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`  
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`  
**Type:** `public static class CustomWidgetManager`  
**Source:** `TaleWorlds.GauntletUI.ExtraWidgets/CustomWidgetManager.cs`

## Overview

`CustomWidgetManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `TouchAssembly`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `TouchAssembly` | method (static) | Static entry point. Takes no arguments. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// CustomWidgetManager exposes no accessor; the engine passes the instance to its callbacks.
CustomWidgetManager.TouchAssembly();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.GauntletUI.ExtraWidgets/CustomWidgetManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
