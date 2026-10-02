---
title: "TabControl"
description: "TabControl: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting Widget; 7 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TabControl

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TabControl : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

TabControl lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TabControl → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 3 methods, 2 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TabControl lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain TabControl → Widget → PropertyOwnerObject. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabControl.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnActiveTabChange;` | `public event OnActiveTabChangeEvent OnActiveTabChange;` | event |
| `TabControl` | `public TabControl(UIContext context) : base(context)` | constructor |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | method |
| `ActiveTab` | `public Widget ActiveTab` | property |
| `SetActiveTab` | `public void SetActiveTab(string tabName)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SelectedIndex` | `public int SelectedIndex` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
