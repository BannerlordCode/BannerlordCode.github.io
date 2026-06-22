<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravansCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravansCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CaravansCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior { get; }` |
| `ProfitRate` | `public float ProfitRate { get; }` |
| `Size` | `public int Size { get; }` |


## 主要方法

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### OnSessionLaunched

```csharp
public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)
```

### SpawnCaravan

```csharp
public void SpawnCaravan(Hero hero, bool initialSpawn = false)
```

### DailyTick

```csharp
public void DailyTick()
```

### HourlyTickParty

```csharp
public void HourlyTickParty(MobileParty mobileParty)
```

### OnSettlementEntered

```csharp
public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### OnSettlementLeft

```csharp
public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)
```

### OnSellAction

```csharp
public void OnSellAction(Settlement soldSettlement, int sellPrice)
```

### Reset

```csharp
public void Reset()
```

### CreateNewLog

```csharp
public CaravansCampaignBehavior.TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)
```

### ReleaseLog

```csharp
public void ReleaseLog(CaravansCampaignBehavior.TradeActionLog log)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)