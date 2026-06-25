---
title: "BannerColorVM"
description: "BannerColorVM 的自动生成类参考。"
---
# BannerColorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerColorVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs`

## 概述

`BannerColorVM` 位于 `TaleWorlds.Core.ViewModelCollection.BannerEditor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.BannerEditor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ColorID` | `public int ColorID { get; }` |
| `Color` | `public uint Color { get; }` |
| `ColorAsStr` | `public string ColorAsStr { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### ExecuteSelectIcon
`public void ExecuteSelectIcon()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select icon 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BannerColorVM 实例
BannerColorVM bannerColorVM = ...;
bannerColorVM.ExecuteSelectIcon();
```

### SetOnSelectionAction
`public void SetOnSelectionAction(Action<BannerColorVM> onSelection)`

**用途 / Purpose:** **用途 / Purpose:** 为 on selection action 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerColorVM 实例
BannerColorVM bannerColorVM = ...;
bannerColorVM.SetOnSelectionAction(onSelection);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerColorVM bannerColorVM = ...;
bannerColorVM.ExecuteSelectIcon();
```

## 参见

- [本区域目录](../)