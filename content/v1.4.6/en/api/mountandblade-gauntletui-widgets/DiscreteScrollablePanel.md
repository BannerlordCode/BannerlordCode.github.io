---
title: "DiscreteScrollablePanel"
description: "DiscreteScrollablePanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ScrollablePanel; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs."
---
# DiscreteScrollablePanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DiscreteScrollablePanel : ScrollablePanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs`

## Overview

DiscreteScrollablePanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs. It is a public class, implementing/inheriting ScrollablePanel; the inheritance chain is DiscreteScrollablePanel → ScrollablePanel. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DiscreteScrollablePanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain DiscreteScrollablePanel → ScrollablePanel. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. ScrollablePanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/DiscreteScrollablePanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DiscreteScrollablePanel` | `public DiscreteScrollablePanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsLooping` | `public bool IsLooping` | property |
| `ScrollToSelectedOnVisibilityChanged` | `public bool ScrollToSelectedOnVisibilityChanged` | property |
| `ItemsPerPage` | `public int ItemsPerPage` | property |
| `ScrollTime` | `public float ScrollTime` | property |
| `ListWidget` | `public ListPanel ListWidget` | property |
| `PreviousButtonWidget` | `public ButtonWidget PreviousButtonWidget` | property |
| `NextButtonWidget` | `public ButtonWidget NextButtonWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
