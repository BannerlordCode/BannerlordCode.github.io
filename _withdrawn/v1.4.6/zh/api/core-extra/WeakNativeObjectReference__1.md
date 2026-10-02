---
title: "WeakNativeObjectReference<T>"
description: "WeakNativeObjectReference<T>：TaleWorlds.DotNet 的 public 类，继承 NativeObject；公开成员 3 个（方法 2、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.DotNet/WeakNativeObjectReference.2.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeakNativeObjectReference<T>

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class WeakNativeObjectReference<T>where T : NativeObject`
**File:** `TaleWorlds.DotNet/WeakNativeObjectReference.2.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## 概述

WeakNativeObjectReference<T> 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/WeakNativeObjectReference.2.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 WeakNativeObjectReference → NativeObject。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeakNativeObjectReference<T> 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.DotNet`），命名空间 `TaleWorlds.DotNet`，继承链 WeakNativeObjectReference → NativeObject。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/WeakNativeObjectReference.2.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeakNativeObjectReference` | `public WeakNativeObjectReference(T nativeObject)` | 构造函数 |
| `ManualInvalidate` | `public void ManualInvalidate()` | 方法 |
| `GetNativeObject` | `public NativeObject GetNativeObject()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../NativeObject/)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool/)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager/)
- [同命名空间 Controller](../Controller/)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData/)
