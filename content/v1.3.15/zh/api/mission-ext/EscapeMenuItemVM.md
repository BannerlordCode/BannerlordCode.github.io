---
title: "EscapeMenuItemVM"
description: "EscapeMenuItemVM 的自动生成类参考。"
---
# EscapeMenuItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs`

## 概述

`EscapeMenuItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EscapeMenuItemVM 实例
EscapeMenuItemVM escapeMenuItemVM = ...;
escapeMenuItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EscapeMenuItemVM 实例
EscapeMenuItemVM escapeMenuItemVM = ...;
escapeMenuItemVM.ExecuteAction();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EscapeMenuItemVM escapeMenuItemVM = ...;
escapeMenuItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)