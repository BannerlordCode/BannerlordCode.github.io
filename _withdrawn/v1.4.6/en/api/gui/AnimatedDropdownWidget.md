---
title: "AnimatedDropdownWidget"
description: "AnimatedDropdownWidget: a public class in TaleWorlds.GauntletUI, inheriting Widget; 20 exposed members (10 methods, 9 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AnimatedDropdownWidget

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class AnimatedDropdownWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

AnimatedDropdownWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is AnimatedDropdownWidget → Widget → PropertyOwnerObject. It exposes 20 public/protected members: 10 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimatedDropdownWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain AnimatedDropdownWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 10/20, properties 9/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AnimatedDropdownWidget` | `public AnimatedDropdownWidget(UIContext context) : base(context)` | constructor |
| `TextWidget` | `public Widget TextWidget` | property |
| `ScrollbarWidget` | `public ScrollbarWidget ScrollbarWidget` | property |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OpenPanel` | `protected virtual void OpenPanel()` | method |
| `ClosePanel` | `protected virtual void ClosePanel()` | method |
| `OnButtonClick` | `public void OnButtonClick(Widget widget)` | method |
| `UpdateButtonText` | `public void UpdateButtonText(string text)` | method |
| `OnListChanged` | `public void OnListChanged(Widget widget)` | method |
| `OnListChanged` | `public void OnListChanged(Widget parentWidget, Widget addedWidget)` | method |
| `OnSelectionChanged` | `public void OnSelectionChanged(Widget widget)` | method |
| `Button` | `public ButtonWidget Button` | property |
| `DropdownContainerWidget` | `public Widget DropdownContainerWidget` | property |
| `DropdownClipWidget` | `public Widget DropdownClipWidget` | property |
| `ListPanel` | `public ListPanel ListPanel` | property |
| `ListPanelValue` | `public int ListPanelValue` | property |
| `CurrentSelectedIndex` | `public int CurrentSelectedIndex` | property |
| `UpdateSelectedItem` | `public bool UpdateSelectedItem` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
- [same namespace Brush](../Brush/)
