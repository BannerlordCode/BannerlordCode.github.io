<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Education
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EducationVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Education` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `StageTitleText` | `public string StageTitleText { get; set; }` |
| `ChooseText` | `public string ChooseText { get; set; }` |
| `PageDescriptionText` | `public string PageDescriptionText { get; set; }` |
| `OptionEffectText` | `public string OptionEffectText { get; set; }` |
| `OptionDescriptionText` | `public string OptionDescriptionText { get; set; }` |
| `NextText` | `public string NextText { get; set; }` |
| `PreviousText` | `public string PreviousText { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |
| `CanGoBack` | `public bool CanGoBack { get; set; }` |
| `OnlyHasOneOption` | `public bool OnlyHasOneOption { get; set; }` |
| `Options` | `public MBBindingList<EducationOptionVM> Options { get; set; }` |
| `GainedPropertiesController` | `public EducationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `Review` | `public EducationReviewVM Review { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteNextStage

```csharp
public void ExecuteNextStage()
```

### ExecutePreviousStage

```csharp
public void ExecutePreviousStage()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)