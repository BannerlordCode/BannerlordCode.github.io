---
title: "AgentVisualHolder"
description: "AgentVisualHolder 的自动生成类参考。"
---
# AgentVisualHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualHolder : IAgentVisual`
**Base:** `IAgentVisual`
**File:** `TaleWorlds.MountAndBlade/AgentVisualHolder.cs`

## 概述

`AgentVisualHolder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetAction
`public void SetAction(in ActionIndexCache actionName, float startProgress = 0f, bool forceFaceMorphRestart = true)`

**用途 / Purpose:** 为 action 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetAction(actionName, 0, false);
```

### GetEntity
`public GameEntity GetEntity()`

**用途 / Purpose:** 读取并返回当前对象中 entity 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetEntity();
```

### GetVisuals
`public MBAgentVisuals GetVisuals()`

**用途 / Purpose:** 读取并返回当前对象中 visuals 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetVisuals();
```

### SetFrame
`public void SetFrame(ref MatrixFrame frame)`

**用途 / Purpose:** 为 frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetFrame(frame);
```

### GetFrame
`public MatrixFrame GetFrame()`

**用途 / Purpose:** 读取并返回当前对象中 frame 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetFrame();
```

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

**用途 / Purpose:** 读取并返回当前对象中 body properties 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetBodyProperties();
```

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 为 body properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetBodyProperties(bodyProperties);
```

### GetIsFemale
`public bool GetIsFemale()`

**用途 / Purpose:** 读取并返回当前对象中 is female 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetIsFemale();
```

### GetCharacterObjectID
`public string GetCharacterObjectID()`

**用途 / Purpose:** 读取并返回当前对象中 character object i d 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetCharacterObjectID();
```

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

**用途 / Purpose:** 为 character object i d 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetCharacterObjectID("example");
```

### GetEquipment
`public Equipment GetEquipment()`

**用途 / Purpose:** 读取并返回当前对象中 equipment 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetEquipment();
```

### RefreshWithNewEquipment
`public void RefreshWithNewEquipment(Equipment equipment)`

**用途 / Purpose:** 使 with new equipment 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.RefreshWithNewEquipment(equipment);
```

### SetClothingColors
`public void SetClothingColors(uint color1, uint color2)`

**用途 / Purpose:** 为 clothing colors 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetClothingColors(0, 0);
```

### GetClothingColors
`public void GetClothingColors(out uint color1, out uint color2)`

**用途 / Purpose:** 读取并返回当前对象中 clothing colors 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.GetClothingColors(color1, color2);
```

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

**用途 / Purpose:** 读取并返回当前对象中 copy agent visuals data 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
var result = agentVisualHolder.GetCopyAgentVisualsData();
```

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 AgentVisualHolder 实例
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.Refresh(false, data, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AgentVisualHolder agentVisualHolder = ...;
agentVisualHolder.SetAction(actionName, 0, false);
```

## 参见

- [本区域目录](../)