---
title: "EncyclopediaContentPageVM"
description: "EncyclopediaContentPageVM 的自动生成类参考。"
---
# EncyclopediaContentPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaContentPageVM`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaContentPageVM.cs`

## 概述

`EncyclopediaContentPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `PreviousButtonLabel` | `public string PreviousButtonLabel { get; set; }` |
| `NextButtonLabel` | `public string NextButtonLabel { get; set; }` |
| `PreviousButtonHint` | `public HintViewModel PreviousButtonHint { get; set; }` |
| `NextButtonHint` | `public HintViewModel NextButtonHint { get; set; }` |

## 主要方法

### EncyclopediaContentPageVM
`public class EncyclopediaContentPageVM(EncyclopediaPageArgs args)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 EncyclopediaContentPageVM 实例
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
var result = encyclopediaContentPageVM.EncyclopediaContentPageVM(args);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaContentPageVM 实例
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.RefreshValues();
```

### InitializeQuickNavigation
`public void InitializeQuickNavigation(EncyclopediaListVM list)`

**用途 / Purpose:** 为 「quick navigation」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 EncyclopediaContentPageVM 实例
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.InitializeQuickNavigation(list);
```

### ExecuteGoToNextItem
`public void ExecuteGoToNextItem()`

**用途 / Purpose:** 执行 「go to next item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaContentPageVM 实例
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.ExecuteGoToNextItem();
```

### ExecuteGoToPreviousItem
`public void ExecuteGoToPreviousItem()`

**用途 / Purpose:** 执行 「go to previous item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaContentPageVM 实例
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.ExecuteGoToPreviousItem();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaContentPageVM encyclopediaContentPageVM = ...;
encyclopediaContentPageVM.EncyclopediaContentPageVM(args);
```

## 参见

- [本区域目录](../)