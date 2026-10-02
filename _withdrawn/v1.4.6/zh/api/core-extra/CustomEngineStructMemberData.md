---
title: "CustomEngineStructMemberData"
description: "CustomEngineStructMemberData：TaleWorlds.DotNet 的 public 类，继承 Attribute；公开成员 6 个（方法 0、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.DotNet/CustomEngineStructMemberData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomEngineStructMemberData

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class CustomEngineStructMemberData : Attribute`
**File:** `TaleWorlds.DotNet/CustomEngineStructMemberData.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## 概述

CustomEngineStructMemberData 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/CustomEngineStructMemberData.cs。它是一个 public 类，实现/继承 Attribute，继承链为 CustomEngineStructMemberData → Attribute。public/protected 成员共 6 个：3 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomEngineStructMemberData 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.DotNet`），命名空间 `TaleWorlds.DotNet`，继承链 CustomEngineStructMemberData → Attribute。成员构成以属性为主（属性 3/6，方法 0/6），对外主要以状态读取接口暴露。继承链上的 Attribute 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/CustomEngineStructMemberData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomMemberName` | `public string CustomMemberName` | 属性 |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest` | 属性 |
| `PublicPrivateModifierFlippedInNative` | `public bool PublicPrivateModifierFlippedInNative` | 属性 |
| `CustomEngineStructMemberData` | `public CustomEngineStructMemberData(string customMemberName)` | 构造函数 |
| `CustomEngineStructMemberData` | `public CustomEngineStructMemberData(string customMemberName, bool ignoreMemberOffsetTest)` | 构造函数 |
| `CustomEngineStructMemberData` | `public CustomEngineStructMemberData(bool publicPrivateModifierFlippedInNative)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool/)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager/)
- [同命名空间 Controller](../Controller/)
- [同命名空间 DefineAsEngineStruct](../DefineAsEngineStruct/)
