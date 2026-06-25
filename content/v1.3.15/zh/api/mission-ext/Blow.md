---
title: "Blow"
description: "Blow 的自动生成类参考。"
---
# Blow

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct Blow`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Blow.cs`

## 概述

`Blow` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMissile` | `public bool IsMissile { get; }` |

## 主要方法

### IsBlowCrit
`public bool IsBlowCrit(int maxHitPointsOfVictim)`

**用途 / Purpose:** 判断当前对象是否处于 「blow crit」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Blow 实例
Blow blow = ...;
var result = blow.IsBlowCrit(0);
```

### IsBlowLow
`public bool IsBlowLow(int maxHitPointsOfVictim)`

**用途 / Purpose:** 判断当前对象是否处于 「blow low」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Blow 实例
Blow blow = ...;
var result = blow.IsBlowLow(0);
```

### IsHeadShot
`public bool IsHeadShot()`

**用途 / Purpose:** 判断当前对象是否处于 「head shot」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Blow 实例
Blow blow = ...;
var result = blow.IsHeadShot();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Blow blow = ...;
blow.IsBlowCrit(0);
```

## 参见

- [本区域目录](../)