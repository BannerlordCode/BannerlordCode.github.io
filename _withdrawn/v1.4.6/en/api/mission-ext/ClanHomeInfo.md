---
title: "ClanHomeInfo"
description: "ClanHomeInfo: a public class in TaleWorlds.MountAndBlade.Diamond; 11 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanHomeInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ClanHomeInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ClanHomeInfo lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs. It is a public class; the inheritance chain is ClanHomeInfo. It exposes 11 public/protected members: 4 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanHomeInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ClanHomeInfo. The surface is property-led (properties 6/11, methods 4/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ClanHomeInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsInClan` | `public bool IsInClan` | property |
| `CanCreateClan` | `public bool CanCreateClan` | property |
| `ClanInfo` | `public ClanInfo ClanInfo` | property |
| `NotEnoughPlayersInfo` | `public NotEnoughPlayersInfo NotEnoughPlayersInfo` | property |
| `PlayerNotEligibleInfo[]PlayerNotEligibleInfos` | `public PlayerNotEligibleInfo[]PlayerNotEligibleInfos` | property |
| `ClanPlayerInfo[]ClanPlayerInfos` | `public ClanPlayerInfo[]ClanPlayerInfos` | property |
| `ClanHomeInfo` | `public ClanHomeInfo(bool isInClan, bool canCreateClan, ClanInfo clanInfo, NotEnoughPlayersInfo notEnoughPlayersInfo, PlayerNotEligibleInfo[]playerNotEligibleInfos, ClanPlayerInfo[]clanPlayerInfos)` | constructor |
| `CreateInClanInfo` | `public static ClanHomeInfo CreateInClanInfo(ClanInfo clanInfo, ClanPlayerInfo[]clanPlayerInfos)` | method |
| `CreateCanCreateClanInfo` | `public static ClanHomeInfo CreateCanCreateClanInfo()` | method |
| `CreateCantCreateClanInfo` | `public static ClanHomeInfo CreateCantCreateClanInfo(NotEnoughPlayersInfo notEnoughPlayersInfo, PlayerNotEligibleInfo[]playerNotEligibleInfos)` | method |
| `CreateInvalidStateClanInfo` | `public static ClanHomeInfo CreateInvalidStateClanInfo()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
