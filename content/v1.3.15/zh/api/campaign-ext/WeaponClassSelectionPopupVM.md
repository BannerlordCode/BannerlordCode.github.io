---
title: "WeaponClassSelectionPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponClassSelectionPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponClassSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateNewlyUnlockedPiecesCount
`public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece> newlyUnlockedPieces)`

**用途 / Purpose:** 更新 `newly unlocked pieces count` 的状态或数据。

### ExecuteSelectWeaponClass
`public void ExecuteSelectWeaponClass(int index)`

**用途 / Purpose:** 执行 `select weapon class` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 `open popup` 操作或流程。

## 使用示例

```csharp
var value = new WeaponClassSelectionPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)