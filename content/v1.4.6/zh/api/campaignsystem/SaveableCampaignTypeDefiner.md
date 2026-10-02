---
title: "SaveableCampaignTypeDefiner"
description: "SaveableCampaignTypeDefiner：TaleWorlds.CampaignSystem 的 public 类，继承 SaveableTypeDefiner；公开成员 9 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs。"
---
# SaveableCampaignTypeDefiner

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SaveableCampaignTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs`

## 概述

SaveableCampaignTypeDefiner 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs。它是一个 public 类，实现/继承 SaveableTypeDefiner，继承链为 SaveableCampaignTypeDefiner → SaveableTypeDefiner。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveableCampaignTypeDefiner 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 SaveableCampaignTypeDefiner → SaveableTypeDefiner。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。继承链上的 SaveableTypeDefiner 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableCampaignTypeDefiner` | `public SaveableCampaignTypeDefiner() : base(330000)` | 构造函数 |
| `DefineClassTypes` | `protected override void DefineClassTypes()` | 方法 |
| `DefineStructTypes` | `protected override void DefineStructTypes()` | 方法 |
| `DefineEnumTypes` | `protected override void DefineEnumTypes()` | 方法 |
| `DefineInterfaceTypes` | `protected override void DefineInterfaceTypes()` | 方法 |
| `DefineGenericClassDefinitions` | `protected override void DefineGenericClassDefinitions()` | 方法 |
| `DefineConflictResolvers` | `protected override void DefineConflictResolvers()` | 方法 |
| `DefineGenericStructDefinitions` | `protected override void DefineGenericStructDefinitions()` | 方法 |
| `DefineContainerDefinitions` | `protected override void DefineContainerDefinitions()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
