---
title: "DevelopmentItemButtonWidget"
description: "DevelopmentItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement, inheriting ButtonWidget; 17 exposed members (1 methods, 15 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DevelopmentItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DevelopmentItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DevelopmentItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is DevelopmentItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 17 public/protected members: 1 methods, 15 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DevelopmentItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`, inheritance chain DevelopmentItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 15/17, methods 1/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DevelopmentItemButtonWidget` | `public DevelopmentItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsSelectedItem` | `public bool IsSelectedItem` | property |
| `SelectedBlackOverlayWidget` | `public Widget SelectedBlackOverlayWidget` | property |
| `NameTextWidget` | `public DevelopmentNameTextWidget NameTextWidget` | property |
| `AddToQueueButtonWidget` | `public ButtonWidget AddToQueueButtonWidget` | property |
| `SetAsActiveButtonWidget` | `public ButtonWidget SetAsActiveButtonWidget` | property |
| `DevelopmentLevelVisualWidget` | `public Widget DevelopmentLevelVisualWidget` | property |
| `ProgressClipWidget` | `public Widget ProgressClipWidget` | property |
| `IsProgressShown` | `public bool IsProgressShown` | property |
| `CanBuild` | `public bool CanBuild` | property |
| `DevelopmentBackVisualWidget` | `public Widget DevelopmentBackVisualWidget` | property |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget` | property |
| `IsProgressIndicatorsEnabled` | `public bool IsProgressIndicatorsEnabled` | property |
| `IsDaily` | `public bool IsDaily` | property |
| `Level` | `public int Level` | property |
| `Progress` | `public int Progress` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget/)
- [same namespace AutoClosePopupWidget](../AutoClosePopupWidget/)
- [same namespace DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget/)
- [same namespace DevelopmentItemVisualButtonWidget](../DevelopmentItemVisualButtonWidget/)
