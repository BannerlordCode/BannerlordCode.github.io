---
title: "LoginResult"
description: "LoginResult：TaleWorlds.Diamond 的 public 类，继承 FunctionResult；公开成员 11 个（方法 0、属性 7、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/LoginResult.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoginResult

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public sealed class LoginResult : FunctionResult`
**File:** `TaleWorlds.Diamond/LoginResult.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

LoginResult 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/LoginResult.cs。它是一个 public 类（sealed），实现/继承 FunctionResult，继承链为 LoginResult → FunctionResult。public/protected 成员共 11 个：7 属性、4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LoginResult 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 LoginResult → FunctionResult。成员构成以属性为主（属性 7/11，方法 0/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/LoginResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PeerId` | `public PeerId PeerId` | 属性 |
| `SessionKey` | `public SessionKey SessionKey` | 属性 |
| `Successful` | `public bool Successful` | 属性 |
| `ErrorCode` | `public string ErrorCode` | 属性 |
| `string>ErrorParameters` | `public Dictionary<string, string>ErrorParameters` | 属性 |
| `ProviderResponse` | `public string ProviderResponse` | 属性 |
| `LoginResultObject` | `public LoginResultObject LoginResultObject` | 属性 |
| `LoginResult` | `public LoginResult()` | 构造函数 |
| `LoginResult` | `public LoginResult(PeerId peerId, SessionKey sessionKey, LoginResultObject loginResultObject)` | 构造函数 |
| `LoginResult` | `public LoginResult(PeerId peerId, SessionKey sessionKey) : this(peerId, sessionKey, null)` | 构造函数 |
| `LoginResult` | `public LoginResult(string errorCode, Dictionary<string, string>parameters = null)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 FunctionResult](../FunctionResult/)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AccessObjectResult](../AccessObjectResult/)
- [同命名空间 AesHelper](../AesHelper/)
