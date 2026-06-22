<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPKillFeedVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPKillFeedVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SPKillFeedVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed { get; set; }` |


## 主要方法

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)
```

### OnPersonalKill

```csharp
public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)
```

### OnPersonalDamage

```csharp
public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)
```

### OnPersonalMessage

```csharp
public void OnPersonalMessage(string message)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)