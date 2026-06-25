---
title: "HeirSelectionPopupVM"
description: "HeirSelectionPopupVM 的自动生成类参考。"
---
# HeirSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup/HeirSelectionPopupVM.cs`

## 概述

`HeirSelectionPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `AgeLabel` | `public string AgeLabel { get; set; }` |
| `CultureLabel` | `public string CultureLabel { get; set; }` |
| `OccupationLabel` | `public string OccupationLabel { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `HeirApparents` | `public MBBindingList<HeirSelectionPopupHeroVM> HeirApparents { get; set; }` |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero { get; set; }` |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupVM 实例
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.Update();
```

### ExecuteSelectHeir
`public void ExecuteSelectHeir()`

**用途 / Purpose:** 执行 「select heir」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupVM 实例
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.ExecuteSelectHeir();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupVM 实例
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupVM 实例
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 HeirSelectionPopupVM 实例
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeirSelectionPopupVM heirSelectionPopupVM = ...;
heirSelectionPopupVM.Update();
```

## 参见

- [本区域目录](../)