---
title: "VisualTestsScreen"
description: "VisualTestsScreen：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScreenBase；公开成员 15 个（方法 9、属性 2、字段 1）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs。"
---
# VisualTestsScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class VisualTestsScreen : ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs`

## 概述

VisualTestsScreen 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs。它是一个 public 类，实现/继承 ScreenBase，继承链为 VisualTestsScreen → ScreenBase。public/protected 成员共 15 个：9 方法、2 属性、1 字段、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualTestsScreen 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Screens），继承链 VisualTestsScreen → ScreenBase。成员构成以方法为主（方法 9/15，属性 2/15），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartedRendering` | `public bool StartedRendering()` | 方法 |
| `GetSubTestName` | `public string GetSubTestName(VisualTestsScreen.CameraPointTestType type)` | 方法 |
| `GetRenderMode` | `public Utilities.EngineRenderDisplayMode GetRenderMode(VisualTestsScreen.CameraPointTestType type)` | 方法 |
| `VisualTestsScreen` | `public VisualTestsScreen(bool isValidTest, NativeOptions.ConfigQuality preset, string sceneName, DateTime testTime, List<string>testTypesToCheck)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `isSceneSuccess` | `public static bool isSceneSuccess` | 字段 |
| `CameraPointTestType` | `public enum CameraPointTestType` | 属性 |
| `CameraPoint` | `public class CameraPoint` | 属性 |
| `CameraPointTestType` | `public enum CameraPointTestType` | 嵌套类型 |
| `CameraPoint` | `public class CameraPoint` | 嵌套类型 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerBuilderScreen](../BannerBuilderScreen)
- [同命名空间 BenchmarkScreen](../BenchmarkScreen)
- [同命名空间 CreditsScreen](../CreditsScreen)
- [同命名空间 FaceGeneratorScreen](../FaceGeneratorScreen)
