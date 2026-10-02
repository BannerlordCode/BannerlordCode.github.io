---
title: "ItemTableau"
description: "ItemTableau：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 20 个（方法 18、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ItemTableau.cs。"
---
# ItemTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ItemTableau`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ItemTableau.cs`

## 概述

ItemTableau 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ItemTableau.cs。它是一个 public 类，继承链为 ItemTableau。public/protected 成员共 20 个：18 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemTableau 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus），继承链 ItemTableau。成员构成以方法为主（方法 18/20，属性 1/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ItemTableau.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | 属性 |
| `ItemTableau` | `public ItemTableau()` | 构造函数 |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `SetEnabled` | `protected void SetEnabled(bool enabled)` | 方法 |
| `SetStringId` | `public void SetStringId(string stringId)` | 方法 |
| `SetAmmo` | `public void SetAmmo(int ammo)` | 方法 |
| `SetAverageUnitCost` | `public void SetAverageUnitCost(int averageUnitCost)` | 方法 |
| `SetItemModifierId` | `public void SetItemModifierId(string itemModifierId)` | 方法 |
| `SetBannerCode` | `public void SetBannerCode(string bannerCode)` | 方法 |
| `Recalculate` | `public void Recalculate()` | 方法 |
| `Initialize` | `public void Initialize()` | 方法 |
| `RotateItem` | `public void RotateItem(bool value)` | 方法 |
| `RotateItemVerticalWithAmount` | `public void RotateItemVerticalWithAmount(float value)` | 方法 |
| `RotateItemHorizontalWithAmount` | `public void RotateItemHorizontalWithAmount(float value)` | 方法 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `SetInitialTiltRotation` | `public void SetInitialTiltRotation(float amount)` | 方法 |
| `SetInitialPanRotation` | `public void SetInitialPanRotation(float amount)` | 方法 |
| `Zoom` | `public void Zoom(double value)` | 方法 |
| `SetItem` | `public void SetItem(ItemRosterElement itemRosterElement)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerTableau](../BannerTableau)
- [同命名空间 BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData)
- [同命名空间 BasicCharacterTableau](../BasicCharacterTableau)
- [同命名空间 BrightnessDemoTableau](../BrightnessDemoTableau)
