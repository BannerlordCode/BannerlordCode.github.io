<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SPItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPItemVM : ItemVM`
**Base:** `ItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs`

## 概述

`SPItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InventorySide` | `public InventoryLogic.InventorySide InventorySide { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsArtifact` | `public bool IsArtifact { get; set; }` |
| `IsTransferable` | `public bool IsTransferable { get; set; }` |
| `IsTransferButtonHighlighted` | `public bool IsTransferButtonHighlighted { get; set; }` |
| `IsItemHighlightEnabled` | `public bool IsItemHighlightEnabled { get; set; }` |
| `IsCivilianItem` | `public bool IsCivilianItem { get; set; }` |
| `IsStealthItem` | `public bool IsStealthItem { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsGenderDifferent` | `public bool IsGenderDifferent { get; set; }` |
| `CanBeSlaughtered` | `public bool CanBeSlaughtered { get; set; }` |
| `CanBeDonated` | `public bool CanBeDonated { get; set; }` |
| `IsEquipableItem` | `public bool IsEquipableItem { get; set; }` |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `ItemCount` | `public int ItemCount { get; set; }` |
| `ItemLevel` | `public int ItemLevel { get; set; }` |
| `ProfitType` | `public int ProfitType { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `TotalCost` | `public int TotalCost { get; set; }` |
| `TradeData` | `public InventoryTradeVM TradeData { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshWith
`public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)`

**用途 / Purpose:** 刷新 `with` 的显示或缓存。

### ExecuteBuySingle
`public void ExecuteBuySingle()`

**用途 / Purpose:** 执行 `buy single` 操作或流程。

### ExecuteBuy
`public void ExecuteBuy(int amount)`

**用途 / Purpose:** 执行 `buy` 操作或流程。

### ExecuteSellSingle
`public void ExecuteSellSingle()`

**用途 / Purpose:** 执行 `sell single` 操作或流程。

### ExecuteSell
`public void ExecuteSell(int amount)`

**用途 / Purpose:** 执行 `sell` 操作或流程。

### ExecuteSellItem
`public void ExecuteSellItem()`

**用途 / Purpose:** 执行 `sell item` 操作或流程。

### ExecuteConcept
`public void ExecuteConcept()`

**用途 / Purpose:** 执行 `concept` 操作或流程。

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**用途 / Purpose:** 执行 `reset trade` 操作或流程。

### UpdateTradeData
`public void UpdateTradeData(bool forceUpdateAmounts)`

**用途 / Purpose:** 更新 `trade data` 的状态或数据。

### ExecuteSlaughterItem
`public void ExecuteSlaughterItem()`

**用途 / Purpose:** 执行 `slaughter item` 操作或流程。

### ExecuteDonateItem
`public void ExecuteDonateItem()`

**用途 / Purpose:** 执行 `donate item` 操作或流程。

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 `set focused` 操作或流程。

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 `set unfocused` 操作或流程。

### UpdateCanBeSlaughtered
`public void UpdateCanBeSlaughtered()`

**用途 / Purpose:** 更新 `can be slaughtered` 的状态或数据。

### UpdateHintTexts
`public void UpdateHintTexts()`

**用途 / Purpose:** 更新 `hint texts` 的状态或数据。

### GetProfitTypeFromDiff
`public static SPItemVM.ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)`

**用途 / Purpose:** 获取 `profit type from diff` 的当前值。

## 使用示例

```csharp
var value = new SPItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)