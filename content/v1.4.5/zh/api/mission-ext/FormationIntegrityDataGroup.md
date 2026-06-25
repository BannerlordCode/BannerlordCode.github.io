---
title: "FormationIntegrityDataGroup"
description: "FormationIntegrityDataGroup 的自动生成类参考。"
---
# FormationIntegrityDataGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationIntegrityDataGroup`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## 概述

`FormationIntegrityDataGroup` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FormationIntegrityDataGroup
`public struct FormationIntegrityDataGroup(Vec2 averageVelocityExcludeFarAgents, float deviationOfPositionsExcludeFarAgents, float maxDeviationOfPositionExcludeFarAgents, float averageMaxUnlimitedSpeedExcludeFarAgents)`

**用途 / Purpose:** 将「ion integrity data group」格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 FormationIntegrityDataGroup 实例
FormationIntegrityDataGroup formationIntegrityDataGroup = ...;
var result = formationIntegrityDataGroup.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FormationIntegrityDataGroup formationIntegrityDataGroup = ...;
formationIntegrityDataGroup.FormationIntegrityDataGroup(averageVelocityExcludeFarAgents, 0, 0, 0);
```

## 参见

- [本区域目录](../)