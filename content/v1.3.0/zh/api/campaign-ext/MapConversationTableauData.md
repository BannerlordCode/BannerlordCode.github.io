---
title: "MapConversationTableauData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapConversationTableauData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationTableauData

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableauData`
**Base:** 无
**File:** `SandBox.View/Map/MapConversationTableauData.cs`

## 概述

`MapConversationTableauData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MapConversationTableauData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerCharacterData` | `public ConversationCharacterData PlayerCharacterData { get; }` |
| `ConversationPartnerData` | `public ConversationCharacterData ConversationPartnerData { get; }` |
| `ConversationTerrainType` | `public TerrainType ConversationTerrainType { get; }` |
| `TimeOfDay` | `public float TimeOfDay { get; }` |
| `IsCurrentTerrainUnderSnow` | `public bool IsCurrentTerrainUnderSnow { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `LocationId` | `public string LocationId { get; }` |
| `IsSnowing` | `public bool IsSnowing { get; }` |
| `IsRaining` | `public bool IsRaining { get; }` |

## 主要方法

### CreateFrom
`public static MapConversationTableauData CreateFrom(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, TerrainType terrainType, float timeOfDay, bool isCurrentTerrainUnderSnow, Settlement settlement, string locationId, bool isRaining, bool isSnowing)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

## 使用示例

```csharp
var value = new MapConversationTableauData();
```

## 参见

- [完整类目录](../catalog)