---
title: "CampaignMissionManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignMissionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignMissionManager : ICampaignMissionManager`
**Base:** `ICampaignMissionManager`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/CampaignMissionManager.cs`

## 概述

`CampaignMissionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignMissionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenArenaDuelMission
`public IMission OpenArenaDuelMission(string scene, Location location, CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBOthSidesWithHorse, Action<CharacterObject> onDuelEndAction, float customAgentHealth)`

**用途 / Purpose:** 处理 `open arena duel mission` 相关逻辑。

### OpenDisguiseMission
`public IMission OpenDisguiseMission(string scene, bool willSetUpContact, string sceneLevels, Location fromLocation)`

**用途 / Purpose:** 处理 `open disguise mission` 相关逻辑。

### OpenNavalRaidMission
`public IMission OpenNavalRaidMission(TroopRoster navalRaidTroops, BattleSideEnum navalSide, List<Ship> allShips)`

**用途 / Purpose:** 处理 `open naval raid mission` 相关逻辑。

### OpenNavalBattleMission
`public IMission OpenNavalBattleMission(MissionInitializerRecord rec)`

**用途 / Purpose:** 处理 `open naval battle mission` 相关逻辑。

### OpenNavalSetPieceBattleMission
`public IMission OpenNavalSetPieceBattleMission(MissionInitializerRecord rec, MBList<IShipOrigin> playerShips, MBList<IShipOrigin> playerAllyShips, MBList<IShipOrigin> enemyShips)`

**用途 / Purpose:** 处理 `open naval set piece battle mission` 相关逻辑。

## 使用示例

```csharp
var manager = CampaignMissionManager.Current;
```

## 参见

- [完整类目录](../catalog)