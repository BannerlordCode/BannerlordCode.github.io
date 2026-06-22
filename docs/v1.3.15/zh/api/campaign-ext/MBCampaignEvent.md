<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBCampaignEvent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBCampaignEvent

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MBCampaignEvent` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TriggerPeriod` | `public CampaignTime TriggerPeriod { get; }` |
| `InitialWait` | `public CampaignTime InitialWait { get; }` |
| `isEventDeleted` | `public bool isEventDeleted { get; set; }` |


## 主要方法

### AddHandler

```csharp
public void AddHandler(MBCampaignEvent.CampaignEventDelegate gameEventDelegate)
```

### RunHandlers

```csharp
public void RunHandlers(params object delegateParams)
```

### Unregister

```csharp
public void Unregister(object instance)
```

### CheckUpdate

```csharp
public void CheckUpdate()
```

### DeletePeriodicEvent

```csharp
public void DeletePeriodicEvent()
```

### CampaignEventDelegate

```csharp
public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object delegateParams)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)