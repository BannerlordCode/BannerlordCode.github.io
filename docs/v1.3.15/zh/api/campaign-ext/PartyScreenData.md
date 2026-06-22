<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyScreenData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable`
**Base:** `IEnumerable<ValueTuple<TroopRosterElement`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenData.cs`

## 概述

`PartyScreenData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `RightParty` | `public PartyBase RightParty { get; }` |
| `LeftParty` | `public PartyBase LeftParty { get; }` |
| `RightPartyLeaderHero` | `public Hero RightPartyLeaderHero { get; }` |
| `LeftPartyLeaderHero` | `public Hero LeftPartyLeaderHero { get; }` |

## 主要方法

### GetHashCode
```csharp
public override int GetHashCode()
```

### InitializeCopyFrom
```csharp
public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)
```

### CopyFromPartyAndRoster
```csharp
public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)
```

### CopyFromScreenData
```csharp
public void CopyFromScreenData(PartyScreenData data)
```

### BindRostersFrom
```csharp
public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)
```

### ResetUsing
```csharp
public void ResetUsing(PartyScreenData partyScreenData)
```

### IsThereAnyTroopTradeDifferenceBetween
```csharp
public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)
```

### GetTroopTradeDifferencesFromTo
```csharp
public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)
```

### GetEnumerator
```csharp
public IEnumerator<ValueTuple<TroopRosterElement, bool>> GetEnumerator()
```

### Equals
```csharp
public override bool Equals(object obj)
```

## 使用示例

```csharp
// PartyScreenData (Data) 的典型用法
new PartyScreenData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)