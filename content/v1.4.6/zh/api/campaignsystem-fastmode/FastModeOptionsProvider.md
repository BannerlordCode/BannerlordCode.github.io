---
title: "FastModeOptionsProvider"
description: "FastModeOptionsProvider：TaleWorlds.CampaignSystem.FastMode 的 public 类，继承 ICampaignOptionProvider；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs。"
---
# FastModeOptionsProvider

**Namespace:** `TaleWorlds.CampaignSystem.FastMode`
**Module:** `TaleWorlds.CampaignSystem.FastMode`
**Type:** `public class FastModeOptionsProvider : ICampaignOptionProvider`
**File:** `TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs`

## 概述

FastModeOptionsProvider 位于 TaleWorlds.CampaignSystem.FastMode 模块，源文件 TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs。它是一个 public 类，实现/继承 ICampaignOptionProvider，继承链为 FastModeOptionsProvider → ICampaignOptionProvider。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FastModeOptionsProvider 是 TaleWorlds.CampaignSystem.FastMode 的顶层类型，命名空间与模块目录一致，继承链 FastModeOptionsProvider → ICampaignOptionProvider。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。继承链上的 ICampaignOptionProvider 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<ICampaignOptionData>GetGameplayCampaignOptions()` | 方法 |
| `IEnumerable` | `public IEnumerable<ICampaignOptionData>GetCharacterCreationCampaignOptions()` | 方法 |

## 参见

- [↑ campaignsystem-fastmode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FastModeSubModule](../FastModeSubModule)
