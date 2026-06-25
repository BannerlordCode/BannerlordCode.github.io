---
title: "RecruitVolunteerTroopVM"
description: "RecruitVolunteerTroopVM 的自动生成类参考。"
---
# RecruitVolunteerTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerTroopVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment/RecruitVolunteerTroopVM.cs`

## 概述

`RecruitVolunteerTroopVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Level` | `public string Level { get; set; }` |
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled { get; set; }` |
| `Wage` | `public int Wage { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.RefreshValues();
```

### ExecuteRecruit
`public void ExecuteRecruit()`

**用途 / Purpose:** **用途 / Purpose:** 执行 recruit 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteRecruit();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteOpenEncyclopedia();
```

### ExecuteRemoveFromCart
`public void ExecuteRemoveFromCart()`

**用途 / Purpose:** **用途 / Purpose:** 执行 remove from cart 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteRemoveFromCart();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 begin hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**用途 / Purpose:** **用途 / Purpose:** 执行 end hint 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteEndHint();
```

### ExecuteFocus
`public void ExecuteFocus()`

**用途 / Purpose:** **用途 / Purpose:** 执行 focus 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteFocus();
```

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**用途 / Purpose:** **用途 / Purpose:** 执行 unfocus 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RecruitVolunteerTroopVM 实例
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteUnfocus();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.RefreshValues();
```

## 参见

- [本区域目录](../)