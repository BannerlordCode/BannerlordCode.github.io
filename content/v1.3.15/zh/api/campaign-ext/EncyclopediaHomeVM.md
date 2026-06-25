---
title: "EncyclopediaHomeVM"
description: "EncyclopediaHomeVM 的自动生成类参考。"
---
# EncyclopediaHomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHomeVM : EncyclopediaPageVM`
**Base:** `EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs`

## 概述

`EncyclopediaHomeVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsListActive` | `public bool IsListActive { get; set; }` |
| `HomeTitleText` | `public string HomeTitleText { get; set; }` |
| `Lists` | `public MBBindingList<ListTypeVM> Lists { get; set; }` |

## 主要方法

### Refresh
`public override void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHomeVM 实例
EncyclopediaHomeVM encyclopediaHomeVM = ...;
encyclopediaHomeVM.Refresh();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHomeVM 实例
EncyclopediaHomeVM encyclopediaHomeVM = ...;
encyclopediaHomeVM.RefreshValues();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 navigation bar u r l 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHomeVM 实例
EncyclopediaHomeVM encyclopediaHomeVM = ...;
var result = encyclopediaHomeVM.GetNavigationBarURL();
```

### GetName
`public override string GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaHomeVM 实例
EncyclopediaHomeVM encyclopediaHomeVM = ...;
var result = encyclopediaHomeVM.GetName();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaHomeVM encyclopediaHomeVM = ...;
encyclopediaHomeVM.Refresh();
```

## 参见

- [本区域目录](../)