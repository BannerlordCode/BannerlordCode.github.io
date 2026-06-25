---
title: "LordDefectionCampaignBehavior"
description: "LordDefectionCampaignBehavior 的自动生成类参考。"
---
# LordDefectionCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordDefectionCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/LordDefectionCampaignBehavior.cs`

## 概述

`LordDefectionCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 session launched 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### ClearPersuasion
`public void ClearPersuasion()`

**用途 / Purpose:** 清空当前对象中的persuasion。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.ClearPersuasion();
```

### conversation_lord_player_has_failed_in_defection_on_condition
`public bool conversation_lord_player_has_failed_in_defection_on_condition()`

**用途 / Purpose:** 调用 conversation_lord_player_has_failed_in_defection_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_player_has_failed_in_defection_on_condition();
```

### conversation_lord_recruit_check_if_reservations_met_on_condition
`public bool conversation_lord_recruit_check_if_reservations_met_on_condition()`

**用途 / Purpose:** 调用 conversation_lord_recruit_check_if_reservations_met_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_recruit_check_if_reservations_met_on_condition();
```

### conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition()`

**用途 / Purpose:** 调用 conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition();
```

### conversation_lord_defect_to_clan_without_barter_on_consequence
`public void conversation_lord_defect_to_clan_without_barter_on_consequence()`

**用途 / Purpose:** 调用 conversation_lord_defect_to_clan_without_barter_on_consequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.conversation_lord_defect_to_clan_without_barter_on_consequence();
```

### conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition()`

**用途 / Purpose:** 调用 conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition();
```

### conversation_player_is_asking_to_recruit_enemy_on_condition
`public bool conversation_player_is_asking_to_recruit_enemy_on_condition()`

**用途 / Purpose:** 调用 conversation_player_is_asking_to_recruit_enemy_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_player_is_asking_to_recruit_enemy_on_condition();
```

### conversation_player_is_asking_to_recruit_neutral_on_condition
`public bool conversation_player_is_asking_to_recruit_neutral_on_condition()`

**用途 / Purpose:** 调用 conversation_player_is_asking_to_recruit_neutral_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_player_is_asking_to_recruit_neutral_on_condition();
```

### conversation_lord_from_ruling_clan_on_condition
`public bool conversation_lord_from_ruling_clan_on_condition()`

**用途 / Purpose:** 调用 conversation_lord_from_ruling_clan_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_from_ruling_clan_on_condition();
```

### conversation_lord_redirects_to_clan_leader_on_condition
`public bool conversation_lord_redirects_to_clan_leader_on_condition()`

**用途 / Purpose:** 调用 conversation_lord_redirects_to_clan_leader_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LordDefectionCampaignBehavior 实例
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
var result = lordDefectionCampaignBehavior.conversation_lord_redirects_to_clan_leader_on_condition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LordDefectionCampaignBehavior lordDefectionCampaignBehavior = ...;
lordDefectionCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)