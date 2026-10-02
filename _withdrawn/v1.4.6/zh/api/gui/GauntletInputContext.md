---
title: "GauntletInputContext"
description: "GauntletInputContext：TaleWorlds.GauntletUI.GauntletInput 的 public 类，继承 IReadonlyInputContext；公开成员 11 个（方法 10、属性 0、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletInputContext

**Namespace:** `TaleWorlds.GauntletUI.GauntletInput`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GauntletInputContext : IReadonlyInputContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GauntletInputContext 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs。它是一个 public 类，实现/继承 IReadonlyInputContext，继承链为 GauntletInputContext → IReadonlyInputContext。public/protected 成员共 11 个：10 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletInputContext 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.GauntletInput`，继承链 GauntletInputContext → IReadonlyInputContext。成员构成以方法为主（方法 10/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletInputContext` | `public GauntletInputContext(IInputContext inputContext)` | 构造函数 |
| `GetIsMouseActive` | `public bool GetIsMouseActive()` | 方法 |
| `GetMousePosition` | `public Vector2 GetMousePosition()` | 方法 |
| `GetMouseMovement` | `public Vector2 GetMouseMovement()` | 方法 |
| `InputKey[]GetClickKeys` | `public InputKey[]GetClickKeys()` | 方法 |
| `InputKey[]GetAlternateClickKeys` | `public InputKey[]GetAlternateClickKeys()` | 方法 |
| `GetMouseScrollDelta` | `public float GetMouseScrollDelta()` | 方法 |
| `GetControllerLeftStickState` | `public Vector2 GetControllerLeftStickState()` | 方法 |
| `GetControllerRightStickState` | `public Vector2 GetControllerRightStickState()` | 方法 |
| `SetMousePositionOverride` | `public void SetMousePositionOverride(Vector2 mousePosition)` | 方法 |
| `ResetMousePositionOverride` | `public void ResetMousePositionOverride()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IReadonlyInputContext](../IReadonlyInputContext/)
- [同命名空间 IReadonlyInputContext](../IReadonlyInputContext/)
