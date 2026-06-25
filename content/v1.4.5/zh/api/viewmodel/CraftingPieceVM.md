---
title: "CraftingPieceVM"
description: "CraftingPieceVM 的自动生成类参考。"
---
# CraftingPieceVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingPieceVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/CraftingPieceVM.cs`

## 概述

`CraftingPieceVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `ItemAttributeIcons` | `public MBBindingList<CraftingItemFlagVM> ItemAttributeIcons { get; set; }` |
| `PlayerHasPiece` | `public bool PlayerHasPiece { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Tier` | `public int Tier { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ImageIdentifier` | `public CraftingPieceImageIdentifierVM ImageIdentifier { get; set; }` |
| `PieceType` | `public int PieceType { get; set; }` |
| `IsNewlyUnlocked` | `public bool IsNewlyUnlocked { get; set; }` |

## 主要方法

### RefreshFlagIcons
`public void RefreshFlagIcons()`

**用途 / Purpose:** **用途 / Purpose:** 使 flag icons 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingPieceVM 实例
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.RefreshFlagIcons();
```

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingPieceVM 实例
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.ExecuteOpenTooltip();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingPieceVM 实例
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.ExecuteCloseTooltip();
```

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingPieceVM 实例
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.ExecuteSelect();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.RefreshFlagIcons();
```

## 参见

- [本区域目录](../)