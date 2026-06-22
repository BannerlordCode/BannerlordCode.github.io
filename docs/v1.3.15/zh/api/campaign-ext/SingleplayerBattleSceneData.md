<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SingleplayerBattleSceneData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleplayerBattleSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct SingleplayerBattleSceneData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs`

## 概述

`SingleplayerBattleSceneData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |
| `MapIndices` | `public List<int> MapIndices { get; }` |
| `IsNaval` | `public bool IsNaval { get; }` |

## 使用示例

```csharp
// SingleplayerBattleSceneData (Data) 的典型用法
new SingleplayerBattleSceneData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)