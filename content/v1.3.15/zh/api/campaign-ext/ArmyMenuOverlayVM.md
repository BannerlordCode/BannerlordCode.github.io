---
title: "ArmyMenuOverlayVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyMenuOverlayVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**Base:** `GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnFrameTick
`public override void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### Refresh
`public sealed override void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteOpenArmyManagement
`public void ExecuteOpenArmyManagement()`

**用途 / Purpose:** 执行 `open army management` 操作或流程。

## 使用示例

```csharp
var value = new ArmyMenuOverlayVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)