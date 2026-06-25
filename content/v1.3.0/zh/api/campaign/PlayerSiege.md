---
title: "PlayerSiege"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerSiege`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerSiege

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class PlayerSiege`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Siege/PlayerSiege.cs`

## 概述

`PlayerSiege` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerSiegeEvent` | `public static SiegeEvent PlayerSiegeEvent { get; }` |
| `BesiegedSettlement` | `public static Settlement BesiegedSettlement { get; }` |
| `PlayerSide` | `public static BattleSideEnum PlayerSide { get; }` |
| `IsRebellion` | `public static bool IsRebellion { get; }` |

## 主要方法

### StartSiegePreparation
`public static void StartSiegePreparation()`

**用途 / Purpose:** 处理 `start siege preparation` 相关逻辑。

### OnSiegeEventFinalized
`public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)`

**用途 / Purpose:** 当 `siege event finalized` 事件触发时调用此方法。

### StartPlayerSiege
`public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)`

**用途 / Purpose:** 处理 `start player siege` 相关逻辑。

### FinalizePlayerSiege
`public static void FinalizePlayerSiege()`

**用途 / Purpose:** 处理 `finalize player siege` 相关逻辑。

### StartSiegeMission
`public static void StartSiegeMission(Settlement settlement = null)`

**用途 / Purpose:** 处理 `start siege mission` 相关逻辑。

## 使用示例

```csharp
PlayerSiege.StartSiegePreparation();
```

## 参见

- [完整类目录](../catalog)