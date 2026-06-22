<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerBattleEndedLogEntry`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerBattleEndedLogEntry

**命名空间:** TaleWorlds.CampaignSystem.LogEntries
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PlayerBattleEndedLogEntry` 是 `TaleWorlds.CampaignSystem.LogEntries` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsNavalBattle` | `public bool IsNavalBattle { get; }` |
| `PlayerCasualties` | `public int PlayerCasualties { get; }` |
| `HasHeavyCausality` | `public bool HasHeavyCausality { get; }` |
| `IsAgainstGreatOdds` | `public bool IsAgainstGreatOdds { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |


## 主要方法

### GetImportanceForClan

```csharp
public override ImportanceEnum GetImportanceForClan(Clan clan)
```

### GetConversationScoreAndComment

```csharp
public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

### ToString

```csharp
public override string ToString()
```

### GetNotificationText

```csharp
public TextObject GetNotificationText()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)