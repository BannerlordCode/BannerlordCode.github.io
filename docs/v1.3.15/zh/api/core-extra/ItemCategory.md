<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemCategory`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemCategory

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ItemCategory` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsTradeGood` | `public bool IsTradeGood { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `CanSubstitute` | `public ItemCategory CanSubstitute { get; }` |
| `SubstitutionFactor` | `public float SubstitutionFactor { get; }` |
| `Properties` | `public ItemCategory.Property Properties { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `BaseDemand` | `public float BaseDemand { get; }` |
| `LuxuryDemand` | `public float LuxuryDemand { get; }` |


## 主要方法

### InitializeObject

```csharp
public ItemCategory InitializeObject(bool isTradeGood = false, int baseDemand = 0, int luxuryDemand = 0, ItemCategory.Property properties = ItemCategory.Property.None, ItemCategory canSubstitute = null, float substitutionFactor = 0f, bool isAnimal = false, bool isValid = true)
```

### GetName

```csharp
public override TextObject GetName()
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)