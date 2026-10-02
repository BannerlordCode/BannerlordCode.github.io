---
title: "PeerComponent"
description: "PeerComponent：TaleWorlds.Core 的 public 类，继承 IEntityComponent；公开成员 8 个（方法 4、属性 4、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/PeerComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PeerComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class PeerComponent : IEntityComponent`
**File:** `TaleWorlds.Core/PeerComponent.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

PeerComponent 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/PeerComponent.cs。它是一个 public 类（abstract），实现/继承 IEntityComponent，继承链为 PeerComponent → IEntityComponent。public/protected 成员共 8 个：4 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PeerComponent 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 PeerComponent → IEntityComponent。成员构成以方法为主（方法 4/8，属性 4/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/PeerComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Peer` | `public VirtualPlayer Peer` | 属性 |
| `Initialize` | `public virtual void Initialize()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `IsMine` | `public bool IsMine` | 属性 |
| `GetComponent` | `public T GetComponent<T>() where T : PeerComponent` | 方法 |
| `OnInitialize` | `public virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `public virtual void OnFinalize()` | 方法 |
| `TypeId` | `public uint TypeId` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IEntityComponent](../IEntityComponent/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
