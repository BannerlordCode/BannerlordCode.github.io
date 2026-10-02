---
title: "D3DCompiler"
description: "D3DCompiler 的自动生成类参考。"
---
# D3DCompiler

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public static class D3DCompiler `
**Base:** System.Object
**Source:** TaleWorlds.TwoDimension.Standalone/Native/Windows/D3DCompiler.cs

## 概述

`D3DCompiler` 的自动生成类参考页面。声明来自 `TaleWorlds.TwoDimension.Standalone/Native/Windows/D3DCompiler.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### D3DCompile
`public static extern int D3DCompile(IntPtr pSrcData,IntPtr srcDataSize,[MarshalAs(UnmanagedType.LPStr)] string pSourceName,IntPtr pDefines,IntPtr pInclude,[MarshalAs(UnmanagedType.LPStr)] string pEntrypoint,[MarshalAs(UnmanagedType.LPStr)] string pTarget,uint Flags1,uint Flags2,out IntPtr ppCode,out IntPtr ppErrorMsgs)`

### GetErrorMessage
`public static string GetErrorMessage(IntPtr ppErrorMsgs) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
