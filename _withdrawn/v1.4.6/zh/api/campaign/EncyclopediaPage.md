---
title: "EncyclopediaPage"
description: "EncyclopediaPage：TaleWorlds.CampaignSystem.Encyclopedia 的 public 类；公开成员 20 个（方法 17、属性 2、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaPage

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

EncyclopediaPage 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs。它是一个 public 类（abstract），继承链为 EncyclopediaPage。public/protected 成员共 20 个：17 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaPage 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Encyclopedia`，继承链 EncyclopediaPage。成员构成以方法为主（方法 17/20，属性 2/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaPage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `protected abstract IEnumerable<EncyclopediaListItem>InitializeListItems();` | 方法 |
| `IEnumerable` | `protected abstract IEnumerable<EncyclopediaFilterGroup>InitializeFilterItems();` | 方法 |
| `IEnumerable` | `protected abstract IEnumerable<EncyclopediaSortController>InitializeSortControllers();` | 方法 |
| `HomePageOrderIndex` | `public int HomePageOrderIndex` | 属性 |
| `Parent` | `public EncyclopediaPage Parent` | 属性 |
| `EncyclopediaPage` | `public EncyclopediaPage()` | 构造函数 |
| `IsRelevant` | `public virtual bool IsRelevant()` | 方法 |
| `HasIdentifierType` | `public bool HasIdentifierType(Type identifierType)` | 方法 |
| `GetIdentifier` | `public string GetIdentifier(Type identifierType)` | 方法 |
| `string[]GetIdentifierNames` | `public string[]GetIdentifierNames()` | 方法 |
| `IsFiltered` | `public bool IsFiltered(object o)` | 方法 |
| `GetViewFullyQualifiedName` | `public virtual string GetViewFullyQualifiedName()` | 方法 |
| `GetStringID` | `public virtual string GetStringID()` | 方法 |
| `GetName` | `public virtual TextObject GetName()` | 方法 |
| `GetObject` | `public virtual MBObjectBase GetObject(string typeName, string stringID)` | 方法 |
| `IsValidEncyclopediaItem` | `public virtual bool IsValidEncyclopediaItem(object o)` | 方法 |
| `GetDescriptionText` | `public virtual TextObject GetDescriptionText()` | 方法 |
| `IEnumerable` | `public IEnumerable<EncyclopediaListItem>GetListItems()` | 方法 |
| `IEnumerable` | `public IEnumerable<EncyclopediaFilterGroup>GetFilterItems()` | 方法 |
| `IEnumerable` | `public IEnumerable<EncyclopediaSortController>GetSortControllers()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EncyclopediaFilterGroup](../EncyclopediaFilterGroup/)
- [同命名空间 EncyclopediaFilterItem](../EncyclopediaFilterItem/)
- [同命名空间 EncyclopediaListItem](../EncyclopediaListItem/)
- [同命名空间 EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/)
