<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignBehaviorBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/CampaignBehaviorBase](/versions/CampaignBehaviorBase)
<!-- END BREADCRUMB -->
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Base:** `ICampaignBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## 概述

`CampaignBehaviorBase` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public abstract void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public abstract void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomCampaignBehaviorBase();
```

## 参见

- [完整类目录](../catalog)