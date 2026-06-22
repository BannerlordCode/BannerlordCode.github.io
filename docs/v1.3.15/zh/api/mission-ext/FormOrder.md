<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormOrder

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FormOrder` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |
| `OrderType` | `public OrderType OrderType { get; }` |


## 主要方法

### FormOrderCustom

```csharp
public static FormOrder FormOrderCustom(float customWidth)
```

### OnApply

```csharp
public void OnApply(Formation formation)
```

### GetUnitCountOf

```csharp
public static int GetUnitCountOf(Formation formation)
```

### OnApplyToCustomArrangement

```csharp
public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)
```

### GetMaxFileCountStatic

```csharp
public static int? GetMaxFileCountStatic(FormOrder.FormOrderEnum order, int unitCount)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)