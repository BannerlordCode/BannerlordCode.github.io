---
title: "BannerBuilderVM"
description: "BannerBuilderVM 的自动生成类参考。"
---
# BannerBuilderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderVM.cs`

## 概述

`BannerBuilderVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `CancelText` | `public string CancelText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `BannerVM` | `public BannerViewModel BannerVM { get; set; }` |
| `IconCodes` | `public string IconCodes { get; set; }` |
| `ColorCodes` | `public string ColorCodes { get; set; }` |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor { get; set; }` |
| `IsBannerPreviewsActive` | `public bool IsBannerPreviewsActive { get; set; }` |
| `IsEditorPreviewActive` | `public bool IsEditorPreviewActive { get; set; }` |
| `IsLayerPreviewActive` | `public bool IsLayerPreviewActive { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.RefreshValues();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteDone();
```

### ExecuteAddDefaultLayer
`public void ExecuteAddDefaultLayer()`

**用途 / Purpose:** 执行 「add default layer」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteAddDefaultLayer();
```

### ExecuteDuplicateCurrentLayer
`public void ExecuteDuplicateCurrentLayer()`

**用途 / Purpose:** 执行 「duplicate current layer」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteDuplicateCurrentLayer();
```

### ExecuteCopyBannerCode
`public void ExecuteCopyBannerCode()`

**用途 / Purpose:** 执行 「copy banner code」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteCopyBannerCode();
```

### ExecuteReorderWithParameters
`public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**用途 / Purpose:** 执行 「reorder with parameters」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteReorderWithParameters(layer, 0, "example");
```

### ExecuteReorderToEndWithParameters
`public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**用途 / Purpose:** 执行 「reorder to end with parameters」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.ExecuteReorderToEndWithParameters(layer, 0, "example");
```

### GetBannerCode
`public string GetBannerCode()`

**用途 / Purpose:** 读取并返回当前对象中 「banner code」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
var result = bannerBuilderVM.GetBannerCode();
```

### SetBannerCode
`public void SetBannerCode(string v)`

**用途 / Purpose:** 为 「banner code」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.SetBannerCode("example");
```

### TranslateCurrentLayerWith
`public void TranslateCurrentLayerWith(Vec2 moveDirection)`

**用途 / Purpose:** 处理与 「translate current layer with」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.TranslateCurrentLayerWith(moveDirection);
```

### DeleteCurrentLayer
`public void DeleteCurrentLayer()`

**用途 / Purpose:** 处理与 「delete current layer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.DeleteCurrentLayer();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerBuilderVM 实例
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerBuilderVM bannerBuilderVM = ...;
bannerBuilderVM.RefreshValues();
```

## 参见

- [本区域目录](../)