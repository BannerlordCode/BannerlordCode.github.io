---
title: "CampaignOptionItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptionItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionItemVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshDisabledStatus
`public void RefreshDisabledStatus()`

**用途 / Purpose:** 刷新 `disabled status` 的显示或缓存。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### OnSelectionOptionValueChanged
`public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM> selector)`

**用途 / Purpose:** 当 `selection option value changed` 事件触发时调用此方法。

### SetValue
`public void SetValue(float value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### SetOnValueChangedCallback
`public void SetOnValueChangedCallback(Action<CampaignOptionItemVM> onValueChanged)`

**用途 / Purpose:** 设置 `on value changed callback` 的值或状态。

## 使用示例

```csharp
var value = new CampaignOptionItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)