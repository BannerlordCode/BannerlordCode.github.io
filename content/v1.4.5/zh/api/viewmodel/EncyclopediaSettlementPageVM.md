---
title: "EncyclopediaSettlementPageVM"
description: "EncyclopediaSettlementPageVM 的自动生成类参考。"
---
# EncyclopediaSettlementPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaSettlementPageVM.cs`

## 概述

`EncyclopediaSettlementPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OwnerBanner` | `public EncyclopediaFactionVM OwnerBanner { get; set; }` |
| `BoundSettlement` | `public EncyclopediaSettlementVM BoundSettlement { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `IsTrackerButtonHighlightEnabled` | `public bool IsTrackerButtonHighlightEnabled { get; set; }` |
| `HasBoundSettlement` | `public bool HasBoundSettlement { get; set; }` |
| `SettlementCropPosition` | `public double SettlementCropPosition { get; set; }` |
| `BoundSettlementText` | `public string BoundSettlementText { get; set; }` |
| `TrackText` | `public string TrackText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `SettlementName` | `public string SettlementName { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `SettlementImageID` | `public string SettlementImageID { get; set; }` |
| `NotableCharactersText` | `public string NotableCharactersText { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `NotableCharacters` | `public MBBindingList<HeroVM> NotableCharacters { get; set; }` |
| `ShowInMapHint` | `public HintViewModel ShowInMapHint { get; set; }` |
| `LeftSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> LeftSideProperties { get; set; }` |
| `RightSideProperties` | `public MBBindingList<EncyclopediaSettlementPageStatItemVM> RightSideProperties { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CultureText` | `public string CultureText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `IsVisualTrackerSelected` | `public bool IsVisualTrackerSelected { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.Refresh();
```

### GetName
`public override string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
var result = encyclopediaSettlementPageVM.GetName();
```

### ExecuteTrack
`public void ExecuteTrack()`

**用途 / Purpose:** 执行 track 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.ExecuteTrack();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** 读取并返回当前对象中 navigation bar u r l 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
var result = encyclopediaSettlementPageVM.GetNavigationBarURL();
```

### ExecuteBoundSettlementLink
`public void ExecuteBoundSettlementLink()`

**用途 / Purpose:** 执行 bound settlement link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.ExecuteBoundSettlementLink();
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** 执行 switch bookmarked state 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.ExecuteSwitchBookmarkedState();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSettlementPageVM 实例
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaSettlementPageVM encyclopediaSettlementPageVM = ...;
encyclopediaSettlementPageVM.RefreshValues();
```

## 参见

- [本区域目录](../)