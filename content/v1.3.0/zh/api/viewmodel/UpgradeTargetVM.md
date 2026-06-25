---
title: "UpgradeTargetVM"
description: "UpgradeTargetVM 的自动生成类参考。"
---
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
| `Requirements` | `public UpgradeRequirementsVM Requirements { get; set; }` |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `AvailableUpgrades` | `public int AvailableUpgrades { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |
| `IsHighlighted` | `public bool IsHighlighted { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 UpgradeTargetVM 实例
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.RefreshValues();
```

### Refresh
`public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 UpgradeTargetVM 实例
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.Refresh(0, false, false, false, false, "example");
```

### ExecuteUpgradeEncyclopediaLink
`public void ExecuteUpgradeEncyclopediaLink()`

**用途 / Purpose:** 执行 「upgrade encyclopedia link」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 UpgradeTargetVM 实例
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteUpgradeEncyclopediaLink();
```

### ExecuteUpgrade
`public void ExecuteUpgrade()`

**用途 / Purpose:** 执行 「upgrade」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 UpgradeTargetVM 实例
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteUpgrade();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 「set focused」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 UpgradeTargetVM 实例
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 「set unfocused」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 UpgradeTargetVM 实例
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteSetUnfocused();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.RefreshValues();
```

## 参见

- [本区域目录](../)