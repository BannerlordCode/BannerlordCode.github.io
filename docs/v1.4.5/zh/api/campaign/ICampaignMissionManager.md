<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ICampaignMissionManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ICampaignMissionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICampaignMissionManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignMission.cs`

## 概述

`ICampaignMissionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ICampaignMissionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
ICampaignMissionManager implementation = GetCampaignMissionManagerImplementation();
```

## 参见

- [完整类目录](../catalog)