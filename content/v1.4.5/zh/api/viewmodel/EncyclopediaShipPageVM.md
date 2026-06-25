---
title: "EncyclopediaShipPageVM"
description: "EncyclopediaShipPageVM 的自动生成类参考。"
---
# EncyclopediaShipPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaShipPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaShipPageVM.cs`

## 概述

`EncyclopediaShipPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `AvailableUpgradesText` | `public string AvailableUpgradesText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `PrefabId` | `public string PrefabId { get; set; }` |
| `StatsText` | `public string StatsText { get; set; }` |
| `SailType` | `public string SailType { get; set; }` |
| `SailTypeStat` | `public EncyclopediaShipStatVM SailTypeStat { get; set; }` |
| `StatList` | `public MBBindingList<EncyclopediaShipStatVM> StatList { get; set; }` |
| `AllShipSlots` | `public MBBindingList<EncyclopediaShipSlotVM> AllShipSlots { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaShipPageVM 实例
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.RefreshValues();
```

### GetName
`public override string GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaShipPageVM 实例
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
var result = encyclopediaShipPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 navigation bar u r l 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaShipPageVM 实例
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
var result = encyclopediaShipPageVM.GetNavigationBarURL();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** **用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaShipPageVM 实例
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.ExecuteLink("example");
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch bookmarked state 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaShipPageVM 实例
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.ExecuteSwitchBookmarkedState();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaShipPageVM encyclopediaShipPageVM = ...;
encyclopediaShipPageVM.RefreshValues();
```

## 参见

- [本区域目录](../)