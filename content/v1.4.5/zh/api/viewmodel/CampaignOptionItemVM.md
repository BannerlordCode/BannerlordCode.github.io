---
title: "CampaignOptionItemVM"
description: "CampaignOptionItemVM 的自动生成类参考。"
---
# CampaignOptionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionItemVM.cs`

## 概述

`CampaignOptionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OptionData` | `public ICampaignOptionData OptionData { get; }` |
| `HideOptionName` | `public bool HideOptionName { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `OptionType` | `public int OptionType { get; set; }` |
| `ValueAsBoolean` | `public bool ValueAsBoolean { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `MinRange` | `public float MinRange { get; set; }` |
| `MaxRange` | `public float MaxRange { get; set; }` |
| `ValueAsRange` | `public float ValueAsRange { get; set; }` |
| `ValueAsString` | `public string ValueAsString { get; set; }` |
| `SelectionSelector` | `public CampaignOptionSelectorVM SelectionSelector { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CampaignOptionItemVM 实例
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.RefreshValues();
```

### RefreshDisabledStatus
`public void RefreshDisabledStatus()`

**用途 / Purpose:** 使 「disabled status」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CampaignOptionItemVM 实例
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.RefreshDisabledStatus();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 「action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CampaignOptionItemVM 实例
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.ExecuteAction();
```

### OnSelectionOptionValueChanged
`public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM> selector)`

**用途 / Purpose:** 在 「selection option value changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignOptionItemVM 实例
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.OnSelectionOptionValueChanged(selector);
```

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 为 「value」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CampaignOptionItemVM 实例
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.SetValue(0);
```

### SetOnValueChangedCallback
`public void SetOnValueChangedCallback(Action<CampaignOptionItemVM> onValueChanged)`

**用途 / Purpose:** 为 「on value changed callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CampaignOptionItemVM 实例
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.SetOnValueChangedCallback(onValueChanged);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CampaignOptionItemVM campaignOptionItemVM = ...;
campaignOptionItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)