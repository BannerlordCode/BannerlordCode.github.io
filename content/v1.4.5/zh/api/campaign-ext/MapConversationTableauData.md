---
title: "MapConversationTableauData"
description: "MapConversationTableauData 的自动生成类参考。"
---
# MapConversationTableauData

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableauData`
**Base:** 无
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationTableauData.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MapConversationTableauData.CreateFrom(playerCharacterData, conversationPartnerData, terrainType, 0, false, settlement, "example", false, false);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
MapConversationTableauData entry = ...;
```

## 参见

- [本区域目录](../)