---
title: "FillBar"
description: "FillBar: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 11 exposed members (2 methods, 8 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs."
---
# FillBar

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBar : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs`

## Overview

FillBar lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is FillBar → BrushWidget. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBar is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain FillBar → BrushWidget. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBar` | `public FillBar(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `MaxAmount` | `public int MaxAmount` | property |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `InitialAmount` | `public int InitialAmount` | property |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | property |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | property |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | property |
| `IsVertical` | `public bool IsVertical` | property |
| `IsSmoothFillEnabled` | `public bool IsSmoothFillEnabled` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
