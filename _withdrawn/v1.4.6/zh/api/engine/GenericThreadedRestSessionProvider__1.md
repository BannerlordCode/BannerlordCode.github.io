---
title: "GenericThreadedRestSessionProvider<T>"
description: "GenericThreadedRestSessionProvider<T>：TaleWorlds.Diamond.ClientApplication 的 public 类，继承 IClientSessionProvider<T>；公开成员 3 个（方法 1、属性 0、字段 1）。canonical 桶 engine。源文件 TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericThreadedRestSessionProvider<T>

**Namespace:** `TaleWorlds.Diamond.ClientApplication`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class GenericThreadedRestSessionProvider<T>: IClientSessionProvider<T>where T : Client<T>`
**File:** `TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

GenericThreadedRestSessionProvider<T> 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs。它是一个 public 类，实现/继承 IClientSessionProvider<T>，继承链为 GenericThreadedRestSessionProvider → IClientSessionProvider → Client → DiamondClientApplicationObject。public/protected 成员共 3 个：1 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GenericThreadedRestSessionProvider<T> 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.ClientApplication`，继承链 GenericThreadedRestSessionProvider → IClientSessionProvider → Client → DiamondClientApplicationObject。成员构成以方法为主（方法 1/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GenericThreadedRestSessionProvider` | `public GenericThreadedRestSessionProvider(string address, IHttpDriver httpDriver)` | 构造函数 |
| `CreateSession` | `public IClientSession CreateSession(T client)` | 方法 |
| `DefaultThreadSleepTime` | `public const int DefaultThreadSleepTime` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IClientSessionProvider](../IClientSessionProvider__1/)
- [同命名空间 ClientApplicationConfiguration](../ClientApplicationConfiguration/)
- [同命名空间 DiamondClientApplication](../DiamondClientApplication/)
- [同命名空间 DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [同命名空间 GenericRestSessionProvider](../GenericRestSessionProvider__1/)
