---
title: "TextureProvider"
description: "TextureProvider：TaleWorlds.GauntletUI 的 public 类；公开成员 8 个（方法 7、属性 1、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs。"
---
# TextureProvider

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public abstract class TextureProvider`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs`

## 概述

TextureProvider 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs。它是一个 public 类（abstract），继承链为 TextureProvider。public/protected 成员共 8 个：7 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextureProvider 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 TextureProvider。成员构成以方法为主（方法 7/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SourceInfo` | `public string SourceInfo` | 属性 |
| `SetTargetSize` | `public virtual void SetTargetSize(int width, int height)` | 方法 |
| `GetTextureForRender` | `public Texture GetTextureForRender(TwoDimensionContext context, string name = null)` | 方法 |
| `OnGetTextureForRender` | `protected abstract Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name);` | 方法 |
| `Tick` | `public virtual void Tick(float dt)` | 方法 |
| `Clear` | `public virtual void Clear(bool clearNextFrame)` | 方法 |
| `SetProperty` | `public void SetProperty(string name, object value)` | 方法 |
| `GetProperty` | `public object GetProperty(string name)` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
