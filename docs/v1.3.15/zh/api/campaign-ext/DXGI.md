---
title: DXGI
description: DXGI - Windows DXGI 原生互操作封装，枚举显卡与显示器
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DXGI`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DXGI
**命名空间:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**模块:** TaleWorlds.TwoDimension.Standalone
**类型:** static class

## 概述
`DXGI

` ?Bannerlord 独立启动?编辑器（TwoDimension.Standalone）对 Windows DXGI（DirectX Graphics Infrastructure）的 P/Invoke 封装。它通过 

`CreateDXGIFactory

` 创建工厂 COM 对象，再?

`IDXGIFactory.EnumAdapters

` 枚举显卡，`IDXGIAdapter.EnumOutputs

` 枚举每张显卡的输出（显示器）?
该类同时定义?COM 接口（`IDXGIFactory

`/

`IDXGIAdapter

`/

`IDXGIOutput

`）与互操作结构体（`DXGI_ADAPTER_DESC

`/

`DXGI_OUTPUT_DESC

`/

`RECT

`），用于在托管层读取显卡描述、显存大小、显示器桌面坐标等信息?
## 心智模型
启动器需要知?系统有几块显卡、每块多大显存、每个显示器的桌面区?以支持多显卡/多显示器选择。本类把 DXGI ?COM 接口投影?C#，调用顺序：

`CreateDXGIFactory

` ?

`EnumAdapters

` ?

`GetDesc

`（显卡信息）?

`EnumOutputs

` ?

`GetDesc

`（显示器信息）?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`IID_IDXGIAdapter

` \| 

`Guid

` \| 

`IDXGIAdapter

` 接口 ID \|
\| 

`IID_IDXGIFactory

` \| 

`Guid

` \| 

`IDXGIFactory

` 接口 ID \|

## 主要方法
### CreateDXGIFactory
`

`

`csharp
public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory)
`

`

`
P/Invoke 

`dxgi.dll

`，创?DXGI 工厂实例?
### IDXGIFactory.EnumAdapters
`

`

`csharp
int EnumAdapters(uint index, out DXGI.IDXGIAdapter adapter);
`

`

`
按索引枚举显卡?
### IDXGIAdapter.EnumOutputs / GetDesc
`

`

`csharp
int EnumOutputs(uint Output, out DXGI.IDXGIOutput ppOutput);
int GetDesc(out DXGI.DXGI_ADAPTER_DESC desc);
`

`

`
枚举显卡的输出（显示器）；获取显卡描述（名称、显存等）?
### IDXGIOutput.GetDesc
`

`

`csharp
int GetDesc(out DXGI.DXGI_OUTPUT_DESC desc);
`

`

`
获取显示器描述（设备名、桌面坐标、是否附加、旋转、Monitor 句柄）?
## 互操作结构体
\| 结构?\| 说明 \|
\|--------\|------\|
\| 

`DXGI_ADAPTER_DESC

` \| 显卡描述：Description(128 字符)、VendorId、DeviceId、SubSysId、Revision、DedicatedVideoMemory、DedicatedSystemMemory、SharedSystemMemory、AdapterLuid \|
\| 

`DXGI_OUTPUT_DESC

` \| 输出描述：DeviceName(32 字符)、DesktopCoordinates(RECT)、AttachedToDesktop、Rotation、Monitor \|
\| 

`RECT

` \| 矩形：left/top/right/bottom，含 

`==

`/

`!=

` 运算?\|

## 使用示例
### 示例: 枚举所有显卡名?**场景**: 启动器显卡选择下拉?

`

`

`csharp
CreateDXGIFactory(ref IID_IDXGIFactory, out IntPtr factoryPtr);
var factory = (IDXGIFactory)Marshal.GetObjectForIUnknown(factoryPtr);
for (uint i = 0; factory.EnumAdapters(i, out IDXGIAdapter adapter) == 0; i++)
{
    adapter.GetDesc(out DXGI_ADAPTER_DESC desc);
    Debug.Print($"Adapter {i}: {desc.Description}, " +
                $"VRAM={((UIntPtr)desc.DedicatedVideoMemory).ToUInt64() &gt;&gt; 20} MB");
}
`

`

`
**要点**: COM 对象需手动 

`Marshal.ReleaseComObject

`；`DXGI_ADAPTER_DESC.DedicatedVideoMemory

` ?

`UIntPtr

`?4 位系统下需?

`ToUInt64()

` 取值?
## 参见
- [完整类目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
