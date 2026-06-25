---
title: "CampaignBattleResult"
description: "CampaignBattleResult 的自动生成类参考。"
---
# CampaignBattleResult

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBattleResult`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/CampaignBattleResult.cs`

## 概述

`CampaignBattleResult` 位于 `TaleWorlds.CampaignSystem.Encounters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encounters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeat` | `public bool PlayerDefeat { get; }` |
| `EnemyPulledBack` | `public bool EnemyPulledBack { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |

## 主要方法

### GetResult
`public static CampaignBattleResult GetResult(BattleState winnerSide, bool enemyRetreated = false)`

**用途 / Purpose:** 读取并返回当前对象中 result 的结果。

```csharp
// 静态调用，不需要实例
CampaignBattleResult.GetResult(winnerSide, false);
```

## 使用示例

```csharp
CampaignBattleResult.GetResult(winnerSide, false);
```

## 参见

- [本区域目录](../)