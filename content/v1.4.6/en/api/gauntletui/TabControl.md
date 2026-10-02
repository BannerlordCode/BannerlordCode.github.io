---
title: "TabControl"
description: "TabControl: a public class in TaleWorlds.GauntletUI, inheriting Widget; 7 exposed members (3 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs."
---
# TabControl

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TabControl : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs`

## Overview

TabControl lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TabControl → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 3 methods, 2 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TabControl is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain TabControl → Widget → PropertyOwnerObject. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnActiveTabChange;` | `public event OnActiveTabChangeEvent OnActiveTabChange;` | event |
| `TabControl` | `public TabControl(UIContext context) : base(context)` | constructor |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | method |
| `ActiveTab` | `public Widget ActiveTab` | property |
| `SetActiveTab` | `public void SetActiveTab(string tabName)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SelectedIndex` | `public int SelectedIndex` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
