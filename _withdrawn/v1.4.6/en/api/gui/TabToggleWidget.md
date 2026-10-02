---
title: "TabToggleWidget"
description: "TabToggleWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting ButtonWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TabToggleWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TabToggleWidget : ButtonWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

TabToggleWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is TabToggleWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TabToggleWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain TabToggleWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TabControlWidget` | `public TabControl TabControlWidget` | property |
| `TabToggleWidget` | `public TabToggleWidget(UIContext context) : base(context)` | constructor |
| `HandleClick` | `protected override void HandleClick()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `TabName` | `public string TabName` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../ButtonWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
