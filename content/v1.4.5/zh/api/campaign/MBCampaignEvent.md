---
title: "MBCampaignEvent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBCampaignEvent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBCampaignEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MBCampaignEvent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## 概述

`MBCampaignEvent` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TriggerPeriod` | `public CampaignTime TriggerPeriod { get; }` |
| `InitialWait` | `public CampaignTime InitialWait { get; }` |
| `isEventDeleted` | `public bool isEventDeleted { get; set; }` |

## 主要方法

### CampaignEventDelegate
`public delegate void CampaignEventDelegate(MBCampaignEvent campaignEvent, params object delegateParams)`

**用途 / Purpose:** 处理 `campaign event delegate` 相关逻辑。

### AddHandler
`public void AddHandler(CampaignEventDelegate gameEventDelegate)`

**用途 / Purpose:** 向当前集合/状态中添加 `handler`。

### RunHandlers
`public void RunHandlers(params object delegateParams)`

**用途 / Purpose:** 处理 `run handlers` 相关逻辑。

### Unregister
`public void Unregister(object instance)`

**用途 / Purpose:** 处理 `unregister` 相关逻辑。

### CheckUpdate
`public void CheckUpdate()`

**用途 / Purpose:** 处理 `check update` 相关逻辑。

### DeletePeriodicEvent
`public void DeletePeriodicEvent()`

**用途 / Purpose:** 处理 `delete periodic event` 相关逻辑。

## 使用示例

```csharp
var value = new MBCampaignEvent();
value.CampaignEventDelegate(campaignEvent, delegateParams);
```

## 参见

- [完整类目录](../catalog)