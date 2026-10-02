---
title: "EngineStruct"
description: "EngineStruct：TaleWorlds.DotNet 的 public 类，继承 Attribute；公开成员 9 个（方法 0、属性 6、字段 0）。源文件 TaleWorlds.DotNet/EngineStruct.cs。"
---
# EngineStruct

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class EngineStruct : Attribute`
**File:** `TaleWorlds.DotNet/EngineStruct.cs`

## 概述

EngineStruct 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/EngineStruct.cs。它是一个 public 类，实现/继承 Attribute，继承链为 EngineStruct → Attribute。public/protected 成员共 9 个：6 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EngineStruct 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 EngineStruct → Attribute。成员构成以属性为主（属性 6/9，方法 0/9），对外主要以状态读取接口暴露。继承链上的 Attribute 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/EngineStruct.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EngineType` | `public string EngineType` | 属性 |
| `AlternateDotNetType` | `public string AlternateDotNetType` | 属性 |
| `EngineEnumPrefix` | `public string EngineEnumPrefix` | 属性 |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest` | 属性 |
| `string[]Conditionals` | `public string[]Conditionals` | 属性 |
| `FirstCharacterUppercase` | `public bool FirstCharacterUppercase` | 属性 |
| `EngineStruct` | `public EngineStruct(string engineType, bool ignoreMemberOffsetTest = false, string[]conditionals = null)` | 构造函数 |
| `EngineStruct` | `public EngineStruct(string engineType, string alternateDotNetType, bool ignoreMemberOffsetTest = false, string[]conditionals = null)` | 构造函数 |
| `EngineStruct` | `public EngineStruct(string engineType, bool isEnum, string engineEnumPrefix, bool ignoreMemberOffsetTest = false)` | 构造函数 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
