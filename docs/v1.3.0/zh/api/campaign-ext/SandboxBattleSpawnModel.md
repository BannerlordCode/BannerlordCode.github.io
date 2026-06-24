<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxBattleSpawnModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleSpawnModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## 概述

`SandboxBattleSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxBattleSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionStart
`public override void OnMissionStart()`

**用途 / Purpose:** 当 `mission start` 事件触发时调用此方法。

### OnMissionEnd
`public override void OnMissionEnd()`

**用途 / Purpose:** 当 `mission end` 事件触发时调用此方法。

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 获取 `initial spawn assignments` 的当前值。

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**用途 / Purpose:** 获取 `reinforcement assignments` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxBattleSpawnModel>(new MySandboxBattleSpawnModel());
```

## 参见

- [完整类目录](../catalog)