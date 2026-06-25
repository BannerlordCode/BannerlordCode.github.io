---
title: "FlagDominationMissionRepresentative"
description: "FlagDominationMissionRepresentative 的自动生成类参考。"
---
# FlagDominationMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagDominationMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionRepresentatives/FlagDominationMissionRepresentative.cs`

## 概述

`FlagDominationMissionRepresentative` 位于 `TaleWorlds.MountAndBlade.MissionRepresentatives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGoldAmountForVisual
`public int GetGoldAmountForVisual()`

**用途 / Purpose:** 读取并返回当前对象中 「gold amount for visual」 的结果。

```csharp
// 先通过子系统 API 拿到 FlagDominationMissionRepresentative 实例
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldAmountForVisual();
```

### UpdateSelectedClassServer
`public void UpdateSelectedClassServer(Agent agent)`

**用途 / Purpose:** 重新计算并更新 「selected class server」 的最新表示。

```csharp
// 先通过子系统 API 拿到 FlagDominationMissionRepresentative 实例
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
flagDominationMissionRepresentative.UpdateSelectedClassServer(agent);
```

### CheckIfSurvivedLastRoundAndReset
`public bool CheckIfSurvivedLastRoundAndReset()`

**用途 / Purpose:** 检查「if survived last round and reset」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 FlagDominationMissionRepresentative 实例
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.CheckIfSurvivedLastRoundAndReset();
```

### GetGoldGainsFromKillData
`public int GetGoldGainsFromKillData(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isFriendly)`

**用途 / Purpose:** 读取并返回当前对象中 「gold gains from kill data」 的结果。

```csharp
// 先通过子系统 API 拿到 FlagDominationMissionRepresentative 实例
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldGainsFromKillData(killerPerkHandler, assistingHitterPerkHandler, victimClass, false, false);
```

### GetGoldGainFromKillDataAndUpdateFlags
`public int GetGoldGainFromKillDataAndUpdateFlags(MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist)`

**用途 / Purpose:** 读取并返回当前对象中 「gold gain from kill data and update flags」 的结果。

```csharp
// 先通过子系统 API 拿到 FlagDominationMissionRepresentative 实例
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldGainFromKillDataAndUpdateFlags(victimClass, false);
```

### GetGoldGainsFromAllyDeathReward
`public int GetGoldGainsFromAllyDeathReward(int baseAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「gold gains from ally death reward」 的结果。

```csharp
// 先通过子系统 API 拿到 FlagDominationMissionRepresentative 实例
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
var result = flagDominationMissionRepresentative.GetGoldGainsFromAllyDeathReward(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FlagDominationMissionRepresentative flagDominationMissionRepresentative = ...;
flagDominationMissionRepresentative.GetGoldAmountForVisual();
```

## 参见

- [本区域目录](../)