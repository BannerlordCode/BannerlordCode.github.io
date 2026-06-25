---
title: "PerkSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkSelectionVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PerkSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs`

## 概述

`PerkSelectionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AvailablePerks` | `public MBBindingList<PerkSelectionItemVM> AvailablePerks { get; set; }` |

## 主要方法

### SetCurrentSelectionPerk
`public void SetCurrentSelectionPerk(PerkVM perk)`

**用途 / Purpose:** 设置 `current selection perk` 的值或状态。

### ResetSelectedPerks
`public void ResetSelectedPerks()`

**用途 / Purpose:** 将 `selected perks` 重置为初始状态。

### ApplySelectedPerks
`public void ApplySelectedPerks()`

**用途 / Purpose:** 将 `selected perks` 应用到当前对象。

### IsPerkSelected
`public bool IsPerkSelected(PerkObject perk)`

**用途 / Purpose:** 处理 `is perk selected` 相关逻辑。

### IsAnyPerkSelected
`public bool IsAnyPerkSelected()`

**用途 / Purpose:** 处理 `is any perk selected` 相关逻辑。

### ExecuteDeactivate
`public void ExecuteDeactivate()`

**用途 / Purpose:** 执行 `deactivate` 操作或流程。

## 使用示例

```csharp
var value = new PerkSelectionVM();
value.SetCurrentSelectionPerk(perk);
```

## 参见

- [完整类目录](../catalog)