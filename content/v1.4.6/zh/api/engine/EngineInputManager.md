---
title: "EngineInputManager"
description: "EngineInputManager：TaleWorlds.Engine 的 public 类，继承 IInputManager；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.Engine/InputSystem/EngineInputManager.cs。"
---
# EngineInputManager

**Namespace:** `TaleWorlds.Engine.InputSystem`
**Module:** `TaleWorlds.Engine`
**Type:** `public class EngineInputManager : IInputManager`
**File:** `TaleWorlds.Engine/InputSystem/EngineInputManager.cs`

## 概述

EngineInputManager 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/InputSystem/EngineInputManager.cs。它是一个 public 类，实现/继承 IInputManager，继承链为 EngineInputManager → IInputManager。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EngineInputManager 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录不同（TaleWorlds.Engine.InputSystem），继承链 EngineInputManager → IInputManager。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。继承链上的 IInputManager 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/InputSystem/EngineInputManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetRumbleEffect` | `public void SetRumbleEffect(float[]lowFrequencyLevels, float[]lowFrequencyDurations, int numLowFrequencyElements, float[]highFrequencyLevels, float[]highFrequencyDurations, int numHighFrequencyElements)` | 方法 |
| `SetTriggerFeedback` | `public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)` | 方法 |
| `SetTriggerWeaponEffect` | `public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)` | 方法 |
| `SetTriggerVibration` | `public void SetTriggerVibration(float[]leftTriggerAmplitudes, float[]leftTriggerFrequencies, float[]leftTriggerDurations, int numLeftTriggerElements, float[]rightTriggerAmplitudes, float[]rightTriggerFrequencies, float[]rightTriggerDurations, int numRightTriggerElements)` | 方法 |
| `SetLightbarColor` | `public void SetLightbarColor(float red, float green, float blue)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheatsHotKeyCategory](../CheatsHotKeyCategory)
- [同命名空间 DebugHotKeyCategory](../DebugHotKeyCategory)
