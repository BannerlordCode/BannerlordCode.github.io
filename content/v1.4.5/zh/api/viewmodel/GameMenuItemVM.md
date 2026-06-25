---
title: "GameMenuItemVM"
description: "GameMenuItemVM 的自动生成类参考。"
---
# GameMenuItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu/GameMenuItemVM.cs`

## 概述

`GameMenuItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OptionID` | `public string OptionID { get; }` |
| `GameMenuOption` | `public GameMenuOption GameMenuOption { get; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `OptionLeaveType` | `public string OptionLeaveType { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `ItemHint` | `public HintViewModel ItemHint { get; set; }` |
| `QuestHint` | `public HintViewModel QuestHint { get; set; }` |
| `IssueHint` | `public HintViewModel IssueHint { get; set; }` |
| `GameMenuStringId` | `public string GameMenuStringId { get; set; }` |
| `Item` | `public string Item { get; set; }` |
| `BattleSize` | `public int BattleSize { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |

## 主要方法

### InitializeWith
`public void InitializeWith(in GameMenuItemCreationData data)`

**用途 / Purpose:** 为 「with」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameMenuItemVM 实例
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.InitializeWith(data);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuItemVM 实例
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 「action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuItemVM 实例
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.ExecuteAction();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuItemVM 实例
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.OnFinalize();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuItemVM 实例
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.Refresh();
```

### UpdateWith
`public void UpdateWith(GameMenuItemVM newItem)`

**用途 / Purpose:** 重新计算并更新 「with」 的最新表示。

```csharp
// 先通过子系统 API 拿到 GameMenuItemVM 实例
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.UpdateWith(newItem);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuItemVM gameMenuItemVM = ...;
gameMenuItemVM.InitializeWith(data);
```

## 参见

- [本区域目录](../)