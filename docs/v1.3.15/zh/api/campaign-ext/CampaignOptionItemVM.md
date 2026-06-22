<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptionItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CampaignOptionItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### RefreshDisabledStatus

```csharp
public void RefreshDisabledStatus()
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### OnSelectionOptionValueChanged

```csharp
public void OnSelectionOptionValueChanged(SelectorVM<SelectorItemVM> selector)
```

### SetValue

```csharp
public void SetValue(float value)
```

### SetOnValueChangedCallback

```csharp
public void SetOnValueChangedCallback(Action<CampaignOptionItemVM> onValueChanged)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)