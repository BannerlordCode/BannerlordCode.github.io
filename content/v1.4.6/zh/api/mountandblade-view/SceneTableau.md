---
title: "SceneTableau"
description: "SceneTableau：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 9 个（方法 6、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/SceneTableau.cs。"
---
# SceneTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SceneTableau`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/SceneTableau.cs`

## 概述

SceneTableau 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/SceneTableau.cs。它是一个 public 类，继承链为 SceneTableau。public/protected 成员共 9 个：6 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneTableau 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus），继承链 SceneTableau。成员构成以方法为主（方法 6/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/SceneTableau.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `_texture` | `public Texture _texture` | 属性 |
| `IsReady` | `public bool? IsReady` | 属性 |
| `SceneTableau` | `public SceneTableau()` | 构造函数 |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `SetScene` | `public void SetScene(object scene)` | 方法 |
| `SetBannerCode` | `public void SetBannerCode(string value)` | 方法 |
| `RotateCharacter` | `public void RotateCharacter(bool value)` | 方法 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerTableau](../BannerTableau)
- [同命名空间 BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData)
- [同命名空间 BasicCharacterTableau](../BasicCharacterTableau)
- [同命名空间 BrightnessDemoTableau](../BrightnessDemoTableau)
