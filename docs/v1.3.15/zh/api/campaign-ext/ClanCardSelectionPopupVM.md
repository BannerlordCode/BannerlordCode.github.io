<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanCardSelectionPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanCardSelectionPopupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanCardSelectionPopupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Items` | `public MBBindingList<ClanCardSelectionPopupItemVM> Items { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `ActionResult` | `public string ActionResult { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### Open

```csharp
public void Open(ClanCardSelectionInfo info)
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)