---
title: "MarriageOfferPopupVM"
description: "MarriageOfferPopupVM 的自动生成类参考。"
---
# MarriageOfferPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MarriageOfferPopup/MarriageOfferPopupVM.cs`

## 概述

`MarriageOfferPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `AgeText` | `public string AgeText { get; set; }` |
| `OccupationText` | `public string OccupationText { get; set; }` |
| `RelationText` | `public string RelationText { get; set; }` |
| `ConsequencesText` | `public string ConsequencesText { get; set; }` |
| `ConsequencesList` | `public MBBindingList<BindingListStringItem> ConsequencesList { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `OffereeClanMember` | `public MarriageOfferPopupHeroVM OffereeClanMember { get; set; }` |
| `OffererClanMember` | `public MarriageOfferPopupHeroVM OffererClanMember { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.Update();
```

### ExecuteAcceptOffer
`public void ExecuteAcceptOffer()`

**用途 / Purpose:** **用途 / Purpose:** 执行 accept offer 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.ExecuteAcceptOffer();
```

### ExecuteDeclineOffer
`public void ExecuteDeclineOffer()`

**用途 / Purpose:** **用途 / Purpose:** 执行 decline offer 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.ExecuteDeclineOffer();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.OnFinalize();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**用途 / Purpose:** **用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.ExecuteLink("example");
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MarriageOfferPopupVM 实例
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.Update();
```

## 参见

- [本区域目录](../)