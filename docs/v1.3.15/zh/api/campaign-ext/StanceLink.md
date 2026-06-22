<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StanceLink`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StanceLink

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`StanceLink` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsNeutral` | `public bool IsNeutral { get; }` |
| `IsAtWar` | `public bool IsAtWar { get; set; }` |
| `Faction1` | `public IFaction Faction1 { get; }` |
| `Faction2` | `public IFaction Faction2 { get; }` |
| `WarStartDate` | `public CampaignTime WarStartDate { get; }` |
| `PeaceDeclarationDate` | `public CampaignTime PeaceDeclarationDate { get; }` |
| `TroopCasualties1` | `public int TroopCasualties1 { get; set; }` |
| `TroopCasualties2` | `public int TroopCasualties2 { get; set; }` |
| `ShipCasualties1` | `public int ShipCasualties1 { get; set; }` |
| `ShipCasualties2` | `public int ShipCasualties2 { get; set; }` |
| `SuccessfulSieges1` | `public int SuccessfulSieges1 { get; set; }` |
| `SuccessfulSieges2` | `public int SuccessfulSieges2 { get; set; }` |
| `SuccessfulRaids1` | `public int SuccessfulRaids1 { get; set; }` |
| `SuccessfulRaids2` | `public int SuccessfulRaids2 { get; set; }` |
| `TotalTributePaidFrom1To2` | `public int TotalTributePaidFrom1To2 { get; set; }` |
| `TotalTributePaidFrom2To1` | `public int TotalTributePaidFrom2To1 { get; set; }` |
| `DailyTributeInstallments` | `public int DailyTributeInstallments { get; set; }` |
| `SuccessfulTownSieges1` | `public int SuccessfulTownSieges1 { get; set; }` |
| `SuccessfulTownSieges2` | `public int SuccessfulTownSieges2 { get; set; }` |


## 主要方法

### GetCasualties

```csharp
public int GetCasualties(IFaction faction)
```

### GetSuccessfulSieges

```csharp
public int GetSuccessfulSieges(IFaction faction)
```

### GetSuccessfulRaids

```csharp
public int GetSuccessfulRaids(IFaction faction)
```

### GetTotalTributePaid

```csharp
public int GetTotalTributePaid(IFaction faction)
```

### GetSuccessfulTownSieges

```csharp
public int GetSuccessfulTownSieges(IFaction faction)
```

### GetDailyTributeToPay

```csharp
public int GetDailyTributeToPay(IFaction faction)
```

### SetDailyTributePaid

```csharp
public void SetDailyTributePaid(IFaction payer, int dailyTribute, int dailyTributeInstallments)
```

### GetRemainingTributePaymentCount

```csharp
public int GetRemainingTributePaymentCount()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)