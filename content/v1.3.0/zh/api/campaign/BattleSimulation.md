---
title: "BattleSimulation"
description: "BattleSimulation 的自动生成类参考。"
---
# BattleSimulation

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BattleSimulation : IBattleObserver`
**Base:** `IBattleObserver`
**File:** `TaleWorlds.CampaignSystem/BattleSimulation.cs`

## 概述

`BattleSimulation` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSimulationFinished` | `public bool IsSimulationFinished { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; set; }` |
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |
| `Teams` | `public List<List<BattleResultPartyData>> Teams { get; }` |

## 主要方法

### Play
`public void Play()`

**用途 / Purpose:** 调用 Play 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.Play();
```

### FastForward
`public void FastForward()`

**用途 / Purpose:** 调用 FastForward 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.FastForward();
```

### Skip
`public void Skip()`

**用途 / Purpose:** 调用 Skip 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.Skip();
```

### Pause
`public void Pause()`

**用途 / Purpose:** 调用 Pause 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.Pause();
```

### OnReturn
`public void OnReturn()`

**用途 / Purpose:** 在 return 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.OnReturn();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.Tick(0);
```

### ResetSimulation
`public void ResetSimulation()`

**用途 / Purpose:** 将 simulation 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.ResetSimulation();
```

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)`

**用途 / Purpose:** 调用 TroopNumberChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.TroopNumberChanged(side, battleCombatant, character, 0, 0, 0, 0, 0, 0);
```

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)`

**用途 / Purpose:** 调用 HeroSkillIncreased 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.HeroSkillIncreased(side, battleCombatant, heroCharacter, skill);
```

### BattleResultsReady
`public void BattleResultsReady()`

**用途 / Purpose:** 调用 BattleResultsReady 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.BattleResultsReady();
```

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**用途 / Purpose:** 调用 TroopSideChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleSimulation 实例
BattleSimulation battleSimulation = ...;
battleSimulation.TroopSideChanged(prevSide, newSide, battleCombatant, character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattleSimulation battleSimulation = ...;
battleSimulation.Play();
```

## 参见

- [本区域目录](../)