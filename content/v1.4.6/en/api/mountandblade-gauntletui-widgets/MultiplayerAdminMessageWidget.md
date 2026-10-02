---
title: "MultiplayerAdminMessageWidget"
description: "MultiplayerAdminMessageWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageWidget.cs."
---
# MultiplayerAdminMessageWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerAdminMessageWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageWidget.cs`

## Overview

MultiplayerAdminMessageWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerAdminMessageWidget → Widget. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerAdminMessageWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage) the module directory; inheritance chain MultiplayerAdminMessageWidget → Widget. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MessageTextWidget` | `public TextWidget MessageTextWidget` | property |
| `MessageOnScreenStayTime` | `public float MessageOnScreenStayTime` | property |
| `MessageFadeInTime` | `public float MessageFadeInTime` | property |
| `MessageFadeOutTime` | `public float MessageFadeOutTime` | property |
| `MultiplayerAdminMessageWidget` | `public MultiplayerAdminMessageWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerAdminMessageItemWidget](../MultiplayerAdminMessageItemWidget)
