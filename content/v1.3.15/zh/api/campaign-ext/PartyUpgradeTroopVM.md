---
title: "PartyUpgradeTroopVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyUpgradeTroopVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyUpgradeTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`

## 概述

`PartyUpgradeTroopVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UpgradeCostText` | `public string UpgradeCostText { get; set; }` |
| `UpgradesAndRequirementsText` | `public string UpgradesAndRequirementsText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnRanOutTroop
`public void OnRanOutTroop(PartyCharacterVM troop)`

**用途 / Purpose:** 当 `ran out troop` 事件触发时调用此方法。

### OnTroopUpgraded
`public void OnTroopUpgraded()`

**用途 / Purpose:** 当 `troop upgraded` 事件触发时调用此方法。

### OpenPopUp
`public override void OpenPopUp()`

**用途 / Purpose:** 处理 `open pop up` 相关逻辑。

### ExecuteDone
`public override void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public override void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteItemPrimaryAction
`public override void ExecuteItemPrimaryAction()`

**用途 / Purpose:** 执行 `item primary action` 操作或流程。

### ExecuteItemSecondaryAction
`public override void ExecuteItemSecondaryAction()`

**用途 / Purpose:** 执行 `item secondary action` 操作或流程。

### ExecuteItemTertiaryAction
`public override void ExecuteItemTertiaryAction()`

**用途 / Purpose:** 执行 `item tertiary action` 操作或流程。

## 使用示例

```csharp
var value = new PartyUpgradeTroopVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)