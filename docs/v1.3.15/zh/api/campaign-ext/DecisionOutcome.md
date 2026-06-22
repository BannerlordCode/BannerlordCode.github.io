<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DecisionOutcome`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionOutcome

**命名空间:** TaleWorlds.CampaignSystem.Election
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`DecisionOutcome` 是 `TaleWorlds.CampaignSystem.Election` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Support` | `public float Support { get; }` |
| `Merit` | `public float Merit { get; set; }` |
| `SponsorClan` | `public Clan SponsorClan { get; set; }` |
| `InitialSupport` | `public float InitialSupport { get; set; }` |
| `Likelihood` | `public float Likelihood { get; set; }` |
| `TotalSupportPoints` | `public float TotalSupportPoints { get; set; }` |
| `WinChance` | `public float WinChance { get; set; }` |


## 主要方法

### GetDecisionTitle

```csharp
public abstract TextObject GetDecisionTitle()
```

### GetDecisionDescription

```csharp
public abstract TextObject GetDecisionDescription()
```

### GetDecisionLink

```csharp
public abstract string GetDecisionLink()
```

### GetDecisionImageIdentifier

```csharp
public abstract ImageIdentifier GetDecisionImageIdentifier()
```

### AddSupport

```csharp
public void AddSupport(Supporter supporter)
```

### ResetSupport

```csharp
public void ResetSupport(Supporter supporter)
```

### SetSponsor

```csharp
public void SetSponsor(Clan sponsorClan)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)