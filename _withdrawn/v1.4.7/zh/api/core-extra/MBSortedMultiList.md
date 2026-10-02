---
title: "MBSortedMultiList"
description: "TaleWorlds.Library.MBSortedMultiList —— 命名空间 TaleWorlds.Library 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MBSortedMultiList

**Namespace:** `TaleWorlds.Library`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`  
**Base:** `IReadOnlyList`  
**Source:** `TaleWorlds.Library/MBSortedMultiList.cs`

## 概述

`MBSortedMultiList` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.Library` 下的类，声明于模块目录 `TaleWorlds.Library` 的 `TaleWorlds.Library/MBSortedMultiList.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `IReadOnlyList`；解析到的成员共 83 项，其中 8 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public SMLValueEnumerator(List<KeyValuePair<TKey, TValue>> list)` — 方法，1 个参数，返回 S
- `public bool MoveNext()` — 方法，0 个参数，返回 bool
- `public void Dispose()` — 方法，0 个参数，返回 void
- `public void Reset()` — 方法，0 个参数，返回 void
- `public SMLKeyValueEnumerator(List<KeyValuePair<TKey, TValue>> list, TKey key, int startIndex)` — 方法，3 个参数，返回 S
- `public bool MoveNext()` — 方法，0 个参数，返回 bool
- `public void Dispose()` — 方法，0 个参数，返回 void
- `public void Reset()` — 方法，0 个参数，返回 void


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 8 条成员记录全部来自 `TaleWorlds.Library/MBSortedMultiList.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`core-extra` API](../)
- [BannerHelper（同命名空间）](../BannerHelper)
- [BannerImageIdentifier（同命名空间）](../BannerImageIdentifier)
- [CallbackDebugTool（同命名空间）](../CallbackDebugTool)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
