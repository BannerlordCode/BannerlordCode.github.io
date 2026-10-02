---
title: "LocationEncounter"
description: "LocationEncounter: a public class in TaleWorlds.CampaignSystem; 13 exposed members (10 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs."
---
# LocationEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LocationEncounter`
**File:** `TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs`

## Overview

LocationEncounter lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs. It is a public class; the inheritance chain is LocationEncounter. It exposes 13 public/protected members: 10 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocationEncounter is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Encounters) the module directory; inheritance chain LocationEncounter. The surface is method-led (methods 10/13, properties 2/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement` | property |
| `List` | `public List<AccompanyingCharacter>CharactersAccompanyingPlayer` | property |
| `LocationEncounter` | `protected LocationEncounter(Settlement settlement)` | constructor |
| `AddAccompanyingCharacter` | `public void AddAccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowing = false)` | method |
| `GetAccompanyingCharacter` | `public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)` | method |
| `GetAccompanyingCharacter` | `public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)` | method |
| `RemoveAccompanyingCharacter` | `public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)` | method |
| `RemoveAccompanyingCharacter` | `public void RemoveAccompanyingCharacter(Hero hero)` | method |
| `RemoveAllAccompanyingCharacters` | `public void RemoveAllAccompanyingCharacters()` | method |
| `OnCharacterLocationChanged` | `public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)` | method |
| `IsWorkshopLocation` | `public virtual bool IsWorkshopLocation(Location location)` | method |
| `IsTavern` | `public virtual bool IsTavern(Location location)` | method |
| `CreateAndOpenMissionController` | `public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignBattleResult](../CampaignBattleResult)
- [same namespace CastleEncounter](../CastleEncounter)
- [same namespace HideoutEncounter](../HideoutEncounter)
- [same namespace PlayerEncounter](../PlayerEncounter)
