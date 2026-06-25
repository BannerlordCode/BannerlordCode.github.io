---
title: "BanditSpawnCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BanditSpawnCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BanditSpawnCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditSpawnCampaignBehavior.cs`

## 概述

`BanditSpawnCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### InitializeInitialHideouts
`public void InitializeInitialHideouts()`

**用途 / Purpose:** 初始化 `initial hideouts` 的状态、资源或绑定。

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `settlement entered` 事件触发时调用此方法。

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### AddBanditToHideout
`public MobileParty AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `bandit to hideout`。

### SpawnBanditsAroundHideoutAtNewGame
`public void SpawnBanditsAroundHideoutAtNewGame()`

**用途 / Purpose:** 处理 `spawn bandits around hideout at new game` 相关逻辑。

### SpawnLootersAtNewGame
`public void SpawnLootersAtNewGame()`

**用途 / Purpose:** 处理 `spawn looters at new game` 相关逻辑。

## 使用示例

```csharp
var value = new BanditSpawnCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)