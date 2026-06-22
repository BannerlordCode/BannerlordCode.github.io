<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BannerBuilderVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)