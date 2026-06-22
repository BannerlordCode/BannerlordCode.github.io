<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Banner`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Banner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `Banner` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCode` | `public string BannerCode { get; }` |
| `BannerDataList` | `public MBReadOnlyList<BannerData> BannerDataList { get; }` |
| `BannerVisual` | `public IBannerVisual BannerVisual { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)