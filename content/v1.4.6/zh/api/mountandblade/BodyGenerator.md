---
title: "BodyGenerator"
description: "BodyGenerator：TaleWorlds.MountAndBlade 的 public 类；公开成员 6 个（方法 3、属性 1、字段 1）。源文件 TaleWorlds.MountAndBlade/BodyGenerator.cs。"
---
# BodyGenerator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BodyGenerator`
**File:** `TaleWorlds.MountAndBlade/BodyGenerator.cs`

## 概述

BodyGenerator 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BodyGenerator.cs。它是一个 public 类，继承链为 BodyGenerator。public/protected 成员共 6 个：3 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BodyGenerator 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BodyGenerator。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BodyGenerator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character` | 属性 |
| `BodyGenerator` | `public BodyGenerator(BasicCharacterObject troop)` | 构造函数 |
| `InitBodyGenerator` | `public FaceGenerationParams InitBodyGenerator(bool isDressed)` | 方法 |
| `RefreshFace` | `public void RefreshFace(FaceGenerationParams faceGenerationParams, bool hasEquipment)` | 方法 |
| `SaveCurrentCharacter` | `public void SaveCurrentCharacter()` | 方法 |
| `FaceGenTeethAnimationName` | `public const string FaceGenTeethAnimationName` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
