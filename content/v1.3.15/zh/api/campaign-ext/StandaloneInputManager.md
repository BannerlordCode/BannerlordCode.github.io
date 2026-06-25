---
title: "StandaloneInputManager"
description: "StandaloneInputManager 的自动生成类参考。"
---
# StandaloneInputManager

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class StandaloneInputManager : IInputManager`
**Base:** `IInputManager`
**File:** `TaleWorlds.TwoDimension.Standalone/StandaloneInputManager.cs`

## 概述

`StandaloneInputManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `StandaloneInputManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetRumbleEffect
`public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**用途 / Purpose:** 为 「rumble effect」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StandaloneInputManager 实例
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**用途 / Purpose:** 为 「trigger feedback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StandaloneInputManager 实例
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**用途 / Purpose:** 为 「trigger weapon effect」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StandaloneInputManager 实例
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**用途 / Purpose:** 为 「trigger vibration」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StandaloneInputManager 实例
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**用途 / Purpose:** 为 「lightbar color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StandaloneInputManager 实例
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetLightbarColor(0, 0, 0);
```

## 使用示例

```csharp
var manager = StandaloneInputManager.Current;
```

## 参见

- [本区域目录](../)