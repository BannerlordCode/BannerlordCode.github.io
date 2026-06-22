<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Production`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Production

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Workshops
**模块:** TaleWorlds.CampaignSystem
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Production` 是 `TaleWorlds.CampaignSystem.Settlements.Workshops` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)