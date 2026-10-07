---
title: "CustomBattleHelper"
description: "自定义战斗的静态工具类：把界面参数打包成 CustomBattleData、按兵种构成计算人数、生成双方战斗单位、归一化攻城器械类型，并最终调用 BannerlordMissions 开战。"
---
# CustomBattleHelper

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `public static class CustomBattleHelper`
**基类：** 无（静态类）
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleHelper.cs`（声明见第 12 行）

## 概述
`CustomBattleHelper` 是自定义战斗子系统的静态工具类，承担「从配置到开战」的全部幕后工作：把界面参数打包成 `CustomBattleData`（`PrepareBattleData`）、按兵种构成计算部队人数（`GetTroopCounts`）、生成双方战斗单位 `CustomBattleCombatant`（`GetCustomBattleParties`）、把攻城器械类型归一化（`GetSiegeWeaponType`）、把游戏类型字符串映射为索引（`GetIndexFromGameTypeStringId`），以及最终调用 `BannerlordMissions` 开启任务（`StartGame`）。它是 View 层与任务系统之间的翻译层。

## 心智模型
把它想成自定义战斗的「总装车间」：界面（View）把玩家勾选的零件送进来，车间里的每条流水线负责一道工序——`PrepareBattleData` 是总装线（把零件装成整车 `CustomBattleData`），`GetCustomBattleParties` 是造部队线（按阵营和兵种配方生成两支部队），`GetTroopCounts` 是配料线（把百分比配方换算成具体人数），`GetSiegeWeaponType` 是打磨线（把器械型号归一化），`StartGame` 是出厂线（把成品交给 `BannerlordMissions` 开战）。所有方法都是静态的、无状态的：输入决定输出，不依赖调用顺序（除了 `StartGame` 会改动 `Game.Current.PlayerTroop` 这一全局状态）。

## 怎么用
### 怎么拿到
静态类，直接调用：`CustomBattleHelper.PrepareBattleData(...)`、`CustomBattleHelper.StartGame(data)` 等。无需实例化。

### 典型用法
```csharp
// 把界面参数打包成战斗数据并开战
CustomBattleData data = CustomBattleHelper.PrepareBattleData(
    playerCharacter, general, playerParty, enemyParty,
    CustomBattlePlayerSide.Attacker, CustomBattlePlayerType.Commander,
    "Siege", "scene_11", "summer", 10f,
    attackerMachines, defenderMachines, wallHitpoints, 2, false, "1");
CustomBattleHelper.StartGame(data);
```

### 坑
- `StartGame` 会写 `Game.Current.PlayerTroop`（CustomBattleHelper.cs:34），这是全局状态改动；重复调用或在不恰当的时机调用会覆盖玩家部队。
- `GetIndexFromGameTypeStringId` 对非法值只触发 `Debug.FailedAssert`（仅调试构建有效）并返回 -1，发布构建中不会崩溃但会得到错误索引。
- `GetDefaultTroopOfFormationForFaction` 对未覆盖的阵营/兵种组合返回 null（如 sturgia 的 HorseArcher），调用方必须处理 null。
- `GetWallHitpointPercentages` 在 breachedWallCount 为 1 时随机决定哪段墙破损（`MBRandom`），结果不确定。
- `GetTroopCounts` 先对 armySize 减 1（玩家自己占一个名额），百分比四舍五入后余数归入步兵（array[0]）。

## 关键成员
| 成员 | 用途 |
|------|------|
| `GetIndexFromGameTypeStringId(string)` | 静态方法，把 "Battle"/"Siege"/"Village" 映射为 0/1/2，非法值断言并返回 -1（CustomBattleHelper.cs:15）。 |
| `StartGame(CustomBattleData)` | 静态方法，开战入口：设置 `Game.Current.PlayerTroop` 后按战斗类型调用 `BannerlordMissions.OpenSiegeMissionWithDeployment` 或 `OpenCustomBattleMission`（CustomBattleHelper.cs:34）。 |
| `GetTroopCounts(int, CustomBattleCompositionData)` | 静态方法，按构成数据把军队规模换算为四类兵种人数数组（步兵/远程/骑兵/骑射）（CustomBattleHelper.cs:46）。 |
| `GetWallHitpointPercentages(int)` | 静态方法，按破损墙数（0/1/2）返回两段城墙的耐久百分比数组（CustomBattleHelper.cs:58）。 |
| `GetSiegeWeaponType(SiegeEngineType)` | 静态方法，把器械型号归一化（如 ImprovedRam→Ram、Catapult→Onager、Bricole→Trebuchet）（CustomBattleHelper.cs:81）。 |
| `PrepareBattleData(...)` | 静态方法，把界面传入的全部参数打包成 `CustomBattleData`，攻城战分支会填充器械与城墙字段（CustomBattleHelper.cs:119）。 |
| `GetCustomBattleParties(...)` | 静态方法，按双方阵营、英雄与兵种选择生成两个 `CustomBattleCombatant`（含旗帜与默认兵种填充）（CustomBattleHelper.cs:151）。 |
| `AssertMissingTroopsForDebug()` | 静态方法，调试用：遍历所有阵营 × 四类兵种调用 `GetDefaultTroopOfFormationForFaction`，暴露缺失的默认兵种（CustomBattleHelper.cs:255）。 |
| `GetDefaultTroopOfFormationForFaction(BasicCultureObject, FormationClass)` | 静态方法，按阵营与兵种类别返回默认兵种角色，未覆盖的组合返回 null（CustomBattleHelper.cs:267）。 |
| `DefaultBattleGameTypeStringId` 等常量 | 游戏类型字符串常量："Battle"/"Siege"/"Village"（CustomBattleHelper.cs:318）。 |

## 真实示例
```csharp
// 按构成数据计算一支 100 人部队的兵种人数
CustomBattleCompositionData composition = new CustomBattleCompositionData(0.3f, 0.2f, 0.1f);
int[] counts = CustomBattleHelper.GetTroopCounts(100, composition);
// counts[0]=步兵 [1]=远程 [2]=骑兵 [3]=骑射
```

## 参见
- [CustomBattleData](../CustomBattleData)
- [CustomBattleProvider](../CustomBattleProvider)
- [CustomBattleCompositionData](../CustomBattleCompositionData)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
