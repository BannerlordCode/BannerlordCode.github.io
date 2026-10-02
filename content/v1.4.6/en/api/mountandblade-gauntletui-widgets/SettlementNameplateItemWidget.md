---
title: "SettlementNameplateItemWidget"
description: "SettlementNameplateItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs."
---
# SettlementNameplateItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SettlementNameplateItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs`

## Overview

SettlementNameplateItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is SettlementNameplateItemWidget → Widget. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate) the module directory; inheritance chain SettlementNameplateItemWidget → Widget. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementNameplateItemWidget` | `public SettlementNameplateItemWidget(UIContext context) : base(context)` | constructor |
| `IsOverWidget` | `public bool IsOverWidget` | property |
| `QuestType` | `public int QuestType` | property |
| `IssueType` | `public int IssueType` | property |
| `ParallelUpdate` | `public void ParallelUpdate(float dt)` | method |
| `InspectedIconWidget` | `public Widget InspectedIconWidget` | property |
| `PortIconWidget` | `public Widget PortIconWidget` | property |
| `SettlementPartiesGridWidget` | `public GridWidget SettlementPartiesGridWidget` | property |
| `MapEventVisualWidget` | `public MapEventVisualBrushWidget MapEventVisualWidget` | property |
| `WidgetToShow` | `public Widget WidgetToShow` | property |
| `SettlementBannerWidget` | `public MaskedTextureWidget SettlementBannerWidget` | property |
| `SettlementNameTextWidget` | `public TextWidget SettlementNameTextWidget` | property |
| `ParleyIconWidget` | `public Widget ParleyIconWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyNameplateWidget](../PartyNameplateWidget)
- [same namespace PartyPlayerNameplateWidget](../PartyPlayerNameplateWidget)
- [same namespace SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget)
- [same namespace SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget)
