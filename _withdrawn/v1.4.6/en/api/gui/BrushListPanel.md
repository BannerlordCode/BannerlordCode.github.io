---
title: "BrushListPanel"
description: "BrushListPanel: a public class in TaleWorlds.GauntletUI, inheriting ListPanel; 13 exposed members (8 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushListPanel

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushListPanel : ListPanel`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

BrushListPanel lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is BrushListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 13 public/protected members: 8 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushListPanel lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain BrushListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is method-led (methods 8/13, properties 4/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Brush` | `public Brush Brush` | property |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush` | property |
| `Sprite` | `public new Sprite Sprite` | property |
| `BrushRenderer` | `public BrushRenderer BrushRenderer` | property |
| `BrushListPanel` | `public BrushListPanel(UIContext context) : base(context)` | constructor |
| `UpdateBrushes` | `public override void UpdateBrushes(float dt)` | method |
| `SetState` | `public override void SetState(string stateName)` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `IsBrushUpdateNeeded` | `protected bool IsBrushUpdateNeeded()` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `UpdateAnimationPropertiesSubTask` | `public override void UpdateAnimationPropertiesSubTask(float alphaFactor)` | method |
| `OnBrushChanged` | `public virtual void OnBrushChanged()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../ListPanel/)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
