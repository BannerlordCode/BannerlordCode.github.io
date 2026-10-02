---
title: "TreeNodeTablut"
description: "TreeNodeTablut: a public class in SandBox; 5 exposed members (3 methods, 1 properties, 0 fields). Source: SandBox/BoardGames/AI/TreeNodeTablut.cs."
---
# TreeNodeTablut

**Namespace:** `SandBox.BoardGames.AI`
**Module:** `SandBox`
**Type:** `public class TreeNodeTablut`
**File:** `SandBox/BoardGames/AI/TreeNodeTablut.cs`

## Overview

TreeNodeTablut lives in the SandBox module, source file SandBox/BoardGames/AI/TreeNodeTablut.cs. It is a public class; the inheritance chain is TreeNodeTablut. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TreeNodeTablut is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.AI) the module directory; inheritance chain TreeNodeTablut. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/AI/TreeNodeTablut.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OpeningMove` | `public Move OpeningMove` | property |
| `TreeNodeTablut` | `public TreeNodeTablut(BoardGameSide lastTurnIsPlayedBy, int depth)` | constructor |
| `CreateTreeAndReturnRootNode` | `public static TreeNodeTablut CreateTreeAndReturnRootNode(BoardGameTablut.BoardInformation initialBoardState, int maxDepth)` | method |
| `GetChildWithBestScore` | `public TreeNodeTablut GetChildWithBestScore()` | method |
| `SelectAction` | `public void SelectAction()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameAIBaghChal](../BoardGameAIBaghChal)
- [same namespace BoardGameAIBase](../BoardGameAIBase)
- [same namespace BoardGameAIKonane](../BoardGameAIKonane)
- [same namespace BoardGameAIMuTorere](../BoardGameAIMuTorere)
