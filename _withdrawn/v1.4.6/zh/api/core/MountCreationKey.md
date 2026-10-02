---
title: "MountCreationKey"
description: "MountCreationKey：TaleWorlds.Core 的 public 类；公开成员 11 个（方法 4、属性 6、字段 0）。源文件 TaleWorlds.Core/MountCreationKey.cs。"
---
# MountCreationKey

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MountCreationKey`
**File:** `TaleWorlds.Core/MountCreationKey.cs`

## 概述

MountCreationKey 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MountCreationKey.cs。它是一个 public 类，继承链为 MountCreationKey。public/protected 成员共 11 个：4 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MountCreationKey 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 MountCreationKey。成员构成以属性为主（属性 6/11，方法 4/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MountCreationKey.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `_leftFrontLegColorIndex` | `public byte _leftFrontLegColorIndex` | 属性 |
| `_rightFrontLegColorIndex` | `public byte _rightFrontLegColorIndex` | 属性 |
| `_leftBackLegColorIndex` | `public byte _leftBackLegColorIndex` | 属性 |
| `_rightBackLegColorIndex` | `public byte _rightBackLegColorIndex` | 属性 |
| `MaterialIndex` | `public byte MaterialIndex` | 属性 |
| `MeshMultiplierIndex` | `public byte MeshMultiplierIndex` | 属性 |
| `MountCreationKey` | `public MountCreationKey(byte leftFrontLegColorIndex, byte rightFrontLegColorIndex, byte leftBackLegColorIndex, byte rightBackLegColorIndex, byte materialIndex, byte meshMultiplierIndex)` | 构造函数 |
| `FromString` | `public static MountCreationKey FromString(string str)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `GetRandomMountKeyString` | `public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)` | 方法 |
| `GetRandomMountKey` | `public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
