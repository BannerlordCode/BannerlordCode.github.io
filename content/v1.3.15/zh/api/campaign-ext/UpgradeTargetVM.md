---
title: "UpgradeTargetVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UpgradeTargetVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UpgradeTargetVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class UpgradeTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs`

## 概述

`UpgradeTargetVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `Requirements` | `public UpgradeRequirementsVM Requirements { get; set; }` |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `AvailableUpgrades` | `public int AvailableUpgrades { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |
| `IsHighlighted` | `public bool IsHighlighted { get; set; }` |
| `IsMarinerTroop` | `public bool IsMarinerTroop { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Refresh
`public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteUpgradeEncyclopediaLink
`public void ExecuteUpgradeEncyclopediaLink()`

**用途 / Purpose:** 执行 `upgrade encyclopedia link` 操作或流程。

### ExecuteUpgrade
`public void ExecuteUpgrade()`

**用途 / Purpose:** 执行 `upgrade` 操作或流程。

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 `set focused` 操作或流程。

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 `set unfocused` 操作或流程。

## 使用示例

```csharp
var value = new UpgradeTargetVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)