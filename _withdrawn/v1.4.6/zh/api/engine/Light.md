---
title: "Light"
description: "Light：TaleWorlds.Engine 的 public 类，继承 GameEntityComponent；公开成员 14 个（方法 6、属性 7、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Light.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Light

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Light : GameEntityComponent`
**File:** `TaleWorlds.Engine/Light.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Light 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Light.cs。它是一个 public 类（sealed），实现/继承 GameEntityComponent，继承链为 Light → GameEntityComponent → NativeObject。public/protected 成员共 14 个：6 方法、7 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Light 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Light → GameEntityComponent → NativeObject。成员构成以属性为主（属性 7/14，方法 6/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Light.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `CreatePointLight` | `public static Light CreatePointLight(float lightRadius)` | 方法 |
| `Frame` | `public MatrixFrame Frame` | 属性 |
| `LightColor` | `public Vec3 LightColor` | 属性 |
| `Intensity` | `public float Intensity` | 属性 |
| `Radius` | `public float Radius` | 属性 |
| `SetShadowType` | `public void SetShadowType(Light.ShadowType type)` | 方法 |
| `ShadowEnabled` | `public bool ShadowEnabled` | 属性 |
| `SetLightFlicker` | `public void SetLightFlicker(float magnitude, float interval)` | 方法 |
| `SetVolumetricProperties` | `public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)` | 方法 |
| `Dispose` | `public void Dispose()` | 方法 |
| `SetVisibility` | `public void SetVisibility(bool value)` | 方法 |
| `ShadowType` | `public enum ShadowType` | 属性 |
| `ShadowType` | `public enum ShadowType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameEntityComponent](../GameEntityComponent/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
