---
title: "EncyclopediaSearchBarBrushWidget"
description: "EncyclopediaSearchBarBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia, inheriting BrushWidget; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaSearchBarBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class EncyclopediaSearchBarBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

EncyclopediaSearchBarBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is EncyclopediaSearchBarBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaSearchBarBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`, inheritance chain EncyclopediaSearchBarBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaSearchBarBrushWidget` | `public EncyclopediaSearchBarBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `ShowResults` | `public bool ShowResults` | property |
| `SearchInputWidget` | `public EditableTextWidget SearchInputWidget` | property |
| `SearchResultPanel` | `public ScrollablePanel SearchResultPanel` | property |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace EncyclopediaCharacterTableauWidget](../EncyclopediaCharacterTableauWidget/)
- [same namespace EncyclopediaDividerButtonWidget](../EncyclopediaDividerButtonWidget/)
- [same namespace EncyclopediaFilterListItemButtonWidget](../EncyclopediaFilterListItemButtonWidget/)
- [same namespace EncyclopediaHeroTraitVisualWidget](../EncyclopediaHeroTraitVisualWidget/)
