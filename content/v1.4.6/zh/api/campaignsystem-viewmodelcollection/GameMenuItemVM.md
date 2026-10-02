---
title: "GameMenuItemVM"
description: "GameMenuItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 25 个（方法 6、属性 17、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs。"
---
# GameMenuItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## 概述

GameMenuItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameMenuItemVM → ViewModel。public/protected 成员共 25 个：6 方法、17 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu），继承链 GameMenuItemVM → ViewModel。成员构成以属性为主（属性 17/25，方法 6/25），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OptionID` | `public string OptionID` | 属性 |
| `GameMenuOption` | `public GameMenuOption GameMenuOption` | 属性 |
| `GameMenuItemVM` | `public GameMenuItemVM()` | 构造函数 |
| `InitializeWith` | `public void InitializeWith(in GameMenuItemVM.GameMenuItemCreationData data)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `UpdateWith` | `public void UpdateWith(GameMenuItemVM newItem)` | 方法 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |
| `OptionLeaveType` | `public string OptionLeaveType` | 属性 |
| `ItemType` | `public int ItemType` | 属性 |
| `IsWaitActive` | `public bool IsWaitActive` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | 属性 |
| `ItemHint` | `public HintViewModel ItemHint` | 属性 |
| `QuestHint` | `public HintViewModel QuestHint` | 属性 |
| `IssueHint` | `public HintViewModel IssueHint` | 属性 |
| `GameMenuStringId` | `public string GameMenuStringId` | 属性 |
| `Item` | `public string Item` | 属性 |
| `BattleSize` | `public int BattleSize` | 属性 |
| `IsNavalBattle` | `public bool IsNavalBattle` | 属性 |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | 属性 |
| `GameMenuItemCreationData` | `public readonly struct GameMenuItemCreationData` | 属性 |
| `GameMenuItemCreationData` | `public readonly struct GameMenuItemCreationData` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GameMenuItemProgressVM](../GameMenuItemProgressVM)
- [同命名空间 GameMenuPlunderItemVM](../GameMenuPlunderItemVM)
- [同命名空间 GameMenuVM](../GameMenuVM)
