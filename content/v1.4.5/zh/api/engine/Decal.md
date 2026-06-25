---
title: "Decal"
description: "Decal 的自动生成类参考。"
---
# Decal

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Decal : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Decal.cs`

## 概述

`Decal` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Frame` | `public MatrixFrame Frame { get; set; }` |

## 主要方法

### CreateDecal
`public static Decal CreateDecal(string name = null)`

**用途 / Purpose:** 构建一个新的 「decal」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Decal.CreateDecal("example");
```

### CreateCopy
`public Decal CreateCopy()`

**用途 / Purpose:** 构建一个新的 「copy」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
var result = decal.CreateCopy();
```

### CheckAndRegisterToDecalSet
`public void CheckAndRegisterToDecalSet()`

**用途 / Purpose:** 检查「and register to decal set」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.CheckAndRegisterToDecalSet();
```

### SetIsVisible
`public void SetIsVisible(bool value)`

**用途 / Purpose:** 为 「is visible」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetIsVisible(false);
```

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** 读取并返回当前对象中 「factor1」 的结果。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
var result = decal.GetFactor1();
```

### OverrideRoadBoundaryP0
`public void OverrideRoadBoundaryP0(Vec2 data)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.OverrideRoadBoundaryP0(data);
```

### OverrideRoadBoundaryP1
`public void OverrideRoadBoundaryP1(Vec2 data)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.OverrideRoadBoundaryP1(data);
```

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**用途 / Purpose:** 为 「factor1 linear」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetFactor1Linear(0);
```

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** 为 「factor1」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetFactor1(0);
```

### SetAlpha
`public void SetAlpha(float alpha)`

**用途 / Purpose:** 为 「alpha」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetAlpha(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 「vector argument」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetVectorArgument(0, 0, 0, 0);
```

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 「vector argument2」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetVectorArgument2(0, 0, 0, 0);
```

### GetMaterial
`public Material GetMaterial()`

**用途 / Purpose:** 读取并返回当前对象中 「material」 的结果。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
var result = decal.GetMaterial();
```

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 为 「material」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetMaterial(material);
```

### SetFrame
`public void SetFrame(MatrixFrame Frame)`

**用途 / Purpose:** 为 「frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Decal 实例
Decal decal = ...;
decal.SetFrame(frame);
```

## 使用示例

```csharp
Decal.CreateDecal("example");
```

## 参见

- [本区域目录](../)