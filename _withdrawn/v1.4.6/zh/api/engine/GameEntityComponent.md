---
title: "GameEntityComponent"
description: "GameEntityComponent：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 2 个（方法 2、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/GameEntityComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameEntityComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class GameEntityComponent : NativeObject`
**File:** `TaleWorlds.Engine/GameEntityComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

GameEntityComponent 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/GameEntityComponent.cs。它是一个 public 类（abstract），实现/继承 NativeObject，继承链为 GameEntityComponent → NativeObject。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameEntityComponent 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 GameEntityComponent → NativeObject。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/GameEntityComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEntity` | `public WeakGameEntity GetEntity()` | 方法 |
| `GetFirstMetaMesh` | `public virtual MetaMesh GetFirstMetaMesh()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../../core-extra/NativeObject/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
