---
title: "NameplateNotificationListPanel"
description: "NameplateNotificationListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/Notifications/NameplateNotificationListPanel.cs."
---
# NameplateNotificationListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NameplateNotificationListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/Notifications/NameplateNotificationListPanel.cs`

## Overview

NameplateNotificationListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/Notifications/NameplateNotificationListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is NameplateNotificationListPanel → ListPanel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NameplateNotificationListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications) the module directory; inheritance chain NameplateNotificationListPanel → ListPanel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/Notifications/NameplateNotificationListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NameplateNotificationListPanel` | `public NameplateNotificationListPanel(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `RelationVisualWidget` | `public Widget RelationVisualWidget` | property |
| `RelationType` | `public int RelationType` | property |
| `StayAmount` | `public float StayAmount` | property |
| `FadeTime` | `public float FadeTime` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
