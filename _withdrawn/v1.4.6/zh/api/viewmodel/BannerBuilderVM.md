---
title: "BannerBuilderVM"
description: "BannerBuilderVM：TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder 的 public 类，继承 ViewModel；公开成员 48 个（方法 15、属性 31、字段 1）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerBuilderVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

BannerBuilderVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BannerBuilderVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 48 个：15 方法、31 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerBuilderVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`，继承链 BannerBuilderVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 31/48，方法 15/48），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentBanner` | `public Banner CurrentBanner` | 属性 |
| `BannerBuilderVM` | `public BannerBuilderVM(BasicCharacterObject character, string initialKey, Action<bool>onExit, Action refresh, Action copyBannerCode)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteAddDefaultLayer` | `public void ExecuteAddDefaultLayer()` | 方法 |
| `ExecuteDuplicateCurrentLayer` | `public void ExecuteDuplicateCurrentLayer()` | 方法 |
| `ExecuteCopyBannerCode` | `public void ExecuteCopyBannerCode()` | 方法 |
| `ExecuteReorderWithParameters` | `public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)` | 方法 |
| `ExecuteReorderToEndWithParameters` | `public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)` | 方法 |
| `GetBannerCode` | `public string GetBannerCode()` | 方法 |
| `SetBannerCode` | `public void SetBannerCode(string v)` | 方法 |
| `TranslateCurrentLayerWith` | `public void TranslateCurrentLayerWith(Vec2 moveDirection)` | 方法 |
| `DeleteCurrentLayer` | `public void DeleteCurrentLayer()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `BannerImageIdentifier` | `public BannerImageIdentifierVM BannerImageIdentifier` | 属性 |
| `Title` | `public string Title` | 属性 |
| `MBBindingList` | `public MBBindingList<BannerBuilderCategoryVM>Categories` | 属性 |
| `ColorSelection` | `public BannerBuilderColorSelectionVM ColorSelection` | 属性 |
| `MBBindingList` | `public MBBindingList<BannerBuilderLayerVM>Layers` | 属性 |
| `CurrentSelectedLayer` | `public BannerBuilderLayerVM CurrentSelectedLayer` | 属性 |
| `CurrentSelectedItem` | `public BannerBuilderItemVM CurrentSelectedItem` | 属性 |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | 属性 |
| `UndoHint` | `public HintViewModel UndoHint` | 属性 |
| `RedoHint` | `public HintViewModel RedoHint` | 属性 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `DrawStrokeHint` | `public HintViewModel DrawStrokeHint` | 属性 |
| `CenterHint` | `public HintViewModel CenterHint` | 属性 |
| `ResetSizeHint` | `public HintViewModel ResetSizeHint` | 属性 |
| `MirrorHint` | `public HintViewModel MirrorHint` | 属性 |
| `CurrentShieldName` | `public string CurrentShieldName` | 属性 |
| `MinIconSize` | `public int MinIconSize` | 属性 |
| `MaxIconSize` | `public int MaxIconSize` | 属性 |
| `BannerCodeAsString` | `public string BannerCodeAsString` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `BannerVM` | `public BannerViewModel BannerVM` | 属性 |
| `IconCodes` | `public string IconCodes` | 属性 |
| `ColorCodes` | `public string ColorCodes` | 属性 |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor` | 属性 |
| `IsBannerPreviewsActive` | `public bool IsBannerPreviewsActive` | 属性 |
| `IsEditorPreviewActive` | `public bool IsEditorPreviewActive` | 属性 |
| `IsLayerPreviewActive` | `public bool IsLayerPreviewActive` | 属性 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `ShieldSlotIndex` | `public int ShieldSlotIndex` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BannerBuilderCategoryVM](../BannerBuilderCategoryVM/)
- [同命名空间 BannerBuilderColorItemVM](../BannerBuilderColorItemVM/)
- [同命名空间 BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM/)
- [同命名空间 BannerBuilderItemVM](../BannerBuilderItemVM/)
