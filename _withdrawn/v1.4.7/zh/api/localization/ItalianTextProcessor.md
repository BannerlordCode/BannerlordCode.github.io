---
title: "ItalianTextProcessor"
description: "TaleWorlds.Localization.TextProcessor.LanguageProcessors.ItalianTextProcessor —— 命名空间 TaleWorlds.Localization.TextProcessor.LanguageProcessors 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# ItalianTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class ItalianTextProcessor : LanguageSpecificTextProcessor`  
**Base:** `LanguageSpecificTextProcessor`  
**Source:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/ItalianTextProcessor.cs`

## 概述

`ItalianTextProcessor` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.Localization.TextProcessor.LanguageProcessors` 下的类，声明于模块目录 `TaleWorlds.Localization` 的 `TaleWorlds.Localization/TextProcessor/LanguageProcessors/ItalianTextProcessor.cs`（第 10 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `LanguageSpecificTextProcessor`；解析到的成员共 71 项，其中 15 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public const string MasculineSingular = ".MS";` — 字段，类型 string
- `public const string MasculinePlural = ".MP";` — 字段，类型 string
- `public const string FeminineSingular = ".FS";` — 字段，类型 string
- `public const string FemininePlural = ".FP";` — 字段，类型 string
- `public const string MaleNoun = ".MN";` — 字段，类型 string
- `public const string FemaleNoun = ".FN";` — 字段，类型 string
- `public static readonly List<string> TokenList = new List<string> { ".MS", ".MP", ".FS", ".FP", ".MN", ".FN" };` — 字段，类型 List<string>
- `public const string DefiniteArticle = ".l";` — 字段，类型 string
- `public const string IndefiniteArticle = ".un";` — 字段，类型 string
- `public const string OfPreposition = ".di";` — 字段，类型 string
- `public const string ToPreposition = ".a";` — 字段，类型 string
- `public const string FromPreposition = ".da";` — 字段，类型 string
- `public const string OnPreposition = ".su";` — 字段，类型 string
- `public const string InPreposition = ".in";` — 字段，类型 string
- `public static readonly List<string> TokenList = new List<string> { ".l", ".un", ".di", ".a", ".da", ".su", ".in" };` — 字段，类型 List<string>


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 15 条成员记录全部来自 `TaleWorlds.Localization/TextProcessor/LanguageProcessors/ItalianTextProcessor.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class ItalianTextProcessor : LanguageSpecificTextProcessor` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`localization` API](../)
- [LanguageSpecificTextProcessor（基类）](../LanguageSpecificTextProcessor)
- [ArithmeticExpression（同命名空间）](../ArithmeticExpression)
- [ArithmeticOperation（同命名空间）](../ArithmeticOperation)
- [ArrayReference（同命名空间）](../ArrayReference)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
