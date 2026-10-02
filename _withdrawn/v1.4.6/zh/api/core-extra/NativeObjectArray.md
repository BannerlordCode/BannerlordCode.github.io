---
title: "NativeObjectArray"
description: "NativeObjectArray：TaleWorlds.DotNet 的 public 类，继承 NativeObject、IEnumerable<NativeObject>；公开成员 5 个（方法 4、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.DotNet/NativeObjectArray.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeObjectArray

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**File:** `TaleWorlds.DotNet/NativeObjectArray.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## 概述

NativeObjectArray 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/NativeObjectArray.cs。它是一个 public 类（sealed），实现/继承 NativeObject、IEnumerable<NativeObject>、IEnumerable，继承链为 NativeObjectArray → NativeObject。public/protected 成员共 5 个：4 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeObjectArray 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.DotNet`），命名空间 `TaleWorlds.DotNet`，继承链 NativeObjectArray → NativeObject。成员构成以方法为主（方法 4/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/NativeObjectArray.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Create` | `public static NativeObjectArray Create()` | 方法 |
| `Count` | `public int Count` | 属性 |
| `GetElementAt` | `public NativeObject GetElementAt(int index)` | 方法 |
| `AddElement` | `public void AddElement(NativeObject nativeObject)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../NativeObject/)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool/)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager/)
- [同命名空间 Controller](../Controller/)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData/)
