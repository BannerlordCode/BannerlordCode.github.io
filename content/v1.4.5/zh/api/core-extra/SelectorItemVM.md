---
title: "SelectorItemVM"
description: "SelectorItemVM 的自动生成类参考。"
---
# SelectorItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core
**Type:** `public class SelectorItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Selector/SelectorItemVM.cs`

## 概述

`SelectorItemVM` 位于 `TaleWorlds.Core.ViewModelCollection.Selector`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Selector` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringItem` | `public string StringItem { get; set; }` |
| `CanBeSelected` | `public bool CanBeSelected { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SelectorItemVM 实例
SelectorItemVM selectorItemVM = ...;
selectorItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SelectorItemVM selectorItemVM = ...;
selectorItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)