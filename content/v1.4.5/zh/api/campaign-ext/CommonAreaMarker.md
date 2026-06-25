---
title: "CommonAreaMarker"
description: "CommonAreaMarker 的自动生成类参考。"
---
# CommonAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class CommonAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AreaMarkers/CommonAreaMarker.cs`

## 概述

`CommonAreaMarker` 位于 `SandBox.Objects.AreaMarkers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AreaMarkers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HiddenSpawnFrames` | `public List<MatrixFrame> HiddenSpawnFrames { get; }` |
| `Tag` | `public override string Tag { get; }` |

## 主要方法

### GetUsableMachinesInRange
`public override List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**用途 / Purpose:** 读取并返回当前对象中 「usable machines in range」 的结果。

```csharp
// 先通过子系统 API 拿到 CommonAreaMarker 实例
CommonAreaMarker commonAreaMarker = ...;
var result = commonAreaMarker.GetUsableMachinesInRange("example");
```

### GetAlley
`public Alley GetAlley()`

**用途 / Purpose:** 读取并返回当前对象中 「alley」 的结果。

```csharp
// 先通过子系统 API 拿到 CommonAreaMarker 实例
CommonAreaMarker commonAreaMarker = ...;
var result = commonAreaMarker.GetAlley();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 CommonAreaMarker 实例
CommonAreaMarker commonAreaMarker = ...;
var result = commonAreaMarker.GetName();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CommonAreaMarker commonAreaMarker = ...;
commonAreaMarker.GetUsableMachinesInRange("example");
```

## 参见

- [本区域目录](../)