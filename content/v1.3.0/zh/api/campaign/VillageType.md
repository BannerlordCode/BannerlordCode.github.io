---
title: "VillageType"
description: "VillageType 的自动生成类参考。"
---
# VillageType

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class VillageType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageType.cs`

## 概述

`VillageType` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<VillageType> All { get; }` |
| `Productions` | `public MBReadOnlyList<ValueTuple<ItemObject, float>> Productions { get; }` |
| `PrimaryProduction` | `public ItemObject PrimaryProduction { get; }` |

## 主要方法

### Initialize
`public VillageType Initialize(TextObject shortName, string meshName, string meshNameUnderConstruction, string meshNameBurned, ValueTuple<ItemObject, float> productions)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 VillageType 实例
VillageType villageType = ...;
var result = villageType.Initialize(shortName, "example", "example", "example", valueTuple<ItemObject, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 VillageType 实例
VillageType villageType = ...;
var result = villageType.ToString();
```

### AddProductions
`public void AddProductions(IEnumerable<ValueTuple<ItemObject, float>> productions)`

**用途 / Purpose:** **用途 / Purpose:** 将 productions 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VillageType 实例
VillageType villageType = ...;
villageType.AddProductions(iEnumerable<ValueTuple<ItemObject, 0);
```

### GetProductionPerDay
`public float GetProductionPerDay(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 production per day 的结果。

```csharp
// 先通过子系统 API 拿到 VillageType 实例
VillageType villageType = ...;
var result = villageType.GetProductionPerDay(item);
```

### GetProductionPerDay
`public float GetProductionPerDay(ItemCategory itemCategory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 production per day 的结果。

```csharp
// 先通过子系统 API 拿到 VillageType 实例
VillageType villageType = ...;
var result = villageType.GetProductionPerDay(itemCategory);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VillageType villageType = ...;
villageType.Initialize(shortName, "example", "example", "example", valueTuple<ItemObject, 0);
```

## 参见

- [本区域目录](../)