---
title: "TreeNodeTablut"
description: "Auto-generated class reference for TreeNodeTablut."
---
# TreeNodeTablut

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class TreeNodeTablut`
**Base:** none
**File:** `SandBox/BoardGames/AI/TreeNodeTablut.cs`

## Overview

`TreeNodeTablut` lives in `SandBox.BoardGames.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OpeningMove` | `public Move OpeningMove { get; }` |

## Key Methods

### CreateTreeAndReturnRootNode
`public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)`

**Purpose:** **Purpose:** Constructs a new tree and return root node entity and returns it to the caller.

```csharp
// Static call; no instance required
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

### GetChildWithBestScore
`public TreeNodeTablut GetChildWithBestScore()`

**Purpose:** **Purpose:** Reads and returns the child with best score value held by the this instance.

```csharp
// Obtain an instance of TreeNodeTablut from the subsystem API first
TreeNodeTablut treeNodeTablut = ...;
var result = treeNodeTablut.GetChildWithBestScore();
```

### SelectAction
`public void SelectAction()`

**Purpose:** **Purpose:** Executes the SelectAction logic.

```csharp
// Obtain an instance of TreeNodeTablut from the subsystem API first
TreeNodeTablut treeNodeTablut = ...;
treeNodeTablut.SelectAction();
```

## Usage Example

```csharp
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

## See Also

- [Area Index](../)