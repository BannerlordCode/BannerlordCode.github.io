---
title: "EncyclopediaManager"
description: "EncyclopediaManager：TaleWorlds.CampaignSystem.Encyclopedia 的 public 类；公开成员 11 个（方法 7、属性 1、字段 3）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaManager

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EncyclopediaManager`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

EncyclopediaManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs。它是一个 public 类，继承链为 EncyclopediaManager。public/protected 成员共 11 个：7 方法、1 属性、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaManager 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Encyclopedia`，继承链 EncyclopediaManager。成员构成以方法为主（方法 7/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker` | 属性 |
| `CreateEncyclopediaPages` | `public void CreateEncyclopediaPages()` | 方法 |
| `IEnumerable` | `public IEnumerable<EncyclopediaPage>GetEncyclopediaPages()` | 方法 |
| `GetPageOf` | `public EncyclopediaPage GetPageOf(Type type)` | 方法 |
| `GetIdentifier` | `public string GetIdentifier(Type type)` | 方法 |
| `GoToLink` | `public void GoToLink(string pageType, string stringID)` | 方法 |
| `GoToLink` | `public void GoToLink(string link)` | 方法 |
| `SetLinkCallback` | `public void SetLinkCallback(Action<string, object>ExecuteLink)` | 方法 |
| `HOME_ID` | `public const string HOME_ID` | 字段 |
| `LIST_PAGE_ID` | `public const string LIST_PAGE_ID` | 字段 |
| `LAST_PAGE_ID` | `public const string LAST_PAGE_ID` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EncyclopediaFilterGroup](../EncyclopediaFilterGroup/)
- [同命名空间 EncyclopediaFilterItem](../EncyclopediaFilterItem/)
- [同命名空间 EncyclopediaListItem](../EncyclopediaListItem/)
- [同命名空间 EncyclopediaListItemComparerBase](../EncyclopediaListItemComparerBase/)
