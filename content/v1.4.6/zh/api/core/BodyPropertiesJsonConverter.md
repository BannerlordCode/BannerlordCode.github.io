---
title: "BodyPropertiesJsonConverter"
description: "BodyPropertiesJsonConverter：TaleWorlds.Core 的 public 类，继承 JsonConverter；公开成员 4 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.Core/BodyPropertiesJsonConverter.cs。"
---
# BodyPropertiesJsonConverter

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BodyPropertiesJsonConverter : JsonConverter`
**File:** `TaleWorlds.Core/BodyPropertiesJsonConverter.cs`

## 概述

BodyPropertiesJsonConverter 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BodyPropertiesJsonConverter.cs。它是一个 public 类，实现/继承 JsonConverter，继承链为 BodyPropertiesJsonConverter → JsonConverter。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BodyPropertiesJsonConverter 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BodyPropertiesJsonConverter → JsonConverter。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。继承链上的 JsonConverter 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BodyPropertiesJsonConverter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | 方法 |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | 方法 |
| `CanWrite` | `public override bool CanWrite` | 属性 |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
