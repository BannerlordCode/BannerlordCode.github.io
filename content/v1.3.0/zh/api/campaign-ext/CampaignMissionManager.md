---
title: "CampaignMissionManager"
description: "CampaignMissionManager 的自动生成类参考。"
---
# CampaignMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMissionManager : CampaignMission.ICampaignMissionManager`
**Base:** `CampaignMission.ICampaignMissionManager`
**File:** `SandBox/CampaignMissionManager.cs`

## 概述

`CampaignMissionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignMissionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenArenaDuelMission
`public IMission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEndAction, float customAgentHealth)`

**用途 / Purpose:** 打开「arena duel mission」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CampaignMissionManager 实例
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenArenaDuelMission("example", location, duelCharacter, false, false, onDuelEndAction, 0);
```

### OpenDisguiseMission
`public IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**用途 / Purpose:** 打开「disguise mission」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CampaignMissionManager 实例
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenDisguiseMission("example", false, "example", fromLocation);
```

### OpenNavalBattleMission
`public IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** 打开「naval battle mission」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CampaignMissionManager 实例
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenNavalBattleMission(rec);
```

### OpenNavalSetPieceBattleMission
`public IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**用途 / Purpose:** 打开「naval set piece battle mission」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 CampaignMissionManager 实例
CampaignMissionManager campaignMissionManager = ...;
var result = campaignMissionManager.OpenNavalSetPieceBattleMission(rec, playerShips, playerAllyShips, enemyShips);
```

## 使用示例

```csharp
var manager = CampaignMissionManager.Current;
```

## 参见

- [本区域目录](../)