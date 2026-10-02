---
title: "BannerManager"
description: "BannerManager：TaleWorlds.Core 的 public 类；公开成员 26 个（方法 14、属性 3、字段 9）。源文件 TaleWorlds.Core/BannerManager.cs。"
---
# BannerManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BannerManager`
**File:** `TaleWorlds.Core/BannerManager.cs`

## 概述

BannerManager 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BannerManager.cs。它是一个 public 类，继承链为 BannerManager。public/protected 成员共 26 个：14 方法、3 属性、9 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerManager 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BannerManager。成员构成以方法为主（方法 14/26，属性 3/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BannerManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static BannerManager Instance` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<BannerIconGroup>BannerIconGroups` | 属性 |
| `BaseBackgroundId` | `public int BaseBackgroundId` | 属性 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `ResetAndLoad` | `public static void ResetAndLoad()` | 方法 |
| `GetColor` | `public static uint GetColor(int id)` | 方法 |
| `GetColorId` | `public static int GetColorId(uint color)` | 方法 |
| `GetRandomColorId` | `public int GetRandomColorId(MBFastRandom random)` | 方法 |
| `GetIconDataFromIconId` | `public BannerIconData GetIconDataFromIconId(int id)` | 方法 |
| `GetRandomBackgroundId` | `public int GetRandomBackgroundId(MBFastRandom random)` | 方法 |
| `GetRandomBannerIconId` | `public int GetRandomBannerIconId(MBFastRandom random)` | 方法 |
| `GetBackgroundMeshName` | `public string GetBackgroundMeshName(int id)` | 方法 |
| `GetIconSourceTextureName` | `public string GetIconSourceTextureName(int id)` | 方法 |
| `SetBaseBackgroundId` | `public void SetBaseBackgroundId(int id)` | 方法 |
| `SetCultureColors` | `public void SetCultureColors(BasicCultureObject culture, List<BannerColor>color)` | 方法 |
| `LoadBannerIcons` | `public void LoadBannerIcons()` | 方法 |
| `LoadBannerIcons` | `public void LoadBannerIcons(string xmlPath)` | 方法 |
| `DarkRed` | `public const int DarkRed` | 字段 |
| `Green` | `public const int Green` | 字段 |
| `Blue` | `public const int Blue` | 字段 |
| `Purple` | `public const int Purple` | 字段 |
| `DarkPurple` | `public const int DarkPurple` | 字段 |
| `Orange` | `public const int Orange` | 字段 |
| `DarkBlue` | `public const int DarkBlue` | 字段 |
| `Red` | `public const int Red` | 字段 |
| `Yellow` | `public const int Yellow` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
