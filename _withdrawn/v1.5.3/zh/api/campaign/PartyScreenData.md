---
title: "PartyScreenData"
description: "PartyScreenData 的自动生成类参考。"
---
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement,bool>>,IEnumerable `
**Base:** IEnumerable<ValueTuple<TroopRosterElement,bool>>,IEnumerable
**Source:** TaleWorlds.CampaignSystem/Party/PartyScreenData.cs

## 概述

`PartyScreenData` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Party/PartyScreenData.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetHashCode
`public override int GetHashCode() `

### InitializeCopyFrom
`public void InitializeCopyFrom(PartyBase rightParty,PartyBase leftParty) `

### CopyFromPartyAndRoster
`public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster,TroopRoster rightPartyPrisonerRoster,TroopRoster leftPartyMemberRoster,TroopRoster leftPartyPrisonerRoster,PartyBase rightParty) `

### CopyFromScreenData
`public void CopyFromScreenData(PartyScreenData data) `

### BindRostersFrom
`public void BindRostersFrom(TroopRoster rightPartyMemberRoster,TroopRoster rightPartyPrisonerRoster,TroopRoster leftPartyMemberRoster,TroopRoster leftPartyPrisonerRoster,PartyBase rightParty,PartyBase leftParty) `

### ResetUsing
`public void ResetUsing(PartyScreenData partyScreenData) `

### IsThereAnyTroopTradeDifferenceBetween
`public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other) `

### GetTroopTradeDifferencesFromTo
`public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData,PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None) `

### GetEnumerator
`public IEnumerator<ValueTuple<TroopRosterElement,bool>> GetEnumerator() `

### Equals
`public override bool Equals(object obj) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
