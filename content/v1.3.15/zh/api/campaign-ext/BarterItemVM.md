---
title: "BarterItemVM"
description: "BarterItemVM 的自动生成类参考。"
---
# BarterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterItemVM : EncyclopediaLinkVM`
**Base:** `EncyclopediaLinkVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs`

## 概述

`BarterItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalItemCount` | `public int TotalItemCount { get; set; }` |
| `TotalItemCountText` | `public string TotalItemCountText { get; set; }` |
| `CurrentOfferedAmount` | `public int CurrentOfferedAmount { get; set; }` |
| `CurrentOfferedAmountText` | `public string CurrentOfferedAmountText { get; set; }` |
| `BarterableType` | `public string BarterableType { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsSelectorActive` | `public bool IsSelectorActive { get; set; }` |
| `VisualIdentifier` | `public ImageIdentifierVM VisualIdentifier { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `FiefFileName` | `public string FiefFileName { get; set; }` |
| `IsItemTransferrable` | `public bool IsItemTransferrable { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BarterItemVM 实例
BarterItemVM barterItemVM = ...;
barterItemVM.RefreshValues();
```

### RefreshCompabilityWithItem
`public void RefreshCompabilityWithItem(BarterItemVM item, bool isItemGotOffered)`

**用途 / Purpose:** 使 「compability with item」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 BarterItemVM 实例
BarterItemVM barterItemVM = ...;
barterItemVM.RefreshCompabilityWithItem(item, false);
```

### ExecuteAddOffered
`public void ExecuteAddOffered()`

**用途 / Purpose:** 执行 「add offered」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BarterItemVM 实例
BarterItemVM barterItemVM = ...;
barterItemVM.ExecuteAddOffered();
```

### ExecuteRemoveOffered
`public void ExecuteRemoveOffered()`

**用途 / Purpose:** 执行 「remove offered」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BarterItemVM 实例
BarterItemVM barterItemVM = ...;
barterItemVM.ExecuteRemoveOffered();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 「action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BarterItemVM 实例
BarterItemVM barterItemVM = ...;
barterItemVM.ExecuteAction();
```

### BarterTransferEventDelegate
`public delegate void BarterTransferEventDelegate(BarterItemVM itemVM, bool transferAll)`

**用途 / Purpose:** 处理与 「barter transfer event delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BarterItemVM 实例
BarterItemVM barterItemVM = ...;
barterItemVM.BarterTransferEventDelegate(itemVM, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BarterItemVM barterItemVM = ...;
barterItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)