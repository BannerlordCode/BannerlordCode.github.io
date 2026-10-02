---
title: "ServerStatus"
description: "ServerStatus: a public class in TaleWorlds.MountAndBlade.Diamond; 10 exposed members (0 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServerStatus

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ServerStatus`
**File:** `TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ServerStatus lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs. It is a public class; the inheritance chain is ServerStatus. It exposes 10 public/protected members: 8 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ServerStatus lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ServerStatus. The surface is property-led (properties 8/10, methods 0/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled` | property |
| `IsCustomBattleEnabled` | `public bool IsCustomBattleEnabled` | property |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled` | property |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled` | property |
| `IsTestRegionEnabled` | `public bool IsTestRegionEnabled` | property |
| `Announcement` | `public Announcement Announcement` | property |
| `ServerNotification[]ServerNotifications` | `public ServerNotification[]ServerNotifications` | property |
| `FriendListUpdatePeriod` | `public int FriendListUpdatePeriod` | property |
| `ServerStatus` | `public ServerStatus()` | constructor |
| `ServerStatus` | `public ServerStatus(bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPlayerBasedCustomBattleEnabled, bool isPremadeGameEnabled, bool isTestRegionEnabled, Announcement announcement, ServerNotification[]serverNotifications, int friendListUpdatePeriod)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
