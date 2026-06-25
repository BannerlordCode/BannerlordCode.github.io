---
title: "PartyGroupTroopSupplier"
description: "PartyGroupTroopSupplier 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 SupplyTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.SupplyTroops(0);
```

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**用途 / Purpose:** **用途 / Purpose:** 调用 SupplyOneTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.SupplyOneTroop();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all troops 的结果。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetAllTroops();
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 general character 的结果。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetGeneralCharacter();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 number of player controllable troops 的结果。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetNumberOfPlayerControllableTroops();
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** **用途 / Purpose:** 在 troop wounded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopWounded(troopDescriptor);
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** **用途 / Purpose:** 在 troop killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopKilled(troopDescriptor);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** **用途 / Purpose:** 在 troop routed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopRouted(troopDescriptor);
```

### GetParty
`public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party 的结果。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
var result = partyGroupTroopSupplier.GetParty(troopDescriptor);
```

### OnTroopScoreHit
`public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 在 troop score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyGroupTroopSupplier 实例
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.OnTroopScoreHit(descriptor, attackedCharacter, 0, false, false, attackerWeapon);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyGroupTroopSupplier partyGroupTroopSupplier = ...;
partyGroupTroopSupplier.SupplyTroops(0);
```

## 参见

- [本区域目录](../)