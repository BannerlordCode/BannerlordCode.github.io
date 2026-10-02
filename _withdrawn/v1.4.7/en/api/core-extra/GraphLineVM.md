---
title: "GraphLineVM"
description: "GraphLineVM — class in TaleWorlds.Library.Graph. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# GraphLineVM

**Namespace:** `TaleWorlds.Library.Graph`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class GraphLineVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.Library/Graph/GraphLineVM.cs`

## Overview

`GraphLineVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GraphLineVM`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GraphLineVM` | ctor | Instance entry point. Takes 2 arguments: `string ID`, `string name`. Returns ``. |

- Constructed as `public GraphLineVM(string ID, string name)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GraphLineVM(ID, name);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.Library/Graph/GraphLineVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GraphLinePointVM](../GraphLinePointVM/) — `TaleWorlds.Library.Graph`.

Section: [api/core-extra/](../) — the other types in this bucket.
