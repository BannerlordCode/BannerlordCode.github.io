---
title: "ActionIndexCache"
description: "ActionIndexCache: a public struct in TaleWorlds.MountAndBlade, inheriting IEquatable<ActionIndexCache>; 223 exposed members (7 methods, 1 properties, 215 fields). Source: TaleWorlds.MountAndBlade/ActionIndexCache.cs."
---
# ActionIndexCache

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct ActionIndexCache : IEquatable<ActionIndexCache>`
**File:** `TaleWorlds.MountAndBlade/ActionIndexCache.cs`

## Overview

ActionIndexCache lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ActionIndexCache.cs. It is a public struct, implementing/inheriting IEquatable<ActionIndexCache>; the inheritance chain is ActionIndexCache → IEquatable. It exposes 223 public/protected members: 7 methods, 1 properties, 215 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionIndexCache is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ActionIndexCache → IEquatable. The surface is method-led (methods 7/223, properties 1/223), so it mostly exposes operations. IEquatable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ActionIndexCache.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Index` | `public int Index` | property |
| `Create` | `public static ActionIndexCache Create(string actName)` | method |
| `GetName` | `public string GetName()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(ActionIndexCache other)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `act_none` | `public static readonly ActionIndexCache act_none` | field |
| `act_pickup_down_begin` | `public static readonly ActionIndexCache act_pickup_down_begin` | field |
| `act_pickup_down_end` | `public static readonly ActionIndexCache act_pickup_down_end` | field |
| `act_pickup_down_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_down_begin_left_stance` | field |
| `act_pickup_down_end_left_stance` | `public static readonly ActionIndexCache act_pickup_down_end_left_stance` | field |
| `act_pickup_down_left_begin` | `public static readonly ActionIndexCache act_pickup_down_left_begin` | field |
| `act_pickup_down_left_end` | `public static readonly ActionIndexCache act_pickup_down_left_end` | field |
| `act_pickup_down_left_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_down_left_begin_left_stance` | field |
| `act_pickup_down_left_end_left_stance` | `public static readonly ActionIndexCache act_pickup_down_left_end_left_stance` | field |
| `act_pickup_middle_begin` | `public static readonly ActionIndexCache act_pickup_middle_begin` | field |
| `act_pickup_middle_end` | `public static readonly ActionIndexCache act_pickup_middle_end` | field |
| `act_pickup_middle_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_begin_left_stance` | field |
| `act_pickup_middle_end_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_end_left_stance` | field |
| `act_pickup_middle_left_begin` | `public static readonly ActionIndexCache act_pickup_middle_left_begin` | field |
| `act_pickup_middle_left_end` | `public static readonly ActionIndexCache act_pickup_middle_left_end` | field |
| `act_pickup_middle_left_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_left_begin_left_stance` | field |
| `act_pickup_middle_left_end_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_left_end_left_stance` | field |
| `act_pickup_up_begin` | `public static readonly ActionIndexCache act_pickup_up_begin` | field |
| `act_pickup_up_end` | `public static readonly ActionIndexCache act_pickup_up_end` | field |
| `act_pickup_up_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_up_begin_left_stance` | field |
| `act_pickup_up_end_left_stance` | `public static readonly ActionIndexCache act_pickup_up_end_left_stance` | field |
| `act_pickup_up_left_begin` | `public static readonly ActionIndexCache act_pickup_up_left_begin` | field |
| `act_pickup_up_left_end` | `public static readonly ActionIndexCache act_pickup_up_left_end` | field |
| `act_pickup_up_left_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_up_left_begin_left_stance` | field |
| `act_pickup_up_left_end_left_stance` | `public static readonly ActionIndexCache act_pickup_up_left_end_left_stance` | field |
| `act_pickup_from_right_down_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_begin` | field |
| `act_pickup_from_right_down_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_end` | field |
| `act_pickup_from_right_down_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_left_begin` | field |
| `act_pickup_from_right_down_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_left_end` | field |
| `act_pickup_from_right_middle_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_begin` | field |
| `act_pickup_from_right_middle_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_end` | field |
| `act_pickup_from_right_middle_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_left_begin` | field |
| `act_pickup_from_right_middle_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_left_end` | field |
| `act_pickup_from_right_up_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_begin` | field |
| `act_pickup_from_right_up_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_end` | field |
| `act_pickup_from_right_up_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_left_begin` | field |
| `act_pickup_from_right_up_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_left_end` | field |
| `act_pickup_from_left_down_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_begin` | field |
| `act_pickup_from_left_down_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_end` | field |
| `act_pickup_from_left_down_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_left_begin` | field |
| `act_pickup_from_left_down_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_left_end` | field |
| `act_pickup_from_left_middle_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_begin` | field |
| `act_pickup_from_left_middle_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_end` | field |
| `act_pickup_from_left_middle_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_left_begin` | field |
| `act_pickup_from_left_middle_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_left_end` | field |
| `act_pickup_from_left_up_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_begin` | field |
| `act_pickup_from_left_up_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_end` | field |
| `act_pickup_from_left_up_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_left_begin` | field |
| `act_pickup_from_left_up_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_left_end` | field |
| `act_pickup_boulder_begin` | `public static readonly ActionIndexCache act_pickup_boulder_begin` | field |
| `act_pickup_boulder_end` | `public static readonly ActionIndexCache act_pickup_boulder_end` | field |
| `act_usage_trebuchet_idle` | `public static readonly ActionIndexCache act_usage_trebuchet_idle` | field |
| `act_usage_trebuchet_reload` | `public static readonly ActionIndexCache act_usage_trebuchet_reload` | field |
| `act_usage_trebuchet_reload_2` | `public static readonly ActionIndexCache act_usage_trebuchet_reload_2` | field |
| `act_usage_trebuchet_reload_idle` | `public static readonly ActionIndexCache act_usage_trebuchet_reload_idle` | field |
| `act_usage_trebuchet_reload_2_idle` | `public static readonly ActionIndexCache act_usage_trebuchet_reload_2_idle` | field |
| `act_usage_trebuchet_load_ammo` | `public static readonly ActionIndexCache act_usage_trebuchet_load_ammo` | field |
| `act_usage_trebuchet_shoot` | `public static readonly ActionIndexCache act_usage_trebuchet_shoot` | field |
| `act_usage_siege_machine_push` | `public static readonly ActionIndexCache act_usage_siege_machine_push` | field |
| `act_usage_ladder_lift_from_left_1_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_left_1_start` | field |
| `act_usage_ladder_lift_from_left_2_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_left_2_start` | field |
| `act_usage_ladder_lift_from_right_1_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_right_1_start` | field |
| `act_usage_ladder_lift_from_right_2_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_right_2_start` | field |
| `act_usage_ladder_pick_up_fork_begin` | `public static readonly ActionIndexCache act_usage_ladder_pick_up_fork_begin` | field |
| `act_usage_ladder_pick_up_fork_end` | `public static readonly ActionIndexCache act_usage_ladder_pick_up_fork_end` | field |
| `act_usage_ladder_push_back` | `public static readonly ActionIndexCache act_usage_ladder_push_back` | field |
| `act_usage_ladder_push_back_stopped` | `public static readonly ActionIndexCache act_usage_ladder_push_back_stopped` | field |
| `act_usage_batteringram_left` | `public static readonly ActionIndexCache act_usage_batteringram_left` | field |
| `act_usage_batteringram_left_slower` | `public static readonly ActionIndexCache act_usage_batteringram_left_slower` | field |
| `act_usage_batteringram_left_slowest` | `public static readonly ActionIndexCache act_usage_batteringram_left_slowest` | field |
| `act_usage_batteringram_right` | `public static readonly ActionIndexCache act_usage_batteringram_right` | field |
| `act_usage_batteringram_right_slower` | `public static readonly ActionIndexCache act_usage_batteringram_right_slower` | field |
| `act_usage_batteringram_right_slowest` | `public static readonly ActionIndexCache act_usage_batteringram_right_slowest` | field |
| `act_strike_bent_over` | `public static readonly ActionIndexCache act_strike_bent_over` | field |
| `act_strike_fall_back_back_rise` | `public static readonly ActionIndexCache act_strike_fall_back_back_rise` | field |
| `act_row_strike` | `public static readonly ActionIndexCache act_row_strike` | field |
| `act_stagger_forward` | `public static readonly ActionIndexCache act_stagger_forward` | field |
| `act_stagger_backward` | `public static readonly ActionIndexCache act_stagger_backward` | field |
| `act_stagger_right` | `public static readonly ActionIndexCache act_stagger_right` | field |
| `act_stagger_left` | `public static readonly ActionIndexCache act_stagger_left` | field |
| `act_stagger_forward_2` | `public static readonly ActionIndexCache act_stagger_forward_2` | field |
| `act_stagger_backward_2` | `public static readonly ActionIndexCache act_stagger_backward_2` | field |
| `act_stagger_right_2` | `public static readonly ActionIndexCache act_stagger_right_2` | field |
| `act_stagger_left_2` | `public static readonly ActionIndexCache act_stagger_left_2` | field |
| `act_stagger_forward_3` | `public static readonly ActionIndexCache act_stagger_forward_3` | field |
| `act_stagger_backward_3` | `public static readonly ActionIndexCache act_stagger_backward_3` | field |
| `act_stagger_right_3` | `public static readonly ActionIndexCache act_stagger_right_3` | field |
| `act_stagger_left_3` | `public static readonly ActionIndexCache act_stagger_left_3` | field |
| `act_command` | `public static readonly ActionIndexCache act_command` | field |
| `act_command_leftstance` | `public static readonly ActionIndexCache act_command_leftstance` | field |
| `act_command_unarmed` | `public static readonly ActionIndexCache act_command_unarmed` | field |
| `act_command_unarmed_leftstance` | `public static readonly ActionIndexCache act_command_unarmed_leftstance` | field |
| `act_command_2h` | `public static readonly ActionIndexCache act_command_2h` | field |
| `act_command_2h_leftstance` | `public static readonly ActionIndexCache act_command_2h_leftstance` | field |
| `act_command_bow` | `public static readonly ActionIndexCache act_command_bow` | field |
| `act_command_follow` | `public static readonly ActionIndexCache act_command_follow` | field |
| `act_command_follow_leftstance` | `public static readonly ActionIndexCache act_command_follow_leftstance` | field |
| `act_command_follow_unarmed` | `public static readonly ActionIndexCache act_command_follow_unarmed` | field |
| `act_command_follow_unarmed_leftstance` | `public static readonly ActionIndexCache act_command_follow_unarmed_leftstance` | field |
| `act_command_follow_2h` | `public static readonly ActionIndexCache act_command_follow_2h` | field |
| `act_command_follow_2h_leftstance` | `public static readonly ActionIndexCache act_command_follow_2h_leftstance` | field |
| `act_command_follow_bow` | `public static readonly ActionIndexCache act_command_follow_bow` | field |
| `act_horse_command` | `public static readonly ActionIndexCache act_horse_command` | field |
| `act_horse_command_unarmed` | `public static readonly ActionIndexCache act_horse_command_unarmed` | field |
| `act_horse_command_2h` | `public static readonly ActionIndexCache act_horse_command_2h` | field |
| `act_horse_command_bow` | `public static readonly ActionIndexCache act_horse_command_bow` | field |
| `act_horse_command_follow` | `public static readonly ActionIndexCache act_horse_command_follow` | field |
| `act_horse_command_follow_unarmed` | `public static readonly ActionIndexCache act_horse_command_follow_unarmed` | field |
| `act_horse_command_follow_2h` | `public static readonly ActionIndexCache act_horse_command_follow_2h` | field |
| `act_horse_command_follow_bow` | `public static readonly ActionIndexCache act_horse_command_follow_bow` | field |
| `act_ship_connection_break` | `public static readonly ActionIndexCache act_ship_connection_break` | field |
| `act_usage_hook_ready` | `public static readonly ActionIndexCache act_usage_hook_ready` | field |
| `act_usage_hook_release` | `public static readonly ActionIndexCache act_usage_hook_release` | field |
| `act_usage_row_idle_no_hold` | `public static readonly ActionIndexCache act_usage_row_idle_no_hold` | field |
| `act_t_pose` | `public static readonly ActionIndexCache act_t_pose` | field |
| `act_jump_loop` | `public static readonly ActionIndexCache act_jump_loop` | field |
| `act_stand_1` | `public static readonly ActionIndexCache act_stand_1` | field |
| `act_idle_unarmed_1` | `public static readonly ActionIndexCache act_idle_unarmed_1` | field |
| `act_walk_idle_1h_with_shield_left_stance` | `public static readonly ActionIndexCache act_walk_idle_1h_with_shield_left_stance` | field |
| `act_crouch_walk_idle_unarmed` | `public static readonly ActionIndexCache act_crouch_walk_idle_unarmed` | field |
| `act_beggar_idle` | `public static readonly ActionIndexCache act_beggar_idle` | field |
| `act_walk_idle_unarmed` | `public static readonly ActionIndexCache act_walk_idle_unarmed` | field |
| `act_horse_stand_1` | `public static readonly ActionIndexCache act_horse_stand_1` | field |
| `act_hero_mount_idle_camel` | `public static readonly ActionIndexCache act_hero_mount_idle_camel` | field |
| `act_camel_idle_1` | `public static readonly ActionIndexCache act_camel_idle_1` | field |
| `act_tableau_hand_armor_pose` | `public static readonly ActionIndexCache act_tableau_hand_armor_pose` | field |
| `act_inventory_idle_start` | `public static readonly ActionIndexCache act_inventory_idle_start` | field |
| `act_inventory_idle` | `public static readonly ActionIndexCache act_inventory_idle` | field |
| `act_inventory_glove_equip` | `public static readonly ActionIndexCache act_inventory_glove_equip` | field |
| `act_inventory_cloth_equip` | `public static readonly ActionIndexCache act_inventory_cloth_equip` | field |
| `act_conversation_normal_loop` | `public static readonly ActionIndexCache act_conversation_normal_loop` | field |
| `act_conversation_warrior_loop` | `public static readonly ActionIndexCache act_conversation_warrior_loop` | field |
| `act_conversation_hip_loop` | `public static readonly ActionIndexCache act_conversation_hip_loop` | field |
| `act_conversation_closed_loop` | `public static readonly ActionIndexCache act_conversation_closed_loop` | field |
| `act_conversation_demure_loop` | `public static readonly ActionIndexCache act_conversation_demure_loop` | field |
| `act_scared_reaction_1` | `public static readonly ActionIndexCache act_scared_reaction_1` | field |
| `act_scared_idle_1` | `public static readonly ActionIndexCache act_scared_idle_1` | field |
| `act_greeting_front_1` | `public static readonly ActionIndexCache act_greeting_front_1` | field |
| `act_greeting_front_2` | `public static readonly ActionIndexCache act_greeting_front_2` | field |
| `act_greeting_front_3` | `public static readonly ActionIndexCache act_greeting_front_3` | field |
| `act_greeting_front_4` | `public static readonly ActionIndexCache act_greeting_front_4` | field |
| `act_greeting_right_1` | `public static readonly ActionIndexCache act_greeting_right_1` | field |
| `act_greeting_right_2` | `public static readonly ActionIndexCache act_greeting_right_2` | field |
| `act_greeting_right_3` | `public static readonly ActionIndexCache act_greeting_right_3` | field |
| `act_greeting_right_4` | `public static readonly ActionIndexCache act_greeting_right_4` | field |
| `act_greeting_left_1` | `public static readonly ActionIndexCache act_greeting_left_1` | field |
| `act_greeting_left_2` | `public static readonly ActionIndexCache act_greeting_left_2` | field |
| `act_greeting_left_3` | `public static readonly ActionIndexCache act_greeting_left_3` | field |
| `act_greeting_left_4` | `public static readonly ActionIndexCache act_greeting_left_4` | field |
| `act_guard_cautious_look_around_1` | `public static readonly ActionIndexCache act_guard_cautious_look_around_1` | field |
| `act_guard_patrolling_cautious_look_around_1` | `public static readonly ActionIndexCache act_guard_patrolling_cautious_look_around_1` | field |
| `act_use_smithing_machine_ready` | `public static readonly ActionIndexCache act_use_smithing_machine_ready` | field |
| `act_use_smithing_machine_loop` | `public static readonly ActionIndexCache act_use_smithing_machine_loop` | field |
| `act_smithing_machine_anvil_start` | `public static readonly ActionIndexCache act_smithing_machine_anvil_start` | field |
| `act_smithing_machine_anvil_part_2` | `public static readonly ActionIndexCache act_smithing_machine_anvil_part_2` | field |
| `act_smithing_machine_anvil_part_4` | `public static readonly ActionIndexCache act_smithing_machine_anvil_part_4` | field |
| `act_smithing_machine_anvil_part_5` | `public static readonly ActionIndexCache act_smithing_machine_anvil_part_5` | field |
| `act_childhood_schooled` | `public static readonly ActionIndexCache act_childhood_schooled` | field |
| `act_arena_spectator` | `public static readonly ActionIndexCache act_arena_spectator` | field |
| `act_argue_trio_middle` | `public static readonly ActionIndexCache act_argue_trio_middle` | field |
| `act_argue_trio_middle_2` | `public static readonly ActionIndexCache act_argue_trio_middle_2` | field |
| `act_argue_trio_left` | `public static readonly ActionIndexCache act_argue_trio_left` | field |
| `act_argue_trio_right` | `public static readonly ActionIndexCache act_argue_trio_right` | field |
| `act_taunt_cheer_1` | `public static readonly ActionIndexCache act_taunt_cheer_1` | field |
| `act_taunt_cheer_2` | `public static readonly ActionIndexCache act_taunt_cheer_2` | field |
| `act_taunt_cheer_3` | `public static readonly ActionIndexCache act_taunt_cheer_3` | field |
| `act_taunt_cheer_4` | `public static readonly ActionIndexCache act_taunt_cheer_4` | field |
| `act_cheering_low_01` | `public static readonly ActionIndexCache act_cheering_low_01` | field |
| `act_cheering_low_02` | `public static readonly ActionIndexCache act_cheering_low_02` | field |
| `act_cheering_low_03` | `public static readonly ActionIndexCache act_cheering_low_03` | field |
| `act_cheering_low_04` | `public static readonly ActionIndexCache act_cheering_low_04` | field |
| `act_cheering_low_05` | `public static readonly ActionIndexCache act_cheering_low_05` | field |
| `act_cheering_low_06` | `public static readonly ActionIndexCache act_cheering_low_06` | field |
| `act_cheering_low_07` | `public static readonly ActionIndexCache act_cheering_low_07` | field |
| `act_cheering_low_08` | `public static readonly ActionIndexCache act_cheering_low_08` | field |
| `act_cheering_low_09` | `public static readonly ActionIndexCache act_cheering_low_09` | field |
| `act_cheering_low_10` | `public static readonly ActionIndexCache act_cheering_low_10` | field |
| `act_cheer_1` | `public static readonly ActionIndexCache act_cheer_1` | field |
| `act_cheer_2` | `public static readonly ActionIndexCache act_cheer_2` | field |
| `act_cheer_3` | `public static readonly ActionIndexCache act_cheer_3` | field |
| `act_cheer_4` | `public static readonly ActionIndexCache act_cheer_4` | field |
| `act_cheering_high_01` | `public static readonly ActionIndexCache act_cheering_high_01` | field |
| `act_cheering_high_02` | `public static readonly ActionIndexCache act_cheering_high_02` | field |
| `act_cheering_high_03` | `public static readonly ActionIndexCache act_cheering_high_03` | field |
| `act_cheering_high_04` | `public static readonly ActionIndexCache act_cheering_high_04` | field |
| `act_cheering_high_05` | `public static readonly ActionIndexCache act_cheering_high_05` | field |
| `act_cheering_high_06` | `public static readonly ActionIndexCache act_cheering_high_06` | field |
| `act_cheering_high_07` | `public static readonly ActionIndexCache act_cheering_high_07` | field |
| `act_cheering_high_08` | `public static readonly ActionIndexCache act_cheering_high_08` | field |
| `act_map_raid` | `public static readonly ActionIndexCache act_map_raid` | field |
| `act_map_rider_camel_attack_1h` | `public static readonly ActionIndexCache act_map_rider_camel_attack_1h` | field |
| `act_map_rider_camel_attack_1h_spear` | `public static readonly ActionIndexCache act_map_rider_camel_attack_1h_spear` | field |
| `act_map_rider_camel_attack_1h_swing` | `public static readonly ActionIndexCache act_map_rider_camel_attack_1h_swing` | field |
| `act_map_rider_camel_attack_2h_swing` | `public static readonly ActionIndexCache act_map_rider_camel_attack_2h_swing` | field |
| `act_map_rider_camel_attack_unarmed` | `public static readonly ActionIndexCache act_map_rider_camel_attack_unarmed` | field |
| `act_map_rider_horse_attack_1h` | `public static readonly ActionIndexCache act_map_rider_horse_attack_1h` | field |
| `act_map_rider_horse_attack_1h_spear` | `public static readonly ActionIndexCache act_map_rider_horse_attack_1h_spear` | field |
| `act_map_rider_horse_attack_1h_swing` | `public static readonly ActionIndexCache act_map_rider_horse_attack_1h_swing` | field |
| `act_map_rider_horse_attack_2h_swing` | `public static readonly ActionIndexCache act_map_rider_horse_attack_2h_swing` | field |
| `act_map_rider_horse_attack_unarmed` | `public static readonly ActionIndexCache act_map_rider_horse_attack_unarmed` | field |
| `act_map_mount_attack_1h` | `public static readonly ActionIndexCache act_map_mount_attack_1h` | field |
| `act_map_mount_attack_spear` | `public static readonly ActionIndexCache act_map_mount_attack_spear` | field |
| `act_map_mount_attack_swing` | `public static readonly ActionIndexCache act_map_mount_attack_swing` | field |
| `act_map_mount_attack_unarmed` | `public static readonly ActionIndexCache act_map_mount_attack_unarmed` | field |
| `act_map_attack_1h` | `public static readonly ActionIndexCache act_map_attack_1h` | field |
| `act_map_attack_2h` | `public static readonly ActionIndexCache act_map_attack_2h` | field |
| `act_map_attack_spear_1h_or_2h` | `public static readonly ActionIndexCache act_map_attack_spear_1h_or_2h` | field |
| `act_map_attack_unarmed` | `public static readonly ActionIndexCache act_map_attack_unarmed` | field |
| `act_conversation_naval_start` | `public static readonly ActionIndexCache act_conversation_naval_start` | field |
| `act_conversation_naval_idle_loop` | `public static readonly ActionIndexCache act_conversation_naval_idle_loop` | field |
| `act_death_by_arrow_pelvis` | `public static readonly ActionIndexCache act_death_by_arrow_pelvis` | field |
| `act_horse_fall_right` | `public static readonly ActionIndexCache act_horse_fall_right` | field |
| `act_cutscene_npc_argue_player_1` | `public static readonly ActionIndexCache act_cutscene_npc_argue_player_1` | field |
| `act_escape_jump` | `public static readonly ActionIndexCache act_escape_jump` | field |
| `act_raid_jump` | `public static readonly ActionIndexCache act_raid_jump` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
- [same namespace AgentComponent](../AgentComponent)
