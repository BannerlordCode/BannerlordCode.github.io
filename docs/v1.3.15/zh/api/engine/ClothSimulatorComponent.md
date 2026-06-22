<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClothSimulatorComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClothSimulatorComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/ClothSimulatorComponent.cs`

## 概述

`ClothSimulatorComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<ClothSimulatorComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### SetMaxDistanceMultiplier
```csharp
public void SetMaxDistanceMultiplier(float multiplier)
```

### SetForcedWind
```csharp
public void SetForcedWind(Vec3 windVector, bool isLocal)
```

### DisableForcedWind
```csharp
public void DisableForcedWind()
```

### SetForcedGustStrength
```csharp
public void SetForcedGustStrength(float gustStrength)
```

### SetResetRequired
```csharp
public void SetResetRequired()
```

### DisableMorphAnimation
```csharp
public void DisableMorphAnimation()
```

### SetMorphBuffer
```csharp
public void SetMorphBuffer(float morphKey)
```

### GetNumberOfMorphKeys
```csharp
public int GetNumberOfMorphKeys()
```

### SetVectorArgument
```csharp
public void SetVectorArgument(float x, float y, float z, float w)
```

### GetMorphAnimLeftPoints
```csharp
public void GetMorphAnimLeftPoints(Vec3 leftPoints)
```

### GetMorphAnimRightPoints
```csharp
public void GetMorphAnimRightPoints(Vec3 rightPoints)
```

### GetMorphAnimCenterPoints
```csharp
public void GetMorphAnimCenterPoints(Vec3 centerPoints)
```

### SetForcedVelocity
```csharp
public void SetForcedVelocity(in Vec3 forcedVelocity)
```

## 使用示例

```csharp
// ClothSimulatorComponent (Component) 的典型用法
agent.GetComponent<ClothSimulatorComponent>();
```

## 参见

- [完整类目录](../catalog)