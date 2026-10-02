---
title: "BoardGameDecal"
description: "BoardGameDecal: a public class in SandBox, inheriting ScriptComponentBehavior; 3 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/BoardGames/Objects/BoardGameDecal.cs."
---
# BoardGameDecal

**Namespace:** `SandBox.BoardGames.Objects`
**Module:** `SandBox`
**Type:** `public class BoardGameDecal : ScriptComponentBehavior`
**File:** `SandBox/BoardGames/Objects/BoardGameDecal.cs`

## Overview

BoardGameDecal lives in the SandBox module, source file SandBox/BoardGames/Objects/BoardGameDecal.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is BoardGameDecal → ScriptComponentBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameDecal is a top-level type in SandBox, namespace differing from (SandBox.BoardGames.Objects) the module directory; inheritance chain BoardGameDecal → ScriptComponentBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/BoardGames/Objects/BoardGameDecal.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `SetAlpha` | `public void SetAlpha(float alpha)` | method |
| `MovesEntity` | `protected override bool MovesEntity()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Tile](../Tile)
