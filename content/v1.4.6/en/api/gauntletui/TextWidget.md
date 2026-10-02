---
title: "TextWidget"
description: "TextWidget: a public class in TaleWorlds.GauntletUI, inheriting ImageWidget; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs."
---
# TextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TextWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs`

## Overview

TextWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs. It is a public class, implementing/inheriting ImageWidget; the inheritance chain is TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty` | property |
| `Text` | `public string Text` | property |
| `IntText` | `public int IntText` | property |
| `FloatText` | `public float FloatText` | property |
| `TextWidget` | `public TextWidget(UIContext context) : base(context)` | constructor |
| `SetText` | `protected virtual void SetText(string value)` | method |
| `RefreshTextParameters` | `protected void RefreshTextParameters()` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `CanBreakWords` | `public bool CanBreakWords` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ImageWidget](../ImageWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
