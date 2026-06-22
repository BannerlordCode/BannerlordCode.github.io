<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BanditSpawnCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditSpawnCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BanditSpawnCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### InitializeInitialHideouts

```csharp
public void InitializeInitialHideouts()
```

### OnSettlementEntered

```csharp
public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### DailyTick

```csharp
public void DailyTick()
```

### AddBanditToHideout

```csharp
public MobileParty AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)
```

### SpawnBanditsAroundHideoutAtNewGame

```csharp
public void SpawnBanditsAroundHideoutAtNewGame()
```

### SpawnLootersAtNewGame

```csharp
public void SpawnLootersAtNewGame()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)