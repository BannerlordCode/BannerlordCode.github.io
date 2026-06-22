<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEquipmentRoster`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEquipmentRoster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBEquipmentRoster` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentFlags` | `public EquipmentFlags EquipmentFlags { get; }` |
| `AllEquipments` | `public MBReadOnlyList<Equipment> AllEquipments { get; }` |
| `DefaultEquipment` | `public Equipment DefaultEquipment { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)