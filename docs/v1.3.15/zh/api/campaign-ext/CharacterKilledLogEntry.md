<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterKilledLogEntry`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterKilledLogEntry

**命名空间:** TaleWorlds.CampaignSystem.LogEntries
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterKilledLogEntry` 是 `TaleWorlds.CampaignSystem.LogEntries` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |


## 主要方法

### AsReasonForEnmity

```csharp
public override int AsReasonForEnmity(Hero potentialKiller, Hero potentialRelative)
```

### ToString

```csharp
public override string ToString()
```

### GetHistoricComment

```csharp
public override TextObject GetHistoricComment(Hero talkTroop)
```

### GetNotificationText

```csharp
public TextObject GetNotificationText()
```

### GetEncyclopediaText

```csharp
public TextObject GetEncyclopediaText()
```

### IsRelatedToWar

```csharp
public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)