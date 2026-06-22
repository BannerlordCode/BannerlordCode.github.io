<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNavigationItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNavigationItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapNavigationItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasAlert` | `public bool HasAlert { get; set; }` |
| `ItemId` | `public string ItemId { get; set; }` |
| `AlertText` | `public string AlertText { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `AlertTooltip` | `public BasicTooltipViewModel AlertTooltip { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshStates

```csharp
public void RefreshStates(bool forceRefresh = false)
```

### ExecuteOpen

```csharp
public void ExecuteOpen()
```

### ExecuteGoToLink

```csharp
public void ExecuteGoToLink()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)