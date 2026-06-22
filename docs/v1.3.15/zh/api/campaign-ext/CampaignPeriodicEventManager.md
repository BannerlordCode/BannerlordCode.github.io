<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignPeriodicEventManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignPeriodicEventManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignPeriodicEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## 概述

`CampaignPeriodicEventManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### CreatePeriodicEvent
```csharp
public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)
```

### ToString
```csharp
public override string ToString()
```

## 使用示例

```csharp
// CampaignPeriodicEventManager (Manager) 的典型用法
CampaignPeriodicEventManager.Current;
```

## 参见

- [完整类目录](../catalog)