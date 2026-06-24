<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteAddDefaultLayer
`public void ExecuteAddDefaultLayer()`

**用途 / Purpose:** 执行 `add default layer` 操作或流程。

### ExecuteDuplicateCurrentLayer
`public void ExecuteDuplicateCurrentLayer()`

**用途 / Purpose:** 执行 `duplicate current layer` 操作或流程。

### ExecuteCopyBannerCode
`public void ExecuteCopyBannerCode()`

**用途 / Purpose:** 执行 `copy banner code` 操作或流程。

### ExecuteReorderWithParameters
`public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**用途 / Purpose:** 执行 `reorder with parameters` 操作或流程。

### ExecuteReorderToEndWithParameters
`public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)`

**用途 / Purpose:** 执行 `reorder to end with parameters` 操作或流程。

### GetBannerCode
`public string GetBannerCode()`

**用途 / Purpose:** 获取 `banner code` 的当前值。

### SetBannerCode
`public void SetBannerCode(string v)`

**用途 / Purpose:** 设置 `banner code` 的值或状态。

### TranslateCurrentLayerWith
`public void TranslateCurrentLayerWith(Vec2 moveDirection)`

**用途 / Purpose:** 处理 `translate current layer with` 相关逻辑。

### DeleteCurrentLayer
`public void DeleteCurrentLayer()`

**用途 / Purpose:** 处理 `delete current layer` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new BannerBuilderVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)