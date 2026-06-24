<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPKillFeedVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPKillFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed/SPKillFeedVM.cs`

## 概述

`SPKillFeedVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed { get; set; }` |

## 主要方法

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnPersonalKill
`public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)`

**用途 / Purpose:** 当 `personal kill` 事件触发时调用此方法。

### OnPersonalDamage
`public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)`

**用途 / Purpose:** 当 `personal damage` 事件触发时调用此方法。

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**用途 / Purpose:** 当 `personal message` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SPKillFeedVM();
value.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## 参见

- [完整类目录](../catalog)