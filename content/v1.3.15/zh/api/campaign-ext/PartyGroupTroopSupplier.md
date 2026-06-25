---
title: "PartyGroupTroopSupplier"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyGroupTroopSupplier`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyGroupTroopSupplier

**Namespace:** TaleWorlds.CampaignSystem.TroopSuppliers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`
**Base:** `IMissionTroopSupplier`
**File:** `TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs`

## 概述

`PartyGroupTroopSupplier` 位于 `TaleWorlds.CampaignSystem.TroopSuppliers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TroopSuppliers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumRemovedTroops` | `public int NumRemovedTroops { get; }` |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied { get; }` |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied { get; }` |

## 主要方法

### SupplyTroops
`public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)`

**用途 / Purpose:** 处理 `supply troops` 相关逻辑。

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**用途 / Purpose:** 处理 `supply one troop` 相关逻辑。

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 获取 `all troops` 的当前值。

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 获取 `general character` 的当前值。

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 获取 `number of player controllable troops` 的当前值。

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 当 `troop wounded` 事件触发时调用此方法。

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 当 `troop killed` 事件触发时调用此方法。

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor, bool isOrderRetreat)`

**用途 / Purpose:** 当 `troop routed` 事件触发时调用此方法。

### GetParty
`public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** 获取 `party` 的当前值。

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 当 `troop score hit` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new PartyGroupTroopSupplier();
value.SupplyTroops(0);
```

## 参见

- [完整类目录](../catalog)