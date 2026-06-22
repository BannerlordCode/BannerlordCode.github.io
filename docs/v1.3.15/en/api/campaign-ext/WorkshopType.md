<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorkshopType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WorkshopType` is a class in the `TaleWorlds.CampaignSystem.Settlements.Workshops` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentCost` | `public int EquipmentCost { get; }` |
| `Frequency` | `public int Frequency { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `JobName` | `public TextObject JobName { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |
| `SignMeshName` | `public string SignMeshName { get; }` |
| `PropMeshName1` | `public string PropMeshName1 { get; }` |
| `PropMeshName2` | `public string PropMeshName2 { get; }` |
| `PropMeshName3List` | `public List<string> PropMeshName3List { get; }` |
| `PropMeshName4` | `public string PropMeshName4 { get; }` |
| `PropMeshName5` | `public string PropMeshName5 { get; }` |
| `PropMeshName6` | `public string PropMeshName6 { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Productions` | `public MBReadOnlyList<WorkshopType.Production> Productions { get; }` |
| `All` | `public static MBReadOnlyList<WorkshopType> All { get; }` |
| `Inputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Inputs { get; }` |
| `Outputs` | `public MBReadOnlyList<ValueTuple<ItemCategory, int>> Outputs { get; }` |
| `ConversionSpeed` | `public float ConversionSpeed { get; }` |


## Key Methods

### GetName

```csharp
public override TextObject GetName()
```

### ToString

```csharp
public override string ToString()
```

### Initialize

```csharp
public override void Initialize()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### Find

```csharp
public static WorkshopType Find(string idString)
```

### FindFirst

```csharp
public static WorkshopType FindFirst(Func<WorkshopType, bool> predicate)
```

### AddInput

```csharp
public void AddInput(ItemCategory item, int count = 1)
```

### AddOutput

```csharp
public void AddOutput(ItemCategory outputCategory, int outputCount)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)