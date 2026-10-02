---
title: "ChangeAmountTextWidget"
description: "ChangeAmountTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs."
---
# ChangeAmountTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChangeAmountTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs`

## Overview

ChangeAmountTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is ChangeAmountTextWidget → TextWidget. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeAmountTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ChangeAmountTextWidget → TextWidget. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChangeAmountTextWidget` | `public ChangeAmountTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `Amount` | `public int Amount` | property |
| `UseParentheses` | `public bool UseParentheses` | property |
| `ShouldBeVisible` | `public bool ShouldBeVisible` | property |
| `NegativeBrushName` | `public string NegativeBrushName` | property |
| `PositiveBrushName` | `public string PositiveBrushName` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
