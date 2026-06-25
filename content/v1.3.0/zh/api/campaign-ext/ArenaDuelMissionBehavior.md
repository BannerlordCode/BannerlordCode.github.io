---
title: "ArenaDuelMissionBehavior"
description: "ArenaDuelMissionBehavior 的自动生成类参考。"
---
# ArenaDuelMissionBehavior

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaDuelMissionBehavior : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionBehavior.cs`

## 概述

`ArenaDuelMissionBehavior` 位于 `SandBox.Missions.MissionLogics.Arena`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics.Arena` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 ArenaDuelMissionBehavior 实例
ArenaDuelMissionBehavior arenaDuelMissionBehavior = ...;
arenaDuelMissionBehavior.AfterStart();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArenaDuelMissionBehavior arenaDuelMissionBehavior = ...;
arenaDuelMissionBehavior.AfterStart();
```

## 参见

- [本区域目录](../)