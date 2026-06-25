---
title: "CraftingPieceListVM"
description: "CraftingPieceListVM 的自动生成类参考。"
---
# CraftingPieceListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingPieceListVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs`

## 概述

`CraftingPieceListVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces { get; set; }` |
| `Pieces` | `public MBBindingList<CraftingPieceVM> Pieces { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectedPiece` | `public CraftingPieceVM SelectedPiece { get; set; }` |

## 主要方法

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** 执行 「select」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingPieceListVM 实例
CraftingPieceListVM craftingPieceListVM = ...;
craftingPieceListVM.ExecuteSelect();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingPieceListVM 实例
CraftingPieceListVM craftingPieceListVM = ...;
craftingPieceListVM.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingPieceListVM craftingPieceListVM = ...;
craftingPieceListVM.ExecuteSelect();
```

## 参见

- [本区域目录](../)