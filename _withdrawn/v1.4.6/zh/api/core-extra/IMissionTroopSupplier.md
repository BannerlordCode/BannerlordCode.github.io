---
title: "IMissionTroopSupplier"
description: "IMissionTroopSupplier：TaleWorlds.Core 的 public 接口；公开成员 8 个（方法 5、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/IMissionTroopSupplier.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionTroopSupplier

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IMissionTroopSupplier`
**File:** `TaleWorlds.Core/IMissionTroopSupplier.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

IMissionTroopSupplier 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IMissionTroopSupplier.cs。它是一个 public 接口，继承链为 IMissionTroopSupplier。public/protected 成员共 8 个：5 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMissionTroopSupplier 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 IMissionTroopSupplier。成员构成以方法为主（方法 5/8，属性 3/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IMissionTroopSupplier.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `IEnumerable<IAgentOriginBase>SupplyTroops(int numberToAllocate);` | 方法 |
| `SupplyOneTroop` | `IAgentOriginBase SupplyOneTroop();` | 方法 |
| `IEnumerable` | `IEnumerable<IAgentOriginBase>GetAllTroops();` | 方法 |
| `GetGeneralCharacter` | `BasicCharacterObject GetGeneralCharacter();` | 方法 |
| `NumRemovedTroops` | `int NumRemovedTroops` | 属性 |
| `NumTroopsNotSupplied` | `int NumTroopsNotSupplied` | 属性 |
| `AnyTroopRemainsToBeSupplied` | `bool AnyTroopRemainsToBeSupplied` | 属性 |
| `GetNumberOfPlayerControllableTroops` | `int GetNumberOfPlayerControllableTroops();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
