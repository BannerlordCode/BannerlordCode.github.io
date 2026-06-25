---
title: "Light"
description: "Light 的自动生成类参考。"
---
# Light

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Light : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/Light.cs`

## 概述

`Light` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `LightColor` | `public Vec3 LightColor { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |
| `ShadowEnabled` | `public bool ShadowEnabled { get; set; }` |

## 主要方法

### CreatePointLight
`public static Light CreatePointLight(float lightRadius)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 point light 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Light.CreatePointLight(0);
```

### SetShadowType
`public void SetShadowType(Light.ShadowType type)`

**用途 / Purpose:** **用途 / Purpose:** 为 shadow type 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Light 实例
Light light = ...;
light.SetShadowType(type);
```

### SetLightFlicker
`public void SetLightFlicker(float magnitude, float interval)`

**用途 / Purpose:** **用途 / Purpose:** 为 light flicker 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Light 实例
Light light = ...;
light.SetLightFlicker(0, 0);
```

### SetVolumetricProperties
`public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)`

**用途 / Purpose:** **用途 / Purpose:** 为 volumetric properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Light 实例
Light light = ...;
light.SetVolumetricProperties(false, 0);
```

### Dispose
`public void Dispose()`

**用途 / Purpose:** **用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 Light 实例
Light light = ...;
light.Dispose();
```

### SetVisibility
`public void SetVisibility(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Light 实例
Light light = ...;
light.SetVisibility(false);
```

## 使用示例

```csharp
Light.CreatePointLight(0);
```

## 参见

- [本区域目录](../)