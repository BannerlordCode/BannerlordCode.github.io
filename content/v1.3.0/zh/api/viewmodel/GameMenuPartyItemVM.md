---
title: "GameMenuPartyItemVM"
description: "GameMenuPartyItemVM 的自动生成类参考。"
---
# GameMenuPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuPartyItemVM.cs`

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

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshValues();
```

### ExecuteSetAsContextMenuItem
`public void ExecuteSetAsContextMenuItem()`

**用途 / Purpose:** 执行 「set as context menu item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteSetAsContextMenuItem();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** 执行 「open encyclopedia」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteOpenEncyclopedia();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** 执行 「close tooltip」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteCloseTooltip();
```

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**用途 / Purpose:** 执行 「open tooltip」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.ExecuteOpenTooltip();
```

### RefreshProperties
`public void RefreshProperties()`

**用途 / Purpose:** 使 「properties」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshProperties();
```

### RefreshQuestStatus
`public void RefreshQuestStatus()`

**用途 / Purpose:** 使 「quest status」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshQuestStatus();
```

### RefreshVisual
`public void RefreshVisual()`

**用途 / Purpose:** 使 「visual」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshVisual();
```

### RefreshCounts
`public void RefreshCounts()`

**用途 / Purpose:** 使 「counts」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshCounts();
```

### GetPartyDescriptionTextFromValues
`public string GetPartyDescriptionTextFromValues()`

**用途 / Purpose:** 读取并返回当前对象中 「party description text from values」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
var result = gameMenuPartyItemVM.GetPartyDescriptionTextFromValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.OnFinalize();
```

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 GameMenuPartyItemVM 实例
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
var result = gameMenuPartyItemVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuPartyItemVM gameMenuPartyItemVM = ...;
gameMenuPartyItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)