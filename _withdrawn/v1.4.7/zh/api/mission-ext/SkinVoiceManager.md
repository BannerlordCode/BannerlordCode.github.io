---
title: "SkinVoiceManager"
description: "TaleWorlds.MountAndBlade.SkinVoiceManager —— 命名空间 TaleWorlds.MountAndBlade 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SkinVoiceManager

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class SkinVoiceManager`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

## 概述

`SkinVoiceManager` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/SkinVoiceManager.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 69 项，其中 67 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public string TypeID { get; private set; }` — 属性，get/set，类型 string
- `public int Index { get; private set; }` — 属性，get/set，类型 int
- `public SkinVoiceType(string typeID)` — 方法，1 个参数，返回 S
- `public TextObject GetName()` — 方法，0 个参数，返回 TextObject
- `public static readonly SkinVoiceManager.SkinVoiceType Grunt = new SkinVoiceManager.SkinVoiceType("Grunt");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Jump = new SkinVoiceManager.SkinVoiceType("Jump");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Yell = new SkinVoiceManager.SkinVoiceType("Yell");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Pain = new SkinVoiceManager.SkinVoiceType("Pain");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Death = new SkinVoiceManager.SkinVoiceType("Death");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Stun = new SkinVoiceManager.SkinVoiceType("Stun");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Fear = new SkinVoiceManager.SkinVoiceType("Fear");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Climb = new SkinVoiceManager.SkinVoiceType("Climb");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Focus = new SkinVoiceManager.SkinVoiceType("Focus");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Debacle = new SkinVoiceManager.SkinVoiceType("Debacle");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Victory = new SkinVoiceManager.SkinVoiceType("Victory");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType HorseStop = new SkinVoiceManager.SkinVoiceType("HorseStop");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType HorseRally = new SkinVoiceManager.SkinVoiceType("HorseRally");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Drown = new SkinVoiceManager.SkinVoiceType("Drown");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Infantry = new SkinVoiceManager.SkinVoiceType("Infantry");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Cavalry = new SkinVoiceManager.SkinVoiceType("Cavalry");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Archers = new SkinVoiceManager.SkinVoiceType("Archers");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType HorseArchers = new SkinVoiceManager.SkinVoiceType("HorseArchers");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Everyone = new SkinVoiceManager.SkinVoiceType("Everyone");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType MixedFormation = new SkinVoiceManager.SkinVoiceType("Mixed");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Move = new SkinVoiceManager.SkinVoiceType("Move");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Follow = new SkinVoiceManager.SkinVoiceType("Follow");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Charge = new SkinVoiceManager.SkinVoiceType("Charge");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Advance = new SkinVoiceManager.SkinVoiceType("Advance");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType FallBack = new SkinVoiceManager.SkinVoiceType("FallBack");` — 字段，类型 SkinVoiceManager.SkinVoiceType
- `public static readonly SkinVoiceManager.SkinVoiceType Stop = new SkinVoiceManager.SkinVoiceType("Stop");` — 字段，类型 SkinVoiceManager.SkinVoiceType

- 其余 37 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 67 条成员记录全部来自 `TaleWorlds.MountAndBlade/SkinVoiceManager.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class SkinVoiceManager` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
