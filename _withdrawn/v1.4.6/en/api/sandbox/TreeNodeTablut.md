---
title: "TreeNodeTablut"
description: "TreeNodeTablut: a public class in SandBox.BoardGames.AI; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/BoardGames/AI/TreeNodeTablut.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TreeNodeTablut

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class TreeNodeTablut`
**File:** `SandBox/BoardGames/AI/TreeNodeTablut.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TreeNodeTablut lives in the SandBox module, source file SandBox/BoardGames/AI/TreeNodeTablut.cs. It is a public class; the inheritance chain is TreeNodeTablut. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TreeNodeTablut lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.BoardGames.AI`, inheritance chain TreeNodeTablut. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/TreeNodeTablut.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OpeningMove` | `public Move OpeningMove` | property |
| `TreeNodeTablut` | `public TreeNodeTablut(BoardGameSide lastTurnIsPlayedBy, int depth)` | constructor |
| `CreateTreeAndReturnRootNode` | `public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)` | method |
| `GetChildWithBestScore` | `public TreeNodeTablut GetChildWithBestScore()` | method |
| `SelectAction` | `public void SelectAction()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal/)
- [same namespace BoardGameAIBase](../BoardGameAIBase/)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane/)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere/)
