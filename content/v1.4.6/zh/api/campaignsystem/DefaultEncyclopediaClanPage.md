---
title: "DefaultEncyclopediaClanPage"
description: "DefaultEncyclopediaClanPage：TaleWorlds.CampaignSystem 的 public 类，继承 EncyclopediaPage；公开成员 12 个（方法 9、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaClanPage.cs。"
---
# DefaultEncyclopediaClanPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncyclopediaClanPage : EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaClanPage.cs`

## 概述

DefaultEncyclopediaClanPage 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaClanPage.cs。它是一个 public 类，实现/继承 EncyclopediaPage，继承链为 DefaultEncyclopediaClanPage → EncyclopediaPage。public/protected 成员共 12 个：9 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultEncyclopediaClanPage 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Encyclopedia.Pages），继承链 DefaultEncyclopediaClanPage → EncyclopediaPage。成员构成以方法为主（方法 9/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaClanPage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultEncyclopediaClanPage` | `public DefaultEncyclopediaClanPage()` | 构造函数 |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaListItem>InitializeListItems()` | 方法 |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems()` | 方法 |
| `IEnumerable` | `protected override IEnumerable<EncyclopediaSortController>InitializeSortControllers()` | 方法 |
| `GetViewFullyQualifiedName` | `public override string GetViewFullyQualifiedName()` | 方法 |
| `GetName` | `public override TextObject GetName()` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText()` | 方法 |
| `GetStringID` | `public override string GetStringID()` | 方法 |
| `GetObject` | `public override MBObjectBase GetObject(string typeName, string stringID)` | 方法 |
| `IsValidEncyclopediaItem` | `public override bool IsValidEncyclopediaItem(object o)` | 方法 |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListClanComparer : EncyclopediaListItemComparerBase` | 属性 |
| `EncyclopediaListItemComparerBase` | `public abstract class EncyclopediaListClanComparer : EncyclopediaListItemComparerBase` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EncyclopediaPage](../EncyclopediaPage)
- [同命名空间 DefaultEncyclopediaConceptPage](../DefaultEncyclopediaConceptPage)
- [同命名空间 DefaultEncyclopediaFactionPage](../DefaultEncyclopediaFactionPage)
- [同命名空间 DefaultEncyclopediaHeroPage](../DefaultEncyclopediaHeroPage)
- [同命名空间 DefaultEncyclopediaSettlementPage](../DefaultEncyclopediaSettlementPage)
