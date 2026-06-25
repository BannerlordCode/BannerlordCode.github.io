---
title: "WeaponClassSelectionPopupVM"
description: "WeaponClassSelectionPopupVM 的自动生成类参考。"
---
# WeaponClassSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponClassSelectionPopupVM.cs`

## 概述

`WeaponClassSelectionPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PopupHeader` | `public string PopupHeader { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `WeaponClasses` | `public MBBindingList<WeaponClassVM> WeaponClasses { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 WeaponClassSelectionPopupVM 实例
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.RefreshValues();
```

### UpdateNewlyUnlockedPiecesCount
`public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece> newlyUnlockedPieces)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 newly unlocked pieces count 的最新表示。

```csharp
// 先通过子系统 API 拿到 WeaponClassSelectionPopupVM 实例
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.UpdateNewlyUnlockedPiecesCount(newlyUnlockedPieces);
```

### ExecuteSelectWeaponClass
`public void ExecuteSelectWeaponClass(int index)`

**用途 / Purpose:** **用途 / Purpose:** 执行 select weapon class 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponClassSelectionPopupVM 实例
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.ExecuteSelectWeaponClass(0);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponClassSelectionPopupVM 实例
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.ExecuteClosePopup();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open popup 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponClassSelectionPopupVM 实例
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.ExecuteOpenPopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)