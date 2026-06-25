---
title: "Shader"
description: "Shader 的自动生成类参考。"
---
# Shader

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Shader : Resource`
**Base:** `Resource`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Shader.cs`

## 概述

`Shader` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFromResource
`public static Shader GetFromResource(string shaderName)`

**用途 / Purpose:** 读取并返回当前对象中 「from resource」 的结果。

```csharp
// 静态调用，不需要实例
Shader.GetFromResource("example");
```

### GetMaterialShaderFlagMask
`public ulong GetMaterialShaderFlagMask(string flagName, bool showErrors = true)`

**用途 / Purpose:** 读取并返回当前对象中 「material shader flag mask」 的结果。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
var result = shader.GetMaterialShaderFlagMask("example", false);
```

## 使用示例

```csharp
Shader.GetFromResource("example");
```

## 参见

- [本区域目录](../)