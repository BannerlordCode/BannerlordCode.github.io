---
title: "MultiplayerClassLoadoutItemTabControllerButtonWidget"
description: "MultiplayerClassLoadoutItemTabControllerButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs."
---
# MultiplayerClassLoadoutItemTabControllerButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerClassLoadoutItemTabControllerButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs`

## Overview

MultiplayerClassLoadoutItemTabControllerButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is MultiplayerClassLoadoutItemTabControllerButtonWidget → ButtonWidget. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerClassLoadoutItemTabControllerButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout) the module directory; inheritance chain MultiplayerClassLoadoutItemTabControllerButtonWidget → ButtonWidget. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerClassLoadoutItemTabControllerButtonWidget` | `public MultiplayerClassLoadoutItemTabControllerButtonWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ItemTabList` | `public MultiplayerClassLoadoutItemTabListPanel ItemTabList` | property |
| `CursorWidget` | `public Widget CursorWidget` | property |
| `AnimationSpeed` | `public float AnimationSpeed` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClassLoadoutAlternativeUsageItemTabButtonWidget](../ClassLoadoutAlternativeUsageItemTabButtonWidget)
- [same namespace ClassLoadoutTroopTupleCultureColorBrushWidget](../ClassLoadoutTroopTupleCultureColorBrushWidget)
- [same namespace MultiplayerClassLoadoutItemTabListPanel](../MultiplayerClassLoadoutItemTabListPanel)
- [same namespace MultiplayerClassLoadoutTroopCardBrushWidget](../MultiplayerClassLoadoutTroopCardBrushWidget)
