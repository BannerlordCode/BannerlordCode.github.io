---
title: "BrushRenderer"
description: "BrushRenderer: a public class in TaleWorlds.GauntletUI; 14 exposed members (6 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs."
---
# BrushRenderer

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushRenderer`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs`

## Overview

BrushRenderer lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs. It is a public class; the inheritance chain is BrushRenderer. It exposes 14 public/protected members: 6 methods, 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushRenderer is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain BrushRenderer. The surface is method-led (methods 6/14, properties 6/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber` | property |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement` | property |
| `CurrentStyle` | `public Style CurrentStyle` | property |
| `Brush` | `public Brush Brush` | property |
| `CurrentState` | `public string CurrentState` | property |
| `BrushRenderer` | `public BrushRenderer()` | constructor |
| `Update` | `public void Update(ulong frameNumber, float globalAnimTime, float dt)` | method |
| `IsUpdateNeeded` | `public bool IsUpdateNeeded()` | method |
| `Render` | `public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))` | method |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)` | method |
| `RestartAnimation` | `public void RestartAnimation()` | method |
| `SetSeed` | `public void SetSeed(int seed)` | method |
| `BrushRendererAnimationState` | `public enum BrushRendererAnimationState` | property |
| `BrushRendererAnimationState` | `public enum BrushRendererAnimationState` | nested type |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
