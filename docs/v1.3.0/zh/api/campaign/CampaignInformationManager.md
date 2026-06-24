<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignInformationManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignInformationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignInformationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`

## 概述

`CampaignInformationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignInformationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnGameLoaded
`public void OnGameLoaded()`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### NewMapNoticeAdded
`public void NewMapNoticeAdded(InformationData informationData)`

**用途 / Purpose:** 处理 `new map notice added` 相关逻辑。

## 使用示例

```csharp
var manager = CampaignInformationManager.Current;
```

## 参见

- [完整类目录](../catalog)