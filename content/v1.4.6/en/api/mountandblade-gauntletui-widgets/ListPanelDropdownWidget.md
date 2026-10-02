---
title: "ListPanelDropdownWidget"
description: "ListPanelDropdownWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting DropdownWidget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ListPanelDropdownWidget.cs."
---
# ListPanelDropdownWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ListPanelDropdownWidget : DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ListPanelDropdownWidget.cs`

## Overview

ListPanelDropdownWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ListPanelDropdownWidget.cs. It is a public class, implementing/inheriting DropdownWidget; the inheritance chain is ListPanelDropdownWidget → DropdownWidget. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ListPanelDropdownWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ListPanelDropdownWidget → DropdownWidget. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. DropdownWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ListPanelDropdownWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListPanelDropdownWidget` | `public ListPanelDropdownWidget(UIContext context) : base(context)` | constructor |
| `OpenPanel` | `protected override void OpenPanel()` | method |
| `ClosePanel` | `protected override void ClosePanel()` | method |
| `ListPanelContainer` | `public Widget ListPanelContainer` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
