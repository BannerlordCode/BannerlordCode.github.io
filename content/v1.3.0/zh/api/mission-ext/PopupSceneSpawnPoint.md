---
title: "PopupSceneSpawnPoint"
description: "PopupSceneSpawnPoint 的自动生成类参考。"
---
# PopupSceneSpawnPoint

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneSpawnPoint : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs`

## 概述

`PopupSceneSpawnPoint` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AddedPrefabComponent` | `public CompositeComponent AddedPrefabComponent { get; }` |

## 主要方法

### InitializeWithAgentVisuals
`public void InitializeWithAgentVisuals(AgentVisuals humanVisuals, AgentVisuals mountVisuals = null)`

**用途 / Purpose:** 为 「with agent visuals」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PopupSceneSpawnPoint 实例
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.InitializeWithAgentVisuals(humanVisuals, null);
```

### SetInitialState
`public void SetInitialState()`

**用途 / Purpose:** 为 「initial state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PopupSceneSpawnPoint 实例
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.SetInitialState();
```

### SetPositiveState
`public void SetPositiveState()`

**用途 / Purpose:** 为 「positive state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PopupSceneSpawnPoint 实例
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.SetPositiveState();
```

### SetNegativeState
`public void SetNegativeState()`

**用途 / Purpose:** 为 「negative state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PopupSceneSpawnPoint 实例
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.SetNegativeState();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PopupSceneSpawnPoint 实例
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.Destroy();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 PopupSceneSpawnPoint 实例
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
var result = popupSceneSpawnPoint.GetTickRequirement();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PopupSceneSpawnPoint popupSceneSpawnPoint = ...;
popupSceneSpawnPoint.InitializeWithAgentVisuals(humanVisuals, null);
```

## 参见

- [本区域目录](../)