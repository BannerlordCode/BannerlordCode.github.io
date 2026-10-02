---
title: "MouseWidget"
description: "MouseWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 11 exposed members (2 methods, 8 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MouseWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class MouseWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

MouseWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MouseWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MouseWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain MouseWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MouseWidget` | `public MouseWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `UpdatePressedKeys` | `public void UpdatePressedKeys()` | method |
| `LeftMouseButton` | `public Widget LeftMouseButton` | property |
| `RightMouseButton` | `public Widget RightMouseButton` | property |
| `MiddleMouseButton` | `public Widget MiddleMouseButton` | property |
| `MouseX1Button` | `public Widget MouseX1Button` | property |
| `MouseX2Button` | `public Widget MouseX2Button` | property |
| `MouseScrollUp` | `public Widget MouseScrollUp` | property |
| `MouseScrollDown` | `public Widget MouseScrollDown` | property |
| `KeyboardKeys` | `public TextWidget KeyboardKeys` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
