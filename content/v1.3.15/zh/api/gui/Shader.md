---
title: "Shader"
description: "Shader 的自动生成类参考。"
---
# Shader

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class Shader`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/Shader.cs`

## 概述

`Shader` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateShader
`public static Shader CreateShader(GraphicsContext graphicsContext, string vertexShaderCode, string fragmentShaderCode)`

**用途 / Purpose:** 构建一个新的 「shader」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Shader.CreateShader(graphicsContext, "example", "example");
```

### CompileShaders
`public static int CompileShaders(string vertexShaderCode, string fragmentShaderCode)`

**用途 / Purpose:** 处理与 「compile shaders」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Shader.CompileShaders("example", "example");
```

### SetTexture
`public void SetTexture(string name, OpenGLTexture texture)`

**用途 / Purpose:** 为 「texture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.SetTexture("example", texture);
```

### SetColor
`public void SetColor(string name, Color color)`

**用途 / Purpose:** 为 「color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.SetColor("example", color);
```

### Use
`public void Use()`

**用途 / Purpose:** 处理与 「use」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.Use();
```

### StopUsing
`public void StopUsing()`

**用途 / Purpose:** 停止「using」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.StopUsing();
```

### SetMatrix
`public void SetMatrix(string name, Matrix4x4 matrix)`

**用途 / Purpose:** 为 「matrix」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.SetMatrix("example", matrix);
```

### SetBoolean
`public void SetBoolean(string name, bool value)`

**用途 / Purpose:** 为 「boolean」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.SetBoolean("example", false);
```

### SetFloat
`public void SetFloat(string name, float value)`

**用途 / Purpose:** 为 「float」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.SetFloat("example", 0);
```

### SetVector2
`public void SetVector2(string name, Vector2 value)`

**用途 / Purpose:** 为 「vector2」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Shader 实例
Shader shader = ...;
shader.SetVector2("example", value);
```

## 使用示例

```csharp
Shader.CreateShader(graphicsContext, "example", "example");
```

## 参见

- [本区域目录](../)