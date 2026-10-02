---
title: "GameAxisKey"
description: "GameAxisKey：TaleWorlds.InputSystem 的 public 类；公开成员 11 个（方法 2、属性 7、字段 0）。源文件 TaleWorlds.InputSystem/GameAxisKey.cs。"
---
# GameAxisKey

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class GameAxisKey`
**File:** `TaleWorlds.InputSystem/GameAxisKey.cs`

## 概述

GameAxisKey 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/GameAxisKey.cs。它是一个 public 类，继承链为 GameAxisKey。public/protected 成员共 11 个：2 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameAxisKey 是 TaleWorlds.InputSystem 的顶层类型，命名空间与模块目录一致，继承链 GameAxisKey。成员构成以属性为主（属性 7/11，方法 2/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/GameAxisKey.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | 属性 |
| `AxisKey` | `public Key AxisKey` | 属性 |
| `DefaultAxisKey` | `public Key DefaultAxisKey` | 属性 |
| `PositiveKey` | `public GameKey PositiveKey` | 属性 |
| `NegativeKey` | `public GameKey NegativeKey` | 属性 |
| `Type` | `public GameAxisKey.AxisType Type` | 属性 |
| `GameAxisKey` | `public GameAxisKey(string id, InputKey axisKey, GameKey positiveKey, GameKey negativeKey, GameAxisKey.AxisType type = GameAxisKey.AxisType.X)` | 构造函数 |
| `GetAxisState` | `public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `AxisType` | `public enum AxisType` | 属性 |
| `AxisType` | `public enum AxisType` | 嵌套类型 |

## 参见

- [↑ inputsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EmptyInputContext](../EmptyInputContext)
- [同命名空间 GameKey](../GameKey)
- [同命名空间 GameKeyContext](../GameKeyContext)
- [同命名空间 HotKey](../HotKey)
