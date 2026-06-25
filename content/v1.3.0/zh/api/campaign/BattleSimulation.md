---
title: "BattleSimulation"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleSimulation`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `play` 相关逻辑。

### FastForward
`public void FastForward()`

**用途 / Purpose:** 处理 `fast forward` 相关逻辑。

### Skip
`public void Skip()`

**用途 / Purpose:** 处理 `skip` 相关逻辑。

### Pause
`public void Pause()`

**用途 / Purpose:** 处理 `pause` 相关逻辑。

### OnReturn
`public void OnReturn()`

**用途 / Purpose:** 当 `return` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ResetSimulation
`public void ResetSimulation()`

**用途 / Purpose:** 将 `simulation` 重置为初始状态。

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)`

**用途 / Purpose:** 处理 `troop number changed` 相关逻辑。

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)`

**用途 / Purpose:** 处理 `hero skill increased` 相关逻辑。

### BattleResultsReady
`public void BattleResultsReady()`

**用途 / Purpose:** 处理 `battle results ready` 相关逻辑。

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**用途 / Purpose:** 处理 `troop side changed` 相关逻辑。

## 使用示例

```csharp
var value = new BattleSimulation();
value.Play();
```

## 参见

- [完整类目录](../catalog)