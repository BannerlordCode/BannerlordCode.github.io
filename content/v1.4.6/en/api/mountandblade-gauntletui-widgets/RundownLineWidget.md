---
title: "RundownLineWidget"
description: "RundownLineWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs."
---
# RundownLineWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class RundownLineWidget : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs`

## Overview

RundownLineWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is RundownLineWidget → ListPanel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RundownLineWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip) the module directory; inheritance chain RundownLineWidget → ListPanel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `ValueTextWidget` | `public TextWidget ValueTextWidget` | property |
| `Value` | `public float Value` | property |
| `RundownLineWidget` | `public RundownLineWidget(UIContext context) : base(context)` | constructor |
| `RefreshValueOffset` | `public void RefreshValueOffset(float columnWidth)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RundownColumnDividerCollectionWidget](../RundownColumnDividerCollectionWidget)
- [same namespace RundownTooltipWidget](../RundownTooltipWidget)
