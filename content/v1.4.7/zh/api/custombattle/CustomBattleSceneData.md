---
title: "CustomBattleSceneData"
description: "自定义战斗场景的数据结构，封装场景 ID、名称、地形、森林密度与攻城/村庄等标志。"
---
# CustomBattleSceneData

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `struct`
**基类：** `System.ValueType`（struct 隐式继承）
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSceneData.cs`（声明见第 9 行）

## 概述
`CustomBattleSceneData` 是一个值类型（struct），用于封装自定义战斗场景的全部配置参数。它把场景 ID、显示名称、主地形、可选地形列表、森林密度以及是否为攻城图/村庄图/领主大厅图等标志打包成一个不可变的数据单元，供自定义战斗系统在创建场景时读取。对 mod 开发者而言，这是描述「我要打一场什么样的自定义战斗」的核心数据结构。

## 心智模型
把 `CustomBattleSceneData` 想象成一张「场景订单」。当你想在自定义战斗中开一场战斗时，你需要告诉引擎：用哪个场景（`sceneID`）、显示什么名字（`name`）、什么地形（`terrain`）、有哪些可选地形（`terrainTypes`）、森林多密（`forestDensity`）、是不是攻城/村庄/领主大厅（`isSiegeMap`/`isVillageMap`/`isLordsHallMap`）、以及强制使用哪个场景等级（`forcedSceneLevel`）。这个 struct 就是那张订单——它是值类型，传递时复制，语义上代表一份完整的场景配置快照。

## 怎么用
### 怎么拿到
`CustomBattleSceneData` 不是从某个管理器「获取」的，而是由开发者通过构造函数创建。构造函数签名见 `CustomBattleSceneData.cs` 第 57 行：

```csharp
public CustomBattleSceneData(string sceneID, TextObject name, TerrainType terrain,
    List<TerrainType> terrainTypes, ForestDensity forestDensity, bool isSiegeMap,
    bool isVillageMap, bool isLordsHallMap, string forcedSceneLevel)
```

### 典型用法
在自定义战斗 mod 中，开发者通常先构造一个 `CustomBattleSceneData`，再把它交给自定义战斗系统去创建场景：

```csharp
var sceneData = new CustomBattleSceneData(
    "battle_scene_01",
    new TextObject("My Battle"),
    TerrainType.Plain,
    new List<TerrainType> { TerrainType.Plain, TerrainType.Steppe },
    ForestDensity.Medium,
    false, false, false,
    "level_1");
```

### 坑
- `CustomBattleSceneData` 是 struct，赋值时发生复制；若需要修改字段，应重新构造而非依赖引用语义。
- `terrainTypes` 列表不应为 `null`，否则在遍历可选地形时可能抛出空引用异常。
- `forcedSceneLevel` 若传入无效值，可能导致场景等级回退或加载失败，需确保与场景实际等级一致。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `sceneID` | 场景的唯一标识符，用于在引擎中查找对应场景 |
| `name` | 场景的显示名称（`TextObject`），支持本地化 |
| `terrain` | 主地形类型，决定场景的基础地貌 |
| `terrainTypes` | 可选地形列表，供战斗中的地形变化或 AI 使用 |
| `forestDensity` | 森林密度，影响场景中的树木分布 |
| `isSiegeMap` | 是否为攻城图，影响战斗的攻城/守城逻辑 |
| `isVillageMap` | 是否为村庄图，影响村庄相关行为 |
| `isLordsHallMap` | 是否为领主大厅图，影响大厅相关行为 |
| `forcedSceneLevel` | 强制使用的场景等级，覆盖默认等级推断 |

## 真实示例
```csharp
// 构造一个攻城场景数据
var siegeScene = new CustomBattleSceneData(
    "castle_siege_01",
    new TextObject("Castle Siege"),
    TerrainType.Hill,
    new List<TerrainType> { TerrainType.Hill, TerrainType.Plain },
    ForestDensity.Low,
    true,   // isSiegeMap
    false,  // isVillageMap
    false,  // isLordsHallMap
    "level_2");

// 构造一个村庄场景数据
var villageScene = new CustomBattleSceneData(
    "village_raid_01",
    new TextObject("Village Raid"),
    TerrainType.Plain,
    new List<TerrainType> { TerrainType.Plain },
    ForestDensity.High,
    false,  // isSiegeMap
    true,   // isVillageMap
    false,  // isLordsHallMap
    "level_1");
```

## 参见
- [CustomBattleSubModule](../CustomBattleSubModule)
- [CustomBattlePlayerSide](../CustomBattlePlayerSide)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
