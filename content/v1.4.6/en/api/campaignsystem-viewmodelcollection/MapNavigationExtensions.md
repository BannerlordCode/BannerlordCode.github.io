---
title: "MapNavigationExtensions"
description: "MapNavigationExtensions: a public class in TaleWorlds.CampaignSystem.ViewModelCollection; 24 exposed members (24 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs."
---
# MapNavigationExtensions

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public static class MapNavigationExtensions`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs`

## Overview

MapNavigationExtensions lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs. It is a public class; the inheritance chain is MapNavigationExtensions. It exposes 24 public/protected members: 24 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationExtensions is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem) the module directory; inheritance chain MapNavigationExtensions. The surface is method-led (methods 24/24, properties 0/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/MapNavigationExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPermission` | `public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)` | method |
| `IsActive` | `public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)` | method |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler)` | method |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler, QuestBase quest)` | method |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler, IssueBase issue)` | method |
| `OpenQuests` | `public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)` | method |
| `OpenInventory` | `public static void OpenInventory(this INavigationHandler handler)` | method |
| `OpenParty` | `public static void OpenParty(this INavigationHandler handler)` | method |
| `OpenCharacterDeveloper` | `public static void OpenCharacterDeveloper(this INavigationHandler handler)` | method |
| `OpenCharacterDeveloper` | `public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, Army army)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, Clan clan)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, IFaction faction)` | method |
| `OpenKingdom` | `public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)` | method |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler)` | method |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Hero hero)` | method |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, PartyBase party)` | method |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Settlement settlement)` | method |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Workshop workshop)` | method |
| `OpenClan` | `public static void OpenClan(this INavigationHandler handler, Alley alley)` | method |
| `OpenEscapeMenu` | `public static void OpenEscapeMenu(this INavigationHandler handler)` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapNavigationItemType](../MapNavigationItemType)
