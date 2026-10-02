---
title: "AnimFlags"
description: "AnimFlags：TaleWorlds.MountAndBlade 的 public 枚举，继承 ulong；公开成员 74 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/AnimFlags.cs。"
---
# AnimFlags

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public enum AnimFlags : ulong`
**File:** `TaleWorlds.MountAndBlade/AnimFlags.cs`

## 概述

AnimFlags 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AnimFlags.cs。它是一个 public 枚举，实现/继承 ulong，继承链为 AnimFlags → ulong。public/protected 成员共 74 个：74 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AnimFlags 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 AnimFlags → ulong。成员构成以方法为主（方法 0/74，属性 0/74），对外主要以操作入口暴露。继承链上的 ulong 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AnimFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `1UL` | `amf_priority_continue == 1UL` | 枚举值 |
| `2UL` | `amf_priority_jump == 2UL` | 枚举值 |
| `2UL` | `amf_priority_ride == 2UL` | 枚举值 |
| `2UL` | `amf_priority_crouch == 2UL` | 枚举值 |
| `10UL` | `amf_priority_attack == 10UL` | 枚举值 |
| `12UL` | `amf_priority_cancel == 12UL` | 枚举值 |
| `14UL` | `amf_priority_defend == 14UL` | 枚举值 |
| `15UL` | `amf_priority_defend_parry == 15UL` | 枚举值 |
| `15UL` | `amf_priority_throw == 15UL` | 枚举值 |
| `15UL` | `amf_priority_blocked == 15UL` | 枚举值 |
| `15UL` | `amf_priority_parried == 15UL` | 枚举值 |
| `33UL` | `amf_priority_kick == 33UL` | 枚举值 |
| `60UL` | `amf_priority_reload == 60UL` | 枚举值 |
| `64UL` | `amf_priority_mount == 64UL` | 枚举值 |
| `70UL` | `amf_priority_equip == 70UL` | 枚举值 |
| `74UL` | `amf_priority_rear == 74UL` | 枚举值 |
| `75UL` | `amf_priority_upperbody_while_kick == 75UL` | 枚举值 |
| `80UL` | `amf_priority_striked == 80UL` | 枚举值 |
| `81UL` | `amf_priority_fall_from_horse == 81UL` | 枚举值 |
| `81UL` | `amf_priority_jump_loop == 81UL` | 枚举值 |
| `82UL` | `amf_priority_jump_end == 82UL` | 枚举值 |
| `95UL` | `amf_priority_die == 95UL` | 枚举值 |
| `255UL` | `amf_priority_mask == 255UL` | 枚举值 |
| `256UL` | `anf_disable_agent_agent_collisions == 256UL` | 枚举值 |
| `512UL` | `anf_ignore_all_collisions == 512UL` | 枚举值 |
| `1024UL` | `anf_ignore_static_body_collisions == 1024UL` | 枚举值 |
| `2048UL` | `anf_use_last_step_point_as_data == 2048UL` | 枚举值 |
| `4096UL` | `anf_make_bodyfall_sound == 4096UL` | 枚举值 |
| `8192UL` | `anf_client_prediction == 8192UL` | 枚举值 |
| `16384UL` | `anf_keep == 16384UL` | 枚举值 |
| `32768UL` | `anf_restart == 32768UL` | 枚举值 |
| `65536UL` | `anf_client_owner_prediction == 65536UL` | 枚举值 |
| `131072UL` | `anf_make_walk_sound == 131072UL` | 枚举值 |
| `262144UL` | `anf_disable_hand_ik == 262144UL` | 枚举值 |
| `524288UL` | `anf_stick_item_to_left_hand == 524288UL` | 枚举值 |
| `1048576UL` | `anf_blends_according_to_look_slope == 1048576UL` | 枚举值 |
| `2097152UL` | `anf_synch_with_horse == 2097152UL` | 枚举值 |
| `4194304UL` | `anf_use_left_hand_during_attack == 4194304UL` | 枚举值 |
| `8388608UL` | `anf_lock_camera == 8388608UL` | 枚举值 |
| `16777216UL` | `anf_lock_movement == 16777216UL` | 枚举值 |
| `33554432UL` | `anf_synch_with_movement == 33554432UL` | 枚举值 |
| `67108864UL` | `anf_enable_hand_spring_ik == 67108864UL` | 枚举值 |
| `134217728UL` | `anf_enable_hand_blend_ik == 134217728UL` | 枚举值 |
| `268435456UL` | `anf_synch_with_ladder_movement == 268435456UL` | 枚举值 |
| `536870912UL` | `anf_do_not_keep_track_of_sound == 536870912UL` | 枚举值 |
| `1073741824UL` | `anf_reset_camera_height == 1073741824UL` | 枚举值 |
| `2147483648UL` | `anf_disable_alternative_randomization == 2147483648UL` | 枚举值 |
| `4294967296UL` | `anf_disable_auto_increment_progress == 4294967296UL` | 枚举值 |
| `8589934592UL` | `anf_switch_item_between_hands == 8589934592UL` | 枚举值 |
| `17179869184UL` | `anf_attach_sound_to_agent == 17179869184UL` | 枚举值 |
| `34359738368UL` | `anf_spawn_particle == 34359738368UL` | 枚举值 |
| `68719476736UL` | `anf_enforce_lowerbody == 68719476736UL` | 枚举值 |
| `137438953472UL` | `anf_enforce_all == 137438953472UL` | 枚举值 |
| `274877906944UL` | `anf_cyclic == 274877906944UL` | 枚举值 |
| `549755813888UL` | `anf_enforce_root_rotation == 549755813888UL` | 枚举值 |
| `1099511627776UL` | `anf_allow_head_movement == 1099511627776UL` | 枚举值 |
| `2199023255552UL` | `anf_disable_foot_ik == 2199023255552UL` | 枚举值 |
| `4398046511104UL` | `anf_affected_by_movement == 4398046511104UL` | 枚举值 |
| `8796093022208UL` | `anf_update_bounding_volume == 8796093022208UL` | 枚举值 |
| `17592186044416UL` | `anf_align_with_ground == 17592186044416UL` | 枚举值 |
| `35184372088832UL` | `anf_ignore_slope == 35184372088832UL` | 枚举值 |
| `70368744177664UL` | `anf_displace_position == 70368744177664UL` | 枚举值 |
| `140737488355328UL` | `anf_enable_left_hand_ik == 140737488355328UL` | 枚举值 |
| `281474976710656UL` | `anf_ignore_scale_on_root_position == 281474976710656UL` | 枚举值 |
| `562949953421312UL` | `anf_blend_main_item_bone_entitially == 562949953421312UL` | 枚举值 |
| `1125899906842624UL` | `anf_enforce_weapon_tip_with_rope_stretched == 1125899906842624UL` | 枚举值 |
| `2251799813685248UL` | `anf_enforce_weapon_tip_with_rope_relaxed == 2251799813685248UL` | 枚举值 |
| `4503530907893760UL` | `anf_animation_layer_flags_mask == 4503530907893760UL` | 枚举值 |
| `36UL` | `anf_animation_layer_flags_bits == 36UL` | 枚举值 |
| `1152921504606846976UL` | `anf_randomization_weight_1 == 1152921504606846976UL` | 枚举值 |
| `2305843009213693952UL` | `anf_randomization_weight_2 == 2305843009213693952UL` | 枚举值 |
| `4611686018427387904UL` | `anf_randomization_weight_4 == 4611686018427387904UL` | 枚举值 |
| `9223372036854775808UL` | `anf_randomization_weight_8 == 9223372036854775808UL` | 枚举值 |
| `17293822569102704640UL` | `anf_randomization_weight_mask == 17293822569102704640UL` | 枚举值 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
