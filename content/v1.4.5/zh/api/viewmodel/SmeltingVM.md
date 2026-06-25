---
title: "SmeltingVM"
description: "SmeltingVM 的自动生成类参考。"
---
# SmeltingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingVM.cs`

## 概述

`SmeltingVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponTypeName` | `public string WeaponTypeName { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `SmeltableItemList` | `public MBBindingList<SmeltingItemVM> SmeltableItemList { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `SortController` | `public SmeltingSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SmeltingVM 实例
SmeltingVM smeltingVM = ...;
smeltingVM.RefreshValues();
```

### RefreshList
`public void RefreshList()`

**用途 / Purpose:** 使 list 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SmeltingVM 实例
SmeltingVM smeltingVM = ...;
smeltingVM.RefreshList();
```

### TrySmeltingSelectedItems
`public void TrySmeltingSelectedItems(Hero currentCraftingHero)`

**用途 / Purpose:** 尝试获取 smelting selected items 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 SmeltingVM 实例
SmeltingVM smeltingVM = ...;
smeltingVM.TrySmeltingSelectedItems(currentCraftingHero);
```

### SaveItemLockStates
`public void SaveItemLockStates()`

**用途 / Purpose:** 将 item lock states 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 SmeltingVM 实例
SmeltingVM smeltingVM = ...;
smeltingVM.SaveItemLockStates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SmeltingVM smeltingVM = ...;
smeltingVM.RefreshValues();
```

## 参见

- [本区域目录](../)