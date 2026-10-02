---
title: "EncyclopediaListItemButtonWidget"
description: "EncyclopediaListItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 8 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs."
---
# EncyclopediaListItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class EncyclopediaListItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs`

## Overview

EncyclopediaListItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is EncyclopediaListItemButtonWidget → ButtonWidget. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia) the module directory; inheritance chain EncyclopediaListItemButtonWidget → ButtonWidget. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListItemNameTextWidget` | `public TextWidget ListItemNameTextWidget` | property |
| `ListComparedValueTextWidget` | `public TextWidget ListComparedValueTextWidget` | property |
| `InfoAvailableItemNameBrush` | `public Brush InfoAvailableItemNameBrush` | property |
| `InfoUnvailableItemNameBrush` | `public Brush InfoUnvailableItemNameBrush` | property |
| `IsInfoAvailable` | `public bool IsInfoAvailable` | property |
| `EncyclopediaListItemButtonWidget` | `public EncyclopediaListItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnThisLateUpdate` | `public void OnThisLateUpdate(float dt)` | method |
| `ListItemId` | `public string ListItemId` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaCharacterTableauWidget](../EncyclopediaCharacterTableauWidget)
- [same namespace EncyclopediaDividerButtonWidget](../EncyclopediaDividerButtonWidget)
- [same namespace EncyclopediaFilterListItemButtonWidget](../EncyclopediaFilterListItemButtonWidget)
- [same namespace EncyclopediaHeroTraitVisualWidget](../EncyclopediaHeroTraitVisualWidget)
