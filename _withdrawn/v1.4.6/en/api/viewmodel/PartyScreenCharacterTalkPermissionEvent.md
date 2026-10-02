---
title: "PartyScreenCharacterTalkPermissionEvent"
description: "PartyScreenCharacterTalkPermissionEvent: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Events/PartyScreenCharacterTalkPermissionEvent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyScreenCharacterTalkPermissionEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyScreenCharacterTalkPermissionEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Events/PartyScreenCharacterTalkPermissionEvent.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PartyScreenCharacterTalkPermissionEvent lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Events/PartyScreenCharacterTalkPermissionEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is PartyScreenCharacterTalkPermissionEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyScreenCharacterTalkPermissionEvent lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events`, inheritance chain PartyScreenCharacterTalkPermissionEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Events/PartyScreenCharacterTalkPermissionEvent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TextObject>IsTalkAvailable` | `public Action<bool, TextObject>IsTalkAvailable` | property |
| `PartyScreenCharacterTalkPermissionEvent` | `public PartyScreenCharacterTalkPermissionEvent(Hero heroToTalkTo, Action<bool, TextObject>isTalkAvailable)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EventBase](../../core-extra/EventBase/)
- [same namespace CrimeValueInspectedInSettlementOverlayEvent](../CrimeValueInspectedInSettlementOverlayEvent/)
- [same namespace SettlementOverlayLeaveCharacterPermissionEvent](../SettlementOverlayLeaveCharacterPermissionEvent/)
- [same namespace SettlementOverlayTalkPermissionEvent](../SettlementOverlayTalkPermissionEvent/)
- [same namespace SettlementOverylayQuickTalkPermissionEvent](../SettlementOverylayQuickTalkPermissionEvent/)
