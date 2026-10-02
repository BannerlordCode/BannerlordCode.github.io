---
title: "D3D11Device"
description: "D3D11Device 的自动生成类参考。"
---
# D3D11Device

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public static class D3D11Device `
**Base:** System.Object
**Source:** TaleWorlds.TwoDimension.Standalone/Native/Windows/D3D11Device.cs

## 概述

`D3D11Device` 的自动生成类参考页面。声明来自 `TaleWorlds.TwoDimension.Standalone/Native/Windows/D3D11Device.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateBuffer
`public static int CreateBuffer(IntPtr device,ref D3D11_BUFFER_DESC desc,out IntPtr buffer) `

### CreateTexture2D
`public static int CreateTexture2D(IntPtr device,ref D3D11_TEXTURE2D_DESC desc,ref D3D11_SUBRESOURCE_DATA initialData,out IntPtr texture) `

### CreateTexture2DEmpty
`public static int CreateTexture2DEmpty(IntPtr device,ref D3D11_TEXTURE2D_DESC desc,out IntPtr texture) `

### CreateShaderResourceView
`public static int CreateShaderResourceView(IntPtr device,IntPtr resource,out IntPtr srv) `

### CreateRenderTargetView
`public static int CreateRenderTargetView(IntPtr device,IntPtr resource,out IntPtr rtv) `

### CreateVertexShader
`public static int CreateVertexShader(IntPtr device,IntPtr bytecode,int bytecodeLen,out IntPtr vs) `

### CreatePixelShader
`public static int CreatePixelShader(IntPtr device,IntPtr bytecode,int bytecodeLen,out IntPtr ps) `

### CreateInputLayout
`public static int CreateInputLayout(IntPtr device,D3D11_INPUT_ELEMENT_DESC[] elements,IntPtr vsBytecode,int vsLen,out IntPtr inputLayout) `

### CreateBlendState
`public static int CreateBlendState(IntPtr device,ref D3D11_BLEND_DESC desc,out IntPtr blendState) `

### CreateRasterizerState
`public static int CreateRasterizerState(IntPtr device,ref D3D11_RASTERIZER_DESC desc,out IntPtr rasterizerState) `

### CreateSamplerState
`public static int CreateSamplerState(IntPtr device,ref D3D11_SAMPLER_DESC desc,out IntPtr samplerState) `

### GetDeviceRemovedReason
`public static int GetDeviceRemovedReason(IntPtr device) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
