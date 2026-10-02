---
title: "LoginMessage"
description: "LoginMessage：TaleWorlds.Diamond 的 public 类，继承 Message；公开成员 4 个（方法 0、属性 2、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/LoginMessage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoginMessage

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public abstract class LoginMessage : Message`
**File:** `TaleWorlds.Diamond/LoginMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

LoginMessage 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/LoginMessage.cs。它是一个 public 类（abstract），实现/继承 Message，继承链为 LoginMessage → Message。public/protected 成员共 4 个：2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LoginMessage 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 LoginMessage → Message。成员构成以属性为主（属性 2/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/LoginMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PeerId` | `public PeerId PeerId` | 属性 |
| `AccessObject` | `public AccessObject AccessObject` | 属性 |
| `LoginMessage` | `public LoginMessage()` | 构造函数 |
| `LoginMessage` | `protected LoginMessage(PeerId peerId, AccessObject accessObject)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Message](../Message/)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AccessObjectResult](../AccessObjectResult/)
- [同命名空间 AesHelper](../AesHelper/)
