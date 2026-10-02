---
title: "OrderOfBattleScreenWidget"
description: "OrderOfBattleScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 11 exposed members (2 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs."
---
# OrderOfBattleScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OrderOfBattleScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs`

## Overview

OrderOfBattleScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is OrderOfBattleScreenWidget → Widget. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle) the module directory; inheritance chain OrderOfBattleScreenWidget → Widget. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AlphaChangeDuration` | `public float AlphaChangeDuration` | property |
| `OrderOfBattleScreenWidget` | `public OrderOfBattleScreenWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnCameraControlsEnabledChanged` | `protected void OnCameraControlsEnabledChanged()` | method |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled` | property |
| `CameraEnabledAlpha` | `public float CameraEnabledAlpha` | property |
| `LeftSideFormations` | `public ListPanel LeftSideFormations` | property |
| `RightSideFormations` | `public ListPanel RightSideFormations` | property |
| `CaptainPool` | `public ListPanel CaptainPool` | property |
| `Markers` | `public Widget Markers` | property |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassBrushWidget](../OrderOfBattleFormationClassBrushWidget)
- [same namespace OrderOfBattleFormationClassContainerWidget](../OrderOfBattleFormationClassContainerWidget)
- [same namespace OrderOfBattleFormationClassLockBrushWidget](../OrderOfBattleFormationClassLockBrushWidget)
- [same namespace OrderOfBattleFormationFilterVisualBrushWidget](../OrderOfBattleFormationFilterVisualBrushWidget)
