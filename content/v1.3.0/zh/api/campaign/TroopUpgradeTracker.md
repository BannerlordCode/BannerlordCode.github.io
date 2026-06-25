---
title: "TroopUpgradeTracker"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopUpgradeTracker`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopUpgradeTracker

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopUpgradeTracker`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs`

## 概述

`TroopUpgradeTracker` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddParty
`public void AddParty(MapEventParty mapEventParty)`

**用途 / Purpose:** 向当前集合/状态中添加 `party`。

### RemoveParty
`public void RemoveParty(MapEventParty mapEventParty)`

**用途 / Purpose:** 从当前集合/状态中移除 `party`。

### AddTrackedTroop
`public void AddTrackedTroop(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 向当前集合/状态中添加 `tracked troop`。

### CheckSkillUpgrades
`public IEnumerable<SkillObject> CheckSkillUpgrades(Hero hero)`

**用途 / Purpose:** 处理 `check skill upgrades` 相关逻辑。

### CheckUpgradedCount
`public int CheckUpgradedCount(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 处理 `check upgraded count` 相关逻辑。

## 使用示例

```csharp
var value = new TroopUpgradeTracker();
value.AddParty(mapEventParty);
```

## 参见

- [完整类目录](../catalog)