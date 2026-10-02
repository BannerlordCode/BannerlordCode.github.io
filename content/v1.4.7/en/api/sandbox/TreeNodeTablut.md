---
title: "TreeNodeTablut"
description: "TreeNodeTablut — class in SandBox.BoardGames.AI. 5 public members (1 static)."
---

<!-- v147-skeleton -->
# TreeNodeTablut

**Namespace:** `SandBox.BoardGames.AI`  
**Module:** `SandBox`  
**Type:** `public class TreeNodeTablut`  
**Source:** `SandBox/BoardGames/AI/TreeNodeTablut.cs`

## Overview

`TreeNodeTablut` is a named type in the SandBox.BoardGames.AI namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TreeNodeTablut`.
- **Static entry points** (1): `CreateTreeAndReturnRootNode`.
- **Instance members** (3): `OpeningMove`, `GetChildWithBestScore`, `SelectAction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateTreeAndReturnRootNode` | method (static) | Static entry point. Takes 2 arguments: `BoardGameTablut.BoardInformation initialBoardState`, `int maxDepth`. Returns `TreeNodeTablut`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetChildWithBestScore` | method | Instance entry point. Takes no arguments. Returns `TreeNodeTablut`. Read path: prefer it over reaching for the backing store. |
| `OpeningMove` | property | Instance entry point `Move` property. Read it for current state; a declared setter writes that state in place. |
| `SelectAction` | method | Instance entry point. Takes no arguments. |
| `TreeNodeTablut` | ctor | Instance entry point. Takes 2 arguments: `BoardGameSide lastTurnIsPlayedBy`, `int depth`. Returns ``. |

- Constructed as `public TreeNodeTablut(BoardGameSide lastTurnIsPlayedBy, int depth)`.

## Usage Example

```csharp
// Static entry points on TreeNodeTablut:
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, maxDepth);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `SandBox/BoardGames/AI/TreeNodeTablut.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BoardGameTablut](../BoardGameTablut/) — `SandBox.BoardGames`.
- [PawnBase](../PawnBase/) — `SandBox.BoardGames.Pawns`.

Section: [api/sandbox/](../) — the other types in this bucket.
