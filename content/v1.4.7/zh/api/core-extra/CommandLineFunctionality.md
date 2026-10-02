---
title: "CommandLineFunctionality"
description: "TaleWorlds.Library.CommandLineFunctionality —— 命名空间 TaleWorlds.Library 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# CommandLineFunctionality

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public static class CommandLineFunctionality`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.Library/CommandLineFunctionality.cs`

## 概述

`CommandLineFunctionality` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.Library` 下的类，声明于模块目录 `TaleWorlds.Library` 的 `TaleWorlds.Library/CommandLineFunctionality.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 23 项，其中 7 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public CommandLineFunction(Func<List<string>, string> commandlinefunc)` — 方法，1 个参数，返回 C
- `public string Call(List<string> objects)` — 方法，1 个参数，返回 string
- `public Func<List<string>, string> CommandLineFunc;` — 字段，类型 Func<List<string>, string>
- `public List<CommandLineFunctionality.CommandLineFunction> Children;` — 字段，类型 List<CommandLineFunctionality.CommandLineFunction>
- `public CommandLineArgumentFunction(string name, string groupname)` — 方法，2 个参数，返回 C
- `public string Name;` — 字段，类型 string
- `public string GroupName;` — 字段，类型 string


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 7 条成员记录全部来自 `TaleWorlds.Library/CommandLineFunctionality.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class CommandLineFunctionality` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`core-extra` API](../)
- [BannerHelper（同命名空间）](../BannerHelper)
- [BannerImageIdentifier（同命名空间）](../BannerImageIdentifier)
- [CallbackDebugTool（同命名空间）](../CallbackDebugTool)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
