---
title: "ContainerPageControlButtonListWidget"
description: "ContainerPageControlButtonListWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ContainerPageControlWidget; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs."
---
# ContainerPageControlButtonListWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ContainerPageControlButtonListWidget : ContainerPageControlWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs`

## Overview

ContainerPageControlButtonListWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs. It is a public class, implementing/inheriting ContainerPageControlWidget; the inheritance chain is ContainerPageControlButtonListWidget → ContainerPageControlWidget → Widget. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContainerPageControlButtonListWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ContainerPageControlButtonListWidget → ContainerPageControlWidget → Widget. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ContainerPageControlButtonListWidget` | `public ContainerPageControlButtonListWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnInitialized` | `protected override void OnInitialized()` | method |
| `OnContainerItemsUpdated` | `protected override void OnContainerItemsUpdated()` | method |
| `PageButtonTemplate` | `public ButtonWidget PageButtonTemplate` | property |
| `FullButtonBrush` | `public string FullButtonBrush` | property |
| `EmptyButtonBrush` | `public string EmptyButtonBrush` | property |
| `PageButtonItemsListPanel` | `public ListPanel PageButtonItemsListPanel` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ContainerPageControlWidget](../ContainerPageControlWidget)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
