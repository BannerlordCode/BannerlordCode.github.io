<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionOptionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionOptionVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PersuasionOptionVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsPersuasionResultReady` | `public bool IsPersuasionResultReady { get; set; }` |
| `IsABlockingOption` | `public bool IsABlockingOption { get; set; }` |
| `IsAProgressingOption` | `public bool IsAProgressingOption { get; set; }` |
| `SuccessChance` | `public int SuccessChance { get; set; }` |
| `PersuasionResultIndex` | `public int PersuasionResultIndex { get; set; }` |
| `FailChance` | `public int FailChance { get; set; }` |
| `CritSuccessChance` | `public int CritSuccessChance { get; set; }` |
| `CritFailChance` | `public int CritFailChance { get; set; }` |
| `FailChanceText` | `public string FailChanceText { get; set; }` |
| `CritFailChanceText` | `public string CritFailChanceText { get; set; }` |
| `SuccessChanceText` | `public string SuccessChanceText { get; set; }` |
| `CritSuccessChanceText` | `public string CritSuccessChanceText { get; set; }` |
| `CritFailHint` | `public BasicTooltipViewModel CritFailHint { get; set; }` |
| `FailHint` | `public BasicTooltipViewModel FailHint { get; set; }` |
| `SuccessHint` | `public BasicTooltipViewModel SuccessHint { get; set; }` |
| `CritSuccessHint` | `public BasicTooltipViewModel CritSuccessHint { get; set; }` |
| `BlockingOptionHint` | `public HintViewModel BlockingOptionHint { get; set; }` |
| `ProgressingOptionHint` | `public HintViewModel ProgressingOptionHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetPersuasionAdditionalText

```csharp
public string GetPersuasionAdditionalText()
```

### ExecuteReadyToContinue

```csharp
public void ExecuteReadyToContinue()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)