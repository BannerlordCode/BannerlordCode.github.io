---
title: "BrushFactory"
description: "BrushFactory：TaleWorlds.GauntletUI 的 public 类；公开成员 9 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs。"
---
# BrushFactory

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushFactory`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`

## 概述

BrushFactory 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs。它是一个 public 类，继承链为 BrushFactory。public/protected 成员共 9 个：5 方法、2 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrushFactory 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 BrushFactory。成员构成以方法为主（方法 5/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Brush>Brushes` | 属性 |
| `DefaultBrush` | `public Brush DefaultBrush` | 属性 |
| `BrushFactory` | `public BrushFactory(ResourceDepot resourceDepot, string resourceFolder, SpriteData spriteData, FontFactory fontFactory)` | 构造函数 |
| `Initialize` | `public void Initialize()` | 方法 |
| `LoadBrushFile` | `public void LoadBrushFile(string name)` | 方法 |
| `GetBrush` | `public Brush GetBrush(string name)` | 方法 |
| `SaveBrushAs` | `public bool SaveBrushAs(string name, Brush brush)` | 方法 |
| `CheckForUpdates` | `public void CheckForUpdates()` | 方法 |
| `BrushChange;` | `public event Action BrushChange;` | 事件 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
