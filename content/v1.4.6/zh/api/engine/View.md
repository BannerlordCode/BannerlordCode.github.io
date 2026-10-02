---
title: "View"
description: "View：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 21 个（方法 15、属性 3、字段 0）。源文件 TaleWorlds.Engine/View.cs。"
---
# View

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class View : NativeObject`
**File:** `TaleWorlds.Engine/View.cs`

## 概述

View 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/View.cs。它是一个 public 类（abstract），实现/继承 NativeObject，继承链为 View → NativeObject。public/protected 成员共 21 个：15 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：View 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 View → NativeObject。成员构成以方法为主（方法 15/21，属性 3/21），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/View.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetScale` | `public void SetScale(Vec2 scale)` | 方法 |
| `SetOffset` | `public void SetOffset(Vec2 offset)` | 方法 |
| `SetRenderOrder` | `public void SetRenderOrder(int value)` | 方法 |
| `SetRenderOption` | `public void SetRenderOption(View.ViewRenderOptions optionEnum, bool value)` | 方法 |
| `SetRenderTarget` | `public void SetRenderTarget(Texture texture)` | 方法 |
| `SetDepthTarget` | `public void SetDepthTarget(Texture texture)` | 方法 |
| `DontClearBackground` | `public void DontClearBackground()` | 方法 |
| `SetClearColor` | `public void SetClearColor(uint rgba)` | 方法 |
| `SetEnable` | `public void SetEnable(bool value)` | 方法 |
| `SetRenderOnDemand` | `public void SetRenderOnDemand(bool value)` | 方法 |
| `SetAutoDepthTargetCreation` | `public void SetAutoDepthTargetCreation(bool value)` | 方法 |
| `SetSaveFinalResultToDisk` | `public void SetSaveFinalResultToDisk(bool value)` | 方法 |
| `SetFileNameToSaveResult` | `public void SetFileNameToSaveResult(string name)` | 方法 |
| `SetFileTypeToSave` | `public void SetFileTypeToSave(View.TextureSaveFormat format)` | 方法 |
| `SetFilePathToSaveResult` | `public void SetFilePathToSaveResult(string name)` | 方法 |
| `TextureSaveFormat` | `public enum TextureSaveFormat` | 属性 |
| `uint` | `public enum PostfxConfig : uint` | 属性 |
| `ViewRenderOptions` | `public enum ViewRenderOptions` | 属性 |
| `TextureSaveFormat` | `public enum TextureSaveFormat` | 嵌套类型 |
| `uint` | `public enum PostfxConfig : uint` | 嵌套类型 |
| `ViewRenderOptions` | `public enum ViewRenderOptions` | 嵌套类型 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
