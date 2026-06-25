---
title: "FireMangonel"
description: "FireMangonel 的自动生成类参考。"
---
# FireMangonel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FireMangonel : Mangonel`
**Base:** `Mangonel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FireMangonel.cs`

## 概述

`FireMangonel` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine type」 的结果。

```csharp
// 先通过子系统 API 拿到 FireMangonel 实例
FireMangonel fireMangonel = ...;
var result = fireMangonel.GetSiegeEngineType();
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FireMangonel 实例
FireMangonel fireMangonel = ...;
var result = fireMangonel.ProcessTargetValue(0, flags);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FireMangonel fireMangonel = ...;
fireMangonel.GetSiegeEngineType();
```

## 参见

- [本区域目录](../)