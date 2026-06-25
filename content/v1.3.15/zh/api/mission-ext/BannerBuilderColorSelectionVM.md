---
title: "BannerBuilderColorSelectionVM"
description: "BannerBuilderColorSelectionVM 的自动生成类参考。"
---
# BannerBuilderColorSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderColorSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorSelectionVM.cs`

## 概述

`BannerBuilderColorSelectionVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Items` | `public MBBindingList<BannerBuilderColorItemVM> Items { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### EnableWith
`public void EnableWith(int selectedColorID, Action<BannerBuilderColorItemVM> onSelection)`

**用途 / Purpose:** 调用 EnableWith 对应的操作。

```csharp
// 先通过子系统 API 拿到 BannerBuilderColorSelectionVM 实例
BannerBuilderColorSelectionVM bannerBuilderColorSelectionVM = ...;
bannerBuilderColorSelectionVM.EnableWith(0, onSelection);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerBuilderColorSelectionVM bannerBuilderColorSelectionVM = ...;
bannerBuilderColorSelectionVM.EnableWith(0, onSelection);
```

## 参见

- [本区域目录](../)