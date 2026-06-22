<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitmentCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitmentCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RecruitmentCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |


## 主要方法

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetMercenaryData

```csharp
public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)
```

### HourlyTickParty

```csharp
public void HourlyTickParty(MobileParty mobileParty)
```

### OnBeforeSettlementEntered

```csharp
public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### ChangeMercenaryType

```csharp
public void ChangeMercenaryType(CharacterObject troopType, int number)
```

### ChangeMercenaryCount

```csharp
public void ChangeMercenaryCount(int difference)
```

### HasAvailableMercenary

```csharp
public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)