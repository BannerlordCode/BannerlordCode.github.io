---
title: "SaveHandler"
description: "SaveHandler：TaleWorlds.CampaignSystem 的 public 类；公开成员 11 个（方法 6、属性 4、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/SaveHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveHandler

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SaveHandler`
**File:** `TaleWorlds.CampaignSystem/SaveHandler.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

SaveHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SaveHandler.cs。它是一个 public 类，继承链为 SaveHandler。public/protected 成员共 11 个：6 方法、4 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveHandler 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 SaveHandler。成员构成以方法为主（方法 6/11，属性 4/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SaveHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier` | 属性 |
| `IsSaving` | `public bool IsSaving` | 属性 |
| `IronmanModSaveName` | `public string IronmanModSaveName` | 属性 |
| `AutoSaveInterval` | `public int AutoSaveInterval` | 属性 |
| `QuickSaveCurrentGame` | `public void QuickSaveCurrentGame()` | 方法 |
| `SaveAs` | `public void SaveAs(string saveName)` | 方法 |
| `CampaignTick` | `public void CampaignTick()` | 方法 |
| `SignalAutoSave` | `public void SignalAutoSave()` | 方法 |
| `ForceAutoSave` | `public void ForceAutoSave()` | 方法 |
| `GetSaveMetaData` | `public CampaignSaveMetaDataArgs GetSaveMetaData()` | 方法 |
| `SaveMode` | `public enum SaveMode` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
