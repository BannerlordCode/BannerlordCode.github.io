---
title: "ITournamentGameBehavior"
description: "ITournamentGameBehavior: a public interface in SandBox; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Tournaments/ITournamentGameBehavior.cs."
---
# ITournamentGameBehavior

**Namespace:** `SandBox.Tournaments`
**Module:** `SandBox`
**Type:** `public interface ITournamentGameBehavior`
**File:** `SandBox/Tournaments/ITournamentGameBehavior.cs`

## Overview

ITournamentGameBehavior lives in the SandBox module, source file SandBox/Tournaments/ITournamentGameBehavior.cs. It is a public interface; the inheritance chain is ITournamentGameBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITournamentGameBehavior is a top-level type in SandBox, namespace differing from (SandBox.Tournaments) the module directory; inheritance chain ITournamentGameBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/ITournamentGameBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartMatch` | `void StartMatch(TournamentMatch match, bool isLastRound);` | method |
| `SkipMatch` | `void SkipMatch(TournamentMatch match);` | method |
| `IsMatchEnded` | `bool IsMatchEnded();` | method |
| `OnMatchEnded` | `void OnMatchEnded();` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentMissionStarter](../TournamentMissionStarter)
