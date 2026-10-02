---
title: "OptionsScreenWidget"
description: "OptionsScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options, inheriting Widget; 10 exposed members (3 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OptionsScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OptionsScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OptionsScreenWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsScreenWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`, inheritance chain OptionsScreenWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget` | property |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget` | property |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget` | property |
| `CurrentOptionExtraInformationWidget` | `public RichTextWidget CurrentOptionExtraInformationWidget` | property |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget` | property |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle` | property |
| `OptionsScreenWidget` | `public OptionsScreenWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `SetCurrentOption` | `public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace OptionsBrightnessImageSliderWidget](../OptionsBrightnessImageSliderWidget/)
- [same namespace OptionsItemWidget](../OptionsItemWidget/)
- [same namespace OptionsKeyItemListPanel](../OptionsKeyItemListPanel/)
