---
title: "TwoDimensionContext"
description: "TwoDimensionContext: a public class in TaleWorlds.TwoDimension; 23 exposed members (16 methods, 6 properties, 0 fields). Source: TaleWorlds.TwoDimension/TwoDimensionContext.cs."
---
# TwoDimensionContext

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TwoDimensionContext`
**File:** `TaleWorlds.TwoDimension/TwoDimensionContext.cs`

## Overview

TwoDimensionContext lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/TwoDimensionContext.cs. It is a public class; the inheritance chain is TwoDimensionContext. It exposes 23 public/protected members: 16 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TwoDimensionContext is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain TwoDimensionContext. The surface is method-led (methods 16/23, properties 6/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/TwoDimensionContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `public float Width` | property |
| `Height` | `public float Height` | property |
| `Platform` | `public ITwoDimensionPlatform Platform` | property |
| `ResourceContext` | `public ITwoDimensionResourceContext ResourceContext` | property |
| `ResourceDepot` | `public ResourceDepot ResourceDepot` | property |
| `IsDebugModeEnabled` | `public bool IsDebugModeEnabled` | property |
| `TwoDimensionContext` | `public TwoDimensionContext(ITwoDimensionPlatform platform, ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)` | constructor |
| `PlaySound` | `public void PlaySound(string soundName)` | method |
| `CreateSoundEvent` | `public void CreateSoundEvent(string soundName)` | method |
| `StopAndRemoveSoundEvent` | `public void StopAndRemoveSoundEvent(string soundName)` | method |
| `PlaySoundEvent` | `public void PlaySoundEvent(string soundName)` | method |
| `DrawImage` | `public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)` | method |
| `DrawText` | `public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)` | method |
| `BeginDebugPanel` | `public void BeginDebugPanel(string panelTitle)` | method |
| `EndDebugPanel` | `public void EndDebugPanel()` | method |
| `DrawDebugText` | `public void DrawDebugText(string text)` | method |
| `DrawDebugTreeNode` | `public bool DrawDebugTreeNode(string text)` | method |
| `PopDebugTreeNode` | `public void PopDebugTreeNode()` | method |
| `DrawCheckbox` | `public void DrawCheckbox(string label, ref bool isChecked)` | method |
| `IsDebugItemHovered` | `public bool IsDebugItemHovered()` | method |
| `LoadTexture` | `public Texture LoadTexture(string name)` | method |
| `SetScissor` | `public void SetScissor(ScissorTestInfo scissor)` | method |
| `ResetScissor` | `public void ResetScissor()` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
