---
title: "PersuasionHelper"
description: "说服系统的静态工具：获取默认反应文本，以及一个名为 ShowSuccess 但实际是空实现的方法。"
---

# PersuasionHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class PersuasionHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## 概述

本类有两个方法：`GetDefaultPersuasionOptionReaction` 按结果给默认反应文本，`ShowSuccess` 是一个**空实现**——名字叫 `ShowSuccess`，但方法体只有 `return TextObject.GetEmpty();`，两个参数在方法体里完全没有被使用。要显示说服成功，必须自己造 `TextObject` 并走 `InformationManager` / 对话系统。

## 心智模型

把 PersuasionHelper 想成说服系统的「半成品」：`GetDefaultPersuasionOptionReaction` 是完整的——它按 `PersuasionOptionResult` 给默认反应文本，但 `Success` 落进 `else` 里**随机**取一句（语义上「成功」却回你「我明白了」或「你可能是对的」）。`ShowSuccess` 是空实现，按名字猜行为会错。`else` 用的是**全局 `MBRandom.RandomFloat`**（不可复现），与 `IncidentHelper` 的 seeded 随机正好相反。

## 怎么用

### 怎么拿到它

静态类，直接 `PersuasionHelper.方法名(...)` 调用。

### 典型用法

- 要获取默认反应文本时，用 `GetDefaultPersuasionOptionReaction(optionResult)`。
- `ShowSuccess` 是空实现，不要调用它——要显示说服成功必须自己造 `TextObject`。

### 最容易踩的坑

- `ShowSuccess` 是**空实现**：方法体只有 `return TextObject.GetEmpty();`，两个参数 `optionArgs` 与 `showToPlayer` **在方法体里完全没有被使用**。名字叫 `ShowSuccess`，但它**既不显示任何东西、也不返回有内容的文本**。
- `GetDefaultPersuasionOptionReaction` 的 `Failure` 与 `Miss` **共用同一句**。
- **没有 `Success` 的专门分支**——`Success` 落进 `else` 里**随机**取一句（语义上「成功」却回你「我明白了」或「你可能是对的」）。
- `else` 用的是**全局 `MBRandom.RandomFloat`**（不可复现），与 `IncidentHelper` 的 seeded 随机正好相反。

## 关键成员

- `public static TextObject ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)` —— **空实现**：方法体只有 `return TextObject.GetEmpty();`，两个参数完全没有被使用。按名字猜行为会错。`PersuasionHelper.cs:12`
- `public static TextObject GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)` —— 按结果给默认反应文本：`CriticalSuccess` → 一句；`Failure` 或 `Miss` → 同一句；`CriticalFailure` → 一句；其他（含 `Success`）→ 随机二选一。`PersuasionHelper.cs:18`

## 真实示例

```csharp
// 获取默认反应文本
PersuasionOptionResult result = PersuasionOptionResult.CriticalSuccess;
TextObject reaction = PersuasionHelper.GetDefaultPersuasionOptionReaction(result);
// ShowSuccess 是空实现，返回空 TextObject
TextObject success = PersuasionHelper.ShowSuccess(null, false);
Debug.Print($"reaction={reaction} success={success} hero={Hero.MainHero.Name}");
```

## 参见

- ↔ [TextObject](../../localization/TextObject) —— 本类两个方法返回的都是 `TextObject`
- ↔ [LocalizedTextManager](../../localization/LocalizedTextManager) —— `{=yNSqDwse}` 这类 id 怎么被翻成当前语言

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
