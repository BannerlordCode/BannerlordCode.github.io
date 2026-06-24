<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatLogManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CombatLogManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CombatLogManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CombatLogManager.cs`

## 概述

`CombatLogManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CombatLogManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PrintDebugLogForInfo
`public static void PrintDebugLogForInfo(Agent attackerAgent, Agent victimAgent, DamageTypes damageType, int speedBonus, int armorAmount, int inflictedDamage, int absorbedByArmor, sbyte collisionBone, float lostHpPercentage)`

**用途 / Purpose:** 处理 `print debug log for info` 相关逻辑。

### GenerateCombatLog
`public static void GenerateCombatLog(CombatLogData logData)`

**用途 / Purpose:** 处理 `generate combat log` 相关逻辑。

### OnPrintCombatLogHandler
`public delegate void OnPrintCombatLogHandler(CombatLogData logData)`

**用途 / Purpose:** 当 `print combat log handler` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = CombatLogManager.Current;
```

## 参见

- [完整类目录](../catalog)