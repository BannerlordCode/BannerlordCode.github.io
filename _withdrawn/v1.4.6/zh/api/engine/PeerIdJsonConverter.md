---
title: "PeerIdJsonConverter"
description: "PeerIdJsonConverter：TaleWorlds.Diamond 的 public 类，继承 JsonConverter；公开成员 4 个（方法 3、属性 1、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/PeerIdJsonConverter.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PeerIdJsonConverter

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class PeerIdJsonConverter : JsonConverter`
**File:** `TaleWorlds.Diamond/PeerIdJsonConverter.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

PeerIdJsonConverter 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/PeerIdJsonConverter.cs。它是一个 public 类，实现/继承 JsonConverter，继承链为 PeerIdJsonConverter → JsonConverter。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PeerIdJsonConverter 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 PeerIdJsonConverter → JsonConverter。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。继承链上的 JsonConverter 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/PeerIdJsonConverter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | 方法 |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | 方法 |
| `CanWrite` | `public override bool CanWrite` | 属性 |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AccessObjectResult](../AccessObjectResult/)
- [同命名空间 AesHelper](../AesHelper/)
