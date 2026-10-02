---
title: "InputData"
description: "InputData：TaleWorlds.TwoDimension.Standalone 的 public 类；公开成员 10 个（方法 2、属性 7、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/InputData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputData

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class InputData`
**File:** `TaleWorlds.TwoDimension.Standalone/InputData.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

InputData 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/InputData.cs。它是一个 public 类，继承链为 InputData。public/protected 成员共 10 个：2 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InputData 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 InputData。成员构成以属性为主（属性 7/10，方法 2/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/InputData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `bool[]KeyData` | `public bool[]KeyData` | 属性 |
| `LeftMouse` | `public bool LeftMouse` | 属性 |
| `RightMouse` | `public bool RightMouse` | 属性 |
| `CursorX` | `public int CursorX` | 属性 |
| `CursorY` | `public int CursorY` | 属性 |
| `MouseMove` | `public bool MouseMove` | 属性 |
| `MouseScrollDelta` | `public float MouseScrollDelta` | 属性 |
| `InputData` | `public InputData()` | 构造函数 |
| `Reset` | `public void Reset()` | 方法 |
| `FillFrom` | `public void FillFrom(InputData inputData)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsContext](../GraphicsContext/)
- [同命名空间 GraphicsForm](../GraphicsForm/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
