---
title: "SpriteData"
description: "TaleWorlds.TwoDimension.SpriteData —— 命名空间 TaleWorlds.TwoDimension 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SpriteData

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public class SpriteData`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.TwoDimension/SpriteData.cs`

## 概述

`SpriteData` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.TwoDimension` 下的类，声明于模块目录 `TaleWorlds.TwoDimension` 的 `TaleWorlds.TwoDimension/SpriteData.cs`（第 10 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 40 项，其中 3 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public Dictionary<string, SpritePart> SpritePartNames;` — 字段，类型 Dictionary<string, SpritePart>
- `public Dictionary<string, Sprite> SpriteNames;` — 字段，类型 Dictionary<string, Sprite>
- `public Dictionary<string, SpriteCategory> SpriteCategories;` — 字段，类型 Dictionary<string, SpriteCategory>


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 3 条成员记录全部来自 `TaleWorlds.TwoDimension/SpriteData.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class SpriteData` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`gui` API](../)
- [SpriteCategory（成员类型）](../SpriteCategory)
- [AlignmentAxis（同命名空间）](../AlignmentAxis)
- [AlphaFormatFlags（同命名空间）](../AlphaFormatFlags)
- [AnimatedDropdownWidget（同命名空间）](../AnimatedDropdownWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
