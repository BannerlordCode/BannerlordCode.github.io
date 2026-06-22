<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LogEntry`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LogEntry

**命名空间:** TaleWorlds.CampaignSystem.LogEntries
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`LogEntry` 是 `TaleWorlds.CampaignSystem.LogEntries` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public long Id { get; }` |
| `GameTime` | `public CampaignTime GameTime { get; }` |
| `KeepInHistoryTime` | `public virtual CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public virtual ChatNotificationType NotificationType { get; }` |


## 主要方法

### AddLogEntry

```csharp
public static void AddLogEntry(LogEntry logEntry)
```

### AddLogEntry

```csharp
public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)
```

### GetImportanceForClan

```csharp
public virtual ImportanceEnum GetImportanceForClan(Clan clan)
```

### GetConversationScoreAndComment

```csharp
public virtual void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

### GetAsRumor

```csharp
public virtual int GetAsRumor(Settlement settlement, out TextObject comment)
```

### GetHistoricComment

```csharp
public virtual TextObject GetHistoricComment(Hero talkTroop)
```

### AsReasonForEnmity

```csharp
public virtual int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)
```

### GetValueAsPoliticsAbuseOfPower

```csharp
public virtual int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)
```

### GetValueAsPoliticsSlightedClan

```csharp
public virtual int GetValueAsPoliticsSlightedClan(Hero referenceTroop, Hero liege)
```

### GetValueAsPoliticsShowedWeakness

```csharp
public virtual int GetValueAsPoliticsShowedWeakness(Hero referenceTroop, Hero liege)
```

### IsValid

```csharp
public virtual bool IsValid()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)