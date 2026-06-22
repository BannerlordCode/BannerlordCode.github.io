<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EngineInputManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineInputManager

**命名空间:** TaleWorlds.Engine.InputSystem
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`EngineInputManager` 是 `TaleWorlds.Engine.InputSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### SetRumbleEffect

```csharp
public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)
```

### SetTriggerFeedback

```csharp
public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)
```

### SetTriggerWeaponEffect

```csharp
public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)
```

### SetTriggerVibration

```csharp
public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)
```

### SetLightbarColor

```csharp
public void SetLightbarColor(float red, float green, float blue)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)