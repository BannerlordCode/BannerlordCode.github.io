<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxBattleMoraleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleMoraleModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel`
**Base:** `BattleMoraleModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxBattleMoraleModel.cs`

## 概述

`SandboxBattleMoraleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxBattleMoraleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

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
`public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)`

**用途 / Purpose:** 处理 `calculate morale on ramming` 相关逻辑。

### CalculateMoraleOnShipsConnected
`public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)`

**用途 / Purpose:** 处理 `calculate morale on ships connected` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxBattleMoraleModel>(new MySandboxBattleMoraleModel());
```

## 参见

- [完整类目录](../catalog)