---
title: "EngineTexture"
description: "EngineTexture: a public class in TaleWorlds.Engine.GauntletUI, inheriting ITexture; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.Engine.GauntletUI/EngineTexture.cs."
---
# EngineTexture

**Namespace:** `TaleWorlds.Engine.GauntletUI`
**Module:** `TaleWorlds.Engine.GauntletUI`
**Type:** `public class EngineTexture : ITexture`
**File:** `TaleWorlds.Engine.GauntletUI/EngineTexture.cs`

## Overview

EngineTexture lives in the TaleWorlds.Engine.GauntletUI module, source file TaleWorlds.Engine.GauntletUI/EngineTexture.cs. It is a public class, implementing/inheriting ITexture; the inheritance chain is EngineTexture → ITexture. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EngineTexture is a top-level type in TaleWorlds.Engine.GauntletUI, namespace matching the module directory; inheritance chain EngineTexture → ITexture. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. ITexture on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine.GauntletUI/EngineTexture.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | property |
| `EngineTexture` | `public EngineTexture(Texture engineTexture)` | constructor |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ engine-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Extensions](../Extensions)
- [same namespace GauntletMovieIdentifier](../GauntletMovieIdentifier)
- [same namespace TwoDimensionEnginePlatform](../TwoDimensionEnginePlatform)
- [same namespace TwoDimensionEngineResourceContext](../TwoDimensionEngineResourceContext)
