---
title: "WaitMenuOption"
description: "WaitMenuOption：TaleWorlds.CampaignSystem.GameMenus 的 public 类；公开成员 12 个（方法 5、属性 5、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WaitMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class WaitMenuOption`
**File:** `TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

WaitMenuOption 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs。它是一个 public 类，继承链为 WaitMenuOption。public/protected 成员共 12 个：5 方法、5 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WaitMenuOption 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameMenus`，继承链 WaitMenuOption。成员构成以方法为主（方法 5/12，属性 5/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameMenus/WaitMenuOption.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Priority` | `public int Priority` | 属性 |
| `GetConditionsHold` | `public bool GetConditionsHold(Game game, MapState mapState)` | 方法 |
| `Text` | `public TextObject Text` | 属性 |
| `IdString` | `public string IdString` | 属性 |
| `Tooltip` | `public string Tooltip` | 属性 |
| `IsLeave` | `public bool IsLeave` | 属性 |
| `RunConsequence` | `public void RunConsequence(Game game, MapState mapState)` | 方法 |
| `Deserialize` | `public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)` | 方法 |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args);` | 方法 |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args);` | 方法 |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args)` | 嵌套类型 |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GameMenu](../GameMenu/)
- [同命名空间 GameMenuCallbackManager](../GameMenuCallbackManager/)
- [同命名空间 GameMenuEventHandler](../GameMenuEventHandler/)
- [同命名空间 GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)
