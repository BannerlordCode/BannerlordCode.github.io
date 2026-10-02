---
title: "GameMenuOption"
description: "GameMenuOption：TaleWorlds.CampaignSystem.GameMenus 的 public 类；公开成员 24 个（方法 5、属性 13、字段 1）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuOption

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuOption`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

GameMenuOption 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs。它是一个 public 类，继承链为 GameMenuOption。public/protected 成员共 24 个：5 方法、13 属性、1 字段、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuOption 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameMenus`，继承链 GameMenuOption。成员构成以属性为主（属性 13/24，方法 5/24），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public GameMenu.MenuAndOptionType Type` | 属性 |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType` | 属性 |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData` | 属性 |
| `IdString` | `public string IdString` | 属性 |
| `Text` | `public TextObject Text` | 属性 |
| `Text2` | `public TextObject Text2` | 属性 |
| `Tooltip` | `public TextObject Tooltip` | 属性 |
| `IsLeave` | `public bool IsLeave` | 属性 |
| `IsRepeatable` | `public bool IsRepeatable` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `RelatedObject` | `public object RelatedObject` | 属性 |
| `GameMenuOption` | `public GameMenuOption(GameMenu.MenuAndOptionType type, string idString, TextObject text, TextObject text2, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, bool isRepeatable = false, object relatedObject = null)` | 构造函数 |
| `GetConditionsHold` | `public bool GetConditionsHold(Game game, MenuContext menuContext)` | 方法 |
| `RunConsequence` | `public void RunConsequence(MenuContext menuContext)` | 方法 |
| `SetEnable` | `public void SetEnable(bool isEnable)` | 方法 |
| `GameMenuOption.IssueQuestFlags[]IssueQuestFlagsValues` | `public static GameMenuOption.IssueQuestFlags[]IssueQuestFlagsValues` | 字段 |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args);` | 方法 |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args);` | 方法 |
| `LeaveType` | `public enum LeaveType` | 属性 |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | 属性 |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate(MenuCallbackArgs args)` | 嵌套类型 |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate(MenuCallbackArgs args)` | 嵌套类型 |
| `LeaveType` | `public enum LeaveType` | 嵌套类型 |
| `IssueQuestFlags` | `public enum IssueQuestFlags` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GameMenu](../GameMenu/)
- [同命名空间 GameMenuCallbackManager](../GameMenuCallbackManager/)
- [同命名空间 GameMenuEventHandler](../GameMenuEventHandler/)
- [同命名空间 GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)
