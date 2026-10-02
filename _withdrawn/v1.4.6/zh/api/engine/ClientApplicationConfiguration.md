---
title: "ClientApplicationConfiguration"
description: "ClientApplicationConfiguration：TaleWorlds.Diamond.ClientApplication 的 public 类；公开成员 10 个（方法 4、属性 5、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClientApplicationConfiguration

**Namespace:** `TaleWorlds.Diamond.ClientApplication`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class ClientApplicationConfiguration`
**File:** `TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

ClientApplicationConfiguration 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs。它是一个 public 类，继承链为 ClientApplicationConfiguration。public/protected 成员共 10 个：4 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClientApplicationConfiguration 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond.ClientApplication`，继承链 ClientApplicationConfiguration。成员构成以属性为主（属性 5/10，方法 4/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `InheritFrom` | `public string InheritFrom` | 属性 |
| `string[]Clients` | `public string[]Clients` | 属性 |
| `SessionProviderType` | `public SessionProviderType SessionProviderType` | 属性 |
| `Parameters` | `public ParameterContainer Parameters` | 属性 |
| `ClientApplicationConfiguration` | `public ClientApplicationConfiguration()` | 构造函数 |
| `GetDefaultConfigurationFromFile` | `public static string GetDefaultConfigurationFromFile()` | 方法 |
| `SetDefaultConfigurationCategory` | `public static void SetDefaultConfigurationCategory(string category)` | 方法 |
| `FillFrom` | `public void FillFrom(string configurationName)` | 方法 |
| `FillFrom` | `public void FillFrom(string configurationCategory, string configurationName)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DiamondClientApplication](../DiamondClientApplication/)
- [同命名空间 DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [同命名空间 GenericRestSessionProvider](../GenericRestSessionProvider__1/)
- [同命名空间 GenericThreadedRestSessionProvider](../GenericThreadedRestSessionProvider__1/)
