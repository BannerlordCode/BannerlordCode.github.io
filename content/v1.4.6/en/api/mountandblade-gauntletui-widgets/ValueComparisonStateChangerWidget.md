---
title: "ValueComparisonStateChangerWidget"
description: "ValueComparisonStateChangerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 11 exposed members (0 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs."
---
# ValueComparisonStateChangerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ValueComparisonStateChangerWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs`

## Overview

ValueComparisonStateChangerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is ValueComparisonStateChangerWidget → BrushWidget. It exposes 11 public/protected members: 9 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ValueComparisonStateChangerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ValueComparisonStateChangerWidget → BrushWidget. The surface is property-led (properties 9/11, methods 0/11), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ValueComparisonStateChangerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ValueComparisonStateChangerWidget` | `public ValueComparisonStateChangerWidget(UIContext context) : base(context)` | constructor |
| `TargetWidget` | `public Widget TargetWidget` | property |
| `WatchType` | `public ValueComparisonStateChangerWidget.WatchTypes WatchType` | property |
| `FirstValueInt` | `public int FirstValueInt` | property |
| `SecondValueInt` | `public int SecondValueInt` | property |
| `FirstValueFloat` | `public float FirstValueFloat` | property |
| `SecondValueFloat` | `public float SecondValueFloat` | property |
| `TrueState` | `public string TrueState` | property |
| `FalseState` | `public string FalseState` | property |
| `WatchTypes` | `public enum WatchTypes` | property |
| `WatchTypes` | `public enum WatchTypes` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
