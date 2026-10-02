---
title: "PartyScreenData"
description: "PartyScreenData: a public class in TaleWorlds.CampaignSystem, inheriting IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable; 17 exposed members (12 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Party/PartyScreenData.cs."
---
# PartyScreenData

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenData.cs`

## Overview

PartyScreenData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Party/PartyScreenData.cs. It is a public class, implementing/inheriting IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable; the inheritance chain is PartyScreenData → IEnumerable. It exposes 17 public/protected members: 12 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyScreenData is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Party) the module directory; inheritance chain PartyScreenData → IEnumerable. The surface is method-led (methods 12/17, properties 4/17), so it mostly exposes operations. IEnumerable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Party/PartyScreenData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RightParty` | `public PartyBase RightParty` | property |
| `LeftParty` | `public PartyBase LeftParty` | property |
| `RightPartyLeaderHero` | `public Hero RightPartyLeaderHero` | property |
| `LeftPartyLeaderHero` | `public Hero LeftPartyLeaderHero` | property |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `PartyScreenData` | `public PartyScreenData()` | constructor |
| `InitializeCopyFrom` | `public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)` | method |
| `CopyFromPartyAndRoster` | `public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)` | method |
| `CopyFromScreenData` | `public void CopyFromScreenData(PartyScreenData data)` | method |
| `BindRostersFrom` | `public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)` | method |
| `ResetUsing` | `public void ResetUsing(PartyScreenData partyScreenData)` | method |
| `IsThereAnyTroopTradeDifferenceBetween` | `public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)` | method |
| `List` | `public List<TroopTradeDifference>GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)` | method |
| `bool>>GetEnumerator` | `public IEnumerator<ValueTuple<TroopRosterElement, bool>>GetEnumerator()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AiBehavior](../AiBehavior)
- [same namespace CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [same namespace IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [same namespace MobileParty](../MobileParty)
