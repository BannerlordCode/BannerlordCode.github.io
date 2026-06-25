---
title: "CombatSoundContainer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatSoundContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CombatSoundContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CombatSoundContainer`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CombatSoundContainer.cs`

## 概述

`CombatSoundContainer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SoundCodeMissionCombatBluntHigh` | `public static int SoundCodeMissionCombatBluntHigh { get; }` |
| `SoundCodeMissionCombatBluntLow` | `public static int SoundCodeMissionCombatBluntLow { get; }` |
| `SoundCodeMissionCombatBluntMed` | `public static int SoundCodeMissionCombatBluntMed { get; }` |
| `SoundCodeMissionCombatBoulderHigh` | `public static int SoundCodeMissionCombatBoulderHigh { get; }` |
| `SoundCodeMissionCombatBoulderLow` | `public static int SoundCodeMissionCombatBoulderLow { get; }` |
| `SoundCodeMissionCombatBoulderMed` | `public static int SoundCodeMissionCombatBoulderMed { get; }` |
| `SoundCodeMissionCombatCutHigh` | `public static int SoundCodeMissionCombatCutHigh { get; }` |
| `SoundCodeMissionCombatCutLow` | `public static int SoundCodeMissionCombatCutLow { get; }` |
| `SoundCodeMissionCombatCutMed` | `public static int SoundCodeMissionCombatCutMed { get; }` |
| `SoundCodeMissionCombatMissileHigh` | `public static int SoundCodeMissionCombatMissileHigh { get; }` |
| `SoundCodeMissionCombatMissileLow` | `public static int SoundCodeMissionCombatMissileLow { get; }` |
| `SoundCodeMissionCombatMissileMed` | `public static int SoundCodeMissionCombatMissileMed { get; }` |
| `SoundCodeMissionCombatPierceHigh` | `public static int SoundCodeMissionCombatPierceHigh { get; }` |
| `SoundCodeMissionCombatPierceLow` | `public static int SoundCodeMissionCombatPierceLow { get; }` |
| `SoundCodeMissionCombatPierceMed` | `public static int SoundCodeMissionCombatPierceMed { get; }` |
| `SoundCodeMissionCombatPunchHigh` | `public static int SoundCodeMissionCombatPunchHigh { get; }` |
| `SoundCodeMissionCombatPunchLow` | `public static int SoundCodeMissionCombatPunchLow { get; }` |
| `SoundCodeMissionCombatPunchMed` | `public static int SoundCodeMissionCombatPunchMed { get; }` |
| `SoundCodeMissionCombatThrowingAxeHigh` | `public static int SoundCodeMissionCombatThrowingAxeHigh { get; }` |
| `SoundCodeMissionCombatThrowingAxeLow` | `public static int SoundCodeMissionCombatThrowingAxeLow { get; }` |
| `SoundCodeMissionCombatThrowingAxeMed` | `public static int SoundCodeMissionCombatThrowingAxeMed { get; }` |
| `SoundCodeMissionCombatThrowingDaggerHigh` | `public static int SoundCodeMissionCombatThrowingDaggerHigh { get; }` |
| `SoundCodeMissionCombatThrowingDaggerLow` | `public static int SoundCodeMissionCombatThrowingDaggerLow { get; }` |
| `SoundCodeMissionCombatThrowingDaggerMed` | `public static int SoundCodeMissionCombatThrowingDaggerMed { get; }` |
| `SoundCodeMissionCombatThrowingStoneHigh` | `public static int SoundCodeMissionCombatThrowingStoneHigh { get; }` |
| `SoundCodeMissionCombatThrowingStoneLow` | `public static int SoundCodeMissionCombatThrowingStoneLow { get; }` |
| `SoundCodeMissionCombatThrowingStoneMed` | `public static int SoundCodeMissionCombatThrowingStoneMed { get; }` |
| `SoundCodeMissionCombatChargeDamage` | `public static int SoundCodeMissionCombatChargeDamage { get; }` |
| `SoundCodeMissionCombatKick` | `public static int SoundCodeMissionCombatKick { get; }` |
| `SoundCodeMissionCombatPlayerhit` | `public static int SoundCodeMissionCombatPlayerhit { get; }` |
| `SoundCodeMissionCombatWoodShieldBash` | `public static int SoundCodeMissionCombatWoodShieldBash { get; }` |
| `SoundCodeMissionCombatMetalShieldBash` | `public static int SoundCodeMissionCombatMetalShieldBash { get; }` |

## 使用示例

```csharp
var example = new CombatSoundContainer();
```

## 参见

- [完整类目录](../catalog)