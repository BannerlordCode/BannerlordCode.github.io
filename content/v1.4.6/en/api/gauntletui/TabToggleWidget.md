---
title: "TabToggleWidget"
description: "TabToggleWidget: a public class in TaleWorlds.GauntletUI, inheriting ButtonWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs."
---
# TabToggleWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TabToggleWidget : ButtonWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs`

## Overview

TabToggleWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is TabToggleWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TabToggleWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain TabToggleWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TabControlWidget` | `public TabControl TabControlWidget` | property |
| `TabToggleWidget` | `public TabToggleWidget(UIContext context) : base(context)` | constructor |
| `HandleClick` | `protected override void HandleClick()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `TabName` | `public string TabName` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ButtonWidget](../ButtonWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
