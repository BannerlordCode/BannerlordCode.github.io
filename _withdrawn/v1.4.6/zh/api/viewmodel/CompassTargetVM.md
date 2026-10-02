---
title: "CompassTargetVM"
description: "CompassTargetVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass 的 public 类，继承 ViewModel；公开成员 15 个（方法 2、属性 12、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CompassTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CompassTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

CompassTargetVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CompassTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 15 个：2 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CompassTargetVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`，继承链 CompassTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 12/15，方法 2/15），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CompassMarkerVM](../CompassMarkerVM/)
