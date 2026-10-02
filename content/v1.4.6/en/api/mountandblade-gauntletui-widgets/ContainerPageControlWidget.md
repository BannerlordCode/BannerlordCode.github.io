---
title: "ContainerPageControlWidget"
description: "ContainerPageControlWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 14 exposed members (4 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs."
---
# ContainerPageControlWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ContainerPageControlWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs`

## Overview

ContainerPageControlWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ContainerPageControlWidget → Widget. It exposes 14 public/protected members: 4 methods, 8 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContainerPageControlWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ContainerPageControlWidget → Widget. The surface is property-led (properties 8/14, methods 4/14), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PageCount` | `public int PageCount` | property |
| `OnPageCountChanged;` | `public event Action OnPageCountChanged;` | event |
| `ContainerPageControlWidget` | `public ContainerPageControlWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnInitialized` | `protected virtual void OnInitialized()` | method |
| `OnContainerItemsUpdated` | `protected virtual void OnContainerItemsUpdated()` | method |
| `GoToPage` | `protected void GoToPage(int index)` | method |
| `PageButtonsContext` | `public NavigationScopeTargeter PageButtonsContext` | property |
| `ItemPerPage` | `public int ItemPerPage` | property |
| `LoopNavigation` | `public bool LoopNavigation` | property |
| `Container` | `public Container Container` | property |
| `NextPageButton` | `public ButtonWidget NextPageButton` | property |
| `PreviousPageButton` | `public ButtonWidget PreviousPageButton` | property |
| `PageText` | `public TextWidget PageText` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
