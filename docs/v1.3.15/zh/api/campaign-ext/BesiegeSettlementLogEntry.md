<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BesiegeSettlementLogEntry`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BesiegeSettlementLogEntry

**命名空间:** TaleWorlds.CampaignSystem.LogEntries
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BesiegeSettlementLogEntry` 是 `TaleWorlds.CampaignSystem.LogEntries` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `OwnerClanBeforeBesiege` | `public Clan OwnerClanBeforeBesiege { get; }` |


## 主要方法

### ToString

```csharp
public override string ToString()
```

### IsRelatedToWar

```csharp
public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)
```

### GetNotificationText

```csharp
public TextObject GetNotificationText()
```

### GetEncyclopediaText

```csharp
public TextObject GetEncyclopediaText()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)