<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HideoutCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### OnNewGameCreated

```csharp
public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)
```

### OnGameLoaded

```csharp
public void OnGameLoaded(CampaignGameStarter campaignGameStarter)
```

### HourlyTickSettlement

```csharp
public void HourlyTickSettlement(Settlement settlement)
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetInitialHideoutPopulation

```csharp
public int GetInitialHideoutPopulation()
```

### hideout_wait_menu_on_condition

```csharp
public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)
```

### hideout_wait_menu_on_tick

```csharp
public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)
```

### hideout_wait_menu_on_consequence

```csharp
public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)