---
title: "StealthBox"
description: "StealthBox 的自动生成类参考。"
---
# StealthBox

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StealthBox : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/StealthBox.cs`

## 概述

`StealthBox` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsPointInside
`public bool IsPointInside(Vec3 point)`

**用途 / Purpose:** 判断当前对象是否处于 point inside 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthBox 实例
StealthBox stealthBox = ...;
var result = stealthBox.IsPointInside(point);
```

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 agent inside 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthBox 实例
StealthBox stealthBox = ...;
var result = stealthBox.IsAgentInside(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StealthBox stealthBox = ...;
stealthBox.IsPointInside(point);
```

## 参见

- [本区域目录](../)