---
title: "TroopUpgradeTracker"
description: "TroopUpgradeTracker 的自动生成类参考。"
---
# TroopUpgradeTracker

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopUpgradeTracker`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/TroopUpgradeTracker.cs`

## 概述

`TroopUpgradeTracker` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddParty
`public void AddParty(MapEventParty mapEventParty)`

**用途 / Purpose:** 将 「party」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopUpgradeTracker 实例
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.AddParty(mapEventParty);
```

### RemoveParty
`public void RemoveParty(MapEventParty mapEventParty)`

**用途 / Purpose:** 从当前容器或状态中移除 「party」。

```csharp
// 先通过子系统 API 拿到 TroopUpgradeTracker 实例
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.RemoveParty(mapEventParty);
```

### AddTrackedTroop
`public void AddTrackedTroop(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 将 「tracked troop」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopUpgradeTracker 实例
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.AddTrackedTroop(party, character);
```

### CheckSkillUpgrades
`public IEnumerable<SkillObject> CheckSkillUpgrades(Hero hero)`

**用途 / Purpose:** 检查「skill upgrades」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TroopUpgradeTracker 实例
TroopUpgradeTracker troopUpgradeTracker = ...;
var result = troopUpgradeTracker.CheckSkillUpgrades(hero);
```

### CheckUpgradedCount
`public int CheckUpgradedCount(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 检查「upgraded count」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TroopUpgradeTracker 实例
TroopUpgradeTracker troopUpgradeTracker = ...;
var result = troopUpgradeTracker.CheckUpgradedCount(party, character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TroopUpgradeTracker troopUpgradeTracker = ...;
troopUpgradeTracker.AddParty(mapEventParty);
```

## 参见

- [本区域目录](../)