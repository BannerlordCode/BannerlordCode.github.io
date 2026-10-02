---
title: "HintWidget"
description: "HintWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 10 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/HintWidget.cs."
---
# HintWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class HintWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/HintWidget.cs`

## Overview

HintWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/HintWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is HintWidget → Widget. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HintWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain HintWidget → Widget. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/HintWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HintWidget` | `public HintWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | method |
| `OnPreviewDragBegin` | `protected override bool OnPreviewDragBegin()` | method |
| `OnPreviewDrop` | `protected override bool OnPreviewDrop()` | method |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | method |
| `OnPreviewMouseReleased` | `protected override bool OnPreviewMouseReleased()` | method |
| `OnPreviewMouseMove` | `protected override bool OnPreviewMouseMove()` | method |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
