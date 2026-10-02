---
title: "SingleplayerPersonalKillFeedItemWidget"
description: "SingleplayerPersonalKillFeedItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal, inheriting Widget; 19 exposed members (2 methods, 16 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SingleplayerPersonalKillFeedItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SingleplayerPersonalKillFeedItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SingleplayerPersonalKillFeedItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is SingleplayerPersonalKillFeedItemWidget → Widget → PropertyOwnerObject. It exposes 19 public/protected members: 2 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SingleplayerPersonalKillFeedItemWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal`, inheritance chain SingleplayerPersonalKillFeedItemWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 16/19, methods 2/19), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedItemWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NotificationTypeIconWidget` | `public Widget NotificationTypeIconWidget` | property |
| `NotificationBackgroundWidget` | `public Widget NotificationBackgroundWidget` | property |
| `AmountTextWidget` | `public TextWidget AmountTextWidget` | property |
| `MessageTextWidget` | `public RichTextWidget MessageTextWidget` | property |
| `FadeInTime` | `public float FadeInTime` | property |
| `StayTime` | `public float StayTime` | property |
| `FadeOutTime` | `public float FadeOutTime` | property |
| `TimeSinceCreation` | `public float TimeSinceCreation` | property |
| `SingleplayerPersonalKillFeedItemWidget` | `public SingleplayerPersonalKillFeedItemWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetSpeedModifier` | `public void SetSpeedModifier(float newSpeed)` | method |
| `IsDamage` | `public bool IsDamage` | property |
| `Amount` | `public int Amount` | property |
| `ItemType` | `public int ItemType` | property |
| `Message` | `public string Message` | property |
| `TypeID` | `public string TypeID` | property |
| `TroopTypeIconBrush` | `public Brush TroopTypeIconBrush` | property |
| `TroopTypeWidget` | `public Widget TroopTypeWidget` | property |
| `IsPaused` | `public bool IsPaused` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SingleplayerPersonalKillFeedWidget](../SingleplayerPersonalKillFeedWidget/)
