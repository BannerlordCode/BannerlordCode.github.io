---
title: "MBEquipmentRoster"
description: "MBEquipmentRoster 的自动生成类参考。"
---
# MBEquipmentRoster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBEquipmentRoster : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBEquipmentRoster.cs`

## 概述

`MBEquipmentRoster` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EquipmentCulture` | `public BasicCultureObject EquipmentCulture { get; }` |
| `EquipmentCategories` | `public EquipmentCategories EquipmentCategories { get; }` |
| `AllEquipments` | `public MBReadOnlyList<Equipment> AllEquipments { get; }` |
| `DefaultEquipment` | `public Equipment DefaultEquipment { get; }` |

## 主要方法

### Init
`public void Init(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBEquipmentRoster 实例
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Init(objectManager, node);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 MBEquipmentRoster 实例
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Deserialize(objectManager, node);
```

### AddEquipmentRoster
`public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** **用途 / Purpose:** 将 equipment roster 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBEquipmentRoster 实例
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.AddEquipmentRoster(equipmentRoster, equipmentType);
```

### AddOverriddenEquipments
`public void AddOverriddenEquipments(MBObjectManager objectManager, List<XmlNode> overridenEquipmentSlots)`

**用途 / Purpose:** **用途 / Purpose:** 将 overridden equipments 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBEquipmentRoster 实例
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.AddOverriddenEquipments(objectManager, overridenEquipmentSlots);
```

### OrderEquipments
`public void OrderEquipments()`

**用途 / Purpose:** **用途 / Purpose:** 调用 OrderEquipments 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBEquipmentRoster 实例
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.OrderEquipments();
```

### InitializeDefaultEquipment
`public void InitializeDefaultEquipment(string equipmentName)`

**用途 / Purpose:** **用途 / Purpose:** 为 default equipment 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBEquipmentRoster 实例
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.InitializeDefaultEquipment("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Init(objectManager, node);
```

## 参见

- [本区域目录](../)