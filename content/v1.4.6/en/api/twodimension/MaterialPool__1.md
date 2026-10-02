---
title: "MaterialPool<T>"
description: "MaterialPool<T>: a public class in TaleWorlds.TwoDimension, inheriting Material, new(); 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.TwoDimension/MaterialPool.cs."
---
# MaterialPool<T>

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class MaterialPool<T>where T : Material, new()`
**File:** `TaleWorlds.TwoDimension/MaterialPool.cs`

## Overview

MaterialPool<T> lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/MaterialPool.cs. It is a public class, implementing/inheriting Material, new(); the inheritance chain is MaterialPool → Material. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MaterialPool<T> is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain MaterialPool → Material. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/MaterialPool.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaterialPool` | `public MaterialPool(int initialBufferSize)` | constructor |
| `New` | `public T New()` | method |
| `ResetAll` | `public void ResetAll()` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Material](../Material)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
