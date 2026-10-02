---
title: "IChatNotification"
description: "IChatNotification: a public interface in TaleWorlds.CampaignSystem; 3 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/LogEntries/IChatNotification.cs."
---
# IChatNotification

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IChatNotification`
**File:** `TaleWorlds.CampaignSystem/LogEntries/IChatNotification.cs`

## Overview

IChatNotification lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/LogEntries/IChatNotification.cs. It is a public interface; the inheritance chain is IChatNotification. It exposes 3 public/protected members: 1 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IChatNotification is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.LogEntries) the module directory; inheritance chain IChatNotification. The surface is property-led (properties 2/3, methods 1/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/LogEntries/IChatNotification.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsVisibleNotification` | `bool IsVisibleNotification` | property |
| `NotificationType` | `ChatNotificationType NotificationType` | property |
| `GetNotificationText` | `TextObject GetNotificationText();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCreationLogEntry](../ArmyCreationLogEntry)
- [same namespace ArmyDispersionLogEntry](../ArmyDispersionLogEntry)
- [same namespace BattleStartedLogEntry](../BattleStartedLogEntry)
- [same namespace BesiegeSettlementLogEntry](../BesiegeSettlementLogEntry)
