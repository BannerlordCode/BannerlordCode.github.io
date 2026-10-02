---
title: "RundownTooltipWidget"
description: "RundownTooltipWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TooltipWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs."
---
# RundownTooltipWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class RundownTooltipWidget : TooltipWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs`

## Overview

RundownTooltipWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs. It is a public class, implementing/inheriting TooltipWidget; the inheritance chain is RundownTooltipWidget → TooltipWidget. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RundownTooltipWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip) the module directory; inheritance chain RundownTooltipWidget → TooltipWidget. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. TooltipWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownTooltipWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RundownTooltipWidget` | `public RundownTooltipWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `LineContainerWidget` | `public GridWidget LineContainerWidget` | property |
| `DividerCollectionWidget` | `public RundownColumnDividerCollectionWidget DividerCollectionWidget` | property |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RundownColumnDividerCollectionWidget](../RundownColumnDividerCollectionWidget)
- [same namespace RundownLineWidget](../RundownLineWidget)
