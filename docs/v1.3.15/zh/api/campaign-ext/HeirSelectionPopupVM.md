<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeirSelectionPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionPopupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HeirSelectionPopupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `NameLabel` | `public string NameLabel { get; set; }` |
| `AgeLabel` | `public string AgeLabel { get; set; }` |
| `CultureLabel` | `public string CultureLabel { get; set; }` |
| `OccupationLabel` | `public string OccupationLabel { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `HeirApparents` | `public MBBindingList<HeirSelectionPopupHeroVM> HeirApparents { get; set; }` |
| `CurrentSelectedHero` | `public HeirSelectionPopupHeroVM CurrentSelectedHero { get; set; }` |
| `AreHotkeysVisible` | `public bool AreHotkeysVisible { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## 主要方法

### Update

```csharp
public void Update()
```

### ExecuteSelectHeir

```csharp
public void ExecuteSelectHeir()
```

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)