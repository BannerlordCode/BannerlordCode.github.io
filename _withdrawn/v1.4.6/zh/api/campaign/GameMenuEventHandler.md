---
title: "GameMenuEventHandler"
description: "GameMenuEventHandler：TaleWorlds.CampaignSystem.GameMenus 的 public 类，继承 Attribute；公开成员 6 个（方法 0、属性 4、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuEventHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuEventHandler : Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

GameMenuEventHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs。它是一个 public 类，实现/继承 Attribute，继承链为 GameMenuEventHandler → Attribute。public/protected 成员共 6 个：4 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuEventHandler 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameMenus`，继承链 GameMenuEventHandler → Attribute。成员构成以属性为主（属性 4/6，方法 0/6），对外主要以状态读取接口暴露。继承链上的 Attribute 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuId` | `public string MenuId` | 属性 |
| `MenuOptionId` | `public string MenuOptionId` | 属性 |
| `Type` | `public GameMenuEventHandler.EventType Type` | 属性 |
| `GameMenuEventHandler` | `public GameMenuEventHandler(string menuId, string menuOptionId, GameMenuEventHandler.EventType type)` | 构造函数 |
| `EventType` | `public enum EventType` | 属性 |
| `EventType` | `public enum EventType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GameMenu](../GameMenu/)
- [同命名空间 GameMenuCallbackManager](../GameMenuCallbackManager/)
- [同命名空间 GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)
- [同命名空间 GameMenuInitDelegate](../GameMenuInitDelegate/)
