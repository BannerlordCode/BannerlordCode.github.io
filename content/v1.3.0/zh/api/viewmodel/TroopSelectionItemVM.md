---
title: "TroopSelectionItemVM"
description: "TroopSelectionItemVM 的自动生成类参考。"
---
# TroopSelectionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopSelectionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs`

## 概述

`TroopSelectionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Troop` | `public TroopRosterElement Troop { get; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsRosterFull` | `public bool IsRosterFull { get; set; }` |
| `IsTroopHero` | `public bool IsTroopHero { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `HeroHealthPercent` | `public int HeroHealthPercent { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AmountText` | `public string AmountText { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## 主要方法

### ExecuteAdd
`public void ExecuteAdd()`

**用途 / Purpose:** 执行 add 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopSelectionItemVM 实例
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteAdd();
```

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 remove 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopSelectionItemVM 实例
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteRemove();
```

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TroopSelectionItemVM 实例
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteLink();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteAdd();
```

## 参见

- [本区域目录](../)