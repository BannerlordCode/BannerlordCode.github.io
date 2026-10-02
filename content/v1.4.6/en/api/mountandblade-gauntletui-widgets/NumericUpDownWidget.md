---
title: "NumericUpDownWidget"
description: "NumericUpDownWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (0 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs."
---
# NumericUpDownWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NumericUpDownWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs`

## Overview

NumericUpDownWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is NumericUpDownWidget → Widget. It exposes 9 public/protected members: 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NumericUpDownWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain NumericUpDownWidget → Widget. The surface is property-led (properties 8/9, methods 0/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumericUpDownWidget` | `public NumericUpDownWidget(UIContext context) : base(context)` | constructor |
| `ShowOneAdded` | `public bool ShowOneAdded` | property |
| `IntValue` | `public int IntValue` | property |
| `Value` | `public float Value` | property |
| `MinValue` | `public float MinValue` | property |
| `MaxValue` | `public float MaxValue` | property |
| `TextWidget` | `public TextWidget TextWidget` | property |
| `UpButton` | `public ButtonWidget UpButton` | property |
| `DownButton` | `public ButtonWidget DownButton` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
