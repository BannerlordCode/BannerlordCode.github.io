---
title: "EncyclopediaListWidget"
description: "EncyclopediaListWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs."
---
# EncyclopediaListWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class EncyclopediaListWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs`

## Overview

EncyclopediaListWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is EncyclopediaListWidget → Widget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia) the module directory; inheritance chain EncyclopediaListWidget → Widget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListWidget` | `public EncyclopediaListWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `LastSelectedItemId` | `public string LastSelectedItemId` | property |
| `ItemList` | `public ListPanel ItemList` | property |
| `ItemListScroll` | `public ScrollbarWidget ItemListScroll` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaCharacterTableauWidget](../EncyclopediaCharacterTableauWidget)
- [same namespace EncyclopediaDividerButtonWidget](../EncyclopediaDividerButtonWidget)
- [same namespace EncyclopediaFilterListItemButtonWidget](../EncyclopediaFilterListItemButtonWidget)
- [same namespace EncyclopediaHeroTraitVisualWidget](../EncyclopediaHeroTraitVisualWidget)
