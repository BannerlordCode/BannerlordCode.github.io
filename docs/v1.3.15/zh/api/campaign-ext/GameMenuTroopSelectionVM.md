<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuTroopSelectionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenuTroopSelectionVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `Troops` | `public MBBindingList<TroopSelectionItemVM> Troops { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClearSelectionText` | `public string ClearSelectionText { get; set; }` |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText { get; set; }` |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteClearSelection

```csharp
public void ExecuteClearSelection()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotkey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)