---
title: "EncounterManager"
description: "EncounterManager 的自动生成类参考。"
---
# EncounterManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class EncounterManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/EncounterManager.cs`

## 概述

`EncounterManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EncounterManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 静态调用，不需要实例
EncounterManager.Tick(0);
```

### HandleEncounterForMobileParty
`public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 encounter for mobile party 相关的响应逻辑。

```csharp
// 静态调用，不需要实例
EncounterManager.HandleEncounterForMobileParty(mobileParty, 0);
```

### StartPartyEncounter
`public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** **用途 / Purpose:** 启动party encounter流程或状态机。

```csharp
// 静态调用，不需要实例
EncounterManager.StartPartyEncounter(attackerParty, defenderParty);
```

### StartSettlementEncounter
`public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 启动settlement encounter流程或状态机。

```csharp
// 静态调用，不需要实例
EncounterManager.StartSettlementEncounter(attackerParty, settlement);
```

## 使用示例

```csharp
var manager = EncounterManager.Current;
```

## 参见

- [本区域目录](../)