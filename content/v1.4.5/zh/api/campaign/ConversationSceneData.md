---
title: "ConversationSceneData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationSceneData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationSceneData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ConversationSceneData.cs`

## 概述

`ConversationSceneData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ConversationSceneData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |

## 使用示例

```csharp
var value = new ConversationSceneData();
```

## 参见

- [完整类目录](../catalog)