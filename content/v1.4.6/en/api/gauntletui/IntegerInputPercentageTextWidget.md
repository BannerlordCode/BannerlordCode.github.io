---
title: "IntegerInputPercentageTextWidget"
description: "IntegerInputPercentageTextWidget: a public class in TaleWorlds.GauntletUI, inheriting IntegerInputTextWidget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputPercentageTextWidget.cs."
---
# IntegerInputPercentageTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class IntegerInputPercentageTextWidget : IntegerInputTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputPercentageTextWidget.cs`

## Overview

IntegerInputPercentageTextWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputPercentageTextWidget.cs. It is a public class, implementing/inheriting IntegerInputTextWidget; the inheritance chain is IntegerInputPercentageTextWidget → IntegerInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IntegerInputPercentageTextWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain IntegerInputPercentageTextWidget → IntegerInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputPercentageTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IntegerInputPercentageTextWidget` | `public IntegerInputPercentageTextWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnGainFocus` | `protected internal override void OnGainFocus()` | method |
| `PercentageText` | `public string PercentageText` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IntegerInputTextWidget](../IntegerInputTextWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
