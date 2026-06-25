---
title: DebugNetworkEventStatistics
description: DebugNetworkEventStatistics - 多人网络事件统计调试器，监控上传带宽和丢包率
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DebugNetworkEventStatistics`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DebugNetworkEventStatistics

**命名空间:** TaleWorlds.MountAndBlade.Network
**模块:** TaleWorlds.MountAndBlade
**类型:** static class

## 概述

`DebugNetworkEventStatistics

` 是多人游?*网络事件统计调试?*。它在每帧采样网络上传数据（常量、可靠事件、复制、不可靠事件、其他），通过事件回调将统计数据推送给 UI 层（?Gauntlet 面板），并可选地?ImGui 面板中绘制实时图表。用于开发阶段定位网络带宽瓶颈和丢包问题?
**采样机制**：每帧调?

`EndTick(dt)

`，累加时间和帧数。按 

`SamplesPerSecond

`（默?10）频率采样：?

`GameNetwork.GetDebugUploadsInBits

` 获取累计上传数据，计算与上一次采样的差值（

`TotalEventData

` 重载?

`-

` 运算符），将差值入?

`_eventSamples

`。同时采样丢包率（`GameNetwork.GetAveragePacketLossRatio

`）?
**每秒汇?*：当采样??

`SamplesPerSecond

` 时，取最?N 个样本求和生?

`PerSecondEventData

`（每秒各类上传量），触发 

`OnPerSecondEventDataUpdated

` 事件。每次采样也触发 

`OnEventDataUpdated

` 事件（推送全部历史样本列表）?
**ImGui 面板**：非专用服务器时（`_useImgui = !IsDedicatedServer

`），?

`EndTick

` 中绘?ImGui 窗口，包含：激?停用按钮、清?转储数据按钮? 类上传数据的 

`PlotLines

` 折线图（Constants/Reliable/Replication/Unreliable/Other）、每包数据量图、丢包率图。Y 轴范围使用插值平滑过渡?
**FPS 追踪**：`TrackFps

` ?true 时，每采样周期内取最?FPS 值入?

`_fpsSamples

`，触?

`OnFPSEventUpdated

` 事件?
## 心智模型

把这个类想成**网络性能示波?*。它本身不产生网络数据，只是?

`GameNetwork

` 读取累计统计，计算差值，然后通过事件推送给监听者（UI 面板或外部监控器）?
**关键概念：累计?vs 差?*。`GameNetwork.GetDebugUploadsInBits

` 返回的是从游戏开始到现在?*累计**上传量。`DebugNetworkEventStatistics

` 每次采样时用当前值减去上一次值（

`_currEventData - _prevEventData

`），得到这段时间内的**增量**。增量样本存?

`_eventSamples

` 队列，最大保?

`MaxGraphPointCount

`? 

`SamplesPerSecond * 5

`）个?
**关键概念：事件回调架?*。该类不直接渲染 UI，而是通过 4 个事件通知外部?- 

`OnEventDataUpdated

`：每次采样时推送全部历史样本（

`IEnumerable&lt;TotalEventData&gt;

`?- 

`OnPerSecondEventDataUpdated

`：每秒推送汇总数据（

`PerSecondEventData

`?- 

`OnFPSEventUpdated

`：每?FPS 采样推送历?FPS 样本
- 

`OnOpenExternalMonitor

`：请求打开外部监控?
**关键概念：内部控制方?*。以 

`Control

` 前缀开头的方法（`ControlActivate

`、`ControlDeactivate

`、`ControlJustDump

` 等）是供控制台命令或 UI 按钮调用的公?API。`StartEvent

`/

`EndEvent

`/

`AddDataToStatistic

` ?internal 方法，由网络层在发?接收事件时调用?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`SamplesPerSecond

` \| 

`static int

`（get/set?\| 每秒采样次数，默?10。设置时同步更新 

`MaxGraphPointCount = value * 5

`?\|
\| 

`IsActive

` \| 

`static bool

`（get?\| 是否正在采集数据。通过 

`ControlActivate

`/

`ControlDeactivate

` 控制?\|
\| 

`MaxGraphPointCount

` \| 

`static int

` \| 图表最大数据点?= 

`SamplesPerSecond * 5

`?\|
\| 

`TrackFps

` \| 

`static bool

` \| 是否追踪 FPS。默?false?\|
\| 

`UploadPerSecondEventData

` \| 

`static PerSecondEventData

` \| 最近一秒的上传汇总数据?\|

### 事件

\| 事件 \| 签名 \| 说明 \|
\|------\|------\|------\|
\| 

`OnEventDataUpdated

` \| 

`Action&lt;IEnumerable&lt;TotalEventData&gt;&gt;

` \| 每次采样时触发，推送全部历史样本?\|
\| 

`OnPerSecondEventDataUpdated

` \| 

`Action&lt;PerSecondEventData&gt;

` \| 每秒触发，推送每秒汇总?\|
\| 

`OnFPSEventUpdated

` \| 

`Action&lt;IEnumerable&lt;float&gt;&gt;

` \| FPS 采样时触发，推送历?FPS?\|
\| 

`OnOpenExternalMonitor

` \| 

`Action

` \| 请求打开外部监控器?\|

## 主要方法

### EndTick
`

`

`csharp
public static void EndTick(float dt)
`

`

`
每帧调用。处?ImGui 热键切换、累加时?帧数、按采样频率收集网络数据样本和丢包率、计算每秒汇总、触发事件、绘?ImGui 图表面板。是整个统计系统的主循环?
### ControlActivate / ControlDeactivate
`

`

`csharp
public static void ControlActivate()
public static void ControlDeactivate()
`

`

`
启用/停用数据采集。停用时所?

`StartEvent

`/

`EndEvent

`/

`AddDataToStatistic

` 调用直接返回?
### ControlJustDump / ControlDumpAll
`

`

`csharp
public static void ControlJustDump()
public static void ControlDumpAll()
`

`

`
将统计数据转储到控制台。`ControlJustDump

` 只转储事件数据，

`ControlDumpAll

` 额外转储复制表数据?
### ControlClear / ControlClearAll / ClearNetGraphs / ClearFpsGraph
`

`

`csharp
public static void ControlClear()
public static void ControlClearAll()
public static void ClearNetGraphs()
public static void ClearFpsGraph()
`

`

`
清除数据。`ControlClear

` 清除事件统计和网络上传计数器。`ClearNetGraphs

` 清除图表样本队列。`ClearFpsGraph

` 清除 FPS 样本。`ControlClearAll

` 全部清除（含复制表数据）?
### ControlDumpReplicationData
`

`

`csharp
public static void ControlDumpReplicationData()
`

`

`
转储复制表统计到控制台并清除复制数据?
### OpenExternalMonitor
`

`

`csharp
public static void OpenExternalMonitor()
`

`

`
触发 

`OnOpenExternalMonitor

` 事件，请求外部监控器打开?
### StartEvent / EndEvent / AddDataToStatistic (internal)
`

`

`csharp
internal static void StartEvent(string eventName, int eventType)
internal static void EndEvent()
internal static void AddDataToStatistic(int bitCount)
`

`

`
网络层调用的内部方法。`StartEvent

` 记录事件类型并增加计数。`AddDataToStatistic

` 累加该事件的比特数。`EndEvent

` 计算平均事件大小并重置当前事件类型?
## 内部类型

### TotalEventData
`

`

`csharp
public class TotalEventData
`

`

`
单次采样的网络数据快照。包?

`TotalPackets

`、`TotalUpload

`、`TotalConstantsUpload

`、`TotalReliableUpload

`、`TotalReplicationUpload

`、`TotalUnreliableUpload

`、`TotalOtherUpload

`? TotalUpload - 其余四项）。重载了 

`-

` 运算符计算两次快照的差值，

`==

`/

`!=

` 用于比较。`HasData

` 属性检?

`TotalUpload &gt; 0

`?
### PerSecondEventData
`

`

`csharp
public class PerSecondEventData
`

`

`
每秒上传汇总。包?

`TotalUploadPerSecond

`、`ConstantsUploadPerSecond

`、`ReliableUploadPerSecond

`、`ReplicationUploadPerSecond

`、`UnreliableUploadPerSecond

`、`OtherUploadPerSecond

`。由最?

`SamplesPerSecond

` 个样本求和生成?
### PerEventData (private)
`

`

`csharp
private class PerEventData : IComparable&lt;PerEventData&gt;
`

`

`
单事件类型统计。包?

`Name

`、`DataSize

`（单事件平均大小）、`TotalDataSize

`、`Count

`。`CompareTo

` ?

`TotalDataSize

` 降序排列（转储时大事件排前面）?
### TotalData (private)
`

`

`csharp
private class TotalData
`

`

`
全局累计统计。包?

`TotalTime

`、`TotalFrameCount

`、`TotalCount

`、`TotalDataSize

`?
## 使用示例

### 示例 1: 订阅网络统计事件更新 UI

`

`

`csharp
using TaleWorlds.MountAndBlade.Network;

// 在模?UI 初始化时订阅统计事件
public class NetworkDebugViewModel : ViewModel
{
    public NetworkDebugViewModel()
    {
        // 订阅每秒数据更新
        DebugNetworkEventStatistics.OnPerSecondEventDataUpdated += OnDataUpdated;
        // 订阅历史样本更新（用于绘制图表）
        DebugNetworkEventStatistics.OnEventDataUpdated += OnSamplesUpdated;
    }

    private void OnDataUpdated(DebugNetworkEventStatistics.PerSecondEventData data)
    {
        // 每秒上传总量（字节）
        float totalKiBPerSecond = data.TotalUploadPerSecond / 8192f;
        Debug.Print($"Upload: {totalKiBPerSecond:F2} KiB/s");
        // 分类占比
        Debug.Print($"  Constants:    {data.ConstantsUploadPerSecond / 8192f:F2} KiB/s");
        Debug.Print($"  Reliable:     {data.ReliableUploadPerSecond / 8192f:F2} KiB/s");
        Debug.Print($"  Replication:  {data.ReplicationUploadPerSecond / 8192f:F2} KiB/s");
        Debug.Print($"  Unreliable:   {data.UnreliableUploadPerSecond / 8192f:F2} KiB/s");
    }

    private void OnSamplesUpdated(IEnumerable&lt;DebugNetworkEventStatistics.TotalEventData&gt; samples)
    {
        // 获取最近样本用于绘制图?        var recentSamples = samples.ToList();
        if (recentSamples.Count &gt; 0)
        {
            var latest = recentSamples[recentSamples.Count - 1];
            // latest.TotalUpload 是自上次采样以来的增量（比特?        }
    }
}
`

`

`

### 示例 2: 控制统计采集生命周期

`

`

`csharp
using TaleWorlds.MountAndBlade.Network;

// 启动统计采集
DebugNetworkEventStatistics.ControlActivate();
// 可选：调整采样频率（默?0?秒）
DebugNetworkEventStatistics.SamplesPerSecond = 20; // 20Hz，MaxGraphPointCount自动更新?00
// 可选：启用FPS追踪
DebugNetworkEventStatistics.TrackFps = true;

// ... 运行游戏，收集数?...

// 转储数据到控制台
DebugNetworkEventStatistics.ControlDumpAll();

// 清除所有数据重新开?DebugNetworkEventStatistics.ControlClearAll();

// 停止采集
DebugNetworkEventStatistics.ControlDeactivate();
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
- [

`GameNetwork

`](./GameNetwork) ?网络通信核心
