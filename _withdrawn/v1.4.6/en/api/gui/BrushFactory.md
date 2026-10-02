---
title: "BrushFactory"
description: "BrushFactory: a public class in TaleWorlds.GauntletUI; 9 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushFactory

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushFactory`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

BrushFactory lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs. It is a public class; the inheritance chain is BrushFactory. It exposes 9 public/protected members: 5 methods, 2 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushFactory lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain BrushFactory. The surface is method-led (methods 5/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Brush>Brushes` | property |
| `DefaultBrush` | `public Brush DefaultBrush` | property |
| `BrushFactory` | `public BrushFactory(ResourceDepot resourceDepot, string resourceFolder, SpriteData spriteData, FontFactory fontFactory)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `LoadBrushFile` | `public void LoadBrushFile(string name)` | method |
| `GetBrush` | `public Brush GetBrush(string name)` | method |
| `SaveBrushAs` | `public bool SaveBrushAs(string name, Brush brush)` | method |
| `CheckForUpdates` | `public void CheckForUpdates()` | method |
| `BrushChange;` | `public event Action BrushChange;` | event |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
