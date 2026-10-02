---
title: "DXGI"
description: "TaleWorlds.TwoDimension.Standalone.Native.Windows.DXGI —— 命名空间 TaleWorlds.TwoDimension.Standalone.Native.Windows 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# DXGI

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public static class DXGI`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`

## 概述

`DXGI` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 下的类，声明于模块目录 `TaleWorlds.TwoDimension.Standalone` 的 `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`（第 7 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 48 项，其中 21 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public string Description;` — 字段，类型 string
- `public uint VendorId;` — 字段，类型 uint
- `public uint DeviceId;` — 字段，类型 uint
- `public uint SubSysId;` — 字段，类型 uint
- `public uint Revision;` — 字段，类型 uint
- `public UIntPtr DedicatedVideoMemory;` — 字段，类型 UIntPtr
- `public UIntPtr DedicatedSystemMemory;` — 字段，类型 UIntPtr
- `public UIntPtr SharedSystemMemory;` — 字段，类型 UIntPtr
- `public UIntPtr AdapterLuid;` — 字段，类型 UIntPtr
- `public string DeviceName;` — 字段，类型 string
- `public DXGI.RECT DesktopCoordinates;` — 字段，类型 DXGI.RECT
- `public bool AttachedToDesktop;` — 字段，类型 bool
- `public uint Rotation;` — 字段，类型 uint
- `public IntPtr Monitor;` — 字段，类型 IntPtr
- `public override bool Equals(object o)` — 方法，1 个参数，返回 bool
- `public override int GetHashCode()` — 方法，0 个参数，返回 int
- `public static bool operator ==(DXGI.RECT r1, DXGI.RECT r2)` — 字段，类型 bool
- `public int left;` — 字段，类型 int
- `public int top;` — 字段，类型 int
- `public int right;` — 字段，类型 int
- `public int bottom;` — 字段，类型 int


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 21 条成员记录全部来自 `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class DXGI` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`gui` API](../)
- [AlignmentAxis（同命名空间）](../AlignmentAxis)
- [AnimatedDropdownWidget（同命名空间）](../AnimatedDropdownWidget)
- [AnimatedNumberTextWidget（同命名空间）](../AnimatedNumberTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
