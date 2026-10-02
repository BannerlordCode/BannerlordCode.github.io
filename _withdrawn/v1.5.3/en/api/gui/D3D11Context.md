---
title: "D3D11Context"
description: "Auto-generated class reference for D3D11Context."
---
# D3D11Context

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public static class D3D11Context `
**Base:** System.Object
**Source:** TaleWorlds.TwoDimension.Standalone/Native/Windows/D3D11Context.cs

## Overview

Auto-generated stub for `D3D11Context`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### ClearRenderTargetView
`public static void ClearRenderTargetView(IntPtr ctx,IntPtr rtv,float[] color)`

### OMSetRenderTargets
`public static void OMSetRenderTargets(IntPtr ctx,IntPtr rtv)`

### OMSetBlendState
`public static void OMSetBlendState(IntPtr ctx,IntPtr blendState)`

### RSSetViewports
`public static void RSSetViewports(IntPtr ctx,D3D11_VIEWPORT vp)`

### RSSetScissorRects
`public static void RSSetScissorRects(IntPtr ctx,D3D11_RECT rect)`

### RSSetState
`public static void RSSetState(IntPtr ctx,IntPtr state)`

### IASetInputLayout
`public static void IASetInputLayout(IntPtr ctx,IntPtr layout)`

### IASetVertexBuffers
`public static void IASetVertexBuffers(IntPtr ctx,IntPtr buffer,uint stride)`

### IASetIndexBuffer
`public static void IASetIndexBuffer(IntPtr ctx,IntPtr buffer)`

### IASetPrimitiveTopology
`public static void IASetPrimitiveTopology(IntPtr ctx)`

### VSSetShader
`public static void VSSetShader(IntPtr ctx,IntPtr vs)`

### PSSetShader
`public static void PSSetShader(IntPtr ctx,IntPtr ps)`

### PSSetShaderResources
`public static void PSSetShaderResources(IntPtr ctx,uint slot,IntPtr srv)`

### PSClearShaderResource
`public static void PSClearShaderResource(IntPtr ctx,uint slot)`

### PSSetSamplers
`public static void PSSetSamplers(IntPtr ctx,IntPtr sampler)`

### VSSetConstantBuffers
`public static void VSSetConstantBuffers(IntPtr ctx,uint slot,IntPtr cb)`

### PSSetConstantBuffers
`public static void PSSetConstantBuffers(IntPtr ctx,uint slot,IntPtr cb)`

### DrawIndexed
`public static void DrawIndexed(IntPtr ctx,int indexCount)`

### Map
`public static int Map(IntPtr ctx,IntPtr resource,uint mapType,out D3D11_MAPPED_SUBRESOURCE mapped)`

### Unmap
`public static void Unmap(IntPtr ctx,IntPtr resource)`

### CopyResource
`public static void CopyResource(IntPtr ctx,IntPtr dst,IntPtr src)`

### UpdateSubresource
`public static void UpdateSubresource(IntPtr ctx,IntPtr resource,IntPtr data,uint rowPitch)`

### ClearState
`public static void ClearState(IntPtr ctx)`

### Flush
`public static void Flush(IntPtr ctx)`

## See Also

- [Section index](../)
