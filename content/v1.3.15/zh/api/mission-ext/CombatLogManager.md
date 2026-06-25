---
title: "CombatLogManager"
description: "CombatLogManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 PrintDebugLogForInfo 对应的操作。

```csharp
// 静态调用，不需要实例
CombatLogManager.PrintDebugLogForInfo(attackerAgent, victimAgent, damageType, 0, 0, 0, 0, 0, 0);
```

### GenerateCombatLog
`public static void GenerateCombatLog(CombatLogData logData)`

**用途 / Purpose:** 生成combat log的实例、数据或表示。

```csharp
// 静态调用，不需要实例
CombatLogManager.GenerateCombatLog(logData);
```

### OnPrintCombatLogHandler
`public delegate void OnPrintCombatLogHandler(CombatLogData logData)`

**用途 / Purpose:** 在 print combat log handler 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CombatLogManager 实例
CombatLogManager combatLogManager = ...;
combatLogManager.OnPrintCombatLogHandler(logData);
```

## 使用示例

```csharp
var manager = CombatLogManager.Current;
```

## 参见

- [本区域目录](../)