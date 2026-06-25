---
title: "Light"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Light`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `point light` 实例或对象。

### SetShadowType
`public void SetShadowType(Light.ShadowType type)`

**用途 / Purpose:** 设置 `shadow type` 的值或状态。

### SetLightFlicker
`public void SetLightFlicker(float magnitude, float interval)`

**用途 / Purpose:** 设置 `light flicker` 的值或状态。

### SetVolumetricProperties
`public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)`

**用途 / Purpose:** 设置 `volumetric properties` 的值或状态。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### SetVisibility
`public void SetVisibility(bool value)`

**用途 / Purpose:** 设置 `visibility` 的值或状态。

## 使用示例

```csharp
Light.CreatePointLight(0);
```

## 参见

- [完整类目录](../catalog)