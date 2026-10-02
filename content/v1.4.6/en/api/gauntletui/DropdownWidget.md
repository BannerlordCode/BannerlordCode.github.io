---
title: "DropdownWidget"
description: "DropdownWidget: a public class in TaleWorlds.GauntletUI, inheriting Widget; 19 exposed members (10 methods, 8 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs."
---
# DropdownWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class DropdownWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs`

## Overview

DropdownWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is DropdownWidget → Widget → PropertyOwnerObject. It exposes 19 public/protected members: 10 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DropdownWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain DropdownWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 10/19, properties 8/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/DropdownWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextWidget` | `public Widget TextWidget` | property |
| `DoNotHandleDropdownListPanel` | `public bool DoNotHandleDropdownListPanel` | property |
| `DropdownWidget` | `public DropdownWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OpenPanel` | `protected virtual void OpenPanel()` | method |
| `ClosePanel` | `protected virtual void ClosePanel()` | method |
| `OnButtonClick` | `public void OnButtonClick(Widget widget)` | method |
| `UpdateButtonText` | `public void UpdateButtonText(string text)` | method |
| `OnListItemAdded` | `public void OnListItemAdded(Widget parentWidget, Widget newChild)` | method |
| `OnListItemRemoved` | `public void OnListItemRemoved(Widget removedItem, Widget removedChild)` | method |
| `OnSelectionChanged` | `public void OnSelectionChanged(Widget widget)` | method |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel` | property |
| `Button` | `public ButtonWidget Button` | property |
| `ListPanel` | `public ListPanel ListPanel` | property |
| `IsOpen` | `public bool IsOpen` | property |
| `ListPanelValue` | `public int ListPanelValue` | property |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
