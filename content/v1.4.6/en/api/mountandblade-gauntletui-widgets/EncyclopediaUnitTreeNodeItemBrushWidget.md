---
title: "EncyclopediaUnitTreeNodeItemBrushWidget"
description: "EncyclopediaUnitTreeNodeItemBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs."
---
# EncyclopediaUnitTreeNodeItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class EncyclopediaUnitTreeNodeItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs`

## Overview

EncyclopediaUnitTreeNodeItemBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is EncyclopediaUnitTreeNodeItemBrushWidget → BrushWidget. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaUnitTreeNodeItemBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia) the module directory; inheritance chain EncyclopediaUnitTreeNodeItemBrushWidget → BrushWidget. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaUnitTreeNodeItemBrushWidget` | `public EncyclopediaUnitTreeNodeItemBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnListItemAdded` | `public void OnListItemAdded(Widget parentWidget, Widget addedWidget)` | method |
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade` | property |
| `ChildContainer` | `public ListPanel ChildContainer` | property |
| `LineContainer` | `public Widget LineContainer` | property |
| `LineBrush` | `public Brush LineBrush` | property |
| `AlternateLineBrush` | `public Brush AlternateLineBrush` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaCharacterTableauWidget](../EncyclopediaCharacterTableauWidget)
- [same namespace EncyclopediaDividerButtonWidget](../EncyclopediaDividerButtonWidget)
- [same namespace EncyclopediaFilterListItemButtonWidget](../EncyclopediaFilterListItemButtonWidget)
- [same namespace EncyclopediaHeroTraitVisualWidget](../EncyclopediaHeroTraitVisualWidget)
