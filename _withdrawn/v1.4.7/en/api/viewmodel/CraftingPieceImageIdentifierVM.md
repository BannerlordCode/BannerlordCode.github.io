---
title: "CraftingPieceImageIdentifierVM"
description: "CraftingPieceImageIdentifierVM — class in TaleWorlds.Core.ViewModelCollection.ImageIdentifiers. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# CraftingPieceImageIdentifierVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class CraftingPieceImageIdentifierVM : ImageIdentifierVM`  
**Base:** `ImageIdentifierVM`  
**Source:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/CraftingPieceImageIdentifierVM.cs`

## Overview

`CraftingPieceImageIdentifierVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ImageIdentifierVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CraftingPieceImageIdentifierVM`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CraftingPieceImageIdentifierVM` | ctor | Instance entry point. Takes 2 arguments: `CraftingPiece craftingPiece`, `string pieceUsageId`. Returns ``. |

- Constructed as `public CraftingPieceImageIdentifierVM(CraftingPiece craftingPiece, string pieceUsageId)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CraftingPieceImageIdentifierVM(craftingPiece, pieceUsageId);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/CraftingPieceImageIdentifierVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ImageIdentifierVM](../ImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [CraftingPieceImageIdentifier](../../core-extra/CraftingPieceImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.

Section: [api/viewmodel/](../) — the other types in this bucket.
