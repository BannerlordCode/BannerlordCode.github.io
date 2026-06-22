<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanCardSelectionPopupItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanCardSelectionPopupItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanCardSelectionPopupItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Identifier` | `public object Identifier { get; }` |
| `ActionResultText` | `public TextObject ActionResultText { get; }` |
| `Image` | `public ImageIdentifierVM Image { get; set; }` |
| `Properties` | `public MBBindingList<ClanCardSelectionPopupItemPropertyVM> Properties { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `SpriteType` | `public string SpriteType { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `SpriteLabel` | `public string SpriteLabel { get; set; }` |
| `SpecialAction` | `public string SpecialAction { get; set; }` |
| `HasImage` | `public bool HasImage { get; set; }` |
| `HasSprite` | `public bool HasSprite { get; set; }` |
| `IsSpecialActionItem` | `public bool IsSpecialActionItem { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)