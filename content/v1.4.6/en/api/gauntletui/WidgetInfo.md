---
title: "WidgetInfo"
description: "WidgetInfo: a public class in TaleWorlds.GauntletUI; 10 exposed members (3 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs."
---
# WidgetInfo

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class WidgetInfo`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs`

## Overview

WidgetInfo lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs. It is a public class; the inheritance chain is WidgetInfo. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetInfo is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain WidgetInfo. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `Type` | `public Type Type` | property |
| `GotCustomUpdate` | `public bool GotCustomUpdate` | property |
| `GotCustomLateUpdate` | `public bool GotCustomLateUpdate` | property |
| `GotCustomParallelUpdate` | `public bool GotCustomParallelUpdate` | property |
| `GotUpdateBrushes` | `public bool GotUpdateBrushes` | property |
| `WidgetInfo` | `public WidgetInfo(Type type)` | constructor |
| `Refresh` | `public static void Refresh()` | method |
| `GetWidgetInfo` | `public static WidgetInfo GetWidgetInfo(Type type)` | method |
| `WidgetInfo[]GetWidgetInfos` | `public static WidgetInfo[]GetWidgetInfos()` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
