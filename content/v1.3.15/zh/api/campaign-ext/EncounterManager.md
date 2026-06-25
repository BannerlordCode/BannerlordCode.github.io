---
title: "EncounterManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class EncounterManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## 概述

`EncounterManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EncounterManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `EncounterModel` | `public static EncounterModel EncounterModel { get; }` |

## 主要方法

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### HandleEncounterForMobileParty
`public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

**用途 / Purpose:** 处理 `encounter for mobile party` 事件或回调。

### StartPartyEncounter
`public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 处理 `start party encounter` 相关逻辑。

### StartSettlementEncounter
`public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

**用途 / Purpose:** 处理 `start settlement encounter` 相关逻辑。

## 使用示例

```csharp
var manager = EncounterManager.Current;
```

## 参见

- [完整类目录](../catalog)