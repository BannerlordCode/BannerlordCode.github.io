<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CombatLogManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatLogManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public static class CombatLogManager
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CombatLogManager.cs`

## 概述

`CombatLogManager` 生成战斗日志条目（任务中的击杀/伤害提示流）。mod 调 `GenerateCombatLog` 发出自定义通知，订阅 `OnPrintCombatLogHandler` 响应或改写日志。`PrintDebugLogForInfo` 用于诊断。

## 主要方法

### PrintDebugLogForInfo
```csharp
public static void PrintDebugLogForInfo(Agent attackerAgent, Agent victimAgent, DamageTypes damageType, int speedBonus, int armorAmount, int inflictedDamage, int absorbedByArmor, sbyte collisionBone, float lostHpPercentage)
```

### GenerateCombatLog
```csharp
public static void GenerateCombatLog(CombatLogData logData)
```

### OnPrintCombatLogHandler
```csharp
public delegate void OnPrintCombatLogHandler(CombatLogData logData)
```

## 使用示例

```csharp
// 你的脚本事件触发时发出一条自定义战斗日志
CombatLogManager.GenerateCombatLog(
    new CombatLogData
    {
        AttackerName = attacker.Name,
        VictimName = victim.Name,
        DamageType = DamageType.Blunt,
        InflictedDamage = 50,
        IsVictimAgentDead = false
    });

// 响应任何打印的日志
CombatLogManager.OnPrintCombatLogHandler += data =>
{
    // 记录、过滤或改写条目
};
```

## 参见

- [完整类目录](../catalog)