<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownManagementVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownManagementVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TownManagementVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CompletionText` | `public string CompletionText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ManageText` | `public string ManageText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `WallsText` | `public string WallsText { get; set; }` |
| `CurrentProjectText` | `public string CurrentProjectText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `IsGovernorSelectionEnabled` | `public bool IsGovernorSelectionEnabled { get; set; }` |
| `IsTown` | `public bool IsTown { get; set; }` |
| `Show` | `public bool Show { get; set; }` |
| `IsThereCurrentProject` | `public bool IsThereCurrentProject { get; set; }` |
| `IsSelectingGovernor` | `public bool IsSelectingGovernor { get; set; }` |
| `MiddleFirstTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleFirstTextList { get; set; }` |
| `MiddleSecondTextList` | `public MBBindingList<TownManagementDescriptionItemVM> MiddleSecondTextList { get; set; }` |
| `Shops` | `public MBBindingList<TownManagementShopItemVM> Shops { get; set; }` |
| `Villages` | `public MBBindingList<TownManagementVillageItemVM> Villages { get; set; }` |
| `GovernorSelectionDisabledHint` | `public HintViewModel GovernorSelectionDisabledHint { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)