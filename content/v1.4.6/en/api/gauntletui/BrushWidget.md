---
title: "BrushWidget"
description: "BrushWidget: a public class in TaleWorlds.GauntletUI, inheriting Widget; 16 exposed members (11 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs."
---
# BrushWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## Overview

BrushWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is BrushWidget → Widget → PropertyOwnerObject. It exposes 16 public/protected members: 11 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 11/16, properties 4/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Brush` | `public Brush Brush` | property |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush` | property |
| `Sprite` | `public new Sprite Sprite` | property |
| `BrushRenderer` | `public BrushRenderer BrushRenderer` | property |
| `BrushWidget` | `public BrushWidget(UIContext context) : base(context)` | constructor |
| `UpdateBrushes` | `public override void UpdateBrushes(float dt)` | method |
| `IsBrushUpdateNeeded` | `protected bool IsBrushUpdateNeeded()` | method |
| `UpdateBrushRendererInternal` | `protected void UpdateBrushRendererInternal(float dt)` | method |
| `SetState` | `public override void SetState(string stateName)` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `UpdateAnimationPropertiesSubTask` | `public override void UpdateAnimationPropertiesSubTask(float alphaFactor)` | method |
| `OnBrushChanged` | `public virtual void OnBrushChanged()` | method |
| `RegisterUpdateBrushes` | `protected void RegisterUpdateBrushes()` | method |
| `UnRegisterUpdateBrushes` | `protected void UnRegisterUpdateBrushes()` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
- [same namespace Container](../Container)
