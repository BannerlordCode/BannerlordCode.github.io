---
title: "TooltipHelper"
description: "战斗上下文 tooltip 的 id 拼接器：把 MapEvent / PlayerSiege 的上下文翻译成 str_simulation_tooltip 系列本地化 id。"
---

# TooltipHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TooltipHelper`
**Base:** 无（普通类，但全部成员都是 static，实例化没有意义）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/TooltipHelper.cs`

## 概述

本类只解决「把战斗上下文翻译成一条本地化 tooltip 的 id」——它不计算力量对比，只拼 id 字符串并交给 `GameTexts.FindText`。真源是 `MapEvent.PowerCalculationContext` / `PlayerSiege.PlayerSide` 与本地化数据里的 `str_simulation_tooltip*`。两个方法一个依赖 `MapEvent.PlayerMapEvent`、一个依赖 `PlayerSiege.PlayerSide`，都只在对应场景里可用。

## 心智模型

把 TooltipHelper 想成 tooltip 的「id 拼接器」：`MapEvent.PlayerMapEvent` 提供战斗上下文，本类负责把它翻译成 `str_simulation_tooltip` 系列本地化 id，再交给 `GameTexts.FindText` 解析成当前语言的文本。关键设计决策是**文本 id 是字符串拼接出来的**——拼出来的 id 必须在本地化数据里存在，否则 `FindText` 拿到的是缺 id 的占位文本。类声明是 `public class` 而不是 `public static class`，但**没有任何实例成员**，实例化毫无意义。

## 怎么用

### 怎么拿到它

虽然类声明是 `public class`（不是 `static`），但全部成员都是 `static`，直接 `TooltipHelper.方法名(...)` 调用即可，不需要实例化。

### 典型用法

- 要获取「派兵力量对比」提示文本时，用 `GetSendTroopsPowerContextTooltipForMapEvent()`。
- 要获取围城提示文本时，用 `GetSendTroopsPowerContextTooltipForSiege()`。
- 两个方法都只在对应场景里可用——不在战斗中时 `MapEvent.PlayerMapEvent` 为 null 会 NRE。

### 最容易踩的坑

- **类声明是 `public class` 而不是 `public static class`**（第 10 行）⇒ 它可以被 `new`，但**没有任何实例成员**，实例化毫无意义。
- `MapEvent.PlayerMapEvent` 为 null（不在战斗中）时第 16 行直接 NRE。
- 文本 id 是**字符串拼接**出来的（第 17/20 行）⇒ 拼出来的 id 必须在本地化数据里存在，否则 `FindText` 拿到的是缺 id 的占位文本。
- 两个方法一个依赖 `MapEvent.PlayerMapEvent`、一个依赖 `PlayerSiege.PlayerSide`，**都只在对应场景里可用**。

## 关键成员

- `public static TextObject GetSendTroopsPowerContextTooltipForMapEvent()` —— 造「派兵力量对比」提示文本：`MapEvent.PlayerMapEvent` → `SimulationContext` → 拼上 `"Attacker"` 或 `"Defender"` → `GameTexts.FindText("str_simulation_tooltip", text)`。`TooltipHelper.cs:13`
- `public static TextObject GetSendTroopsPowerContextTooltipForSiege()` —— 一行：`GameTexts.FindText("str_simulation_tooltip", (PlayerSiege.PlayerSide == BattleSideEnum.Attacker) ? "SiegeAttacker" : "SiegeDefender")`。`TooltipHelper.cs:26`

## 真实示例

```csharp
// 获取派兵力量对比提示文本
TextObject tooltip = TooltipHelper.GetSendTroopsPowerContextTooltipForMapEvent();
// 获取围城提示文本
TextObject siegeTooltip = TooltipHelper.GetSendTroopsPowerContextTooltipForSiege();
Debug.Print($"tooltip={tooltip} siegeTooltip={siegeTooltip} game={Game.Current != null}");
```

## 参见

- ↔ [TextObject](../../localization/TextObject) —— 返回类型；`GameTexts.FindText` 的产物
- ↔ [LocalizedTextManager](../../localization/LocalizedTextManager) —— `str_simulation_tooltip` 这类 id 的本地化解析

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
