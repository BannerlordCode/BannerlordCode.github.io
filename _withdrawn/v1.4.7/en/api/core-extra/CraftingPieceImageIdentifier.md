---
title: "CraftingPieceImageIdentifier"
description: "CraftingPieceImageIdentifier — class in TaleWorlds.Core.ImageIdentifiers. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# CraftingPieceImageIdentifier

**Namespace:** `TaleWorlds.Core.ImageIdentifiers`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class CraftingPieceImageIdentifier : ImageIdentifier`  
**Base:** `ImageIdentifier`  
**Source:** `TaleWorlds.Core/ImageIdentifiers/CraftingPieceImageIdentifier.cs`

## Overview

`CraftingPieceImageIdentifier` is a named type in the TaleWorlds.Core.ImageIdentifiers namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ImageIdentifier, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CraftingPieceImageIdentifier`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CraftingPieceImageIdentifier` | ctor | Instance entry point. Takes 2 arguments: `CraftingPiece craftingPiece`, `string pieceUsageId`. Returns ``. |

- Constructed as `public CraftingPieceImageIdentifier(CraftingPiece craftingPiece, string pieceUsageId)`.

## Usage Example

```csharp
var craftingPieceImageIdentifier = new CraftingPieceImageIdentifier(craftingPiece, pieceUsageId);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Core/ImageIdentifiers/CraftingPieceImageIdentifier.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ImageIdentifier](../ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.
- [CraftingPieceImageTextureProvider](../../mission-ext/CraftingPieceImageTextureProvider/) — `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`.

Section: [api/core-extra/](../) — the other types in this bucket.
