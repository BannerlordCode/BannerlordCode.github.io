---
title: "DialogButtonsParentWidget"
description: "DialogButtonsParentWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 7 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs."
---
# DialogButtonsParentWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class DialogButtonsParentWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs`

## Overview

DialogButtonsParentWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is DialogButtonsParentWidget → Widget. It exposes 7 public/protected members: 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DialogButtonsParentWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain DialogButtonsParentWidget → Widget. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CancelClickSound` | `public string CancelClickSound` | property |
| `ConfirmClickSound` | `public string ConfirmClickSound` | property |
| `ResetClickSound` | `public string ResetClickSound` | property |
| `DialogButtonsParentWidget` | `public DialogButtonsParentWidget(UIContext context) : base(context)` | constructor |
| `CancelButton` | `public ButtonWidget CancelButton` | property |
| `ConfirmButton` | `public ButtonWidget ConfirmButton` | property |
| `ResetButton` | `public ButtonWidget ResetButton` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget)
