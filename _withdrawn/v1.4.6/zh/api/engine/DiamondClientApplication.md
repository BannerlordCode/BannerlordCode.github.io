---
title: "DiamondClientApplication"
description: "DiamondClientApplication：TaleWorlds.Diamond.ClientApplication 的 public 类；公开成员 11 个（方法 6、属性 3、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DiamondClientApplication

**Namespace:** `TaleWorlds.Diamond.ClientApplication`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class DiamondClientApplication`
**File:** `TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

DiamondClientApplication 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs。它是一个 public 类，继承链为 DiamondClientApplication。public/protected 成员共 11 个：6 方法、3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DiamondClientApplication 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.ClientApplication`，继承链 DiamondClientApplication。成员构成以方法为主（方法 6/11，属性 3/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion` | 属性 |
| `Parameters` | `public ParameterContainer Parameters` | 属性 |
| `string>ProxyAddressMap` | `public IReadOnlyDictionary<string, string>ProxyAddressMap` | 属性 |
| `DiamondClientApplication` | `public DiamondClientApplication(ApplicationVersion applicationVersion, ParameterContainer parameters)` | 构造函数 |
| `DiamondClientApplication` | `public DiamondClientApplication(ApplicationVersion applicationVersion) : this(applicationVersion, new ParameterContainer())` | 构造函数 |
| `GetObject` | `public object GetObject(string name)` | 方法 |
| `AddObject` | `public void AddObject(string name, DiamondClientApplicationObject applicationObject)` | 方法 |
| `Initialize` | `public void Initialize(ClientApplicationConfiguration applicationConfiguration)` | 方法 |
| `CreateClientSessionProvider` | `public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)` | 方法 |
| `GetClient` | `public T GetClient<T>(string name) where T : class, IClient` | 方法 |
| `Update` | `public void Update()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ClientApplicationConfiguration](../ClientApplicationConfiguration/)
- [同命名空间 DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [同命名空间 GenericRestSessionProvider](../GenericRestSessionProvider__1/)
- [同命名空间 GenericThreadedRestSessionProvider](../GenericThreadedRestSessionProvider__1/)
