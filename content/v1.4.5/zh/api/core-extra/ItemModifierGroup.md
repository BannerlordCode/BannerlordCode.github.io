---
title: "ItemModifierGroup"
description: "ItemModifierGroup 的自动生成类参考。"
---
# ItemModifierGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ItemModifierGroup : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemModifierGroup.cs`

## 概述

`ItemModifierGroup` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NoModifierLootScore` | `public int NoModifierLootScore { get; }` |
| `NoModifierProductionScore` | `public int NoModifierProductionScore { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ItemModifierGroup 实例
ItemModifierGroup itemModifierGroup = ...;
itemModifierGroup.Deserialize(objectManager, node);
```

### AddItemModifier
`public void AddItemModifier(ItemModifier itemModifier)`

**用途 / Purpose:** 将 item modifier 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ItemModifierGroup 实例
ItemModifierGroup itemModifierGroup = ...;
itemModifierGroup.AddItemModifier(itemModifier);
```

### GetRandomItemModifierLootScoreBased
`public ItemModifier GetRandomItemModifierLootScoreBased()`

**用途 / Purpose:** 读取并返回当前对象中 random item modifier loot score based 的结果。

```csharp
// 先通过子系统 API 拿到 ItemModifierGroup 实例
ItemModifierGroup itemModifierGroup = ...;
var result = itemModifierGroup.GetRandomItemModifierLootScoreBased();
```

### GetRandomItemModifierProductionScoreBased
`public ItemModifier GetRandomItemModifierProductionScoreBased()`

**用途 / Purpose:** 读取并返回当前对象中 random item modifier production score based 的结果。

```csharp
// 先通过子系统 API 拿到 ItemModifierGroup 实例
ItemModifierGroup itemModifierGroup = ...;
var result = itemModifierGroup.GetRandomItemModifierProductionScoreBased();
```

### GetModifiersBasedOnQuality
`public List<ItemModifier> GetModifiersBasedOnQuality(ItemQuality quality)`

**用途 / Purpose:** 读取并返回当前对象中 modifiers based on quality 的结果。

```csharp
// 先通过子系统 API 拿到 ItemModifierGroup 实例
ItemModifierGroup itemModifierGroup = ...;
var result = itemModifierGroup.GetModifiersBasedOnQuality(quality);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ItemModifierGroup itemModifierGroup = ...;
itemModifierGroup.Deserialize(objectManager, node);
```

## 参见

- [本区域目录](../)