---
title: "GlobalLayer"
description: "GlobalLayer：TaleWorlds.ScreenSystem 的 public 类，继承 IComparable；公开成员 6 个（方法 5、属性 1、字段 0）。canonical 桶 gui。源文件 TaleWorlds.ScreenSystem/GlobalLayer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GlobalLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public class GlobalLayer : IComparable`
**File:** `TaleWorlds.ScreenSystem/GlobalLayer.cs`
**Bucket:** `gui` (rule:TaleWorlds.ScreenSystem)

## 概述

GlobalLayer 位于 TaleWorlds.ScreenSystem 模块，源文件 TaleWorlds.ScreenSystem/GlobalLayer.cs。它是一个 public 类，实现/继承 IComparable，继承链为 GlobalLayer → IComparable。public/protected 成员共 6 个：5 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GlobalLayer 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.ScreenSystem`），命名空间 `TaleWorlds.ScreenSystem`，继承链 GlobalLayer → IComparable。成员构成以方法为主（方法 5/6，属性 1/6），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ScreenSystem/GlobalLayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Layer` | `public ScreenLayer Layer` | 属性 |
| `OnEarlyTick` | `protected virtual void OnEarlyTick(float dt)` | 方法 |
| `OnTick` | `protected virtual void OnTick(float dt)` | 方法 |
| `OnLateTick` | `protected virtual void OnLateTick(float dt)` | 方法 |
| `CompareTo` | `public int CompareTo(object obj)` | 方法 |
| `UpdateLayout` | `public virtual void UpdateLayout()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CursorType](../CursorType/)
- [同命名空间 InputRestrictions](../InputRestrictions/)
- [同命名空间 IScreenManagerEngineConnection](../IScreenManagerEngineConnection/)
- [同命名空间 ScreenBase](../ScreenBase/)
