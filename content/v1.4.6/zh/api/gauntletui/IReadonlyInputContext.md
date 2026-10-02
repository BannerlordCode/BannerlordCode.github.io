---
title: "IReadonlyInputContext"
description: "IReadonlyInputContext：TaleWorlds.GauntletUI 的 public 接口；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs。"
---
# IReadonlyInputContext

**Namespace:** `TaleWorlds.GauntletUI.GauntletInput`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface IReadonlyInputContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs`

## 概述

IReadonlyInputContext 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs。它是一个 public 接口，继承链为 IReadonlyInputContext。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IReadonlyInputContext 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.GauntletUI.GauntletInput），继承链 IReadonlyInputContext。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/IReadonlyInputContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetIsMouseActive` | `bool GetIsMouseActive();` | 方法 |
| `GetMousePosition` | `Vector2 GetMousePosition();` | 方法 |
| `GetMouseMovement` | `Vector2 GetMouseMovement();` | 方法 |
| `InputKey[]GetClickKeys` | `InputKey[]GetClickKeys();` | 方法 |
| `InputKey[]GetAlternateClickKeys` | `InputKey[]GetAlternateClickKeys();` | 方法 |
| `GetControllerLeftStickState` | `Vector2 GetControllerLeftStickState();` | 方法 |
| `GetControllerRightStickState` | `Vector2 GetControllerRightStickState();` | 方法 |
| `GetMouseScrollDelta` | `float GetMouseScrollDelta();` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletInputContext](../GauntletInputContext)
