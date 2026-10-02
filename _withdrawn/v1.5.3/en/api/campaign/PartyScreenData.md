---
title: "PartyScreenData"
description: "Auto-generated class reference for PartyScreenData."
---
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement,bool>>,IEnumerable `
**Base:** IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable
**Source:** TaleWorlds.CampaignSystem/Party/PartyScreenData.cs

## Overview

Auto-generated stub for `PartyScreenData`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetHashCode
`public override int GetHashCode()`

### InitializeCopyFrom
`public void InitializeCopyFrom(PartyBase rightParty,PartyBase leftParty)`

### CopyFromPartyAndRoster
`public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster,TroopRoster rightPartyPrisonerRoster,TroopRoster leftPartyMemberRoster,TroopRoster leftPartyPrisonerRoster,PartyBase rightParty)`

### CopyFromScreenData
`public void CopyFromScreenData(PartyScreenData data)`

### BindRostersFrom
`public void BindRostersFrom(TroopRoster rightPartyMemberRoster,TroopRoster rightPartyPrisonerRoster,TroopRoster leftPartyMemberRoster,TroopRoster leftPartyPrisonerRoster,PartyBase rightParty,PartyBase leftParty)`

### ResetUsing
`public void ResetUsing(PartyScreenData partyScreenData)`

### IsThereAnyTroopTradeDifferenceBetween
`public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)`

### GetTroopTradeDifferencesFromTo
`public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData,PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)`

### GetEnumerator
`public IEnumerator<ValueTuple<TroopRosterElement,bool>> GetEnumerator()`

### Equals
`public override bool Equals(object obj)`

## See Also

- [Section index](../)
