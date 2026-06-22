<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Banner`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Banner

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Banner` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `BannerCode` | `public string BannerCode { get; }` |
| `BannerDataList` | `public MBReadOnlyList<BannerData> BannerDataList { get; }` |
| `BannerVisual` | `public IBannerVisual BannerVisual { get; }` |


## 主要方法

### SetBannerVisual

```csharp
public void SetBannerVisual(IBannerVisual visual)
```

### GetBannerDataAtIndex

```csharp
public BannerData GetBannerDataAtIndex(int index)
```

### GetBannerDataListCount

```csharp
public int GetBannerDataListCount()
```

### IsBannerDataListEmpty

```csharp
public bool IsBannerDataListEmpty()
```

### GetPrimaryColorId

```csharp
public int GetPrimaryColorId()
```

### GetSecondaryColorId

```csharp
public int GetSecondaryColorId()
```

### GetIconColorId

```csharp
public int GetIconColorId()
```

### GetIconSize

```csharp
public Vec2 GetIconSize()
```

### SetPrimaryColorId

```csharp
public void SetPrimaryColorId(int colorId)
```

### SetSecondaryColorId

```csharp
public void SetSecondaryColorId(int colorId)
```

### SetIconColorId

```csharp
public void SetIconColorId(int colorId)
```

### SetIconSize

```csharp
public void SetIconSize(int newSize)
```

### ChangePrimaryColor

```csharp
public void ChangePrimaryColor(uint mainColor)
```

### ChangeBackgroundColor

```csharp
public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)
```

### ChangeIconColors

```csharp
public void ChangeIconColors(uint color)
```

### RotateBackgroundToRight

```csharp
public void RotateBackgroundToRight()
```

### RotateBackgroundToLeft

```csharp
public void RotateBackgroundToLeft()
```

### GetBackgroundMeshId

```csharp
public int GetBackgroundMeshId()
```

### GetIconMeshId

```csharp
public int GetIconMeshId()
```

### SetBackgroundMeshId

```csharp
public void SetBackgroundMeshId(int meshId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)