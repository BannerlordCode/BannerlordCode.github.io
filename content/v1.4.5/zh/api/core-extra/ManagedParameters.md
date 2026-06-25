---
title: "ManagedParameters"
description: "ManagedParameters 的自动生成类参考。"
---
# ManagedParameters

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ManagedParameters.cs`

## 概述

`ManagedParameters` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## 主要方法

### GetParameter
`public static float GetParameter(ManagedParametersEnum managedParameterType)`

**用途 / Purpose:** 读取并返回当前对象中 parameter 的结果。

```csharp
// 静态调用，不需要实例
ManagedParameters.GetParameter(managedParameterType);
```

### SetParameter
`public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)`

**用途 / Purpose:** 为 parameter 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ManagedParameters.SetParameter(managedParameterType, 0);
```

### Initialize
`public void Initialize(string relativeXmlPath)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ManagedParameters 实例
ManagedParameters managedParameters = ...;
managedParameters.Initialize("example");
```

### GetManagedParameter
`public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)`

**用途 / Purpose:** 读取并返回当前对象中 managed parameter 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedParameters 实例
ManagedParameters managedParameters = ...;
var result = managedParameters.GetManagedParameter(managedParameterEnum);
```

## 使用示例

```csharp
ManagedParameters.GetParameter(managedParameterType);
```

## 参见

- [本区域目录](../)