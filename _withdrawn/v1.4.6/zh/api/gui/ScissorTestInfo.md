---
title: "ScissorTestInfo"
description: "ScissorTestInfo：TaleWorlds.TwoDimension 的 public 结构体；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/ScissorTestInfo.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScissorTestInfo

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct ScissorTestInfo`
**File:** `TaleWorlds.TwoDimension/ScissorTestInfo.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

ScissorTestInfo 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/ScissorTestInfo.cs。它是一个 public 结构体，继承链为 ScissorTestInfo。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScissorTestInfo 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 ScissorTestInfo。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/ScissorTestInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public float X` | 属性 |
| `X2` | `public float X2` | 属性 |
| `Y` | `public float Y` | 属性 |
| `Y2` | `public float Y2` | 属性 |
| `ScissorTestInfo` | `public ScissorTestInfo(float x, float y, float x2, float y2)` | 构造函数 |
| `ReduceToIntersection` | `public void ReduceToIntersection(ScissorTestInfo other)` | 方法 |
| `GetSimpleRectangle` | `public SimpleRectangle GetSimpleRectangle()` | 方法 |
| `IsCollide` | `public bool IsCollide(in Rectangle2D other)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)
