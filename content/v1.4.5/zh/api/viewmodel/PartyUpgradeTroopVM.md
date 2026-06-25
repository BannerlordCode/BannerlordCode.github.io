---
title: "PartyUpgradeTroopVM"
description: "PartyUpgradeTroopVM 的自动生成类参考。"
---
# PartyUpgradeTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.RefreshValues();
```

### OnRanOutTroop
`public void OnRanOutTroop(PartyCharacterVM troop)`

**用途 / Purpose:** 在 「ran out troop」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.OnRanOutTroop(troop);
```

### OnTroopUpgraded
`public void OnTroopUpgraded()`

**用途 / Purpose:** 在 「troop upgraded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.OnTroopUpgraded();
```

### OpenPopUp
`public override void OpenPopUp()`

**用途 / Purpose:** 打开「pop up」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.OpenPopUp();
```

### ExecuteDone
`public override void ExecuteDone()`

**用途 / Purpose:** 执行 「done」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteDone();
```

### ExecuteCancel
`public override void ExecuteCancel()`

**用途 / Purpose:** 执行 「cancel」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteCancel();
```

### ExecuteItemPrimaryAction
`public override void ExecuteItemPrimaryAction()`

**用途 / Purpose:** 执行 「item primary action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteItemPrimaryAction();
```

### ExecuteItemSecondaryAction
`public override void ExecuteItemSecondaryAction()`

**用途 / Purpose:** 执行 「item secondary action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteItemSecondaryAction();
```

### ExecuteItemTertiaryAction
`public override void ExecuteItemTertiaryAction()`

**用途 / Purpose:** 执行 「item tertiary action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyUpgradeTroopVM 实例
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.ExecuteItemTertiaryAction();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyUpgradeTroopVM partyUpgradeTroopVM = ...;
partyUpgradeTroopVM.RefreshValues();
```

## 参见

- [本区域目录](../)