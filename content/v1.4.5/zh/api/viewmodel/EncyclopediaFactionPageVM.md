---
title: "EncyclopediaFactionPageVM"
description: "EncyclopediaFactionPageVM 的自动生成类参考。"
---
# EncyclopediaFactionPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaFactionPageVM : EncyclopediaContentPageVM`
**Base:** `EncyclopediaContentPageVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaFactionPageVM.cs`

## 概述

`EncyclopediaFactionPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Clans` | `public MBBindingList<EncyclopediaFactionVM> Clans { get; set; }` |
| `Enemies` | `public MBBindingList<EncyclopediaFactionVM> Enemies { get; set; }` |
| `TradeAgreements` | `public MBBindingList<EncyclopediaFactionVM> TradeAgreements { get; set; }` |
| `Alliances` | `public MBBindingList<EncyclopediaFactionVM> Alliances { get; set; }` |
| `Settlements` | `public MBBindingList<EncyclopediaSettlementVM> Settlements { get; set; }` |
| `History` | `public MBBindingList<EncyclopediaHistoryEventVM> History { get; set; }` |
| `Leader` | `public HeroVM Leader { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `EnemiesText` | `public string EnemiesText { get; set; }` |
| `TradeAgreementsText` | `public string TradeAgreementsText { get; set; }` |
| `AlliancesText` | `public string AlliancesText { get; set; }` |
| `ClansText` | `public string ClansText { get; set; }` |
| `SettlementsText` | `public string SettlementsText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `DescriptorText` | `public string DescriptorText { get; set; }` |
| `InformationText` | `public string InformationText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ProsperityHint` | `public HintViewModel ProsperityHint { get; set; }` |
| `StrengthHint` | `public HintViewModel StrengthHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaFactionPageVM 实例
EncyclopediaFactionPageVM encyclopediaFactionPageVM = ...;
encyclopediaFactionPageVM.RefreshValues();
```

### Refresh
`public override void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 EncyclopediaFactionPageVM 实例
EncyclopediaFactionPageVM encyclopediaFactionPageVM = ...;
encyclopediaFactionPageVM.Refresh();
```

### GetName
`public override string GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaFactionPageVM 实例
EncyclopediaFactionPageVM encyclopediaFactionPageVM = ...;
var result = encyclopediaFactionPageVM.GetName();
```

### GetNavigationBarURL
`public override string GetNavigationBarURL()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 navigation bar u r l 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaFactionPageVM 实例
EncyclopediaFactionPageVM encyclopediaFactionPageVM = ...;
var result = encyclopediaFactionPageVM.GetNavigationBarURL();
```

### ExecuteSwitchBookmarkedState
`public override void ExecuteSwitchBookmarkedState()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch bookmarked state 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaFactionPageVM 实例
EncyclopediaFactionPageVM encyclopediaFactionPageVM = ...;
encyclopediaFactionPageVM.ExecuteSwitchBookmarkedState();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaFactionPageVM encyclopediaFactionPageVM = ...;
encyclopediaFactionPageVM.RefreshValues();
```

## 参见

- [本区域目录](../)