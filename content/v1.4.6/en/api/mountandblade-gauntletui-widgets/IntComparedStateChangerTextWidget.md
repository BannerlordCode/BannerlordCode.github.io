---
title: "IntComparedStateChangerTextWidget"
description: "IntComparedStateChangerTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 8 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/IntComparedStateChangerTextWidget.cs."
---
# IntComparedStateChangerTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class IntComparedStateChangerTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/IntComparedStateChangerTextWidget.cs`

## Overview

IntComparedStateChangerTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/IntComparedStateChangerTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is IntComparedStateChangerTextWidget → TextWidget. It exposes 8 public/protected members: 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IntComparedStateChangerTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain IntComparedStateChangerTextWidget → TextWidget. The surface is property-led (properties 6/8, methods 0/8), so it mostly exposes state for reading. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/IntComparedStateChangerTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IntComparedStateChangerTextWidget` | `public IntComparedStateChangerTextWidget(UIContext context) : base(context)` | constructor |
| `ComparisonType` | `public IntComparedStateChangerTextWidget.ComparisonTypes ComparisonType` | property |
| `FirstValue` | `public int FirstValue` | property |
| `SecondValue` | `public int SecondValue` | property |
| `TrueState` | `public string TrueState` | property |
| `FalseState` | `public string FalseState` | property |
| `ComparisonTypes` | `public enum ComparisonTypes` | property |
| `ComparisonTypes` | `public enum ComparisonTypes` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
