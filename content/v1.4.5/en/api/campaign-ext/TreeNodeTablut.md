---
title: "TreeNodeTablut"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TreeNodeTablut`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TreeNodeTablut

**Namespace:** SandBox.BoardGames.AI
**Module:** SandBox.BoardGames
**Type:** `public class TreeNodeTablut`
**Area:** campaign-ext

## Overview

`TreeNodeTablut` lives in `SandBox.BoardGames.AI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.BoardGames.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OpeningMove` | `public Move OpeningMove { get; }` |

## Key Methods

### CreateTreeAndReturnRootNode
`public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)`

**Purpose:** Creates a new `tree and return root node` instance or object.

### GetChildWithBestScore
`public TreeNodeTablut GetChildWithBestScore()`

**Purpose:** Gets the current value of `child with best score`.

### SelectAction
`public void SelectAction()`

**Purpose:** Handles logic related to `select action`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TreeNodeTablut.CreateTreeAndReturnRootNode(initialBoardState, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
