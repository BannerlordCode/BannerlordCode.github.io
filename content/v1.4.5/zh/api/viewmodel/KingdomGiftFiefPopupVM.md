---
title: "KingdomGiftFiefPopupVM"
description: "KingdomGiftFiefPopupVM 的自动生成类参考。"
---
# KingdomGiftFiefPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomGiftFiefPopupVM.cs`

## 概述

`KingdomGiftFiefPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GiftText` | `public string GiftText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(Settlement settlement)`

**用途 / Purpose:** 打开with对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.OpenWith(settlement);
```

### ExecuteGiftSettlement
`public void ExecuteGiftSettlement()`

**用途 / Purpose:** 执行 gift settlement 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.ExecuteGiftSettlement();
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.ExecuteClose();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomGiftFiefPopupVM 实例
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.SetCancelInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)