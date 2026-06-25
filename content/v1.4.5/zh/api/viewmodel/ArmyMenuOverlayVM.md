---
title: "ArmyMenuOverlayVM"
description: "ArmyMenuOverlayVM 的自动生成类参考。"
---
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/ArmyMenuOverlayVM.cs`

## 概述

`ArmyMenuOverlayVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `CanManageArmy` | `public bool CanManageArmy { get; set; }` |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader { get; set; }` |
| `ManCountText` | `public string ManCountText { get; set; }` |
| `Food` | `public int Food { get; set; }` |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint { get; set; }` |
| `ManCountHint` | `public BasicTooltipViewModel ManCountHint { get; set; }` |
| `FoodHint` | `public BasicTooltipViewModel FoodHint { get; set; }` |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyMenuOverlayVM 实例
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyMenuOverlayVM 实例
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.OnFinalize();
```

### OnFrameTick
`public override void OnFrameTick(float dt)`

**用途 / Purpose:** 在 「frame tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyMenuOverlayVM 实例
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.OnFrameTick(0);
```

### Refresh
`public sealed override void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyMenuOverlayVM 实例
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.Refresh();
```

### ExecuteOpenArmyManagement
`public void ExecuteOpenArmyManagement()`

**用途 / Purpose:** 执行 「open army management」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyMenuOverlayVM 实例
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.ExecuteOpenArmyManagement();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyMenuOverlayVM armyMenuOverlayVM = ...;
armyMenuOverlayVM.RefreshValues();
```

## 参见

- [本区域目录](../)