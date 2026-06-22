<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBEquipmentRoster`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEquipmentRoster

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBEquipmentRoster` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `EquipmentFlags` | `public EquipmentFlags EquipmentFlags { get; }` |
| `AllEquipments` | `public MBReadOnlyList<Equipment> AllEquipments { get; }` |
| `DefaultEquipment` | `public Equipment DefaultEquipment { get; }` |


## 主要方法

### HasEquipmentFlags

```csharp
public bool HasEquipmentFlags(EquipmentFlags flags)
```

### IsEquipmentTemplate

```csharp
public bool IsEquipmentTemplate()
```

### Init

```csharp
public void Init(MBObjectManager objectManager, XmlNode node)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### AddEquipmentRoster

```csharp
public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)
```

### AddOverridenEquipments

```csharp
public void AddOverridenEquipments(MBObjectManager objectManager, List<XmlNode> overridenEquipmentSlots)
```

### OrderEquipments

```csharp
public void OrderEquipments()
```

### InitializeDefaultEquipment

```csharp
public void InitializeDefaultEquipment(string equipmentName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)