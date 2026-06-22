<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDecisionsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionsVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`KingdomDecisionsVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsCurrentDecisionActive` | `public bool IsCurrentDecisionActive { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFrameTick

```csharp
public void OnFrameTick()
```

### HandleNextDecision

```csharp
public void HandleNextDecision()
```

### HandleDecision

```csharp
public void HandleDecision(KingdomDecision curDecision)
```

### RefreshWith

```csharp
public void RefreshWith(KingdomDecision decision)
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