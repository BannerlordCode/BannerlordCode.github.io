<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitmentCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitmentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs`

## 概述

`RecruitmentCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetMercenaryData
`public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)`

**用途 / Purpose:** 获取 `mercenary data` 的当前值。

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `hourly tick party` 相关逻辑。

### OnBeforeSettlementEntered
`public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `before settlement entered` 事件触发时调用此方法。

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**用途 / Purpose:** 处理 `change mercenary type` 相关逻辑。

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**用途 / Purpose:** 处理 `change mercenary count` 相关逻辑。

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `available mercenary`。

## 使用示例

```csharp
var value = new RecruitmentCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)