<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ActionCampaignOptionData`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ActionCampaignOptionData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs`

## 概述

`ActionCampaignOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ActionCampaignOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDataType
`public override CampaignOptionDataType GetDataType()`

**用途 / Purpose:** 获取 `data type` 的当前值。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

## 使用示例

```csharp
var value = new ActionCampaignOptionData();
```

## 参见

- [完整类目录](../catalog)