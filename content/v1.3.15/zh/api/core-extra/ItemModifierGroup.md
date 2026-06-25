---
title: "ItemModifierGroup"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemModifierGroup`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemModifierGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ItemModifierGroup : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemModifierGroup.cs`

## 概述

`ItemModifierGroup` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NoModifierLootScore` | `public int NoModifierLootScore { get; }` |
| `NoModifierProductionScore` | `public int NoModifierProductionScore { get; }` |
| `ItemModifiers` | `public MBReadOnlyList<ItemModifier> ItemModifiers { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### AddItemModifier
`public void AddItemModifier(ItemModifier itemModifier)`

**用途 / Purpose:** 向当前集合/状态中添加 `item modifier`。

### GetRandomItemModifierLootScoreBased
`public ItemModifier GetRandomItemModifierLootScoreBased()`

**用途 / Purpose:** 获取 `random item modifier loot score based` 的当前值。

### GetRandomItemModifierProductionScoreBased
`public ItemModifier GetRandomItemModifierProductionScoreBased()`

**用途 / Purpose:** 获取 `random item modifier production score based` 的当前值。

### GetModifiersBasedOnQuality
`public List<ItemModifier> GetModifiersBasedOnQuality(ItemQuality quality)`

**用途 / Purpose:** 获取 `modifiers based on quality` 的当前值。

## 使用示例

```csharp
var value = new ItemModifierGroup();
value.Deserialize(objectManager, node);
```

## 参见

- [完整类目录](../catalog)