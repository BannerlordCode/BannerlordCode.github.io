---
title: "GOGAccessObject"
description: "GOGAccessObject：TaleWorlds.Diamond 的 public 类，继承 AccessObject；公开成员 6 个（方法 0、属性 4、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/GOGAccessObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GOGAccessObject

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class GOGAccessObject : AccessObject`
**File:** `TaleWorlds.Diamond/GOGAccessObject.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

GOGAccessObject 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/GOGAccessObject.cs。它是一个 public 类，实现/继承 AccessObject，继承链为 GOGAccessObject → AccessObject。public/protected 成员共 6 个：4 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GOGAccessObject 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 GOGAccessObject → AccessObject。成员构成以属性为主（属性 4/6，方法 0/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/GOGAccessObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GogId` | `public ulong GogId` | 属性 |
| `OldId` | `public ulong OldId` | 属性 |
| `UserName` | `public string UserName` | 属性 |
| `Ticket` | `public string Ticket` | 属性 |
| `GOGAccessObject` | `public GOGAccessObject()` | 构造函数 |
| `GOGAccessObject` | `public GOGAccessObject(string userName, ulong gogId, ulong oldId, string ticket)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AccessObject](../AccessObject/)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AccessObjectResult](../AccessObjectResult/)
- [同命名空间 AesHelper](../AesHelper/)
