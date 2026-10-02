---
title: "WeakMaterial"
description: "WeakMaterial：TaleWorlds.Engine 的 public 结构体；公开成员 21 个（方法 17、属性 3、字段 1）。源文件 TaleWorlds.Engine/WeakMaterial.cs。"
---
# WeakMaterial

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WeakMaterial`
**File:** `TaleWorlds.Engine/WeakMaterial.cs`

## 概述

WeakMaterial 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/WeakMaterial.cs。它是一个 public 结构体，继承链为 WeakMaterial。public/protected 成员共 21 个：17 方法、3 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeakMaterial 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 WeakMaterial。成员构成以方法为主（方法 17/21，属性 3/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/WeakMaterial.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Pointer` | `public UIntPtr Pointer` | 属性 |
| `IsValid` | `public bool IsValid` | 属性 |
| `GetShader` | `public Shader GetShader()` | 方法 |
| `GetShaderFlags` | `public ulong GetShaderFlags()` | 方法 |
| `SetShaderFlags` | `public void SetShaderFlags(ulong flagEntry)` | 方法 |
| `SetMeshVectorArgument` | `public void SetMeshVectorArgument(float x, float y, float z, float w)` | 方法 |
| `SetTexture` | `public void SetTexture(Material.MBTextureType textureType, Texture texture)` | 方法 |
| `SetTextureAtSlot` | `public void SetTextureAtSlot(int textureSlot, Texture texture)` | 方法 |
| `SetAreaMapScale` | `public void SetAreaMapScale(float scale)` | 方法 |
| `SetEnableSkinning` | `public void SetEnableSkinning(bool enable)` | 方法 |
| `UsingSkinning` | `public bool UsingSkinning()` | 方法 |
| `GetTexture` | `public Texture GetTexture(Material.MBTextureType textureType)` | 方法 |
| `GetTextureWithSlot` | `public Texture GetTextureWithSlot(int textureSlot)` | 方法 |
| `Name` | `public string Name` | 属性 |
| `AddMaterialShaderFlag` | `public void AddMaterialShaderFlag(string flagName, bool showErrors)` | 方法 |
| `RemoveMaterialShaderFlag` | `public void RemoveMaterialShaderFlag(string flagName)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Invalid` | `public static readonly WeakMaterial Invalid` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
