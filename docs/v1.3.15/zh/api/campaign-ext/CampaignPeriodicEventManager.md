<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignPeriodicEventManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignPeriodicEventManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignPeriodicEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## 概述

`CampaignPeriodicEventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignPeriodicEventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreatePeriodicEvent
`public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**用途 / Purpose:** 创建一个 `periodic event` 实例或对象。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var manager = CampaignPeriodicEventManager.Current;
```

## 参见

- [完整类目录](../catalog)