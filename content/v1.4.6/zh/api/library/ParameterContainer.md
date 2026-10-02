---
title: "ParameterContainer"
description: "ParameterContainer：TaleWorlds.Library 的 public 类；公开成员 17 个（方法 15、属性 1、字段 0）。源文件 TaleWorlds.Library/ParameterContainer.cs。"
---
# ParameterContainer

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ParameterContainer`
**File:** `TaleWorlds.Library/ParameterContainer.cs`

## 概述

ParameterContainer 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ParameterContainer.cs。它是一个 public 类，继承链为 ParameterContainer。public/protected 成员共 17 个：15 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ParameterContainer 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 ParameterContainer。成员构成以方法为主（方法 15/17，属性 1/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ParameterContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ParameterContainer` | `public ParameterContainer()` | 构造函数 |
| `AddParameter` | `public void AddParameter(string key, string value, bool overwriteIfExists)` | 方法 |
| `AddParameterConcurrent` | `public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)` | 方法 |
| `AddParametersConcurrent` | `public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>>parameters, bool overwriteIfExists)` | 方法 |
| `ClearParameters` | `public void ClearParameters()` | 方法 |
| `TryGetParameter` | `public bool TryGetParameter(string key, out string outValue)` | 方法 |
| `TryGetParameterAsBool` | `public bool TryGetParameterAsBool(string key, out bool outValue)` | 方法 |
| `TryGetParameterAsInt` | `public bool TryGetParameterAsInt(string key, out int outValue)` | 方法 |
| `TryGetParameterAsUInt16` | `public bool TryGetParameterAsUInt16(string key, out ushort outValue)` | 方法 |
| `TryGetParameterAsFloat` | `public bool TryGetParameterAsFloat(string key, out float outValue)` | 方法 |
| `TryGetParameterAsByte` | `public bool TryGetParameterAsByte(string key, out byte outValue)` | 方法 |
| `TryGetParameterAsSByte` | `public bool TryGetParameterAsSByte(string key, out sbyte outValue)` | 方法 |
| `TryGetParameterAsVec3` | `public bool TryGetParameterAsVec3(string key, out Vec3 outValue)` | 方法 |
| `TryGetParameterAsVec2` | `public bool TryGetParameterAsVec2(string key, out Vec2 outValue)` | 方法 |
| `GetParameter` | `public string GetParameter(string key)` | 方法 |
| `string>>Iterator` | `public IEnumerable<KeyValuePair<string, string>>Iterator` | 属性 |
| `Clone` | `public ParameterContainer Clone()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
