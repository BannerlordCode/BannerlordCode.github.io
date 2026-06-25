---
title: "PerkSelectionVM"
description: "PerkSelectionVM 的自动生成类参考。"
---
# PerkSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection/PerkSelectionVM.cs`

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

**用途 / Purpose:** 为 current selection perk 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PerkSelectionVM 实例
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.SetCurrentSelectionPerk(perk);
```

### ResetSelectedPerks
`public void ResetSelectedPerks()`

**用途 / Purpose:** 将 selected perks 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PerkSelectionVM 实例
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.ResetSelectedPerks();
```

### ApplySelectedPerks
`public void ApplySelectedPerks()`

**用途 / Purpose:** 将 selected perks 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 PerkSelectionVM 实例
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.ApplySelectedPerks();
```

### IsPerkSelected
`public bool IsPerkSelected(PerkObject perk)`

**用途 / Purpose:** 判断当前对象是否处于 perk selected 状态或条件。

```csharp
// 先通过子系统 API 拿到 PerkSelectionVM 实例
PerkSelectionVM perkSelectionVM = ...;
var result = perkSelectionVM.IsPerkSelected(perk);
```

### IsAnyPerkSelected
`public bool IsAnyPerkSelected()`

**用途 / Purpose:** 判断当前对象是否处于 any perk selected 状态或条件。

```csharp
// 先通过子系统 API 拿到 PerkSelectionVM 实例
PerkSelectionVM perkSelectionVM = ...;
var result = perkSelectionVM.IsAnyPerkSelected();
```

### ExecuteDeactivate
`public void ExecuteDeactivate()`

**用途 / Purpose:** 执行 deactivate 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PerkSelectionVM 实例
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.ExecuteDeactivate();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PerkSelectionVM perkSelectionVM = ...;
perkSelectionVM.SetCurrentSelectionPerk(perk);
```

## 参见

- [本区域目录](../)