<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordConversationsCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordConversationsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordConversationsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/LordConversationsCampaignBehavior.cs`

## Overview

`LordConversationsCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetConversationHeroPoliticalPhilosophy
`public bool GetConversationHeroPoliticalPhilosophy(out TextObject philosophyString)`

**Purpose:** Gets the current value of `conversation hero political philosophy`.

### GetConversationHeroPoliticalPhilosophy_2
`public bool GetConversationHeroPoliticalPhilosophy_2(out TextObject philosophyString_2)`

**Purpose:** Gets the current value of `conversation hero political philosophy_2`.

### GetConversationHeroPoliticalPhilosophy_3
`public bool GetConversationHeroPoliticalPhilosophy_3(out TextObject philosophyString_3)`

**Purpose:** Gets the current value of `conversation hero political philosophy_3`.

### GetLiegeTitle
`public TextObject GetLiegeTitle()`

**Purpose:** Gets the current value of `liege title`.

### UsesLordConversations
`public bool UsesLordConversations(Hero hero)`

**Purpose:** Handles logic related to `uses lord conversations`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### conversation_player_marriage_list_options_on_consequence
`public static void conversation_player_marriage_list_options_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_marriage_list_options_on_consequence`.

### conversation_player_marriage_select_on_condition
`public bool conversation_player_marriage_select_on_condition()`

**Purpose:** Handles logic related to `conversation_player_marriage_select_on_condition`.

### conversation_player_marriage_on_consequence
`public void conversation_player_marriage_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_marriage_on_consequence`.

### conversation_player_marriage_on_refusal_consequence
`public void conversation_player_marriage_on_refusal_consequence()`

**Purpose:** Handles logic related to `conversation_player_marriage_on_refusal_consequence`.

### conversation_player_children_marriage_on_condition
`public bool conversation_player_children_marriage_on_condition()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_on_condition`.

### conversation_player_children_marriage_list_options_on_consequence
`public void conversation_player_children_marriage_list_options_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_list_options_on_consequence`.

### conversation_player_children_marriage_select_on_condition
`public bool conversation_player_children_marriage_select_on_condition()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_select_on_condition`.

### conversation_player_children_marriage_on_consequence
`public void conversation_player_children_marriage_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_on_consequence`.

### conversation_player_children_marriage_on_refusal_consequence
`public void conversation_player_children_marriage_on_refusal_consequence()`

**Purpose:** Handles logic related to `conversation_player_children_marriage_on_refusal_consequence`.

### conversation_wanderer_generic_introduction_on_condition
`public bool conversation_wanderer_generic_introduction_on_condition()`

**Purpose:** Handles logic related to `conversation_wanderer_generic_introduction_on_condition`.

### conversation_lord_active_mission_response_cont_on_condition
`public bool conversation_lord_active_mission_response_cont_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_active_mission_response_cont_on_condition`.

### conversation_mission_in_progress_on_condition
`public bool conversation_mission_in_progress_on_condition()`

**Purpose:** Handles logic related to `conversation_mission_in_progress_on_condition`.

### conversation_lord_active_mission_response_failed_on_condition
`public bool conversation_lord_active_mission_response_failed_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_active_mission_response_failed_on_condition`.

### conversation_lord_active_mission_response_failed_on_consequence
`public void conversation_lord_active_mission_response_failed_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_active_mission_response_failed_on_consequence`.

### conversation_lord_is_threated_neutral_on_condition
`public bool conversation_lord_is_threated_neutral_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_is_threated_neutral_on_condition`.

### conversation_player_can_attack_hero_on_condition
`public bool conversation_player_can_attack_hero_on_condition()`

**Purpose:** Handles logic related to `conversation_player_can_attack_hero_on_condition`.

### barter_peace_offer_reject_on_condition
`public bool barter_peace_offer_reject_on_condition()`

**Purpose:** Handles logic related to `barter_peace_offer_reject_on_condition`.

### barter_offer_reject_on_condition
`public bool barter_offer_reject_on_condition()`

**Purpose:** Handles logic related to `barter_offer_reject_on_condition`.

### barter_offer_accept_peace_on_condition
`public bool barter_offer_accept_peace_on_condition()`

**Purpose:** Handles logic related to `barter_offer_accept_peace_on_condition`.

### barter_offer_accept_let_go_on_condition
`public bool barter_offer_accept_let_go_on_condition()`

**Purpose:** Handles logic related to `barter_offer_accept_let_go_on_condition`.

### barter_offer_accept_on_condition
`public bool barter_offer_accept_on_condition()`

**Purpose:** Handles logic related to `barter_offer_accept_on_condition`.

### conversation_player_is_leaving_faction_on_condition
`public bool conversation_player_is_leaving_faction_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_leaving_faction_on_condition`.

### conversation_player_is_offering_mercenary_on_condition
`public bool conversation_player_is_offering_mercenary_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_offering_mercenary_on_condition`.

### conversation_player_is_offering_mercenary_on_clickable_condition
`public bool conversation_player_is_offering_mercenary_on_clickable_condition(out TextObject hintText)`

**Purpose:** Handles logic related to `conversation_player_is_offering_mercenary_on_clickable_condition`.

### conversation_player_is_offering_vassalage_on_condition
`public bool conversation_player_is_offering_vassalage_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_offering_vassalage_on_condition`.

### conversation_player_is_offering_vassalage_on_clickable_condition
`public bool conversation_player_is_offering_vassalage_on_clickable_condition(out TextObject hintText)`

**Purpose:** Handles logic related to `conversation_player_is_offering_vassalage_on_clickable_condition`.

### conversation_player_is_offering_vassalage_while_at_mercenary_service_on_condition
`public bool conversation_player_is_offering_vassalage_while_at_mercenary_service_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_offering_vassalage_while_at_mercenary_service_on_condition`.

### conversation_player_is_asking_service_while_in_faction_on_condition
`public bool conversation_player_is_asking_service_while_in_faction_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_asking_service_while_in_faction_on_condition`.

### conversation_player_is_offering_vassalage_to_lord_on_condition
`public bool conversation_player_is_offering_vassalage_to_lord_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_offering_vassalage_to_lord_on_condition`.

### lord_ask_enter_service_vassalage_talking_with_king_on_condition
`public bool lord_ask_enter_service_vassalage_talking_with_king_on_condition()`

**Purpose:** Handles logic related to `lord_ask_enter_service_vassalage_talking_with_king_on_condition`.

### conversation_lord_ask_recruit_mercenary_response_on_condition
`public bool conversation_lord_ask_recruit_mercenary_response_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_ask_recruit_mercenary_response_on_condition`.

### conversation_player_want_to_fire_mercenary_on_condition
`public bool conversation_player_want_to_fire_mercenary_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_fire_mercenary_on_condition`.

### conversation_player_want_to_hire_mercenary_on_condition
`public bool conversation_player_want_to_hire_mercenary_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_hire_mercenary_on_condition`.

### conversation_player_want_to_fire_mercenary_there_is_debt_on_condition
`public bool conversation_player_want_to_fire_mercenary_there_is_debt_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_fire_mercenary_there_is_debt_on_condition`.

### conversation_player_want_to_fire_mercenary_no_debt_on_condition
`public bool conversation_player_want_to_fire_mercenary_no_debt_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_fire_mercenary_no_debt_on_condition`.

### conversation_player_want_to_fire_mercenary_with_paying_debt_on_condition
`public bool conversation_player_want_to_fire_mercenary_with_paying_debt_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_fire_mercenary_with_paying_debt_on_condition`.

### conversation_mercenary_response_on_condition_reject
`public bool conversation_mercenary_response_on_condition_reject()`

**Purpose:** Handles logic related to `conversation_mercenary_response_on_condition_reject`.

### conversation_mercenary_response_on_condition_reject_because_of_financial_reasons
`public bool conversation_mercenary_response_on_condition_reject_because_of_financial_reasons()`

**Purpose:** Handles logic related to `conversation_mercenary_response_on_condition_reject_because_of_financial_reasons`.

### conversation_mercenary_response_not_leader_on_condition
`public bool conversation_mercenary_response_not_leader_on_condition()`

**Purpose:** Handles logic related to `conversation_mercenary_response_not_leader_on_condition`.

### conversation_mercenary_response_on_condition
`public bool conversation_mercenary_response_on_condition()`

**Purpose:** Handles logic related to `conversation_mercenary_response_on_condition`.

### conversation_player_want_to_join_faction_as_mercenary_or_vassal_on_condition
`public bool conversation_player_want_to_join_faction_as_mercenary_or_vassal_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_join_faction_as_mercenary_or_vassal_on_condition`.

### conversation_player_want_to_end_service_as_mercenary_on_condition
`public bool conversation_player_want_to_end_service_as_mercenary_on_condition()`

**Purpose:** Handles logic related to `conversation_player_want_to_end_service_as_mercenary_on_condition`.

### conversation_player_want_to_end_service_as_mercenary_on_consequence
`public void conversation_player_want_to_end_service_as_mercenary_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_want_to_end_service_as_mercenary_on_consequence`.

### player_ask_to_join_players_party_on_condition
`public static bool player_ask_to_join_players_party_on_condition()`

**Purpose:** Handles logic related to `player_ask_to_join_players_party_on_condition`.

### conversation_mercenary_player_accepts_lord_answer_on_consequence
`public void conversation_mercenary_player_accepts_lord_answer_on_consequence()`

**Purpose:** Handles logic related to `conversation_mercenary_player_accepts_lord_answer_on_consequence`.

### conversation_player_has_question_on_condition
`public bool conversation_player_has_question_on_condition()`

**Purpose:** Handles logic related to `conversation_player_has_question_on_condition`.

### conversation_hero_main_options_discussions
`public bool conversation_hero_main_options_discussions()`

**Purpose:** Handles logic related to `conversation_hero_main_options_discussions`.

### conversation_lord_talk_politics_during_siege_parley_on_condition
`public bool conversation_lord_talk_politics_during_siege_parley_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_talk_politics_during_siege_parley_on_condition`.

### conversation_player_is_asking_pardon_on_condition
`public bool conversation_player_is_asking_pardon_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_asking_pardon_on_condition`.

### conversation_player_is_asking_peace_on_condition
`public bool conversation_player_is_asking_peace_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_asking_peace_on_condition`.

### conversation_player_is_leaving_neutral_or_friendly_on_condition
`public bool conversation_player_is_leaving_neutral_or_friendly_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_leaving_neutral_or_friendly_on_condition`.

### conversation_player_is_leaving_enemy_on_condition
`public bool conversation_player_is_leaving_enemy_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_leaving_enemy_on_condition`.

### conversation_player_is_leaving_enemy_prisoner_on_condition
`public bool conversation_player_is_leaving_enemy_prisoner_on_condition()`

**Purpose:** Handles logic related to `conversation_player_is_leaving_enemy_prisoner_on_condition`.

### conversation_cheat_lord_diagnostics_on_condition
`public bool conversation_cheat_lord_diagnostics_on_condition()`

**Purpose:** Handles logic related to `conversation_cheat_lord_diagnostics_on_condition`.

### conversation_cheat_other_lords_on_condition
`public bool conversation_cheat_other_lords_on_condition()`

**Purpose:** Handles logic related to `conversation_cheat_other_lords_on_condition`.

### conversation_player_dont_attack_we_surrender_on_condition
`public bool conversation_player_dont_attack_we_surrender_on_condition()`

**Purpose:** Handles logic related to `conversation_player_dont_attack_we_surrender_on_condition`.

### conversation_cheat_faction_enmities_on_condition
`public bool conversation_cheat_faction_enmities_on_condition()`

**Purpose:** Handles logic related to `conversation_cheat_faction_enmities_on_condition`.

### GetReasonForEnmity
`public TextObject GetReasonForEnmity(Hero lord1, Hero lord2, Hero talkTroop)`

**Purpose:** Gets the current value of `reason for enmity`.

### conversation_cheat_reputation_on_condition
`public bool conversation_cheat_reputation_on_condition()`

**Purpose:** Handles logic related to `conversation_cheat_reputation_on_condition`.

### conversation_lord_leave_on_condition
`public bool conversation_lord_leave_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_leave_on_condition`.

### conversation_lord_leave_on_consequence
`public void conversation_lord_leave_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_leave_on_consequence`.

### conversation_capture_defeated_lord_on_condition
`public bool conversation_capture_defeated_lord_on_condition()`

**Purpose:** Handles logic related to `conversation_capture_defeated_lord_on_condition`.

### conversation_liberate_known_hero_on_condition
`public bool conversation_liberate_known_hero_on_condition()`

**Purpose:** Handles logic related to `conversation_liberate_known_hero_on_condition`.

### conversation_liberate_unmet_hero_on_condition
`public bool conversation_liberate_unmet_hero_on_condition()`

**Purpose:** Handles logic related to `conversation_liberate_unmet_hero_on_condition`.

### conversation_reprisoner_hero_decision_on_condition
`public bool conversation_reprisoner_hero_decision_on_condition()`

**Purpose:** Handles logic related to `conversation_reprisoner_hero_decision_on_condition`.

### conversation_player_liberates_prisoner_on_consequence
`public void conversation_player_liberates_prisoner_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_liberates_prisoner_on_consequence`.

### conversation_player_fails_to_release_prisoner_on_consequence
`public void conversation_player_fails_to_release_prisoner_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_fails_to_release_prisoner_on_consequence`.

### conversation_ally_thanks_meet_after_helping_in_battle_on_condition
`public bool conversation_ally_thanks_meet_after_helping_in_battle_on_condition()`

**Purpose:** Handles logic related to `conversation_ally_thanks_meet_after_helping_in_battle_on_condition`.

### conversation_ally_thanks_after_helping_in_battle_on_condition
`public bool conversation_ally_thanks_after_helping_in_battle_on_condition()`

**Purpose:** Handles logic related to `conversation_ally_thanks_after_helping_in_battle_on_condition`.

### conversation_talk_lord_defeat_to_lord_capture_on_consequence
`public void conversation_talk_lord_defeat_to_lord_capture_on_consequence()`

**Purpose:** Handles logic related to `conversation_talk_lord_defeat_to_lord_capture_on_consequence`.

### conversation_talk_lord_defeat_to_lord_capture_and_kill_on_consequence
`public void conversation_talk_lord_defeat_to_lord_capture_and_kill_on_consequence()`

**Purpose:** Handles logic related to `conversation_talk_lord_defeat_to_lord_capture_and_kill_on_consequence`.

### conversation_talk_lord_release_noncombatant_on_condition
`public bool conversation_talk_lord_release_noncombatant_on_condition()`

**Purpose:** Handles logic related to `conversation_talk_lord_release_noncombatant_on_condition`.

### conversation_talk_lord_release_combatant_on_condition
`public bool conversation_talk_lord_release_combatant_on_condition()`

**Purpose:** Handles logic related to `conversation_talk_lord_release_combatant_on_condition`.

### conversation_player_ask_ruling_philosophy_on_condition
`public bool conversation_player_ask_ruling_philosophy_on_condition()`

**Purpose:** Handles logic related to `conversation_player_ask_ruling_philosophy_on_condition`.

### conversation_player_has_long_ruling_philosophy_on_condition
`public bool conversation_player_has_long_ruling_philosophy_on_condition()`

**Purpose:** Handles logic related to `conversation_player_has_long_ruling_philosophy_on_condition`.

### conversation_talk_lord_defeat_to_lord_release_on_consequence
`public static void conversation_talk_lord_defeat_to_lord_release_on_consequence()`

**Purpose:** Handles logic related to `conversation_talk_lord_defeat_to_lord_release_on_consequence`.

### conversation_talk_lord_freed_to_lord_capture_on_consequence
`public void conversation_talk_lord_freed_to_lord_capture_on_consequence()`

**Purpose:** Handles logic related to `conversation_talk_lord_freed_to_lord_capture_on_consequence`.

### conversation_talk_lord_freed_to_lord_release_on_consequence
`public void conversation_talk_lord_freed_to_lord_release_on_consequence()`

**Purpose:** Handles logic related to `conversation_talk_lord_freed_to_lord_release_on_consequence`.

### conversation_lord_request_mission_ask_on_condition
`public bool conversation_lord_request_mission_ask_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_request_mission_ask_on_condition`.

### conversation_lord_mercenary_service_verify_accept_on_consequence
`public void conversation_lord_mercenary_service_verify_accept_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_mercenary_service_verify_accept_on_consequence`.

### conversation_lord_mercenary_elaborate_castle_answer_faction_owner_to_women_on_condition
`public bool conversation_lord_mercenary_elaborate_castle_answer_faction_owner_to_women_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_mercenary_elaborate_castle_answer_faction_owner_to_women_on_condition`.

### conversation_lord_mercenary_elaborate_castle_answer_to_women_on_condition
`public bool conversation_lord_mercenary_elaborate_castle_answer_to_women_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_mercenary_elaborate_castle_answer_to_women_on_condition`.

### conversation_lord_mercenary_elaborate_castle_answer_faction_owner_on_condition
`public bool conversation_lord_mercenary_elaborate_castle_answer_faction_owner_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_mercenary_elaborate_castle_answer_faction_owner_on_condition`.

### conversation_lord_mercenary_elaborate_banner_answer_faction_owner_on_condition
`public bool conversation_lord_mercenary_elaborate_banner_answer_faction_owner_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_mercenary_elaborate_banner_answer_faction_owner_on_condition`.

### conversation_lord_mission_destroy_bandit_lair_start_on_condition
`public bool conversation_lord_mission_destroy_bandit_lair_start_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_mission_destroy_bandit_lair_start_on_condition`.

### conversation_convince_options_bribe_on_condition
`public bool conversation_convince_options_bribe_on_condition()`

**Purpose:** Handles logic related to `conversation_convince_options_bribe_on_condition`.

### conversation_convince_options_friendship_on_condition
`public bool conversation_convince_options_friendship_on_condition()`

**Purpose:** Handles logic related to `conversation_convince_options_friendship_on_condition`.

### conversation_convince_bribe_verify_on_condition
`public bool conversation_convince_bribe_verify_on_condition()`

**Purpose:** Handles logic related to `conversation_convince_bribe_verify_on_condition`.

### conversation_convince_bribe_player_accept_on_consequence
`public void conversation_convince_bribe_player_accept_on_consequence()`

**Purpose:** Handles logic related to `conversation_convince_bribe_player_accept_on_consequence`.

### conversation_convince_friendship_verify_go_on_on_condition
`public bool conversation_convince_friendship_verify_go_on_on_condition()`

**Purpose:** Handles logic related to `conversation_convince_friendship_verify_go_on_on_condition`.

### conversation_convince_friendship_verify_go_on_on_consequence
`public void conversation_convince_friendship_verify_go_on_on_consequence()`

**Purpose:** Handles logic related to `conversation_convince_friendship_verify_go_on_on_consequence`.

### conversation_convince_friendship_lord_response_no_on_condition
`public bool conversation_convince_friendship_lord_response_no_on_condition()`

**Purpose:** Handles logic related to `conversation_convince_friendship_lord_response_no_on_condition`.

### conversation_convince_friendship_lord_response_angry_on_condition
`public bool conversation_convince_friendship_lord_response_angry_on_condition()`

**Purpose:** Handles logic related to `conversation_convince_friendship_lord_response_angry_on_condition`.

### conversation_lord_generic_mission_accept_on_consequence
`public void conversation_lord_generic_mission_accept_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_generic_mission_accept_on_consequence`.

### conversation_lord_generic_mission_reject_on_consequence
`public void conversation_lord_generic_mission_reject_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_generic_mission_reject_on_consequence`.

### conversation_lord_tell_mission_no_quest_on_condition
`public bool conversation_lord_tell_mission_no_quest_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_mission_no_quest_on_condition`.

### conversation_player_threats_lord_verify_on_consequence
`public void conversation_player_threats_lord_verify_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_threats_lord_verify_on_consequence`.

### conversation_player_threats_lord_verify_on_condition
`public bool conversation_player_threats_lord_verify_on_condition()`

**Purpose:** Handles logic related to `conversation_player_threats_lord_verify_on_condition`.

### conversation_lord_attack_verify_cancel_on_consequence
`public void conversation_lord_attack_verify_cancel_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_attack_verify_cancel_on_consequence`.

### conversation_lord_tell_objective_reconsider_on_condition
`public bool conversation_lord_tell_objective_reconsider_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_reconsider_on_condition`.

### conversation_lord_tell_objective_besiege_on_condition
`public bool conversation_lord_tell_objective_besiege_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_besiege_on_condition`.

### conversation_lord_tell_objective_defence_village_on_condition
`public bool conversation_lord_tell_objective_defence_village_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_defence_village_on_condition`.

### conversation_lord_tell_objective_defence_town_on_condition
`public bool conversation_lord_tell_objective_defence_town_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_defence_town_on_condition`.

### conversation_lord_tell_objective_patrolling_on_condition
`public bool conversation_lord_tell_objective_patrolling_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_patrolling_on_condition`.

### conversation_lord_tell_objective_waiting_for_siege_on_condition
`public bool conversation_lord_tell_objective_waiting_for_siege_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_waiting_for_siege_on_condition`.

### conversation_lord_tell_objective_waiting_for_defence_on_condition
`public bool conversation_lord_tell_objective_waiting_for_defence_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_waiting_for_defence_on_condition`.

### conversation_lord_tell_objective_raiding_on_condition
`public bool conversation_lord_tell_objective_raiding_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_raiding_on_condition`.

### conversation_lord_tell_objective_waiting_for_raid_on_condition
`public bool conversation_lord_tell_objective_waiting_for_raid_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_waiting_for_raid_on_condition`.

### conversation_lord_tell_objective_gathering_on_condition
`public bool conversation_lord_tell_objective_gathering_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_tell_objective_gathering_on_condition`.

### conversation_lord_tell_gathering_player_joined_on_consequence
`public void conversation_lord_tell_gathering_player_joined_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_tell_gathering_player_joined_on_consequence`.

### conversation_lord_ask_pardon_answer_bad_relation_on_condition
`public bool conversation_lord_ask_pardon_answer_bad_relation_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_ask_pardon_answer_bad_relation_on_condition`.

### conversation_lord_ask_pardon_answer_low_right_to_rule_on_condition
`public bool conversation_lord_ask_pardon_answer_low_right_to_rule_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_ask_pardon_answer_low_right_to_rule_on_condition`.

### conversation_lord_ask_pardon_answer_no_advantage_on_condition
`public bool conversation_lord_ask_pardon_answer_no_advantage_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_ask_pardon_answer_no_advantage_on_condition`.

### conversation_lord_ask_pardon_answer_not_accepted_on_condition
`public bool conversation_lord_ask_pardon_answer_not_accepted_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_ask_pardon_answer_not_accepted_on_condition`.

### conversation_lord_ask_pardon_answer_accepted_on_condition
`public bool conversation_lord_ask_pardon_answer_accepted_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_ask_pardon_answer_accepted_on_condition`.

### conversation_lord_give_oath_1_player_answer_1_on_condition
`public bool conversation_lord_give_oath_1_player_answer_1_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_give_oath_1_player_answer_1_on_condition`.

### conversation_set_oath_phrases_on_condition
`public bool conversation_set_oath_phrases_on_condition()`

**Purpose:** Handles logic related to `conversation_set_oath_phrases_on_condition`.

### conversation_vassalage_offer_player_is_already_vassal_on_condition
`public bool conversation_vassalage_offer_player_is_already_vassal_on_condition()`

**Purpose:** Handles logic related to `conversation_vassalage_offer_player_is_already_vassal_on_condition`.

### conversation_vassalage_offer_player_has_low_relation_on_condition
`public bool conversation_vassalage_offer_player_has_low_relation_on_condition()`

**Purpose:** Handles logic related to `conversation_vassalage_offer_player_has_low_relation_on_condition`.

### conversation_mercenary_service_offer_rejected_on_condition
`public bool conversation_mercenary_service_offer_rejected_on_condition()`

**Purpose:** Handles logic related to `conversation_mercenary_service_offer_rejected_on_condition`.

### conversation_mercenary_service_offer_accepted_on_condition
`public bool conversation_mercenary_service_offer_accepted_on_condition()`

**Purpose:** Handles logic related to `conversation_mercenary_service_offer_accepted_on_condition`.

### conversation_vassalage_offer_accepted_on_condition
`public bool conversation_vassalage_offer_accepted_on_condition()`

**Purpose:** Handles logic related to `conversation_vassalage_offer_accepted_on_condition`.

### conversation_liege_states_obligations_to_vassal_on_condition
`public bool conversation_liege_states_obligations_to_vassal_on_condition()`

**Purpose:** Handles logic related to `conversation_liege_states_obligations_to_vassal_on_condition`.

### conversation_player_is_accepted_as_a_vassal_on_consequence
`public void conversation_player_is_accepted_as_a_vassal_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_is_accepted_as_a_vassal_on_consequence`.

### conversation_player_leave_faction_accepted_on_consequence
`public void conversation_player_leave_faction_accepted_on_consequence()`

**Purpose:** Handles logic related to `conversation_player_leave_faction_accepted_on_consequence`.

### conversation_player_leave_faction_accepted_on_leave
`public void conversation_player_leave_faction_accepted_on_leave()`

**Purpose:** Handles logic related to `conversation_player_leave_faction_accepted_on_leave`.

### conversation_lord_talk_ask_location_2_on_condition
`public bool conversation_lord_talk_ask_location_2_on_condition()`

**Purpose:** Handles logic related to `conversation_lord_talk_ask_location_2_on_condition`.

### conversation_lord_talk_ask_location_2_on_consequence
`public void conversation_lord_talk_ask_location_2_on_consequence()`

**Purpose:** Handles logic related to `conversation_lord_talk_ask_location_2_on_consequence`.

### GetBetween
`public IEnumerable<LordConversationsCampaignBehavior.Number> GetBetween(int start, int end)`

**Purpose:** Gets the current value of `between`.

## Usage Example

```csharp
var value = new LordConversationsCampaignBehavior();
value.GetConversationHeroPoliticalPhilosophy(philosophyString);
```

## See Also

- [Complete Class Catalog](../catalog)