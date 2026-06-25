---
title: "EngineInputManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EngineInputManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EngineInputManager

**Namespace:** TaleWorlds.Engine.InputSystem
**Module:** TaleWorlds.Engine
**Type:** `public class EngineInputManager : IInputManager`
**Base:** `IInputManager`
**File:** `TaleWorlds.Engine/InputSystem/EngineInputManager.cs`

## 概述

`EngineInputManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EngineInputManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetRumbleEffect
`public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**用途 / Purpose:** 设置 `rumble effect` 的值或状态。

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**用途 / Purpose:** 设置 `trigger feedback` 的值或状态。

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**用途 / Purpose:** 设置 `trigger weapon effect` 的值或状态。

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**用途 / Purpose:** 设置 `trigger vibration` 的值或状态。

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**用途 / Purpose:** 设置 `lightbar color` 的值或状态。

## 使用示例

```csharp
var manager = EngineInputManager.Current;
```

## 参见

- [完整类目录](../catalog)