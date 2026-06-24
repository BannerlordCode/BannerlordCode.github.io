<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoardGameCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`

## 概述

`BoardGameCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WonBoardGamesInOneWeekInSettlement` | `public IEnumerable<Settlement> WonBoardGamesInOneWeekInSettlement { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### InitializeConversationVars
`public void InitializeConversationVars()`

**用途 / Purpose:** 初始化 `conversation vars` 的状态、资源或绑定。

### OnMissionStarted
`public void OnMissionStarted(IMission mission)`

**用途 / Purpose:** 当 `mission started` 事件触发时调用此方法。

### OnHeroKilled
`public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 当 `hero killed` 事件触发时调用此方法。

### taverngamehost_player_sitting_now_on_condition
`public static bool taverngamehost_player_sitting_now_on_condition()`

**用途 / Purpose:** 处理 `taverngamehost_player_sitting_now_on_condition` 相关逻辑。

### PlayerWonAgainstTavernChampion
`public void PlayerWonAgainstTavernChampion()`

**用途 / Purpose:** 处理 `player won against tavern champion` 相关逻辑。

### SetBetAmount
`public void SetBetAmount(int bet)`

**用途 / Purpose:** 设置 `bet amount` 的值或状态。

## 使用示例

```csharp
var value = new BoardGameCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)