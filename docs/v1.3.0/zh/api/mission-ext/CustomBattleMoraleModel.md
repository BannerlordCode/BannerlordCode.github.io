<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleMoraleModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleMoraleModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleMoraleModel.cs`

## 概述

`CustomBattleMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMaxMoraleChangeDueToAgentIncapacitated
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)`

**用途 / Purpose:** 处理 `calculate max morale change due to agent incapacitated` 相关逻辑。

### CalculateMaxMoraleChangeDueToAgentPanicked
`public override ValueTuple<float, float> CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)`

**用途 / Purpose:** 处理 `calculate max morale change due to agent panicked` 相关逻辑。

### CalculateMoraleChangeToCharacter
`public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)`

**用途 / Purpose:** 处理 `calculate morale change to character` 相关逻辑。

### GetEffectiveInitialMorale
`public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)`

**用途 / Purpose:** 获取 `effective initial morale` 的当前值。

### CanPanicDueToMorale
`public override bool CanPanicDueToMorale(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `panic due to morale`。

### CalculateCasualtiesFactor
`public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)`

**用途 / Purpose:** 处理 `calculate casualties factor` 相关逻辑。

### GetAverageMorale
`public override float GetAverageMorale(Formation formation)`

**用途 / Purpose:** 获取 `average morale` 的当前值。

### CalculateMoraleChangeOnShipSunk
`public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)`

**用途 / Purpose:** 处理 `calculate morale change on ship sunk` 相关逻辑。

### CalculateMoraleOnRamming
`public override float CalculateMoraleOnRamming(Agent agent)`

**用途 / Purpose:** 处理 `calculate morale on ramming` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleMoraleModel>(new MyCustomBattleMoraleModel());
```

## 参见

- [完整类目录](../catalog)