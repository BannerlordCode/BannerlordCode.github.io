<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomSettlementSortControllerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomSettlementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`

## 概述

`KingdomSettlementSortControllerVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TypeState` | `public int TypeState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `OwnerState` | `public int OwnerState { get; set; }` |
| `ProsperityState` | `public int ProsperityState { get; set; }` |
| `DefendersState` | `public int DefendersState { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsDefendersSelected` | `public bool IsDefendersSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsProsperitySelected` | `public bool IsProsperitySelected { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new KingdomSettlementSortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)