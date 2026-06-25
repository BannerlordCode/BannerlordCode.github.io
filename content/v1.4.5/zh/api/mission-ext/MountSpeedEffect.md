---
title: "MountSpeedEffect"
description: "MountSpeedEffect 的自动生成类参考。"
---
# MountSpeedEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MountSpeedEffect : MPPerkEffect`
**Base:** `MPPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/MountSpeedEffect.cs`

## 概述

`MountSpeedEffect` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnUpdate
`public override void OnUpdate(Agent agent, bool newState)`

**用途 / Purpose:** **用途 / Purpose:** 在 update 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MountSpeedEffect 实例
MountSpeedEffect mountSpeedEffect = ...;
mountSpeedEffect.OnUpdate(agent, false);
```

### GetMountSpeed
`public override float GetMountSpeed()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount speed 的结果。

```csharp
// 先通过子系统 API 拿到 MountSpeedEffect 实例
MountSpeedEffect mountSpeedEffect = ...;
var result = mountSpeedEffect.GetMountSpeed();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MountSpeedEffect mountSpeedEffect = ...;
mountSpeedEffect.OnUpdate(agent, false);
```

## 参见

- [本区域目录](../)