---
title: "MPPerkCondition"
description: "MPPerkCondition 的自动生成类参考。"
---
# MPPerkCondition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkCondition`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkCondition.cs`

## 概述

`MPPerkCondition` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Check
`public abstract bool Check(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 MPPerkCondition 实例
MPPerkCondition mPPerkCondition = ...;
var result = mPPerkCondition.Check(peer);
```

### Check
`public abstract bool Check(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 MPPerkCondition 实例
MPPerkCondition mPPerkCondition = ...;
var result = mPPerkCondition.Check(agent);
```

### CreateFrom
`public static MPPerkCondition CreateFrom(List<string> gameModes, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MPPerkCondition.CreateFrom(gameModes, node);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MPPerkCondition instance = ...;
```

## 参见

- [本区域目录](../)