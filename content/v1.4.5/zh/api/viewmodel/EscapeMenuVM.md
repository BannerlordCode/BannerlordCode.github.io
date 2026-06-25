---
title: "EscapeMenuVM"
description: "EscapeMenuVM 的自动生成类参考。"
---
# EscapeMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu/EscapeMenuVM.cs`

## 概述

`EscapeMenuVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `MenuItems` | `public MBBindingList<EscapeMenuItemVM> MenuItems { get; set; }` |
| `Tips` | `public GameTipsVM Tips { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EscapeMenuVM 实例
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.RefreshValues();
```

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 EscapeMenuVM 实例
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.Tick(0);
```

### RefreshItems
`public void RefreshItems(IEnumerable<EscapeMenuItemVM> items)`

**用途 / Purpose:** 使 「items」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EscapeMenuVM 实例
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.RefreshItems(items);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EscapeMenuVM escapeMenuVM = ...;
escapeMenuVM.RefreshValues();
```

## 参见

- [本区域目录](../)