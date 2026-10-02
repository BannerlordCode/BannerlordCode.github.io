---
title: "User32"
description: "TaleWorlds.TwoDimension.Standalone.Native.Windows.User32 —— 命名空间 TaleWorlds.TwoDimension.Standalone.Native.Windows 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# User32

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public static class User32`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs`

## 概述

`User32` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 下的类，声明于模块目录 `TaleWorlds.TwoDimension.Standalone` 的 `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs`（第 8 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 9 项，其中 9 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public int left;` — 字段，类型 int
- `public int top;` — 字段，类型 int
- `public int right;` — 字段，类型 int
- `public int bottom;` — 字段，类型 int
- `public int cbSize;` — 字段，类型 int
- `public User32.RECT rcMonitor;` — 字段，类型 User32.RECT
- `public User32.RECT rcWork;` — 字段，类型 User32.RECT
- `public uint dwFlags;` — 字段，类型 uint
- `public string szDevice;` — 字段，类型 string


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 9 条成员记录全部来自 `TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class User32` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`gui` API](../)
- [AlignmentAxis（同命名空间）](../AlignmentAxis)
- [AnimatedDropdownWidget（同命名空间）](../AnimatedDropdownWidget)
- [AnimatedNumberTextWidget（同命名空间）](../AnimatedNumberTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
