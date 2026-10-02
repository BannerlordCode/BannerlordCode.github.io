---
title: "DXGI"
description: "DXGI：TaleWorlds.TwoDimension.Standalone.Native.Windows 的 public 类；公开成员 15 个（方法 1、属性 6、字段 2）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DXGI

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class DXGI`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

DXGI 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs。它是一个 public 类，继承链为 DXGI。public/protected 成员共 15 个：1 方法、6 属性、2 字段、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DXGI 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，继承链 DXGI。成员构成以属性为主（属性 6/15，方法 1/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateDXGIFactory` | `public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory);` | 方法 |
| `IID_IDXGIAdapter` | `public static Guid IID_IDXGIAdapter` | 字段 |
| `IID_IDXGIFactory` | `public static Guid IID_IDXGIFactory` | 字段 |
| `IDXGIFactory` | `public interface IDXGIFactory` | 属性 |
| `IDXGIAdapter` | `public interface IDXGIAdapter` | 属性 |
| `IDXGIOutput` | `public interface IDXGIOutput` | 属性 |
| `DXGI_ADAPTER_DESC` | `public struct DXGI_ADAPTER_DESC` | 属性 |
| `DXGI_OUTPUT_DESC` | `public struct DXGI_OUTPUT_DESC` | 属性 |
| `RECT` | `public struct RECT` | 属性 |
| `IDXGIFactory` | `public interface IDXGIFactory` | 嵌套类型 |
| `IDXGIAdapter` | `public interface IDXGIAdapter` | 嵌套类型 |
| `IDXGIOutput` | `public interface IDXGIOutput` | 嵌套类型 |
| `DXGI_ADAPTER_DESC` | `public struct DXGI_ADAPTER_DESC` | 嵌套类型 |
| `DXGI_OUTPUT_DESC` | `public struct DXGI_OUTPUT_DESC` | 嵌套类型 |
| `RECT` | `public struct RECT` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlphaFormatFlags](../AlphaFormatFlags/)
- [同命名空间 BitmapInfo](../BitmapInfo/)
- [同命名空间 BitmapInfoHeader](../BitmapInfoHeader/)
- [同命名空间 BlendFunction](../BlendFunction/)
