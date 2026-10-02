---
title: "D3D11Native"
description: "D3D11Native 的自动生成类参考。"
---
# D3D11Native

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public static class D3D11Native `
**Base:** System.Object
**Source:** TaleWorlds.TwoDimension.Standalone/Native/Windows/D3D11Native.cs

## 概述

`D3D11Native` 的自动生成类参考页面。声明来自 `TaleWorlds.TwoDimension.Standalone/Native/Windows/D3D11Native.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### D3D11CreateDevice
`public static extern int D3D11CreateDevice(IntPtr pAdapter,int driverType,IntPtr software,uint flags,[MarshalAs(UnmanagedType.LPArray,SizeParamIndex = 5)] int[] pFeatureLevels,int featureLevelCount,int sdkVersion,out IntPtr ppDevice,out int pFeatureLevel,out IntPtr ppImmediateContext)`

### D3D11CreateDeviceAndSwapChain
`public static extern int D3D11CreateDeviceAndSwapChain(IntPtr pAdapter,int driverType,IntPtr software,uint flags,[MarshalAs(UnmanagedType.LPArray,SizeParamIndex = 5)] int[] pFeatureLevels,int featureLevelCount,int sdkVersion,ref DXGI_SWAP_CHAIN_DESC pSwapChainDesc,out IntPtr ppSwapChain,out IntPtr ppDevice,out int pFeatureLevel,out IntPtr ppImmediateContext)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
