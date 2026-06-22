<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignBehaviorManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** `ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## 概述

`CampaignBehaviorManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### InitializeCampaignBehaviors
```csharp
public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)
```

### RegisterEvents
```csharp
public void RegisterEvents()
```

### LoadBehaviorData
```csharp
public void LoadBehaviorData()
```

### AddBehavior
```csharp
public void AddBehavior(CampaignBehaviorBase campaignBehavior)
```

### ClearBehaviors
```csharp
public void ClearBehaviors()
```

## 使用示例

```csharp
// CampaignBehaviorManager (Manager) 的典型用法
CampaignBehaviorManager.Current;
```

## 参见

- [完整类目录](../catalog)