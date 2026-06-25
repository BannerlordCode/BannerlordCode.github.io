---
title: "GameMenuPartyItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuPartyItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/GameMenuPartyItemVM.cs`

## 概述

`GameMenuPartyItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Relation` | `public int Relation { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsCharacterInPrison` | `public bool IsCharacterInPrison { get; set; }` |
| `HasShips` | `public bool HasShips { get; set; }` |
| `IsIdle` | `public bool IsIdle { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsAlly` | `public bool IsAlly { get; set; }` |
| `IsNeutral` | `public bool IsNeutral { get; set; }` |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `PowerText` | `public string PowerText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `ProfessionText` | `public string ProfessionText { get; set; }` |
| `EncyclopediaCursorEffect` | `public string EncyclopediaCursorEffect { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |
| `PartySize` | `public int PartySize { get; set; }` |
| `PartyWoundedSize` | `public int PartyWoundedSize { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `PartySizeLbl` | `public string PartySizeLbl { get; set; }` |
| `IsLeader` | `public bool IsLeader { get; set; }` |

## 主要方法

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteSetAsContextMenuItem
`public void ExecuteSetAsContextMenuItem()`

**用途 / Purpose:** 执行 `set as context menu item` 操作或流程。

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** 执行 `open encyclopedia` 操作或流程。

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** 执行 `close tooltip` 操作或流程。

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**用途 / Purpose:** 执行 `open tooltip` 操作或流程。

### RefreshProperties
`public void RefreshProperties()`

**用途 / Purpose:** 刷新 `properties` 的显示或缓存。

### RefreshQuestStatus
`public void RefreshQuestStatus()`

**用途 / Purpose:** 刷新 `quest status` 的显示或缓存。

### RefreshVisual
`public void RefreshVisual()`

**用途 / Purpose:** 刷新 `visual` 的显示或缓存。

### RefreshCounts
`public void RefreshCounts()`

**用途 / Purpose:** 刷新 `counts` 的显示或缓存。

### GetPartyDescriptionTextFromValues
`public string GetPartyDescriptionTextFromValues()`

**用途 / Purpose:** 获取 `party description text from values` 的当前值。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new GameMenuPartyItemVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)