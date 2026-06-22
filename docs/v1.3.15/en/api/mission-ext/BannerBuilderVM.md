<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BannerBuilderVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentBanner` | `public Banner CurrentBanner { get; }` |
| `BannerImageIdentifier` | `public BannerImageIdentifierVM BannerImageIdentifier { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Categories` | `public MBBindingList<BannerBuilderCategoryVM> Categories { get; set; }` |
| `ColorSelection` | `public BannerBuilderColorSelectionVM ColorSelection { get; set; }` |
| `Layers` | `public MBBindingList<BannerBuilderLayerVM> Layers { get; set; }` |
| `CurrentSelectedLayer` | `public BannerBuilderLayerVM CurrentSelectedLayer { get; set; }` |
| `CurrentSelectedItem` | `public BannerBuilderItemVM CurrentSelectedItem { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `DrawStrokeHint` | `public HintViewModel DrawStrokeHint { get; set; }` |
| `CenterHint` | `public HintViewModel CenterHint { get; set; }` |
| `ResetSizeHint` | `public HintViewModel ResetSizeHint { get; set; }` |
| `MirrorHint` | `public HintViewModel MirrorHint { get; set; }` |
| `CurrentShieldName` | `public string CurrentShieldName { get; set; }` |
| `MinIconSize` | `public int MinIconSize { get; set; }` |
| `MaxIconSize` | `public int MaxIconSize { get; set; }` |
| `BannerCodeAsString` | `public string BannerCodeAsString { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteAddDefaultLayer

```csharp
public void ExecuteAddDefaultLayer()
```

### ExecuteDuplicateCurrentLayer

```csharp
public void ExecuteDuplicateCurrentLayer()
```

### ExecuteCopyBannerCode

```csharp
public void ExecuteCopyBannerCode()
```

### ExecuteReorderWithParameters

```csharp
public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)
```

### ExecuteReorderToEndWithParameters

```csharp
public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)
```

### GetBannerCode

```csharp
public string GetBannerCode()
```

### SetBannerCode

```csharp
public void SetBannerCode(string v)
```

### TranslateCurrentLayerWith

```csharp
public void TranslateCurrentLayerWith(Vec2 moveDirection)
```

### DeleteCurrentLayer

```csharp
public void DeleteCurrentLayer()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)