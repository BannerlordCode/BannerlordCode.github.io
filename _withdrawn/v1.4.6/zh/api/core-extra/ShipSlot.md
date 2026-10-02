---
title: "ShipSlot"
description: "ShipSlot：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 8 个（方法 4、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/ShipSlot.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipSlot

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ShipSlot : MBObjectBase`
**File:** `TaleWorlds.Core/ShipSlot.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

ShipSlot 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ShipSlot.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 ShipSlot → MBObjectBase。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ShipSlot 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 ShipSlot → MBObjectBase。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ShipSlot.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TypeId` | `public string TypeId` | 属性 |
| `MainPrefabId` | `public string MainPrefabId` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipUpgradePiece>MatchingPieces` | 属性 |
| `ShipSlot` | `public ShipSlot()` | 构造函数 |
| `AfterRegister` | `public override void AfterRegister()` | 方法 |
| `AddMatchingPiece` | `public void AddMatchingPiece(ShipUpgradePiece upgradePiece)` | 方法 |
| `GetSlotTypeName` | `public TextObject GetSlotTypeName()` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
