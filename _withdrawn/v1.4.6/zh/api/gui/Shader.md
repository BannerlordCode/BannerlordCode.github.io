---
title: "Shader"
description: "Shader：TaleWorlds.TwoDimension.Standalone 的 public 类；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/Shader.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Shader

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class Shader`
**File:** `TaleWorlds.TwoDimension.Standalone/Shader.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

Shader 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/Shader.cs。它是一个 public 类，继承链为 Shader。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Shader 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 Shader。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/Shader.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateShader` | `public static Shader CreateShader(GraphicsContext graphicsContext, string vertexShaderCode, string fragmentShaderCode)` | 方法 |
| `CompileShaders` | `public static int CompileShaders(string vertexShaderCode, string fragmentShaderCode)` | 方法 |
| `SetTexture` | `public void SetTexture(string name, OpenGLTexture texture)` | 方法 |
| `SetColor` | `public void SetColor(string name, Color color)` | 方法 |
| `Use` | `public void Use()` | 方法 |
| `StopUsing` | `public void StopUsing()` | 方法 |
| `SetMatrix` | `public void SetMatrix(string name, in Matrix4x4 matrix)` | 方法 |
| `SetBoolean` | `public void SetBoolean(string name, bool value)` | 方法 |
| `SetFloat` | `public void SetFloat(string name, float value)` | 方法 |
| `SetVector2` | `public void SetVector2(string name, Vector2 value)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsContext](../GraphicsContext/)
- [同命名空间 GraphicsForm](../GraphicsForm/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
