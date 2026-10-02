---
title: "TextureProvider"
description: "TextureProvider: a public class in TaleWorlds.GauntletUI; 8 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs."
---
# TextureProvider

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public abstract class TextureProvider`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs`

## Overview

TextureProvider lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs. It is a public class (abstract); the inheritance chain is TextureProvider. It exposes 8 public/protected members: 7 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextureProvider is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain TextureProvider. The surface is method-led (methods 7/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SourceInfo` | `public string SourceInfo` | property |
| `SetTargetSize` | `public virtual void SetTargetSize(int width, int height)` | method |
| `GetTextureForRender` | `public Texture GetTextureForRender(TwoDimensionContext context, string name = null)` | method |
| `OnGetTextureForRender` | `protected abstract Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name);` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `Clear` | `public virtual void Clear(bool clearNextFrame)` | method |
| `SetProperty` | `public void SetProperty(string name, object value)` | method |
| `GetProperty` | `public object GetProperty(string name)` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
