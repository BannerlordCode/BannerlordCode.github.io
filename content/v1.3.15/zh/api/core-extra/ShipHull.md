---
title: "ShipHull"
description: "ShipHull 的自动生成类参考。"
---
# ShipHull

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipHull : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipHull.cs`

## 概述

`ShipHull` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `BaseSpeed` | `public float BaseSpeed { get; }` |
| `Value` | `public int Value { get; }` |
| `HasHold` | `public bool HasHold { get; }` |
| `CanNavigateShallowWater` | `public bool CanNavigateShallowWater { get; }` |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead { get; }` |
| `ProductionBuildWeight` | `public float ProductionBuildWeight { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
| `Type` | `public ShipHull.ShipType Type { get; }` |
| `IsTradeShip` | `public bool IsTradeShip { get; }` |
| `MissionShipObjectId` | `public string MissionShipObjectId { get; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `InventoryCapacity` | `public int InventoryCapacity { get; }` |
| `MaxHitPoints` | `public int MaxHitPoints { get; }` |
| `MaxFireHitPoints` | `public int MaxFireHitPoints { get; }` |
| `MaxSailHitPoints` | `public int MaxSailHitPoints { get; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `SkeletalCrewCapacity` | `public int SkeletalCrewCapacity { get; }` |
| `MapVisualScale` | `public float MapVisualScale { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 ShipHull 实例
ShipHull shipHull = ...;
var result = shipHull.ToString();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 ShipHull 实例
ShipHull shipHull = ...;
var result = shipHull.GetName();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ShipHull 实例
ShipHull shipHull = ...;
shipHull.Deserialize(objectManager, node);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ShipHull shipHull = ...;
shipHull.ToString();
```

## 参见

- [本区域目录](../)