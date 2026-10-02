---
title: "ActionIndexCache"
description: "ActionIndexCache：TaleWorlds.MountAndBlade 的 public 结构体，继承 IEquatable<ActionIndexCache>；公开成员 223 个（方法 7、属性 1、字段 215）。源文件 TaleWorlds.MountAndBlade/ActionIndexCache.cs。"
---
# ActionIndexCache

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct ActionIndexCache : IEquatable<ActionIndexCache>`
**File:** `TaleWorlds.MountAndBlade/ActionIndexCache.cs`

## 概述

ActionIndexCache 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ActionIndexCache.cs。它是一个 public 结构体，实现/继承 IEquatable<ActionIndexCache>，继承链为 ActionIndexCache → IEquatable。public/protected 成员共 223 个：7 方法、1 属性、215 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ActionIndexCache 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ActionIndexCache → IEquatable。成员构成以方法为主（方法 7/223，属性 1/223），对外主要以操作入口暴露。继承链上的 IEquatable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ActionIndexCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Index` | `public int Index` | 属性 |
| `Create` | `public static ActionIndexCache Create(string actName)` | 方法 |
| `GetName` | `public string GetName()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `Equals` | `public bool Equals(ActionIndexCache other)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `act_none` | `public static readonly ActionIndexCache act_none` | 字段 |
| `act_pickup_down_begin` | `public static readonly ActionIndexCache act_pickup_down_begin` | 字段 |
| `act_pickup_down_end` | `public static readonly ActionIndexCache act_pickup_down_end` | 字段 |
| `act_pickup_down_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_down_begin_left_stance` | 字段 |
| `act_pickup_down_end_left_stance` | `public static readonly ActionIndexCache act_pickup_down_end_left_stance` | 字段 |
| `act_pickup_down_left_begin` | `public static readonly ActionIndexCache act_pickup_down_left_begin` | 字段 |
| `act_pickup_down_left_end` | `public static readonly ActionIndexCache act_pickup_down_left_end` | 字段 |
| `act_pickup_down_left_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_down_left_begin_left_stance` | 字段 |
| `act_pickup_down_left_end_left_stance` | `public static readonly ActionIndexCache act_pickup_down_left_end_left_stance` | 字段 |
| `act_pickup_middle_begin` | `public static readonly ActionIndexCache act_pickup_middle_begin` | 字段 |
| `act_pickup_middle_end` | `public static readonly ActionIndexCache act_pickup_middle_end` | 字段 |
| `act_pickup_middle_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_begin_left_stance` | 字段 |
| `act_pickup_middle_end_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_end_left_stance` | 字段 |
| `act_pickup_middle_left_begin` | `public static readonly ActionIndexCache act_pickup_middle_left_begin` | 字段 |
| `act_pickup_middle_left_end` | `public static readonly ActionIndexCache act_pickup_middle_left_end` | 字段 |
| `act_pickup_middle_left_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_left_begin_left_stance` | 字段 |
| `act_pickup_middle_left_end_left_stance` | `public static readonly ActionIndexCache act_pickup_middle_left_end_left_stance` | 字段 |
| `act_pickup_up_begin` | `public static readonly ActionIndexCache act_pickup_up_begin` | 字段 |
| `act_pickup_up_end` | `public static readonly ActionIndexCache act_pickup_up_end` | 字段 |
| `act_pickup_up_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_up_begin_left_stance` | 字段 |
| `act_pickup_up_end_left_stance` | `public static readonly ActionIndexCache act_pickup_up_end_left_stance` | 字段 |
| `act_pickup_up_left_begin` | `public static readonly ActionIndexCache act_pickup_up_left_begin` | 字段 |
| `act_pickup_up_left_end` | `public static readonly ActionIndexCache act_pickup_up_left_end` | 字段 |
| `act_pickup_up_left_begin_left_stance` | `public static readonly ActionIndexCache act_pickup_up_left_begin_left_stance` | 字段 |
| `act_pickup_up_left_end_left_stance` | `public static readonly ActionIndexCache act_pickup_up_left_end_left_stance` | 字段 |
| `act_pickup_from_right_down_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_begin` | 字段 |
| `act_pickup_from_right_down_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_end` | 字段 |
| `act_pickup_from_right_down_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_left_begin` | 字段 |
| `act_pickup_from_right_down_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_right_down_horseback_left_end` | 字段 |
| `act_pickup_from_right_middle_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_begin` | 字段 |
| `act_pickup_from_right_middle_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_end` | 字段 |
| `act_pickup_from_right_middle_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_left_begin` | 字段 |
| `act_pickup_from_right_middle_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_right_middle_horseback_left_end` | 字段 |
| `act_pickup_from_right_up_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_begin` | 字段 |
| `act_pickup_from_right_up_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_end` | 字段 |
| `act_pickup_from_right_up_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_left_begin` | 字段 |
| `act_pickup_from_right_up_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_right_up_horseback_left_end` | 字段 |
| `act_pickup_from_left_down_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_begin` | 字段 |
| `act_pickup_from_left_down_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_end` | 字段 |
| `act_pickup_from_left_down_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_left_begin` | 字段 |
| `act_pickup_from_left_down_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_left_down_horseback_left_end` | 字段 |
| `act_pickup_from_left_middle_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_begin` | 字段 |
| `act_pickup_from_left_middle_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_end` | 字段 |
| `act_pickup_from_left_middle_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_left_begin` | 字段 |
| `act_pickup_from_left_middle_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_left_middle_horseback_left_end` | 字段 |
| `act_pickup_from_left_up_horseback_begin` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_begin` | 字段 |
| `act_pickup_from_left_up_horseback_end` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_end` | 字段 |
| `act_pickup_from_left_up_horseback_left_begin` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_left_begin` | 字段 |
| `act_pickup_from_left_up_horseback_left_end` | `public static readonly ActionIndexCache act_pickup_from_left_up_horseback_left_end` | 字段 |
| `act_pickup_boulder_begin` | `public static readonly ActionIndexCache act_pickup_boulder_begin` | 字段 |
| `act_pickup_boulder_end` | `public static readonly ActionIndexCache act_pickup_boulder_end` | 字段 |
| `act_usage_trebuchet_idle` | `public static readonly ActionIndexCache act_usage_trebuchet_idle` | 字段 |
| `act_usage_trebuchet_reload` | `public static readonly ActionIndexCache act_usage_trebuchet_reload` | 字段 |
| `act_usage_trebuchet_reload_2` | `public static readonly ActionIndexCache act_usage_trebuchet_reload_2` | 字段 |
| `act_usage_trebuchet_reload_idle` | `public static readonly ActionIndexCache act_usage_trebuchet_reload_idle` | 字段 |
| `act_usage_trebuchet_reload_2_idle` | `public static readonly ActionIndexCache act_usage_trebuchet_reload_2_idle` | 字段 |
| `act_usage_trebuchet_load_ammo` | `public static readonly ActionIndexCache act_usage_trebuchet_load_ammo` | 字段 |
| `act_usage_trebuchet_shoot` | `public static readonly ActionIndexCache act_usage_trebuchet_shoot` | 字段 |
| `act_usage_siege_machine_push` | `public static readonly ActionIndexCache act_usage_siege_machine_push` | 字段 |
| `act_usage_ladder_lift_from_left_1_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_left_1_start` | 字段 |
| `act_usage_ladder_lift_from_left_2_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_left_2_start` | 字段 |
| `act_usage_ladder_lift_from_right_1_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_right_1_start` | 字段 |
| `act_usage_ladder_lift_from_right_2_start` | `public static readonly ActionIndexCache act_usage_ladder_lift_from_right_2_start` | 字段 |
| `act_usage_ladder_pick_up_fork_begin` | `public static readonly ActionIndexCache act_usage_ladder_pick_up_fork_begin` | 字段 |
| `act_usage_ladder_pick_up_fork_end` | `public static readonly ActionIndexCache act_usage_ladder_pick_up_fork_end` | 字段 |
| `act_usage_ladder_push_back` | `public static readonly ActionIndexCache act_usage_ladder_push_back` | 字段 |
| `act_usage_ladder_push_back_stopped` | `public static readonly ActionIndexCache act_usage_ladder_push_back_stopped` | 字段 |
| `act_usage_batteringram_left` | `public static readonly ActionIndexCache act_usage_batteringram_left` | 字段 |
| `act_usage_batteringram_left_slower` | `public static readonly ActionIndexCache act_usage_batteringram_left_slower` | 字段 |
| `act_usage_batteringram_left_slowest` | `public static readonly ActionIndexCache act_usage_batteringram_left_slowest` | 字段 |
| `act_usage_batteringram_right` | `public static readonly ActionIndexCache act_usage_batteringram_right` | 字段 |
| `act_usage_batteringram_right_slower` | `public static readonly ActionIndexCache act_usage_batteringram_right_slower` | 字段 |
| `act_usage_batteringram_right_slowest` | `public static readonly ActionIndexCache act_usage_batteringram_right_slowest` | 字段 |
| `act_strike_bent_over` | `public static readonly ActionIndexCache act_strike_bent_over` | 字段 |
| `act_strike_fall_back_back_rise` | `public static readonly ActionIndexCache act_strike_fall_back_back_rise` | 字段 |
| `act_row_strike` | `public static readonly ActionIndexCache act_row_strike` | 字段 |
| `act_stagger_forward` | `public static readonly ActionIndexCache act_stagger_forward` | 字段 |
| `act_stagger_backward` | `public static readonly ActionIndexCache act_stagger_backward` | 字段 |
| `act_stagger_right` | `public static readonly ActionIndexCache act_stagger_right` | 字段 |
| `act_stagger_left` | `public static readonly ActionIndexCache act_stagger_left` | 字段 |
| `act_stagger_forward_2` | `public static readonly ActionIndexCache act_stagger_forward_2` | 字段 |
| `act_stagger_backward_2` | `public static readonly ActionIndexCache act_stagger_backward_2` | 字段 |
| `act_stagger_right_2` | `public static readonly ActionIndexCache act_stagger_right_2` | 字段 |
| `act_stagger_left_2` | `public static readonly ActionIndexCache act_stagger_left_2` | 字段 |
| `act_stagger_forward_3` | `public static readonly ActionIndexCache act_stagger_forward_3` | 字段 |
| `act_stagger_backward_3` | `public static readonly ActionIndexCache act_stagger_backward_3` | 字段 |
| `act_stagger_right_3` | `public static readonly ActionIndexCache act_stagger_right_3` | 字段 |
| `act_stagger_left_3` | `public static readonly ActionIndexCache act_stagger_left_3` | 字段 |
| `act_command` | `public static readonly ActionIndexCache act_command` | 字段 |
| `act_command_leftstance` | `public static readonly ActionIndexCache act_command_leftstance` | 字段 |
| `act_command_unarmed` | `public static readonly ActionIndexCache act_command_unarmed` | 字段 |
| `act_command_unarmed_leftstance` | `public static readonly ActionIndexCache act_command_unarmed_leftstance` | 字段 |
| `act_command_2h` | `public static readonly ActionIndexCache act_command_2h` | 字段 |
| `act_command_2h_leftstance` | `public static readonly ActionIndexCache act_command_2h_leftstance` | 字段 |
| `act_command_bow` | `public static readonly ActionIndexCache act_command_bow` | 字段 |
| `act_command_follow` | `public static readonly ActionIndexCache act_command_follow` | 字段 |
| `act_command_follow_leftstance` | `public static readonly ActionIndexCache act_command_follow_leftstance` | 字段 |
| `act_command_follow_unarmed` | `public static readonly ActionIndexCache act_command_follow_unarmed` | 字段 |
| `act_command_follow_unarmed_leftstance` | `public static readonly ActionIndexCache act_command_follow_unarmed_leftstance` | 字段 |
| `act_command_follow_2h` | `public static readonly ActionIndexCache act_command_follow_2h` | 字段 |
| `act_command_follow_2h_leftstance` | `public static readonly ActionIndexCache act_command_follow_2h_leftstance` | 字段 |
| `act_command_follow_bow` | `public static readonly ActionIndexCache act_command_follow_bow` | 字段 |
| `act_horse_command` | `public static readonly ActionIndexCache act_horse_command` | 字段 |
| `act_horse_command_unarmed` | `public static readonly ActionIndexCache act_horse_command_unarmed` | 字段 |
| `act_horse_command_2h` | `public static readonly ActionIndexCache act_horse_command_2h` | 字段 |
| `act_horse_command_bow` | `public static readonly ActionIndexCache act_horse_command_bow` | 字段 |
| `act_horse_command_follow` | `public static readonly ActionIndexCache act_horse_command_follow` | 字段 |
| `act_horse_command_follow_unarmed` | `public static readonly ActionIndexCache act_horse_command_follow_unarmed` | 字段 |
| `act_horse_command_follow_2h` | `public static readonly ActionIndexCache act_horse_command_follow_2h` | 字段 |
| `act_horse_command_follow_bow` | `public static readonly ActionIndexCache act_horse_command_follow_bow` | 字段 |
| `act_ship_connection_break` | `public static readonly ActionIndexCache act_ship_connection_break` | 字段 |
| `act_usage_hook_ready` | `public static readonly ActionIndexCache act_usage_hook_ready` | 字段 |
| `act_usage_hook_release` | `public static readonly ActionIndexCache act_usage_hook_release` | 字段 |
| `act_usage_row_idle_no_hold` | `public static readonly ActionIndexCache act_usage_row_idle_no_hold` | 字段 |
| `act_t_pose` | `public static readonly ActionIndexCache act_t_pose` | 字段 |
| `act_jump_loop` | `public static readonly ActionIndexCache act_jump_loop` | 字段 |
| `act_stand_1` | `public static readonly ActionIndexCache act_stand_1` | 字段 |
| `act_idle_unarmed_1` | `public static readonly ActionIndexCache act_idle_unarmed_1` | 字段 |
| `act_walk_idle_1h_with_shield_left_stance` | `public static readonly ActionIndexCache act_walk_idle_1h_with_shield_left_stance` | 字段 |
| `act_crouch_walk_idle_unarmed` | `public static readonly ActionIndexCache act_crouch_walk_idle_unarmed` | 字段 |
| `act_beggar_idle` | `public static readonly ActionIndexCache act_beggar_idle` | 字段 |
| `act_walk_idle_unarmed` | `public static readonly ActionIndexCache act_walk_idle_unarmed` | 字段 |
| `act_horse_stand_1` | `public static readonly ActionIndexCache act_horse_stand_1` | 字段 |
| `act_hero_mount_idle_camel` | `public static readonly ActionIndexCache act_hero_mount_idle_camel` | 字段 |
| `act_camel_idle_1` | `public static readonly ActionIndexCache act_camel_idle_1` | 字段 |
| `act_tableau_hand_armor_pose` | `public static readonly ActionIndexCache act_tableau_hand_armor_pose` | 字段 |
| `act_inventory_idle_start` | `public static readonly ActionIndexCache act_inventory_idle_start` | 字段 |
| `act_inventory_idle` | `public static readonly ActionIndexCache act_inventory_idle` | 字段 |
| `act_inventory_glove_equip` | `public static readonly ActionIndexCache act_inventory_glove_equip` | 字段 |
| `act_inventory_cloth_equip` | `public static readonly ActionIndexCache act_inventory_cloth_equip` | 字段 |
| `act_conversation_normal_loop` | `public static readonly ActionIndexCache act_conversation_normal_loop` | 字段 |
| `act_conversation_warrior_loop` | `public static readonly ActionIndexCache act_conversation_warrior_loop` | 字段 |
| `act_conversation_hip_loop` | `public static readonly ActionIndexCache act_conversation_hip_loop` | 字段 |
| `act_conversation_closed_loop` | `public static readonly ActionIndexCache act_conversation_closed_loop` | 字段 |
| `act_conversation_demure_loop` | `public static readonly ActionIndexCache act_conversation_demure_loop` | 字段 |
| `act_scared_reaction_1` | `public static readonly ActionIndexCache act_scared_reaction_1` | 字段 |
| `act_scared_idle_1` | `public static readonly ActionIndexCache act_scared_idle_1` | 字段 |
| `act_greeting_front_1` | `public static readonly ActionIndexCache act_greeting_front_1` | 字段 |
| `act_greeting_front_2` | `public static readonly ActionIndexCache act_greeting_front_2` | 字段 |
| `act_greeting_front_3` | `public static readonly ActionIndexCache act_greeting_front_3` | 字段 |
| `act_greeting_front_4` | `public static readonly ActionIndexCache act_greeting_front_4` | 字段 |
| `act_greeting_right_1` | `public static readonly ActionIndexCache act_greeting_right_1` | 字段 |
| `act_greeting_right_2` | `public static readonly ActionIndexCache act_greeting_right_2` | 字段 |
| `act_greeting_right_3` | `public static readonly ActionIndexCache act_greeting_right_3` | 字段 |
| `act_greeting_right_4` | `public static readonly ActionIndexCache act_greeting_right_4` | 字段 |
| `act_greeting_left_1` | `public static readonly ActionIndexCache act_greeting_left_1` | 字段 |
| `act_greeting_left_2` | `public static readonly ActionIndexCache act_greeting_left_2` | 字段 |
| `act_greeting_left_3` | `public static readonly ActionIndexCache act_greeting_left_3` | 字段 |
| `act_greeting_left_4` | `public static readonly ActionIndexCache act_greeting_left_4` | 字段 |
| `act_guard_cautious_look_around_1` | `public static readonly ActionIndexCache act_guard_cautious_look_around_1` | 字段 |
| `act_guard_patrolling_cautious_look_around_1` | `public static readonly ActionIndexCache act_guard_patrolling_cautious_look_around_1` | 字段 |
| `act_use_smithing_machine_ready` | `public static readonly ActionIndexCache act_use_smithing_machine_ready` | 字段 |
| `act_use_smithing_machine_loop` | `public static readonly ActionIndexCache act_use_smithing_machine_loop` | 字段 |
| `act_smithing_machine_anvil_start` | `public static readonly ActionIndexCache act_smithing_machine_anvil_start` | 字段 |
| `act_smithing_machine_anvil_part_2` | `public static readonly ActionIndexCache act_smithing_machine_anvil_part_2` | 字段 |
| `act_smithing_machine_anvil_part_4` | `public static readonly ActionIndexCache act_smithing_machine_anvil_part_4` | 字段 |
| `act_smithing_machine_anvil_part_5` | `public static readonly ActionIndexCache act_smithing_machine_anvil_part_5` | 字段 |
| `act_childhood_schooled` | `public static readonly ActionIndexCache act_childhood_schooled` | 字段 |
| `act_arena_spectator` | `public static readonly ActionIndexCache act_arena_spectator` | 字段 |
| `act_argue_trio_middle` | `public static readonly ActionIndexCache act_argue_trio_middle` | 字段 |
| `act_argue_trio_middle_2` | `public static readonly ActionIndexCache act_argue_trio_middle_2` | 字段 |
| `act_argue_trio_left` | `public static readonly ActionIndexCache act_argue_trio_left` | 字段 |
| `act_argue_trio_right` | `public static readonly ActionIndexCache act_argue_trio_right` | 字段 |
| `act_taunt_cheer_1` | `public static readonly ActionIndexCache act_taunt_cheer_1` | 字段 |
| `act_taunt_cheer_2` | `public static readonly ActionIndexCache act_taunt_cheer_2` | 字段 |
| `act_taunt_cheer_3` | `public static readonly ActionIndexCache act_taunt_cheer_3` | 字段 |
| `act_taunt_cheer_4` | `public static readonly ActionIndexCache act_taunt_cheer_4` | 字段 |
| `act_cheering_low_01` | `public static readonly ActionIndexCache act_cheering_low_01` | 字段 |
| `act_cheering_low_02` | `public static readonly ActionIndexCache act_cheering_low_02` | 字段 |
| `act_cheering_low_03` | `public static readonly ActionIndexCache act_cheering_low_03` | 字段 |
| `act_cheering_low_04` | `public static readonly ActionIndexCache act_cheering_low_04` | 字段 |
| `act_cheering_low_05` | `public static readonly ActionIndexCache act_cheering_low_05` | 字段 |
| `act_cheering_low_06` | `public static readonly ActionIndexCache act_cheering_low_06` | 字段 |
| `act_cheering_low_07` | `public static readonly ActionIndexCache act_cheering_low_07` | 字段 |
| `act_cheering_low_08` | `public static readonly ActionIndexCache act_cheering_low_08` | 字段 |
| `act_cheering_low_09` | `public static readonly ActionIndexCache act_cheering_low_09` | 字段 |
| `act_cheering_low_10` | `public static readonly ActionIndexCache act_cheering_low_10` | 字段 |
| `act_cheer_1` | `public static readonly ActionIndexCache act_cheer_1` | 字段 |
| `act_cheer_2` | `public static readonly ActionIndexCache act_cheer_2` | 字段 |
| `act_cheer_3` | `public static readonly ActionIndexCache act_cheer_3` | 字段 |
| `act_cheer_4` | `public static readonly ActionIndexCache act_cheer_4` | 字段 |
| `act_cheering_high_01` | `public static readonly ActionIndexCache act_cheering_high_01` | 字段 |
| `act_cheering_high_02` | `public static readonly ActionIndexCache act_cheering_high_02` | 字段 |
| `act_cheering_high_03` | `public static readonly ActionIndexCache act_cheering_high_03` | 字段 |
| `act_cheering_high_04` | `public static readonly ActionIndexCache act_cheering_high_04` | 字段 |
| `act_cheering_high_05` | `public static readonly ActionIndexCache act_cheering_high_05` | 字段 |
| `act_cheering_high_06` | `public static readonly ActionIndexCache act_cheering_high_06` | 字段 |
| `act_cheering_high_07` | `public static readonly ActionIndexCache act_cheering_high_07` | 字段 |
| `act_cheering_high_08` | `public static readonly ActionIndexCache act_cheering_high_08` | 字段 |
| `act_map_raid` | `public static readonly ActionIndexCache act_map_raid` | 字段 |
| `act_map_rider_camel_attack_1h` | `public static readonly ActionIndexCache act_map_rider_camel_attack_1h` | 字段 |
| `act_map_rider_camel_attack_1h_spear` | `public static readonly ActionIndexCache act_map_rider_camel_attack_1h_spear` | 字段 |
| `act_map_rider_camel_attack_1h_swing` | `public static readonly ActionIndexCache act_map_rider_camel_attack_1h_swing` | 字段 |
| `act_map_rider_camel_attack_2h_swing` | `public static readonly ActionIndexCache act_map_rider_camel_attack_2h_swing` | 字段 |
| `act_map_rider_camel_attack_unarmed` | `public static readonly ActionIndexCache act_map_rider_camel_attack_unarmed` | 字段 |
| `act_map_rider_horse_attack_1h` | `public static readonly ActionIndexCache act_map_rider_horse_attack_1h` | 字段 |
| `act_map_rider_horse_attack_1h_spear` | `public static readonly ActionIndexCache act_map_rider_horse_attack_1h_spear` | 字段 |
| `act_map_rider_horse_attack_1h_swing` | `public static readonly ActionIndexCache act_map_rider_horse_attack_1h_swing` | 字段 |
| `act_map_rider_horse_attack_2h_swing` | `public static readonly ActionIndexCache act_map_rider_horse_attack_2h_swing` | 字段 |
| `act_map_rider_horse_attack_unarmed` | `public static readonly ActionIndexCache act_map_rider_horse_attack_unarmed` | 字段 |
| `act_map_mount_attack_1h` | `public static readonly ActionIndexCache act_map_mount_attack_1h` | 字段 |
| `act_map_mount_attack_spear` | `public static readonly ActionIndexCache act_map_mount_attack_spear` | 字段 |
| `act_map_mount_attack_swing` | `public static readonly ActionIndexCache act_map_mount_attack_swing` | 字段 |
| `act_map_mount_attack_unarmed` | `public static readonly ActionIndexCache act_map_mount_attack_unarmed` | 字段 |
| `act_map_attack_1h` | `public static readonly ActionIndexCache act_map_attack_1h` | 字段 |
| `act_map_attack_2h` | `public static readonly ActionIndexCache act_map_attack_2h` | 字段 |
| `act_map_attack_spear_1h_or_2h` | `public static readonly ActionIndexCache act_map_attack_spear_1h_or_2h` | 字段 |
| `act_map_attack_unarmed` | `public static readonly ActionIndexCache act_map_attack_unarmed` | 字段 |
| `act_conversation_naval_start` | `public static readonly ActionIndexCache act_conversation_naval_start` | 字段 |
| `act_conversation_naval_idle_loop` | `public static readonly ActionIndexCache act_conversation_naval_idle_loop` | 字段 |
| `act_death_by_arrow_pelvis` | `public static readonly ActionIndexCache act_death_by_arrow_pelvis` | 字段 |
| `act_horse_fall_right` | `public static readonly ActionIndexCache act_horse_fall_right` | 字段 |
| `act_cutscene_npc_argue_player_1` | `public static readonly ActionIndexCache act_cutscene_npc_argue_player_1` | 字段 |
| `act_escape_jump` | `public static readonly ActionIndexCache act_escape_jump` | 字段 |
| `act_raid_jump` | `public static readonly ActionIndexCache act_raid_jump` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
- [同命名空间 AgentComponent](../AgentComponent)
