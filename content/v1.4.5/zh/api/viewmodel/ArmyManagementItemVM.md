---
title: "ArmyManagementItemVM"
description: "ArmyManagementItemVM 的自动生成类参考。"
---
# ArmyManagementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementItemVM.cs`

## 概述

`ArmyManagementItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DistInTime` | `public float DistInTime { get; set; }` |
| `_distance` | `public float _distance { get; set; }` |
| `Clan` | `public Clan Clan { get; set; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `Strength` | `public int Strength { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `HasShip` | `public bool HasShip { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `InArmyText` | `public string InArmyText { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsCostRelevant` | `public bool IsCostRelevant { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `LordFace` | `public CharacterImageIdentifierVM LordFace { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsAlreadyWithPlayer` | `public bool IsAlreadyWithPlayer { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |
| `LeaderNameText` | `public string LeaderNameText { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteAction();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set focused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set unfocused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteSetUnfocused();
```

### UpdateEligibility
`public void UpdateEligibility()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 eligibility 的最新表示。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.UpdateEligibility();
```

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 begin hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteBeginHint();
```

### ExecuteBeginClanHint
`public void ExecuteBeginClanHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 begin clan hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteBeginClanHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 end hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteEndHint();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteOpenEncyclopedia();
```

### ExecuteOpenClanEncyclopedia
`public void ExecuteOpenClanEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open clan encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyManagementItemVM 实例
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteOpenClanEncyclopedia();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)