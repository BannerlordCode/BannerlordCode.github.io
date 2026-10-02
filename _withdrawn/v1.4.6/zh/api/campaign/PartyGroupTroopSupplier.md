---
title: "PartyGroupTroopSupplier"
description: "PartyGroupTroopSupplier：TaleWorlds.CampaignSystem.TroopSuppliers 的 public 类，继承 IMissionTroopSupplier；公开成员 14 个（方法 10、属性 3、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyGroupTroopSupplier

**Namespace:** `TaleWorlds.CampaignSystem.TroopSuppliers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`
**File:** `TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

PartyGroupTroopSupplier 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs。它是一个 public 类，实现/继承 IMissionTroopSupplier，继承链为 PartyGroupTroopSupplier → IMissionTroopSupplier。public/protected 成员共 14 个：10 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyGroupTroopSupplier 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.TroopSuppliers`，继承链 PartyGroupTroopSupplier → IMissionTroopSupplier。成员构成以方法为主（方法 10/14，属性 3/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGroupTroopSupplier` | `public PartyGroupTroopSupplier(MapEvent mapEvent, BattleSideEnum side, FlattenedTroopRoster priorTroops = null, Func<UniqueTroopDescriptor, MapEventParty, bool>customAllocationConditions = null)` | 构造函数 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>SupplyTroops(int numberToAllocate)` | 方法 |
| `SupplyOneTroop` | `public IAgentOriginBase SupplyOneTroop()` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroops()` | 方法 |
| `GetGeneralCharacter` | `public BasicCharacterObject GetGeneralCharacter()` | 方法 |
| `NumRemovedTroops` | `public int NumRemovedTroops` | 属性 |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied` | 属性 |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied` | 属性 |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | 方法 |
| `OnTroopWounded` | `public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)` | 方法 |
| `OnTroopKilled` | `public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)` | 方法 |
| `OnTroopRouted` | `public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor, bool isOrderRetreat)` | 方法 |
| `GetParty` | `public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)` | 方法 |
| `OnTroopScoreHit` | `public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMissionTroopSupplier](../../core-extra/IMissionTroopSupplier/)
