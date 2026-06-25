---
title: "PerkVM"
description: "PerkVM 的自动生成类参考。"
---
# PerkVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs`

## 概述

`PerkVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentState` | `public PerkVM.PerkStates CurrentState { get; }` |
| `IsInSelection` | `public bool IsInSelection { get; set; }` |
| `IsTutorialHighlightEnabled` | `public bool IsTutorialHighlightEnabled { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `PerkState` | `public int PerkState { get; set; }` |
| `AlternativeType` | `public int AlternativeType { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `BackgroundImage` | `public string BackgroundImage { get; set; }` |
| `PerkId` | `public string PerkId { get; set; }` |

## 主要方法

### RefreshState
`public void RefreshState()`

**用途 / Purpose:** 使 state 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PerkVM 实例
PerkVM perkVM = ...;
perkVM.RefreshState();
```

### ExecuteShowPerkConcept
`public void ExecuteShowPerkConcept()`

**用途 / Purpose:** 执行 show perk concept 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PerkVM 实例
PerkVM perkVM = ...;
perkVM.ExecuteShowPerkConcept();
```

### ExecuteStartSelection
`public void ExecuteStartSelection()`

**用途 / Purpose:** 执行 start selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PerkVM 实例
PerkVM perkVM = ...;
perkVM.ExecuteStartSelection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PerkVM perkVM = ...;
perkVM.RefreshState();
```

## 参见

- [本区域目录](../)