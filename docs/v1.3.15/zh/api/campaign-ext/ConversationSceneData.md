<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationSceneData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationSceneData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/ConversationSceneData.cs`

## 概述

`ConversationSceneData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |

## 使用示例

```csharp
// ConversationSceneData (Data) 的典型用法
new ConversationSceneData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)