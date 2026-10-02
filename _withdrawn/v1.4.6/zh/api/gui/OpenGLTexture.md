---
title: "OpenGLTexture"
description: "OpenGLTexture：TaleWorlds.TwoDimension.Standalone 的 public 类，继承 ITexture；公开成员 14 个（方法 9、属性 5、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OpenGLTexture

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class OpenGLTexture : ITexture`
**File:** `TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

OpenGLTexture 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs。它是一个 public 类，实现/继承 ITexture，继承链为 OpenGLTexture → ITexture。public/protected 成员共 14 个：9 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OpenGLTexture 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 OpenGLTexture → ITexture。成员构成以方法为主（方法 9/14，属性 5/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | 属性 |
| `Width` | `public int Width` | 属性 |
| `Height` | `public int Height` | 属性 |
| `Name` | `public string Name` | 属性 |
| `ClampToEdge` | `public bool ClampToEdge` | 属性 |
| `Initialize` | `public void Initialize(string name, int width, int height)` | 方法 |
| `CopyFrom` | `public void CopyFrom(OpenGLTexture texture)` | 方法 |
| `Delete` | `public void Delete()` | 方法 |
| `FromFile` | `public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)` | 方法 |
| `FromFile` | `public static OpenGLTexture FromFile(string fullFilePath)` | 方法 |
| `Release` | `public void Release()` | 方法 |
| `LoadFromFile` | `public void LoadFromFile(ResourceDepot resourceDepot, string name)` | 方法 |
| `LoadFromFile` | `public void LoadFromFile(string fullPathName)` | 方法 |
| `IsLoaded` | `public bool IsLoaded()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ITexture](../ITexture/)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsContext](../GraphicsContext/)
- [同命名空间 GraphicsForm](../GraphicsForm/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
