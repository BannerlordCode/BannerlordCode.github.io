---
title: "GameNotificationWidget"
description: "GameNotificationWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 11 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs."
---
# GameNotificationWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameNotificationWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs`

## Overview

GameNotificationWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is GameNotificationWidget → BrushWidget. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameNotificationWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information) the module directory; inheritance chain GameNotificationWidget → BrushWidget. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/GameNotificationWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RampUpInSeconds` | `public float RampUpInSeconds` | property |
| `RampDownInSeconds` | `public float RampDownInSeconds` | property |
| `GameNotificationWidget` | `public GameNotificationWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnnouncerImageIdentifier` | `public ImageIdentifierWidget AnnouncerImageIdentifier` | property |
| `NotificationId` | `public int NotificationId` | property |
| `NotificationDurationInSeconds` | `public float NotificationDurationInSeconds` | property |
| `TextWidget` | `public RichTextWidget TextWidget` | property |
| `IsPaused` | `public bool IsPaused` | property |
| `MustFadeOutCurrentNotification` | `public bool MustFadeOutCurrentNotification` | property |
| `NotificationFadeOutDelayInSeconds` | `public float NotificationFadeOutDelayInSeconds` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiSelectionElementsWidget](../MultiSelectionElementsWidget)
- [same namespace PropertyBasedTooltipWidget](../PropertyBasedTooltipWidget)
- [same namespace TooltipPropertyWidget](../TooltipPropertyWidget)
