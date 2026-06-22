<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomGiftFiefPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomGiftFiefPopupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomGiftFiefPopupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GiftText` | `public string GiftText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OpenWith

```csharp
public void OpenWith(Settlement settlement)
```

### ExecuteGiftSettlement

```csharp
public void ExecuteGiftSettlement()
```

### ExecuteClose

```csharp
public void ExecuteClose()
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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)