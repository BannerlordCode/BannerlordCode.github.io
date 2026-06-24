<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleSceneData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleSceneData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleSceneData`
**Base:** 无
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneData.cs`

## 概述

`CustomBattleSceneData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CustomBattleSceneData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |
| `IsSiegeMap` | `public bool IsSiegeMap { get; }` |
| `IsVillageMap` | `public bool IsVillageMap { get; }` |
| `IsLordsHallMap` | `public bool IsLordsHallMap { get; }` |
| `ForcedSceneLevel` | `public string ForcedSceneLevel { get; }` |

## 使用示例

```csharp
var value = new CustomBattleSceneData();
```

## 参见

- [完整类目录](../catalog)