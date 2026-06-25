---
title: "LordConversationsCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordConversationsCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LordConversationsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordConversationsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/LordConversationsCampaignBehavior.cs`

## 概述

`LordConversationsCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

### conversation_lord_active_mission_response_failed_on_consequence
`public void conversation_lord_active_mission_response_failed_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_active_mission_response_failed_on_consequence` 相关逻辑。

### conversation_lord_is_threated_neutral_on_condition
`public bool conversation_lord_is_threated_neutral_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_is_threated_neutral_on_condition` 相关逻辑。

### conversation_player_can_attack_hero_on_condition
`public bool conversation_player_can_attack_hero_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_can_attack_hero_on_condition` 相关逻辑。

### barter_peace_offer_reject_on_condition
`public bool barter_peace_offer_reject_on_condition()`

**用途 / Purpose:** 处理 `barter_peace_offer_reject_on_condition` 相关逻辑。

### barter_offer_reject_on_condition
`public bool barter_offer_reject_on_condition()`

**用途 / Purpose:** 处理 `barter_offer_reject_on_condition` 相关逻辑。

### barter_offer_accept_peace_on_condition
`public bool barter_offer_accept_peace_on_condition()`

**用途 / Purpose:** 处理 `barter_offer_accept_peace_on_condition` 相关逻辑。

### barter_offer_accept_let_go_on_condition
`public bool barter_offer_accept_let_go_on_condition()`

**用途 / Purpose:** 处理 `barter_offer_accept_let_go_on_condition` 相关逻辑。

### barter_offer_accept_on_condition
`public bool barter_offer_accept_on_condition()`

**用途 / Purpose:** 处理 `barter_offer_accept_on_condition` 相关逻辑。

### conversation_player_is_leaving_faction_on_condition
`public bool conversation_player_is_leaving_faction_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_leaving_faction_on_condition` 相关逻辑。

### conversation_player_is_offering_mercenary_on_condition
`public bool conversation_player_is_offering_mercenary_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_offering_mercenary_on_condition` 相关逻辑。

### conversation_player_is_offering_mercenary_on_clickable_condition
`public bool conversation_player_is_offering_mercenary_on_clickable_condition(out TextObject hintText)`

**用途 / Purpose:** 处理 `conversation_player_is_offering_mercenary_on_clickable_condition` 相关逻辑。

### conversation_player_is_offering_vassalage_on_condition
`public bool conversation_player_is_offering_vassalage_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_offering_vassalage_on_condition` 相关逻辑。

### conversation_player_is_offering_vassalage_on_clickable_condition
`public bool conversation_player_is_offering_vassalage_on_clickable_condition(out TextObject hintText)`

**用途 / Purpose:** 处理 `conversation_player_is_offering_vassalage_on_clickable_condition` 相关逻辑。

### conversation_player_is_offering_vassalage_while_at_mercenary_service_on_condition
`public bool conversation_player_is_offering_vassalage_while_at_mercenary_service_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_offering_vassalage_while_at_mercenary_service_on_condition` 相关逻辑。

### conversation_player_is_asking_service_while_in_faction_on_condition
`public bool conversation_player_is_asking_service_while_in_faction_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_asking_service_while_in_faction_on_condition` 相关逻辑。

### conversation_player_is_offering_vassalage_to_lord_on_condition
`public bool conversation_player_is_offering_vassalage_to_lord_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_offering_vassalage_to_lord_on_condition` 相关逻辑。

### lord_ask_enter_service_vassalage_talking_with_king_on_condition
`public bool lord_ask_enter_service_vassalage_talking_with_king_on_condition()`

**用途 / Purpose:** 处理 `lord_ask_enter_service_vassalage_talking_with_king_on_condition` 相关逻辑。

### conversation_lord_ask_recruit_mercenary_response_on_condition
`public bool conversation_lord_ask_recruit_mercenary_response_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_ask_recruit_mercenary_response_on_condition` 相关逻辑。

### conversation_player_want_to_fire_mercenary_on_condition
`public bool conversation_player_want_to_fire_mercenary_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_fire_mercenary_on_condition` 相关逻辑。

### conversation_player_want_to_hire_mercenary_on_condition
`public bool conversation_player_want_to_hire_mercenary_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_hire_mercenary_on_condition` 相关逻辑。

### conversation_player_want_to_fire_mercenary_there_is_debt_on_condition
`public bool conversation_player_want_to_fire_mercenary_there_is_debt_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_fire_mercenary_there_is_debt_on_condition` 相关逻辑。

### conversation_player_want_to_fire_mercenary_no_debt_on_condition
`public bool conversation_player_want_to_fire_mercenary_no_debt_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_fire_mercenary_no_debt_on_condition` 相关逻辑。

### conversation_player_want_to_fire_mercenary_with_paying_debt_on_condition
`public bool conversation_player_want_to_fire_mercenary_with_paying_debt_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_fire_mercenary_with_paying_debt_on_condition` 相关逻辑。

### conversation_mercenary_response_on_condition_reject
`public bool conversation_mercenary_response_on_condition_reject()`

**用途 / Purpose:** 处理 `conversation_mercenary_response_on_condition_reject` 相关逻辑。

### conversation_mercenary_response_on_condition_reject_because_of_financial_reasons
`public bool conversation_mercenary_response_on_condition_reject_because_of_financial_reasons()`

**用途 / Purpose:** 处理 `conversation_mercenary_response_on_condition_reject_because_of_financial_reasons` 相关逻辑。

### conversation_mercenary_response_not_leader_on_condition
`public bool conversation_mercenary_response_not_leader_on_condition()`

**用途 / Purpose:** 处理 `conversation_mercenary_response_not_leader_on_condition` 相关逻辑。

### conversation_mercenary_response_on_condition
`public bool conversation_mercenary_response_on_condition()`

**用途 / Purpose:** 处理 `conversation_mercenary_response_on_condition` 相关逻辑。

### conversation_player_want_to_join_faction_as_mercenary_or_vassal_on_condition
`public bool conversation_player_want_to_join_faction_as_mercenary_or_vassal_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_join_faction_as_mercenary_or_vassal_on_condition` 相关逻辑。

### conversation_player_want_to_end_service_as_mercenary_on_condition
`public bool conversation_player_want_to_end_service_as_mercenary_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_want_to_end_service_as_mercenary_on_condition` 相关逻辑。

### conversation_player_want_to_end_service_as_mercenary_on_consequence
`public void conversation_player_want_to_end_service_as_mercenary_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_want_to_end_service_as_mercenary_on_consequence` 相关逻辑。

### player_ask_to_join_players_party_on_condition
`public static bool player_ask_to_join_players_party_on_condition()`

**用途 / Purpose:** 处理 `player_ask_to_join_players_party_on_condition` 相关逻辑。

### conversation_mercenary_player_accepts_lord_answer_on_consequence
`public void conversation_mercenary_player_accepts_lord_answer_on_consequence()`

**用途 / Purpose:** 处理 `conversation_mercenary_player_accepts_lord_answer_on_consequence` 相关逻辑。

### conversation_player_has_question_on_condition
`public bool conversation_player_has_question_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_has_question_on_condition` 相关逻辑。

### conversation_hero_main_options_discussions
`public bool conversation_hero_main_options_discussions()`

**用途 / Purpose:** 处理 `conversation_hero_main_options_discussions` 相关逻辑。

### conversation_lord_talk_politics_during_siege_parley_on_condition
`public bool conversation_lord_talk_politics_during_siege_parley_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_talk_politics_during_siege_parley_on_condition` 相关逻辑。

### conversation_player_is_asking_pardon_on_condition
`public bool conversation_player_is_asking_pardon_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_asking_pardon_on_condition` 相关逻辑。

### conversation_player_is_asking_peace_on_condition
`public bool conversation_player_is_asking_peace_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_asking_peace_on_condition` 相关逻辑。

### conversation_player_is_leaving_neutral_or_friendly_on_condition
`public bool conversation_player_is_leaving_neutral_or_friendly_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_leaving_neutral_or_friendly_on_condition` 相关逻辑。

### conversation_player_is_leaving_enemy_on_condition
`public bool conversation_player_is_leaving_enemy_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_leaving_enemy_on_condition` 相关逻辑。

### conversation_player_is_leaving_enemy_prisoner_on_condition
`public bool conversation_player_is_leaving_enemy_prisoner_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_leaving_enemy_prisoner_on_condition` 相关逻辑。

### conversation_cheat_lord_diagnostics_on_condition
`public bool conversation_cheat_lord_diagnostics_on_condition()`

**用途 / Purpose:** 处理 `conversation_cheat_lord_diagnostics_on_condition` 相关逻辑。

### conversation_cheat_other_lords_on_condition
`public bool conversation_cheat_other_lords_on_condition()`

**用途 / Purpose:** 处理 `conversation_cheat_other_lords_on_condition` 相关逻辑。

### conversation_player_dont_attack_we_surrender_on_condition
`public bool conversation_player_dont_attack_we_surrender_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_dont_attack_we_surrender_on_condition` 相关逻辑。

### conversation_cheat_faction_enmities_on_condition
`public bool conversation_cheat_faction_enmities_on_condition()`

**用途 / Purpose:** 处理 `conversation_cheat_faction_enmities_on_condition` 相关逻辑。

### GetReasonForEnmity
`public TextObject GetReasonForEnmity(Hero lord1, Hero lord2, Hero talkTroop)`

**用途 / Purpose:** 获取 `reason for enmity` 的当前值。

### conversation_cheat_reputation_on_condition
`public bool conversation_cheat_reputation_on_condition()`

**用途 / Purpose:** 处理 `conversation_cheat_reputation_on_condition` 相关逻辑。

### conversation_lord_leave_on_condition
`public bool conversation_lord_leave_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_leave_on_condition` 相关逻辑。

### conversation_lord_leave_on_consequence
`public void conversation_lord_leave_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_leave_on_consequence` 相关逻辑。

### conversation_capture_defeated_lord_on_condition
`public bool conversation_capture_defeated_lord_on_condition()`

**用途 / Purpose:** 处理 `conversation_capture_defeated_lord_on_condition` 相关逻辑。

### conversation_liberate_known_hero_on_condition
`public bool conversation_liberate_known_hero_on_condition()`

**用途 / Purpose:** 处理 `conversation_liberate_known_hero_on_condition` 相关逻辑。

### conversation_liberate_unmet_hero_on_condition
`public bool conversation_liberate_unmet_hero_on_condition()`

**用途 / Purpose:** 处理 `conversation_liberate_unmet_hero_on_condition` 相关逻辑。

### conversation_reprisoner_hero_decision_on_condition
`public bool conversation_reprisoner_hero_decision_on_condition()`

**用途 / Purpose:** 处理 `conversation_reprisoner_hero_decision_on_condition` 相关逻辑。

### conversation_player_liberates_prisoner_on_consequence
`public void conversation_player_liberates_prisoner_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_liberates_prisoner_on_consequence` 相关逻辑。

### conversation_player_fails_to_release_prisoner_on_consequence
`public void conversation_player_fails_to_release_prisoner_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_fails_to_release_prisoner_on_consequence` 相关逻辑。

### conversation_ally_thanks_meet_after_helping_in_battle_on_condition
`public bool conversation_ally_thanks_meet_after_helping_in_battle_on_condition()`

**用途 / Purpose:** 处理 `conversation_ally_thanks_meet_after_helping_in_battle_on_condition` 相关逻辑。

### conversation_ally_thanks_after_helping_in_battle_on_condition
`public bool conversation_ally_thanks_after_helping_in_battle_on_condition()`

**用途 / Purpose:** 处理 `conversation_ally_thanks_after_helping_in_battle_on_condition` 相关逻辑。

### conversation_talk_lord_defeat_to_lord_capture_on_consequence
`public void conversation_talk_lord_defeat_to_lord_capture_on_consequence()`

**用途 / Purpose:** 处理 `conversation_talk_lord_defeat_to_lord_capture_on_consequence` 相关逻辑。

### conversation_talk_lord_defeat_to_lord_capture_and_kill_on_consequence
`public void conversation_talk_lord_defeat_to_lord_capture_and_kill_on_consequence()`

**用途 / Purpose:** 处理 `conversation_talk_lord_defeat_to_lord_capture_and_kill_on_consequence` 相关逻辑。

### conversation_talk_lord_release_noncombatant_on_condition
`public bool conversation_talk_lord_release_noncombatant_on_condition()`

**用途 / Purpose:** 处理 `conversation_talk_lord_release_noncombatant_on_condition` 相关逻辑。

### conversation_talk_lord_release_combatant_on_condition
`public bool conversation_talk_lord_release_combatant_on_condition()`

**用途 / Purpose:** 处理 `conversation_talk_lord_release_combatant_on_condition` 相关逻辑。

### conversation_player_ask_ruling_philosophy_on_condition
`public bool conversation_player_ask_ruling_philosophy_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_ask_ruling_philosophy_on_condition` 相关逻辑。

### conversation_player_has_long_ruling_philosophy_on_condition
`public bool conversation_player_has_long_ruling_philosophy_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_has_long_ruling_philosophy_on_condition` 相关逻辑。

### conversation_talk_lord_defeat_to_lord_release_on_consequence
`public static void conversation_talk_lord_defeat_to_lord_release_on_consequence()`

**用途 / Purpose:** 处理 `conversation_talk_lord_defeat_to_lord_release_on_consequence` 相关逻辑。

### conversation_talk_lord_freed_to_lord_capture_on_consequence
`public void conversation_talk_lord_freed_to_lord_capture_on_consequence()`

**用途 / Purpose:** 处理 `conversation_talk_lord_freed_to_lord_capture_on_consequence` 相关逻辑。

### conversation_talk_lord_freed_to_lord_release_on_consequence
`public void conversation_talk_lord_freed_to_lord_release_on_consequence()`

**用途 / Purpose:** 处理 `conversation_talk_lord_freed_to_lord_release_on_consequence` 相关逻辑。

### conversation_lord_request_mission_ask_on_condition
`public bool conversation_lord_request_mission_ask_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_request_mission_ask_on_condition` 相关逻辑。

### conversation_lord_mercenary_service_verify_accept_on_consequence
`public void conversation_lord_mercenary_service_verify_accept_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_mercenary_service_verify_accept_on_consequence` 相关逻辑。

### conversation_lord_mercenary_elaborate_castle_answer_faction_owner_to_women_on_condition
`public bool conversation_lord_mercenary_elaborate_castle_answer_faction_owner_to_women_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_mercenary_elaborate_castle_answer_faction_owner_to_women_on_condition` 相关逻辑。

### conversation_lord_mercenary_elaborate_castle_answer_to_women_on_condition
`public bool conversation_lord_mercenary_elaborate_castle_answer_to_women_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_mercenary_elaborate_castle_answer_to_women_on_condition` 相关逻辑。

### conversation_lord_mercenary_elaborate_castle_answer_faction_owner_on_condition
`public bool conversation_lord_mercenary_elaborate_castle_answer_faction_owner_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_mercenary_elaborate_castle_answer_faction_owner_on_condition` 相关逻辑。

### conversation_lord_mercenary_elaborate_banner_answer_faction_owner_on_condition
`public bool conversation_lord_mercenary_elaborate_banner_answer_faction_owner_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_mercenary_elaborate_banner_answer_faction_owner_on_condition` 相关逻辑。

### conversation_lord_mission_destroy_bandit_lair_start_on_condition
`public bool conversation_lord_mission_destroy_bandit_lair_start_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_mission_destroy_bandit_lair_start_on_condition` 相关逻辑。

### conversation_convince_options_bribe_on_condition
`public bool conversation_convince_options_bribe_on_condition()`

**用途 / Purpose:** 处理 `conversation_convince_options_bribe_on_condition` 相关逻辑。

### conversation_convince_options_friendship_on_condition
`public bool conversation_convince_options_friendship_on_condition()`

**用途 / Purpose:** 处理 `conversation_convince_options_friendship_on_condition` 相关逻辑。

### conversation_convince_bribe_verify_on_condition
`public bool conversation_convince_bribe_verify_on_condition()`

**用途 / Purpose:** 处理 `conversation_convince_bribe_verify_on_condition` 相关逻辑。

### conversation_convince_bribe_player_accept_on_consequence
`public void conversation_convince_bribe_player_accept_on_consequence()`

**用途 / Purpose:** 处理 `conversation_convince_bribe_player_accept_on_consequence` 相关逻辑。

### conversation_convince_friendship_verify_go_on_on_condition
`public bool conversation_convince_friendship_verify_go_on_on_condition()`

**用途 / Purpose:** 处理 `conversation_convince_friendship_verify_go_on_on_condition` 相关逻辑。

### conversation_convince_friendship_verify_go_on_on_consequence
`public void conversation_convince_friendship_verify_go_on_on_consequence()`

**用途 / Purpose:** 处理 `conversation_convince_friendship_verify_go_on_on_consequence` 相关逻辑。

### conversation_convince_friendship_lord_response_no_on_condition
`public bool conversation_convince_friendship_lord_response_no_on_condition()`

**用途 / Purpose:** 处理 `conversation_convince_friendship_lord_response_no_on_condition` 相关逻辑。

### conversation_convince_friendship_lord_response_angry_on_condition
`public bool conversation_convince_friendship_lord_response_angry_on_condition()`

**用途 / Purpose:** 处理 `conversation_convince_friendship_lord_response_angry_on_condition` 相关逻辑。

### conversation_lord_generic_mission_accept_on_consequence
`public void conversation_lord_generic_mission_accept_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_generic_mission_accept_on_consequence` 相关逻辑。

### conversation_lord_generic_mission_reject_on_consequence
`public void conversation_lord_generic_mission_reject_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_generic_mission_reject_on_consequence` 相关逻辑。

### conversation_lord_tell_mission_no_quest_on_condition
`public bool conversation_lord_tell_mission_no_quest_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_mission_no_quest_on_condition` 相关逻辑。

### conversation_player_threats_lord_verify_on_consequence
`public void conversation_player_threats_lord_verify_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_threats_lord_verify_on_consequence` 相关逻辑。

### conversation_player_threats_lord_verify_on_condition
`public bool conversation_player_threats_lord_verify_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_threats_lord_verify_on_condition` 相关逻辑。

### conversation_lord_attack_verify_cancel_on_consequence
`public void conversation_lord_attack_verify_cancel_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_attack_verify_cancel_on_consequence` 相关逻辑。

### conversation_lord_tell_objective_reconsider_on_condition
`public bool conversation_lord_tell_objective_reconsider_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_reconsider_on_condition` 相关逻辑。

### conversation_lord_tell_objective_besiege_on_condition
`public bool conversation_lord_tell_objective_besiege_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_besiege_on_condition` 相关逻辑。

### conversation_lord_tell_objective_defence_village_on_condition
`public bool conversation_lord_tell_objective_defence_village_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_defence_village_on_condition` 相关逻辑。

### conversation_lord_tell_objective_defence_town_on_condition
`public bool conversation_lord_tell_objective_defence_town_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_defence_town_on_condition` 相关逻辑。

### conversation_lord_tell_objective_patrolling_on_condition
`public bool conversation_lord_tell_objective_patrolling_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_patrolling_on_condition` 相关逻辑。

### conversation_lord_tell_objective_waiting_for_siege_on_condition
`public bool conversation_lord_tell_objective_waiting_for_siege_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_waiting_for_siege_on_condition` 相关逻辑。

### conversation_lord_tell_objective_waiting_for_defence_on_condition
`public bool conversation_lord_tell_objective_waiting_for_defence_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_waiting_for_defence_on_condition` 相关逻辑。

### conversation_lord_tell_objective_raiding_on_condition
`public bool conversation_lord_tell_objective_raiding_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_raiding_on_condition` 相关逻辑。

### conversation_lord_tell_objective_waiting_for_raid_on_condition
`public bool conversation_lord_tell_objective_waiting_for_raid_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_waiting_for_raid_on_condition` 相关逻辑。

### conversation_lord_tell_objective_gathering_on_condition
`public bool conversation_lord_tell_objective_gathering_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_tell_objective_gathering_on_condition` 相关逻辑。

### conversation_lord_tell_gathering_player_joined_on_consequence
`public void conversation_lord_tell_gathering_player_joined_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_tell_gathering_player_joined_on_consequence` 相关逻辑。

### conversation_lord_ask_pardon_answer_bad_relation_on_condition
`public bool conversation_lord_ask_pardon_answer_bad_relation_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_ask_pardon_answer_bad_relation_on_condition` 相关逻辑。

### conversation_lord_ask_pardon_answer_low_right_to_rule_on_condition
`public bool conversation_lord_ask_pardon_answer_low_right_to_rule_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_ask_pardon_answer_low_right_to_rule_on_condition` 相关逻辑。

### conversation_lord_ask_pardon_answer_no_advantage_on_condition
`public bool conversation_lord_ask_pardon_answer_no_advantage_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_ask_pardon_answer_no_advantage_on_condition` 相关逻辑。

### conversation_lord_ask_pardon_answer_not_accepted_on_condition
`public bool conversation_lord_ask_pardon_answer_not_accepted_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_ask_pardon_answer_not_accepted_on_condition` 相关逻辑。

### conversation_lord_ask_pardon_answer_accepted_on_condition
`public bool conversation_lord_ask_pardon_answer_accepted_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_ask_pardon_answer_accepted_on_condition` 相关逻辑。

### conversation_lord_give_oath_1_player_answer_1_on_condition
`public bool conversation_lord_give_oath_1_player_answer_1_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_give_oath_1_player_answer_1_on_condition` 相关逻辑。

### conversation_set_oath_phrases_on_condition
`public bool conversation_set_oath_phrases_on_condition()`

**用途 / Purpose:** 处理 `conversation_set_oath_phrases_on_condition` 相关逻辑。

### conversation_vassalage_offer_player_is_already_vassal_on_condition
`public bool conversation_vassalage_offer_player_is_already_vassal_on_condition()`

**用途 / Purpose:** 处理 `conversation_vassalage_offer_player_is_already_vassal_on_condition` 相关逻辑。

### conversation_vassalage_offer_player_has_low_relation_on_condition
`public bool conversation_vassalage_offer_player_has_low_relation_on_condition()`

**用途 / Purpose:** 处理 `conversation_vassalage_offer_player_has_low_relation_on_condition` 相关逻辑。

### conversation_mercenary_service_offer_rejected_on_condition
`public bool conversation_mercenary_service_offer_rejected_on_condition()`

**用途 / Purpose:** 处理 `conversation_mercenary_service_offer_rejected_on_condition` 相关逻辑。

### conversation_mercenary_service_offer_accepted_on_condition
`public bool conversation_mercenary_service_offer_accepted_on_condition()`

**用途 / Purpose:** 处理 `conversation_mercenary_service_offer_accepted_on_condition` 相关逻辑。

### conversation_vassalage_offer_accepted_on_condition
`public bool conversation_vassalage_offer_accepted_on_condition()`

**用途 / Purpose:** 处理 `conversation_vassalage_offer_accepted_on_condition` 相关逻辑。

### conversation_liege_states_obligations_to_vassal_on_condition
`public bool conversation_liege_states_obligations_to_vassal_on_condition()`

**用途 / Purpose:** 处理 `conversation_liege_states_obligations_to_vassal_on_condition` 相关逻辑。

### conversation_player_is_accepted_as_a_vassal_on_consequence
`public void conversation_player_is_accepted_as_a_vassal_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_is_accepted_as_a_vassal_on_consequence` 相关逻辑。

### conversation_player_leave_faction_accepted_on_consequence
`public void conversation_player_leave_faction_accepted_on_consequence()`

**用途 / Purpose:** 处理 `conversation_player_leave_faction_accepted_on_consequence` 相关逻辑。

### conversation_player_leave_faction_accepted_on_leave
`public void conversation_player_leave_faction_accepted_on_leave()`

**用途 / Purpose:** 处理 `conversation_player_leave_faction_accepted_on_leave` 相关逻辑。

### conversation_lord_talk_ask_location_2_on_condition
`public bool conversation_lord_talk_ask_location_2_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_talk_ask_location_2_on_condition` 相关逻辑。

### conversation_lord_talk_ask_location_2_on_consequence
`public void conversation_lord_talk_ask_location_2_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_talk_ask_location_2_on_consequence` 相关逻辑。

### GetBetween
`public IEnumerable<LordConversationsCampaignBehavior.Number> GetBetween(int start, int end)`

**用途 / Purpose:** 获取 `between` 的当前值。

## 使用示例

```csharp
var value = new LordConversationsCampaignBehavior();
value.GetConversationHeroPoliticalPhilosophy(philosophyString);
```

## 参见

- [完整类目录](../catalog)