---
title: "CompressionBasic"
description: "CompressionBasic: a public class in TaleWorlds.MountAndBlade; 73 exposed members (0 methods, 0 properties, 73 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CompressionBasic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CompressionBasic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class CompressionBasic`
**File:** `TaleWorlds.MountAndBlade/CompressionBasic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CompressionBasic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CompressionBasic.cs. It is a public class; the inheritance chain is CompressionBasic. It exposes 73 public/protected members: 73 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompressionBasic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CompressionBasic. The surface is method-led (methods 0/73, properties 0/73), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CompressionBasic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxPossibleAbsValueForSecondMaxQuaternionComponent` | `public const float MaxPossibleAbsValueForSecondMaxQuaternionComponent` | field |
| `MaxPositionZForCompression` | `public const float MaxPositionZForCompression` | field |
| `MaxPositionForCompression` | `public const float MaxPositionForCompression` | field |
| `MinPositionForCompression` | `public const float MinPositionForCompression` | field |
| `PingValueCompressionInfo` | `public static CompressionInfo.Integer PingValueCompressionInfo` | field |
| `LossValueCompressionInfo` | `public static CompressionInfo.Integer LossValueCompressionInfo` | field |
| `ServerPerformanceStateCompressionInfo` | `public static CompressionInfo.Integer ServerPerformanceStateCompressionInfo` | field |
| `ColorCompressionInfo` | `public static CompressionInfo.UnsignedInteger ColorCompressionInfo` | field |
| `ItemDataValueCompressionInfo` | `public static CompressionInfo.Integer ItemDataValueCompressionInfo` | field |
| `RandomSeedCompressionInfo` | `public static CompressionInfo.Integer RandomSeedCompressionInfo` | field |
| `PositionCompressionInfo` | `public static CompressionInfo.Float PositionCompressionInfo` | field |
| `LocalPositionCompressionInfo` | `public static CompressionInfo.Float LocalPositionCompressionInfo` | field |
| `LowResLocalPositionCompressionInfo` | `public static CompressionInfo.Float LowResLocalPositionCompressionInfo` | field |
| `BigRangeLowResLocalPositionCompressionInfo` | `public static CompressionInfo.Float BigRangeLowResLocalPositionCompressionInfo` | field |
| `PlayerCompressionInfo` | `public static CompressionInfo.Integer PlayerCompressionInfo` | field |
| `PeerComponentCompressionInfo` | `public static CompressionInfo.UnsignedInteger PeerComponentCompressionInfo` | field |
| `GUIDCompressionInfo` | `public static CompressionInfo.UnsignedInteger GUIDCompressionInfo` | field |
| `FlagsCompressionInfo` | `public static CompressionInfo.Integer FlagsCompressionInfo` | field |
| `GUIDIntCompressionInfo` | `public static CompressionInfo.Integer GUIDIntCompressionInfo` | field |
| `MissionObjectIDCompressionInfo` | `public static CompressionInfo.Integer MissionObjectIDCompressionInfo` | field |
| `UnitVectorCompressionInfo` | `public static CompressionInfo.Float UnitVectorCompressionInfo` | field |
| `LowResRadianCompressionInfo` | `public static CompressionInfo.Float LowResRadianCompressionInfo` | field |
| `RadianCompressionInfo` | `public static CompressionInfo.Float RadianCompressionInfo` | field |
| `HighResRadianCompressionInfo` | `public static CompressionInfo.Float HighResRadianCompressionInfo` | field |
| `ScaleCompressionInfo` | `public static CompressionInfo.Float ScaleCompressionInfo` | field |
| `LowResQuaternionCompressionInfo` | `public static CompressionInfo.Float LowResQuaternionCompressionInfo` | field |
| `OmittedQuaternionComponentIndexCompressionInfo` | `public static CompressionInfo.Integer OmittedQuaternionComponentIndexCompressionInfo` | field |
| `ImpulseCompressionInfo` | `public static CompressionInfo.Float ImpulseCompressionInfo` | field |
| `AnimationKeyCompressionInfo` | `public static CompressionInfo.Integer AnimationKeyCompressionInfo` | field |
| `AnimationSpeedCompressionInfo` | `public static CompressionInfo.Float AnimationSpeedCompressionInfo` | field |
| `AnimationProgressCompressionInfo` | `public static CompressionInfo.Float AnimationProgressCompressionInfo` | field |
| `VertexAnimationSpeedCompressionInfo` | `public static CompressionInfo.Float VertexAnimationSpeedCompressionInfo` | field |
| `PercentageCompressionInfo` | `public static CompressionInfo.Integer PercentageCompressionInfo` | field |
| `EntityChildCountCompressionInfo` | `public static CompressionInfo.Integer EntityChildCountCompressionInfo` | field |
| `AgentHitDamageCompressionInfo` | `public static CompressionInfo.Integer AgentHitDamageCompressionInfo` | field |
| `AgentHitModifiedDamageCompressionInfo` | `public static CompressionInfo.Integer AgentHitModifiedDamageCompressionInfo` | field |
| `AgentHitRelativeSpeedCompressionInfo` | `public static CompressionInfo.Float AgentHitRelativeSpeedCompressionInfo` | field |
| `AgentHitArmorCompressionInfo` | `public static CompressionInfo.Integer AgentHitArmorCompressionInfo` | field |
| `AgentHitBoneIndexCompressionInfo` | `public static CompressionInfo.Integer AgentHitBoneIndexCompressionInfo` | field |
| `AgentHitBodyPartCompressionInfo` | `public static CompressionInfo.Integer AgentHitBodyPartCompressionInfo` | field |
| `AgentHitDamageTypeCompressionInfo` | `public static CompressionInfo.Integer AgentHitDamageTypeCompressionInfo` | field |
| `RoundGoldAmountCompressionInfo` | `public static CompressionInfo.Integer RoundGoldAmountCompressionInfo` | field |
| `DebugIntNonCompressionInfo` | `public static CompressionInfo.Integer DebugIntNonCompressionInfo` | field |
| `DebugULongNonCompressionInfo` | `public static CompressionInfo.UnsignedLongInteger DebugULongNonCompressionInfo` | field |
| `AgentAgeCompressionInfo` | `public static CompressionInfo.Float AgentAgeCompressionInfo` | field |
| `FaceKeyDataCompressionInfo` | `public static CompressionInfo.Float FaceKeyDataCompressionInfo` | field |
| `PlayerChosenBadgeCompressionInfo` | `public static CompressionInfo.Integer PlayerChosenBadgeCompressionInfo` | field |
| `MaxNumberOfPlayersCompressionInfo` | `public static CompressionInfo.Integer MaxNumberOfPlayersCompressionInfo` | field |
| `MinNumberOfPlayersForMatchStartCompressionInfo` | `public static CompressionInfo.Integer MinNumberOfPlayersForMatchStartCompressionInfo` | field |
| `MapTimeLimitCompressionInfo` | `public static CompressionInfo.Integer MapTimeLimitCompressionInfo` | field |
| `RoundTotalCompressionInfo` | `public static CompressionInfo.Integer RoundTotalCompressionInfo` | field |
| `RoundTimeLimitCompressionInfo` | `public static CompressionInfo.Integer RoundTimeLimitCompressionInfo` | field |
| `WarmupTimeLimitCompressionInfo` | `public static CompressionInfo.Integer WarmupTimeLimitCompressionInfo` | field |
| `RoundPreparationTimeLimitCompressionInfo` | `public static CompressionInfo.Integer RoundPreparationTimeLimitCompressionInfo` | field |
| `RespawnPeriodCompressionInfo` | `public static CompressionInfo.Integer RespawnPeriodCompressionInfo` | field |
| `GoldGainChangePercentageCompressionInfo` | `public static CompressionInfo.Integer GoldGainChangePercentageCompressionInfo` | field |
| `SpectatorCameraTypeCompressionInfo` | `public static CompressionInfo.Integer SpectatorCameraTypeCompressionInfo` | field |
| `PollAcceptThresholdCompressionInfo` | `public static CompressionInfo.Integer PollAcceptThresholdCompressionInfo` | field |
| `NumberOfBotsTeamCompressionInfo` | `public static CompressionInfo.Integer NumberOfBotsTeamCompressionInfo` | field |
| `NumberOfBotsPerFormationCompressionInfo` | `public static CompressionInfo.Integer NumberOfBotsPerFormationCompressionInfo` | field |
| `AutoTeamBalanceLimitCompressionInfo` | `public static CompressionInfo.Integer AutoTeamBalanceLimitCompressionInfo` | field |
| `FriendlyFireDamageCompressionInfo` | `public static CompressionInfo.Integer FriendlyFireDamageCompressionInfo` | field |
| `ForcedAvatarIndexCompressionInfo` | `public static CompressionInfo.Integer ForcedAvatarIndexCompressionInfo` | field |
| `IntermissionStateCompressionInfo` | `public static CompressionInfo.Integer IntermissionStateCompressionInfo` | field |
| `IntermissionTimerCompressionInfo` | `public static CompressionInfo.Float IntermissionTimerCompressionInfo` | field |
| `IntermissionMapVoteItemCountCompressionInfo` | `public static CompressionInfo.Integer IntermissionMapVoteItemCountCompressionInfo` | field |
| `IntermissionVoterCountCompressionInfo` | `public static CompressionInfo.Integer IntermissionVoterCountCompressionInfo` | field |
| `TroopTypeCompressionInfo` | `public static CompressionInfo.Integer TroopTypeCompressionInfo` | field |
| `BannerDataCountCompressionInfo` | `public static CompressionInfo.Integer BannerDataCountCompressionInfo` | field |
| `BannerDataMeshIdCompressionInfo` | `public static CompressionInfo.Integer BannerDataMeshIdCompressionInfo` | field |
| `BannerDataColorIndexCompressionInfo` | `public static CompressionInfo.Integer BannerDataColorIndexCompressionInfo` | field |
| `BannerDataSizeCompressionInfo` | `public static CompressionInfo.Integer BannerDataSizeCompressionInfo` | field |
| `BannerDataRotationCompressionInfo` | `public static CompressionInfo.Integer BannerDataRotationCompressionInfo` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
