---
title: "ClanInfo"
description: "ClanInfo: a public class in TaleWorlds.MountAndBlade.Diamond; 10 exposed members (1 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ClanInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ClanInfo lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs. It is a public class; the inheritance chain is ClanInfo. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ClanInfo. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanId` | `public Guid ClanId` | property |
| `Name` | `public string Name` | property |
| `Tag` | `public string Tag` | property |
| `Faction` | `public string Faction` | property |
| `Sigil` | `public string Sigil` | property |
| `InformationText` | `public string InformationText` | property |
| `ClanPlayer[]Players` | `public ClanPlayer[]Players` | property |
| `ClanAnnouncement[]Announcements` | `public ClanAnnouncement[]Announcements` | property |
| `ClanInfo` | `public ClanInfo(Guid clanId, string name, string tag, string faction, string sigil, string information, ClanPlayer[]players, ClanAnnouncement[]announcements)` | constructor |
| `CreateUnavailableClanInfo` | `public static ClanInfo CreateUnavailableClanInfo()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
