---
title: "ButtonWidget"
description: "ButtonWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting ImageWidget; 17 exposed members (8 methods, 6 properties, 2 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ButtonWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ButtonWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

ButtonWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs. It is a public class, implementing/inheriting ImageWidget; the inheritance chain is ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 17 public/protected members: 8 methods, 6 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ButtonWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 8/17, properties 6/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ButtonType` | `public ButtonType ButtonType` | property |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `ButtonWidget` | `public ButtonWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | method |
| `OnMouseAlternatePressed` | `protected internal override void OnMouseAlternatePressed()` | method |
| `OnMouseAlternateReleased` | `protected internal override void OnMouseAlternateReleased(bool isFromInput)` | method |
| `HandleClick` | `protected virtual void HandleClick()` | method |
| `HandleAlternateClick` | `protected virtual void HandleAlternateClick()` | method |
| `IsToggle` | `public bool IsToggle` | property |
| `IsRadio` | `public bool IsRadio` | property |
| `ToggleIndicator` | `public Widget ToggleIndicator` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `DominantSelectedState` | `public bool DominantSelectedState` | property |
| `_maxDoubleClickDeltaTimeInSeconds` | `protected const float _maxDoubleClickDeltaTimeInSeconds` | field |
| `List` | `public List<Action<Widget>>ClickEventHandlers` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ImageWidget](../ImageWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace Container](../Container/)
