---
title: "BannerBearerCondition"
description: "BannerBearerCondition：TaleWorlds.MountAndBlade 的 public 类，继承 MPPerkCondition；公开成员 7 个（方法 3、属性 2、字段 1）。源文件 TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs。"
---
# BannerBearerCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BannerBearerCondition : MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs`

## 概述

BannerBearerCondition 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs。它是一个 public 类，实现/继承 MPPerkCondition，继承链为 BannerBearerCondition → MPPerkCondition。public/protected 成员共 7 个：3 方法、2 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerBearerCondition 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions），继承链 BannerBearerCondition → MPPerkCondition。成员构成以方法为主（方法 3/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Network/Gameplay/Perks/Conditions/BannerBearerCondition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags` | 属性 |
| `IsPeerCondition` | `public override bool IsPeerCondition` | 属性 |
| `BannerBearerCondition` | `protected BannerBearerCondition()` | 构造函数 |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | 方法 |
| `Check` | `public override bool Check(MissionPeer peer)` | 方法 |
| `Check` | `public override bool Check(Agent agent)` | 方法 |
| `StringType` | `protected static string StringType` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MPPerkCondition](../MPPerkCondition)
