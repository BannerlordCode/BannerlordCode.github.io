---
title: "AnimFlags"
description: "AnimFlags: a public enum in TaleWorlds.MountAndBlade, inheriting ulong; 74 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AnimFlags.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AnimFlags

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public enum AnimFlags : ulong`
**File:** `TaleWorlds.MountAndBlade/AnimFlags.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AnimFlags lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AnimFlags.cs. It is a public enum, implementing/inheriting ulong; the inheritance chain is AnimFlags → ulong. It exposes 74 public/protected members: 74 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimFlags lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AnimFlags → ulong. The surface is method-led (methods 0/74, properties 0/74), so it mostly exposes operations. ulong on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AnimFlags.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `1UL` | `amf_priority_continue == 1UL` | enum value |
| `2UL` | `amf_priority_jump == 2UL` | enum value |
| `2UL` | `amf_priority_ride == 2UL` | enum value |
| `2UL` | `amf_priority_crouch == 2UL` | enum value |
| `10UL` | `amf_priority_attack == 10UL` | enum value |
| `12UL` | `amf_priority_cancel == 12UL` | enum value |
| `14UL` | `amf_priority_defend == 14UL` | enum value |
| `15UL` | `amf_priority_defend_parry == 15UL` | enum value |
| `15UL` | `amf_priority_throw == 15UL` | enum value |
| `15UL` | `amf_priority_blocked == 15UL` | enum value |
| `15UL` | `amf_priority_parried == 15UL` | enum value |
| `33UL` | `amf_priority_kick == 33UL` | enum value |
| `60UL` | `amf_priority_reload == 60UL` | enum value |
| `64UL` | `amf_priority_mount == 64UL` | enum value |
| `70UL` | `amf_priority_equip == 70UL` | enum value |
| `74UL` | `amf_priority_rear == 74UL` | enum value |
| `75UL` | `amf_priority_upperbody_while_kick == 75UL` | enum value |
| `80UL` | `amf_priority_striked == 80UL` | enum value |
| `81UL` | `amf_priority_fall_from_horse == 81UL` | enum value |
| `81UL` | `amf_priority_jump_loop == 81UL` | enum value |
| `82UL` | `amf_priority_jump_end == 82UL` | enum value |
| `95UL` | `amf_priority_die == 95UL` | enum value |
| `255UL` | `amf_priority_mask == 255UL` | enum value |
| `256UL` | `anf_disable_agent_agent_collisions == 256UL` | enum value |
| `512UL` | `anf_ignore_all_collisions == 512UL` | enum value |
| `1024UL` | `anf_ignore_static_body_collisions == 1024UL` | enum value |
| `2048UL` | `anf_use_last_step_point_as_data == 2048UL` | enum value |
| `4096UL` | `anf_make_bodyfall_sound == 4096UL` | enum value |
| `8192UL` | `anf_client_prediction == 8192UL` | enum value |
| `16384UL` | `anf_keep == 16384UL` | enum value |
| `32768UL` | `anf_restart == 32768UL` | enum value |
| `65536UL` | `anf_client_owner_prediction == 65536UL` | enum value |
| `131072UL` | `anf_make_walk_sound == 131072UL` | enum value |
| `262144UL` | `anf_disable_hand_ik == 262144UL` | enum value |
| `524288UL` | `anf_stick_item_to_left_hand == 524288UL` | enum value |
| `1048576UL` | `anf_blends_according_to_look_slope == 1048576UL` | enum value |
| `2097152UL` | `anf_synch_with_horse == 2097152UL` | enum value |
| `4194304UL` | `anf_use_left_hand_during_attack == 4194304UL` | enum value |
| `8388608UL` | `anf_lock_camera == 8388608UL` | enum value |
| `16777216UL` | `anf_lock_movement == 16777216UL` | enum value |
| `33554432UL` | `anf_synch_with_movement == 33554432UL` | enum value |
| `67108864UL` | `anf_enable_hand_spring_ik == 67108864UL` | enum value |
| `134217728UL` | `anf_enable_hand_blend_ik == 134217728UL` | enum value |
| `268435456UL` | `anf_synch_with_ladder_movement == 268435456UL` | enum value |
| `536870912UL` | `anf_do_not_keep_track_of_sound == 536870912UL` | enum value |
| `1073741824UL` | `anf_reset_camera_height == 1073741824UL` | enum value |
| `2147483648UL` | `anf_disable_alternative_randomization == 2147483648UL` | enum value |
| `4294967296UL` | `anf_disable_auto_increment_progress == 4294967296UL` | enum value |
| `8589934592UL` | `anf_switch_item_between_hands == 8589934592UL` | enum value |
| `17179869184UL` | `anf_attach_sound_to_agent == 17179869184UL` | enum value |
| `34359738368UL` | `anf_spawn_particle == 34359738368UL` | enum value |
| `68719476736UL` | `anf_enforce_lowerbody == 68719476736UL` | enum value |
| `137438953472UL` | `anf_enforce_all == 137438953472UL` | enum value |
| `274877906944UL` | `anf_cyclic == 274877906944UL` | enum value |
| `549755813888UL` | `anf_enforce_root_rotation == 549755813888UL` | enum value |
| `1099511627776UL` | `anf_allow_head_movement == 1099511627776UL` | enum value |
| `2199023255552UL` | `anf_disable_foot_ik == 2199023255552UL` | enum value |
| `4398046511104UL` | `anf_affected_by_movement == 4398046511104UL` | enum value |
| `8796093022208UL` | `anf_update_bounding_volume == 8796093022208UL` | enum value |
| `17592186044416UL` | `anf_align_with_ground == 17592186044416UL` | enum value |
| `35184372088832UL` | `anf_ignore_slope == 35184372088832UL` | enum value |
| `70368744177664UL` | `anf_displace_position == 70368744177664UL` | enum value |
| `140737488355328UL` | `anf_enable_left_hand_ik == 140737488355328UL` | enum value |
| `281474976710656UL` | `anf_ignore_scale_on_root_position == 281474976710656UL` | enum value |
| `562949953421312UL` | `anf_blend_main_item_bone_entitially == 562949953421312UL` | enum value |
| `1125899906842624UL` | `anf_enforce_weapon_tip_with_rope_stretched == 1125899906842624UL` | enum value |
| `2251799813685248UL` | `anf_enforce_weapon_tip_with_rope_relaxed == 2251799813685248UL` | enum value |
| `4503530907893760UL` | `anf_animation_layer_flags_mask == 4503530907893760UL` | enum value |
| `36UL` | `anf_animation_layer_flags_bits == 36UL` | enum value |
| `1152921504606846976UL` | `anf_randomization_weight_1 == 1152921504606846976UL` | enum value |
| `2305843009213693952UL` | `anf_randomization_weight_2 == 2305843009213693952UL` | enum value |
| `4611686018427387904UL` | `anf_randomization_weight_4 == 4611686018427387904UL` | enum value |
| `9223372036854775808UL` | `anf_randomization_weight_8 == 9223372036854775808UL` | enum value |
| `17293822569102704640UL` | `anf_randomization_weight_mask == 17293822569102704640UL` | enum value |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
