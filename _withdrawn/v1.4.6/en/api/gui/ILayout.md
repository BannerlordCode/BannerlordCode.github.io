---
title: "ILayout"
description: "ILayout: a public interface in TaleWorlds.GauntletUI.Layout; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ILayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface ILayout`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

ILayout lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs. It is a public interface; the inheritance chain is ILayout. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ILayout lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.Layout`, inheritance chain ILayout. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/ILayout.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MeasureChildren` | `Vector2 MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale);` | method |
| `OnLayout` | `void OnLayout(Widget widget, float left, float bottom, float right, float top);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DefaultLayout](../DefaultLayout/)
- [same namespace DragCarrierLayout](../DragCarrierLayout/)
- [same namespace GridDirection](../GridDirection/)
- [same namespace GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod/)
