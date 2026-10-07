---
title: "CustomBattleData"
description: "自定义战斗的参数载体：一场战斗的类型、场景、阵营、英雄、部队、攻城器械与时段等全部设置，以结构体形式在配置界面与任务开启逻辑之间传递。"
---
# CustomBattleData

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `struct`
**基类：** `System.ValueType`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs`（声明见第 10 行）

## 概述
`CustomBattleData` 是自定义战斗子系统的核心数据结构，把一场自定义战斗的全部设置——战斗类型、场景、季节、时段、玩家英雄、双方部队、攻城器械、城墙耐久等——打包成一个值类型，在配置界面（View 层）与任务开启逻辑（`CustomBattleHelper.StartGame`）之间传递。它同时提供一组静态属性与静态方法，作为配置界面下拉选项的数据源（游戏类型、玩家类型、阵营、时段、季节、可选英雄与攻城器械清单）。

## 心智模型
把它想成一张「自定义战斗订单」：玩家在自定义战斗菜单里勾选的每一项（战斗类型、场景、阵营、英雄、器械、城墙破损数）都是订单上的一个字段；点击开战时，`CustomBattleHelper.PrepareBattleData` 把订单盖章封装成 `CustomBattleData`，`CustomBattleHelper.StartGame` 再按订单发货（开启对应任务）。结构体是值类型：传递即复制，订单在传递途中不会被别人偷偷改字。静态属性（`GameTypes`、`Factions` 等）则是菜单背后的「选项字典」，且会随模块加载情况（`IsOnlyCoreContentEnabled`、NavalDLC 是否激活）动态增减选项。

## 怎么用
### 怎么拿到
通常不手动 `new`：在自定义战斗流程中由 `CustomBattleHelper.PrepareBattleData(...)` 统一构造（CustomBattleHelper.cs:119）。需要读取选项数据时直接访问静态属性，如 `CustomBattleData.GameTypes`、`CustomBattleData.Factions`。

### 典型用法
```csharp
// 选项字典：遍历可用阵营（核心内容模式下仅帝国）
foreach (BasicCultureObject faction in CustomBattleData.Factions)
{
    Console.WriteLine(faction.StringId);
}
// 攻城器械清单：攻方近战器械（冲车与攻城塔）
foreach (SiegeEngineType machine in CustomBattleData.GetAllAttackerMeleeMachines())
{
    Console.WriteLine(machine);
}
```

### 坑
- 结构体含引用类型字段（`PlayerCharacter`、`AttackerMachines` 等），复制时只复制引用：两份 `CustomBattleData` 可能共享同一个 `List<MissionSiegeWeapon>`，改一份会影响另一份。
- 静态属性每次访问都重新生成迭代器，且依赖 `Game.Current.ObjectManager`——在 ObjectManager 未初始化的时机（如模块加载早期）访问 `Characters`/`Factions` 会抛异常。
- `Factions` 在「仅核心内容」模式下只返回 empire；Village/Siege 游戏类型与 Sergeant 玩家类型同样受 `IsOnlyCoreContentEnabled` 限制，mod 新增内容需自行扩展这些字典。
- 实例字段全是 public 可变字段、没有校验：`GameTypeStringId` 传错值只会在 `GetIndexFromGameTypeStringId` 里触发 `Debug.FailedAssert`（CustomBattleHelper.cs:15）。

## 关键成员
| 成员 | 用途 |
|------|------|
| `GetAllAttackerMeleeMachines()` | 静态方法，返回攻方近战攻城器械枚举（冲车 Ram、攻城塔 SiegeTower）（CustomBattleData.cs:13）。 |
| `GetAllDefenderRangedMachines()` | 静态方法，返回守方远程攻城器械枚举（弩炮、火弩炮、投石车、火投石车）（CustomBattleData.cs:21）。 |
| `GetAllAttackerRangedMachines()` | 静态方法，返回攻方远程攻城器械枚举（弩炮、火弩炮、Onager、火 Onager、投石机 Trebuchet）（CustomBattleData.cs:31）。 |
| `GameTypes` | 静态属性，游戏类型选项字典（显示名 → "Battle"/"Siege"/"Village"），随核心内容模式裁剪（CustomBattleData.cs:43）。 |
| `PlayerTypes` | 静态属性，玩家类型选项字典（"Commander"/"Sergeant"）（CustomBattleData.cs:59）。 |
| `PlayerSides` | 静态属性，玩家阵营选项字典（Defender/Attacker）（CustomBattleData.cs:74）。 |
| `Characters` | 静态属性，可选英雄列表（commander_1 至 commander_24，随核心内容模式裁剪）（CustomBattleData.cs:86）。 |
| `Factions` | 静态属性，可选阵营列表（empire 等，NavalDLC 激活时追加 nord）（CustomBattleData.cs:126）。 |
| `TimesOfDay` | 静态属性，时段选项字典（Morning 至 Night → CustomBattleTimeOfDay）（CustomBattleData.cs:149）。 |
| `Seasons` | 静态属性，季节选项字典（夏/秋/冬/春 → "summer" 等）（CustomBattleData.cs:164）。 |
| `WallHitpoints` | 静态属性，城墙破损选项字典（完好/单破/双破 → 0/1/2）（CustomBattleData.cs:178）。 |
| `SceneLevels` | 静态属性，场景等级选项（1/2/3）（CustomBattleData.cs:191）。 |
| `NumberOfAttackerMeleeMachines` 等常量 | 攻城器械数量上限（3/4/4）与核心内容默认场景名 "battle_terrain_029"（CustomBattleData.cs:203）。 |
| `GameTypeStringId` / `SceneId` / `SeasonId` | 实例字段，战斗类型、场景、季节的字符串 ID。 |
| `PlayerCharacter` / `PlayerSideGeneralCharacter` | 实例字段，玩家英雄与玩家方将领角色。 |
| `PlayerParty` / `EnemyParty` | 实例字段，双方部队（CustomBattleCombatant）。 |
| `TimeOfDay` | 实例字段，时段（浮点，对应 CustomBattleTimeOfDay）。 |
| `IsPlayerGeneral` | 实例字段，玩家是否以将领身份参战。 |
| `SceneLevel` | 实例字段，场景等级（字符串）。 |
| `AttackerMachines` / `DefenderMachines` | 实例字段，双方攻城器械列表（MissionSiegeWeapon）。 |
| `WallHitpointPercentages` | 实例字段，两段城墙的耐久百分比。 |
| `HasAnySiegeTower` | 实例字段，攻方是否携带攻城塔。 |
| `IsPlayerAttacker` / `IsReliefAttack` / `IsSallyOut` | 实例字段，玩家是否攻方、是否援军、是否突围。 |
| `SceneUpgradeLevel` | 实例字段，场景升级等级。 |

## 真实示例
```csharp
// 用选项字典填充下拉框，并读取攻城器械清单
foreach (BasicCultureObject faction in CustomBattleData.Factions)
{
    Console.WriteLine(faction.StringId);
}
foreach (SiegeEngineType machine in CustomBattleData.GetAllAttackerMeleeMachines())
{
    Console.WriteLine(machine);
}
```

## 参见
- [CustomBattleHelper](CustomBattleHelper)
- [CustomBattleProvider](CustomBattleProvider)
- [CustomBattleCompositionData](CustomBattleCompositionData)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
