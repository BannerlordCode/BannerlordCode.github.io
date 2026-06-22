<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BarterVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BarterVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `FiefLbl` | `public string FiefLbl { get; set; }` |
| `PrisonerLbl` | `public string PrisonerLbl { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `OtherLbl` | `public string OtherLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `OfferLbl` | `public string OfferLbl { get; set; }` |
| `DiplomaticLbl` | `public string DiplomaticLbl { get; set; }` |
| `AutoBalanceHint` | `public HintViewModel AutoBalanceHint { get; set; }` |
| `LeftHero` | `public HeroVM LeftHero { get; set; }` |
| `RightHero` | `public HeroVM RightHero { get; set; }` |
| `IsOfferDisabled` | `public bool IsOfferDisabled { get; set; }` |
| `LeftMaxGold` | `public int LeftMaxGold { get; set; }` |
| `RightMaxGold` | `public int RightMaxGold { get; set; }` |
| `LeftNameLbl` | `public string LeftNameLbl { get; set; }` |
| `RightNameLbl` | `public string RightNameLbl { get; set; }` |
| `LeftFiefList` | `public MBBindingList<BarterItemVM> LeftFiefList { get; set; }` |
| `RightFiefList` | `public MBBindingList<BarterItemVM> RightFiefList { get; set; }` |
| `LeftPrisonerList` | `public MBBindingList<BarterItemVM> LeftPrisonerList { get; set; }` |
| `RightPrisonerList` | `public MBBindingList<BarterItemVM> RightPrisonerList { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnInitialized

```csharp
public void OnInitialized()
```

### ExecuteTransferAllLeftFief

```csharp
public void ExecuteTransferAllLeftFief()
```

### ExecuteAutoBalance

```csharp
public void ExecuteAutoBalance()
```

### ExecuteTransferAllLeftItem

```csharp
public void ExecuteTransferAllLeftItem()
```

### ExecuteTransferAllLeftPrisoner

```csharp
public void ExecuteTransferAllLeftPrisoner()
```

### ExecuteTransferAllLeftOther

```csharp
public void ExecuteTransferAllLeftOther()
```

### ExecuteTransferAllRightFief

```csharp
public void ExecuteTransferAllRightFief()
```

### ExecuteTransferAllRightItem

```csharp
public void ExecuteTransferAllRightItem()
```

### ExecuteTransferAllRightPrisoner

```csharp
public void ExecuteTransferAllRightPrisoner()
```

### ExecuteTransferAllRightOther

```csharp
public void ExecuteTransferAllRightOther()
```

### ExecuteOffer

```csharp
public void ExecuteOffer()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### OnTransferItem

```csharp
public void OnTransferItem(Barterable barter, bool isTransferrable)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotkey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotkey)
```

### InitializeStaticContent

```csharp
public void InitializeStaticContent()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)