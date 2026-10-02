---
title: "PartyNameplateWidget"
description: "PartyNameplateWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 35 exposed members (4 methods, 27 properties, 2 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs."
---
# PartyNameplateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PartyNameplateWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs`

## Overview

PartyNameplateWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PartyNameplateWidget → Widget. It exposes 35 public/protected members: 4 methods, 27 properties, 2 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyNameplateWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate) the module directory; inheritance chain PartyNameplateWidget → Widget. The surface is property-led (properties 27/35, methods 4/35), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/PartyNameplateWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyNameplateWidget` | `public PartyNameplateWidget(UIContext context) : base(context)` | constructor |
| `_animSpeedModifier` | `protected float _animSpeedModifier` | property |
| `_armyFontSizeOffset` | `protected int _armyFontSizeOffset` | property |
| `HeadGroupWidget` | `public Widget HeadGroupWidget` | property |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `UpdateNameplatesVisibility` | `protected virtual void UpdateNameplatesVisibility(float dt)` | method |
| `UpdateNameplatesScreenPosition` | `protected virtual void UpdateNameplatesScreenPosition()` | method |
| `IsPositionOutsideScreen` | `protected bool IsPositionOutsideScreen()` | method |
| `NameplateLayoutListPanel` | `public ListPanel NameplateLayoutListPanel` | property |
| `PartyBannerWidget` | `public MaskedTextureWidget PartyBannerWidget` | property |
| `TrackerFrame` | `public Widget TrackerFrame` | property |
| `Position` | `public Vec2 Position` | property |
| `HeadPosition` | `public Vec2 HeadPosition` | property |
| `ShouldShowFullName` | `public bool ShouldShowFullName` | property |
| `CanParley` | `public bool CanParley` | property |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial` | property |
| `IsInArmy` | `public bool IsInArmy` | property |
| `IsInSettlement` | `public bool IsInSettlement` | property |
| `IsArmy` | `public bool IsArmy` | property |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | property |
| `IsInside` | `public bool IsInside` | property |
| `IsHigh` | `public bool IsHigh` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `IsDisorganized` | `public bool IsDisorganized` | property |
| `NameplateTextWidget` | `public TextWidget NameplateTextWidget` | property |
| `NameplateExtraInfoTextWidget` | `public TextWidget NameplateExtraInfoTextWidget` | property |
| `NameplateFullNameTextWidget` | `public TextWidget NameplateFullNameTextWidget` | property |
| `SpeedTextWidget` | `public TextWidget SpeedTextWidget` | property |
| `SpeedIconWidget` | `public Widget SpeedIconWidget` | property |
| `ParleyIconWidget` | `public Widget ParleyIconWidget` | property |
| `DisorganizedWidget` | `public Widget DisorganizedWidget` | property |
| `_isFirstFrame` | `protected bool _isFirstFrame` | field |
| `_initialDelayAmount` | `protected float _initialDelayAmount` | field |
| `TutorialAnimState` | `public enum TutorialAnimState` | property |
| `TutorialAnimState` | `public enum TutorialAnimState` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyPlayerNameplateWidget](../PartyPlayerNameplateWidget)
- [same namespace SettlementNameplateEventVisualBrushWidget](../SettlementNameplateEventVisualBrushWidget)
- [same namespace SettlementNameplateItemWidget](../SettlementNameplateItemWidget)
- [same namespace SettlementNameplateManagerWidget](../SettlementNameplateManagerWidget)
