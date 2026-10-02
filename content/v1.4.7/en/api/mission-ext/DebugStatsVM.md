---
title: "DebugStatsVM"
description: "DebugStatsVM — class in TaleWorlds.MountAndBlade.GauntletUI. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# DebugStatsVM

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `internal class DebugStatsVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/DebugStatsVM.cs`

## Overview

`DebugStatsVM` is an internal class in TaleWorlds.MountAndBlade.GauntletUI. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`DebugStatsVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DebugStatsVM`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DebugStatsVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public DebugStatsVM()`.

## Usage Example

```csharp
// DebugStatsVM is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/DebugStatsVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
