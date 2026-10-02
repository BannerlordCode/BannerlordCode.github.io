---
title: "BannerTableau"
description: "BannerTableau：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 12 个（方法 10、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs。"
---
# BannerTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BannerTableau`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs`

## 概述

BannerTableau 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs。它是一个 public 类，继承链为 BannerTableau。public/protected 成员共 12 个：10 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerTableau 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus），继承链 BannerTableau。成员构成以方法为主（方法 10/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | 属性 |
| `BannerTableau` | `public BannerTableau()` | 构造函数 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | 方法 |
| `SetBannerCode` | `public void SetBannerCode(string value)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `SetCustomRenderScale` | `public void SetCustomRenderScale(float value)` | 方法 |
| `SetIsNineGrid` | `public void SetIsNineGrid(bool value)` | 方法 |
| `SetMeshIndexToUpdate` | `public void SetMeshIndexToUpdate(int value)` | 方法 |
| `SetUpdatePositionValueManual` | `public void SetUpdatePositionValueManual(Vec2 value)` | 方法 |
| `SetUpdateSizeValueManual` | `public void SetUpdateSizeValueManual(Vec2 value)` | 方法 |
| `SetUpdateRotationValueManual` | `public void SetUpdateRotationValueManual(ValueTuple<float, bool>value)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData)
- [同命名空间 BasicCharacterTableau](../BasicCharacterTableau)
- [同命名空间 BrightnessDemoTableau](../BrightnessDemoTableau)
- [同命名空间 CharacterTableau](../CharacterTableau)
