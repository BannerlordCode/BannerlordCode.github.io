---
title: "LeaveKingdomPermissionEvent"
description: "LeaveKingdomPermissionEvent: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/LeaveKingdomPermissionEvent.cs."
---
# LeaveKingdomPermissionEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class LeaveKingdomPermissionEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/LeaveKingdomPermissionEvent.cs`

## Overview

LeaveKingdomPermissionEvent lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/LeaveKingdomPermissionEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is LeaveKingdomPermissionEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LeaveKingdomPermissionEvent is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement) the module directory; inheritance chain LeaveKingdomPermissionEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/LeaveKingdomPermissionEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextObject>IsLeaveKingdomPossbile` | `public Action<bool, TextObject>IsLeaveKingdomPossbile` | property |
| `LeaveKingdomPermissionEvent` | `public LeaveKingdomPermissionEvent(Action<bool, TextObject>isLeaveKingdomPossbile)` | constructor |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomCategoryVM](../KingdomCategoryVM)
- [same namespace KingdomGiftFiefPopupVM](../KingdomGiftFiefPopupVM)
- [same namespace KingdomItemVM](../KingdomItemVM)
- [same namespace KingdomManagementVM](../KingdomManagementVM)
