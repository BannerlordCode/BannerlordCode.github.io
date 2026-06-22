<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingHistoryVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingHistoryVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingHistoryVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsDoneAvailable` | `public bool IsDoneAvailable { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `HasItemsInHistory` | `public bool HasItemsInHistory { get; set; }` |
| `HistoryHint` | `public HintViewModel HistoryHint { get; set; }` |
| `HistoryDisabledHint` | `public HintViewModel HistoryDisabledHint { get; set; }` |
| `CraftingHistory` | `public MBBindingList<WeaponDesignSelectorVM> CraftingHistory { get; set; }` |
| `SelectedDesign` | `public WeaponDesignSelectorVM SelectedDesign { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `CancelKey` | `public InputKeyItemVM CancelKey { get; set; }` |
| `DoneKey` | `public InputKeyItemVM DoneKey { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### RefreshAvailability

```csharp
public void RefreshAvailability()
```

### ExecuteOpen

```csharp
public void ExecuteOpen()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### SetDoneKey

```csharp
public void SetDoneKey(HotKey hotkey)
```

### SetCancelKey

```csharp
public void SetCancelKey(HotKey hotkey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)