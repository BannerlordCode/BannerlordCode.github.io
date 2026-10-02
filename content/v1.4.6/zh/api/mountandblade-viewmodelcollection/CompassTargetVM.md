---
title: "CompassTargetVM"
description: "CompassTargetVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 15 个（方法 2、属性 12、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs。"
---
# CompassTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CompassTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs`

## 概述

CompassTargetVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CompassTargetVM → ViewModel。public/protected 成员共 15 个：2 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CompassTargetVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass），继承链 CompassTargetVM → ViewModel。成员构成以属性为主（属性 12/15，方法 2/15），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CompassTargetVM` | `public CompassTargetVM(TargetIconType iconType, uint color, uint color2, Banner banner, bool isAttacker, bool isAlly)` | 构造函数 |
| `RefreshColor` | `public void RefreshColor(uint color, uint color2)` | 方法 |
| `Refresh` | `public virtual void Refresh(float circleX, float x, float distance)` | 方法 |
| `Banner` | `public BannerImageIdentifierVM Banner` | 属性 |
| `IsFlag` | `public bool IsFlag` | 属性 |
| `Distance` | `public int Distance` | 属性 |
| `Color2` | `public string Color2` | 属性 |
| `Color` | `public string Color` | 属性 |
| `IconType` | `public string IconType` | 属性 |
| `IconSpriteType` | `public string IconSpriteType` | 属性 |
| `LetterCode` | `public string LetterCode` | 属性 |
| `FullPosition` | `public float FullPosition` | 属性 |
| `Position` | `public float Position` | 属性 |
| `IsAttacker` | `public bool IsAttacker` | 属性 |
| `IsEnemy` | `public bool IsEnemy` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CompassMarkerVM](../CompassMarkerVM)
