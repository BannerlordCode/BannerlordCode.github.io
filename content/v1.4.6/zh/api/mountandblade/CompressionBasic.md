---
title: "CompressionBasic"
description: "CompressionBasic：TaleWorlds.MountAndBlade 的 public 类；公开成员 73 个（方法 0、属性 0、字段 73）。源文件 TaleWorlds.MountAndBlade/CompressionBasic.cs。"
---
# CompressionBasic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class CompressionBasic`
**File:** `TaleWorlds.MountAndBlade/CompressionBasic.cs`

## 概述

CompressionBasic 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CompressionBasic.cs。它是一个 public 类，继承链为 CompressionBasic。public/protected 成员共 73 个：73 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CompressionBasic 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 CompressionBasic。成员构成以方法为主（方法 0/73，属性 0/73），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CompressionBasic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxPossibleAbsValueForSecondMaxQuaternionComponent` | `public const float MaxPossibleAbsValueForSecondMaxQuaternionComponent` | 字段 |
| `MaxPositionZForCompression` | `public const float MaxPositionZForCompression` | 字段 |
| `MaxPositionForCompression` | `public const float MaxPositionForCompression` | 字段 |
| `MinPositionForCompression` | `public const float MinPositionForCompression` | 字段 |
| `PingValueCompressionInfo` | `public static CompressionInfo.Integer PingValueCompressionInfo` | 字段 |
| `LossValueCompressionInfo` | `public static CompressionInfo.Integer LossValueCompressionInfo` | 字段 |
| `ServerPerformanceStateCompressionInfo` | `public static CompressionInfo.Integer ServerPerformanceStateCompressionInfo` | 字段 |
| `ColorCompressionInfo` | `public static CompressionInfo.UnsignedInteger ColorCompressionInfo` | 字段 |
| `ItemDataValueCompressionInfo` | `public static CompressionInfo.Integer ItemDataValueCompressionInfo` | 字段 |
| `RandomSeedCompressionInfo` | `public static CompressionInfo.Integer RandomSeedCompressionInfo` | 字段 |
| `PositionCompressionInfo` | `public static CompressionInfo.Float PositionCompressionInfo` | 字段 |
| `LocalPositionCompressionInfo` | `public static CompressionInfo.Float LocalPositionCompressionInfo` | 字段 |
| `LowResLocalPositionCompressionInfo` | `public static CompressionInfo.Float LowResLocalPositionCompressionInfo` | 字段 |
| `BigRangeLowResLocalPositionCompressionInfo` | `public static CompressionInfo.Float BigRangeLowResLocalPositionCompressionInfo` | 字段 |
| `PlayerCompressionInfo` | `public static CompressionInfo.Integer PlayerCompressionInfo` | 字段 |
| `PeerComponentCompressionInfo` | `public static CompressionInfo.UnsignedInteger PeerComponentCompressionInfo` | 字段 |
| `GUIDCompressionInfo` | `public static CompressionInfo.UnsignedInteger GUIDCompressionInfo` | 字段 |
| `FlagsCompressionInfo` | `public static CompressionInfo.Integer FlagsCompressionInfo` | 字段 |
| `GUIDIntCompressionInfo` | `public static CompressionInfo.Integer GUIDIntCompressionInfo` | 字段 |
| `MissionObjectIDCompressionInfo` | `public static CompressionInfo.Integer MissionObjectIDCompressionInfo` | 字段 |
| `UnitVectorCompressionInfo` | `public static CompressionInfo.Float UnitVectorCompressionInfo` | 字段 |
| `LowResRadianCompressionInfo` | `public static CompressionInfo.Float LowResRadianCompressionInfo` | 字段 |
| `RadianCompressionInfo` | `public static CompressionInfo.Float RadianCompressionInfo` | 字段 |
| `HighResRadianCompressionInfo` | `public static CompressionInfo.Float HighResRadianCompressionInfo` | 字段 |
| `ScaleCompressionInfo` | `public static CompressionInfo.Float ScaleCompressionInfo` | 字段 |
| `LowResQuaternionCompressionInfo` | `public static CompressionInfo.Float LowResQuaternionCompressionInfo` | 字段 |
| `OmittedQuaternionComponentIndexCompressionInfo` | `public static CompressionInfo.Integer OmittedQuaternionComponentIndexCompressionInfo` | 字段 |
| `ImpulseCompressionInfo` | `public static CompressionInfo.Float ImpulseCompressionInfo` | 字段 |
| `AnimationKeyCompressionInfo` | `public static CompressionInfo.Integer AnimationKeyCompressionInfo` | 字段 |
| `AnimationSpeedCompressionInfo` | `public static CompressionInfo.Float AnimationSpeedCompressionInfo` | 字段 |
| `AnimationProgressCompressionInfo` | `public static CompressionInfo.Float AnimationProgressCompressionInfo` | 字段 |
| `VertexAnimationSpeedCompressionInfo` | `public static CompressionInfo.Float VertexAnimationSpeedCompressionInfo` | 字段 |
| `PercentageCompressionInfo` | `public static CompressionInfo.Integer PercentageCompressionInfo` | 字段 |
| `EntityChildCountCompressionInfo` | `public static CompressionInfo.Integer EntityChildCountCompressionInfo` | 字段 |
| `AgentHitDamageCompressionInfo` | `public static CompressionInfo.Integer AgentHitDamageCompressionInfo` | 字段 |
| `AgentHitModifiedDamageCompressionInfo` | `public static CompressionInfo.Integer AgentHitModifiedDamageCompressionInfo` | 字段 |
| `AgentHitRelativeSpeedCompressionInfo` | `public static CompressionInfo.Float AgentHitRelativeSpeedCompressionInfo` | 字段 |
| `AgentHitArmorCompressionInfo` | `public static CompressionInfo.Integer AgentHitArmorCompressionInfo` | 字段 |
| `AgentHitBoneIndexCompressionInfo` | `public static CompressionInfo.Integer AgentHitBoneIndexCompressionInfo` | 字段 |
| `AgentHitBodyPartCompressionInfo` | `public static CompressionInfo.Integer AgentHitBodyPartCompressionInfo` | 字段 |
| `AgentHitDamageTypeCompressionInfo` | `public static CompressionInfo.Integer AgentHitDamageTypeCompressionInfo` | 字段 |
| `RoundGoldAmountCompressionInfo` | `public static CompressionInfo.Integer RoundGoldAmountCompressionInfo` | 字段 |
| `DebugIntNonCompressionInfo` | `public static CompressionInfo.Integer DebugIntNonCompressionInfo` | 字段 |
| `DebugULongNonCompressionInfo` | `public static CompressionInfo.UnsignedLongInteger DebugULongNonCompressionInfo` | 字段 |
| `AgentAgeCompressionInfo` | `public static CompressionInfo.Float AgentAgeCompressionInfo` | 字段 |
| `FaceKeyDataCompressionInfo` | `public static CompressionInfo.Float FaceKeyDataCompressionInfo` | 字段 |
| `PlayerChosenBadgeCompressionInfo` | `public static CompressionInfo.Integer PlayerChosenBadgeCompressionInfo` | 字段 |
| `MaxNumberOfPlayersCompressionInfo` | `public static CompressionInfo.Integer MaxNumberOfPlayersCompressionInfo` | 字段 |
| `MinNumberOfPlayersForMatchStartCompressionInfo` | `public static CompressionInfo.Integer MinNumberOfPlayersForMatchStartCompressionInfo` | 字段 |
| `MapTimeLimitCompressionInfo` | `public static CompressionInfo.Integer MapTimeLimitCompressionInfo` | 字段 |
| `RoundTotalCompressionInfo` | `public static CompressionInfo.Integer RoundTotalCompressionInfo` | 字段 |
| `RoundTimeLimitCompressionInfo` | `public static CompressionInfo.Integer RoundTimeLimitCompressionInfo` | 字段 |
| `WarmupTimeLimitCompressionInfo` | `public static CompressionInfo.Integer WarmupTimeLimitCompressionInfo` | 字段 |
| `RoundPreparationTimeLimitCompressionInfo` | `public static CompressionInfo.Integer RoundPreparationTimeLimitCompressionInfo` | 字段 |
| `RespawnPeriodCompressionInfo` | `public static CompressionInfo.Integer RespawnPeriodCompressionInfo` | 字段 |
| `GoldGainChangePercentageCompressionInfo` | `public static CompressionInfo.Integer GoldGainChangePercentageCompressionInfo` | 字段 |
| `SpectatorCameraTypeCompressionInfo` | `public static CompressionInfo.Integer SpectatorCameraTypeCompressionInfo` | 字段 |
| `PollAcceptThresholdCompressionInfo` | `public static CompressionInfo.Integer PollAcceptThresholdCompressionInfo` | 字段 |
| `NumberOfBotsTeamCompressionInfo` | `public static CompressionInfo.Integer NumberOfBotsTeamCompressionInfo` | 字段 |
| `NumberOfBotsPerFormationCompressionInfo` | `public static CompressionInfo.Integer NumberOfBotsPerFormationCompressionInfo` | 字段 |
| `AutoTeamBalanceLimitCompressionInfo` | `public static CompressionInfo.Integer AutoTeamBalanceLimitCompressionInfo` | 字段 |
| `FriendlyFireDamageCompressionInfo` | `public static CompressionInfo.Integer FriendlyFireDamageCompressionInfo` | 字段 |
| `ForcedAvatarIndexCompressionInfo` | `public static CompressionInfo.Integer ForcedAvatarIndexCompressionInfo` | 字段 |
| `IntermissionStateCompressionInfo` | `public static CompressionInfo.Integer IntermissionStateCompressionInfo` | 字段 |
| `IntermissionTimerCompressionInfo` | `public static CompressionInfo.Float IntermissionTimerCompressionInfo` | 字段 |
| `IntermissionMapVoteItemCountCompressionInfo` | `public static CompressionInfo.Integer IntermissionMapVoteItemCountCompressionInfo` | 字段 |
| `IntermissionVoterCountCompressionInfo` | `public static CompressionInfo.Integer IntermissionVoterCountCompressionInfo` | 字段 |
| `TroopTypeCompressionInfo` | `public static CompressionInfo.Integer TroopTypeCompressionInfo` | 字段 |
| `BannerDataCountCompressionInfo` | `public static CompressionInfo.Integer BannerDataCountCompressionInfo` | 字段 |
| `BannerDataMeshIdCompressionInfo` | `public static CompressionInfo.Integer BannerDataMeshIdCompressionInfo` | 字段 |
| `BannerDataColorIndexCompressionInfo` | `public static CompressionInfo.Integer BannerDataColorIndexCompressionInfo` | 字段 |
| `BannerDataSizeCompressionInfo` | `public static CompressionInfo.Integer BannerDataSizeCompressionInfo` | 字段 |
| `BannerDataRotationCompressionInfo` | `public static CompressionInfo.Integer BannerDataRotationCompressionInfo` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
