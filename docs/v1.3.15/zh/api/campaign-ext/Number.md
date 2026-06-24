<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Number`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Number

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class Number`
**领域:** campaign-ext

## 概述

`Number` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetConversationHeroPoliticalPhilosophy
`public bool GetConversationHeroPoliticalPhilosophy(out TextObject philosophyString)`

**用途 / Purpose:** 获取 `conversation hero political philosophy` 的当前值。

### GetConversationHeroPoliticalPhilosophy_2
`public bool GetConversationHeroPoliticalPhilosophy_2(out TextObject philosophyString_2)`

**用途 / Purpose:** 获取 `conversation hero political philosophy_2` 的当前值。

### GetConversationHeroPoliticalPhilosophy_3
`public bool GetConversationHeroPoliticalPhilosophy_3(out TextObject philosophyString_3)`

**用途 / Purpose:** 获取 `conversation hero political philosophy_3` 的当前值。

### GetLiegeTitle
`public TextObject GetLiegeTitle()`

**用途 / Purpose:** 获取 `liege title` 的当前值。

### UsesLordConversations
`public bool UsesLordConversations(Hero hero)`

**用途 / Purpose:** 处理 `uses lord conversations` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### conversation_player_marriage_list_options_on_consequence
`public static void conversation_player_marriage_list_options_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_marriage_list_options_on_consequence` 相关逻辑。

### conversation_player_marriage_select_on_condition
`public bool conversation_player_marriage_select_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_marriage_select_on_condition` 相关逻辑。

### conversation_player_marriage_on_consequence
`public void conversation_player_marriage_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_marriage_on_consequence` 相关逻辑。

### conversation_player_marriage_on_refusal_consequence
`public void conversation_player_marriage_on_refusal_consequence()`

**用途 / Purpose:** 处理 `conversation_player_marriage_on_refusal_consequence` 相关逻辑。

### conversation_player_children_marriage_on_condition
`public bool conversation_player_children_marriage_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_children_marriage_on_condition` 相关逻辑。

### conversation_player_children_marriage_list_options_on_consequence
`public void conversation_player_children_marriage_list_options_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_children_marriage_list_options_on_consequence` 相关逻辑。

### conversation_player_children_marriage_select_on_condition
`public bool conversation_player_children_marriage_select_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_children_marriage_select_on_condition` 相关逻辑。

### conversation_player_children_marriage_on_consequence
`public void conversation_player_children_marriage_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_children_marriage_on_consequence` 相关逻辑。

### conversation_player_children_marriage_on_refusal_consequence
`public void conversation_player_children_marriage_on_refusal_consequence()`

**用途 / Purpose:** 处理 `conversation_player_children_marriage_on_refusal_consequence` 相关逻辑。

### conversation_wanderer_generic_introduction_on_condition
`public bool conversation_wanderer_generic_introduction_on_condition()`

**用途 / Purpose:** 处理 `conversation_wanderer_generic_introduction_on_condition` 相关逻辑。

### conversation_lord_active_mission_response_cont_on_condition
`public bool conversation_lord_active_mission_response_cont_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_active_mission_response_cont_on_condition` 相关逻辑。

### conversation_mission_in_progress_on_condition
`public bool conversation_mission_in_progress_on_condition()`

**用途 / Purpose:** 处理 `conversation_mission_in_progress_on_condition` 相关逻辑。

### conversation_lord_active_mission_response_failed_on_condition
`public bool conversation_lord_active_mission_response_failed_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_active_mission_response_failed_on_condition` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 Number 实例，再调用它的公开方法
var value = new Number();
value.GetConversationHeroPoliticalPhilosophy(philosophyString);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
